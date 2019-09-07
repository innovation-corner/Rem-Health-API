const ussdMenu = require("ussd-menu-builder");
const moment = require("moment");
let menu = new ussdMenu();
const { Info } = require("../models");
const { Temp } = require("../models");

module.exports = {
  async regChild(req, res) {
    let sessions = {};
    let { sessionId } = req.body;
    // console.log(req.body)
    const update = async (sessionId, key, value) => {
      const data = { [key]: value };
      await Temp.update(data, { where: { sessionId } });
      console.log(data);
      return;
    };
    const save = async sessionId => {
      await Temp.create({ sessionId });
    };
    const end = async sessionId => {
      const temp = await Temp.findOne({ where: { sessionId } });
      let data = {
        name: temp.name,
        language: temp.language,
        gender: temp.gender,
        phonenumber: temp.phonenumber
      };

      data.dob = moment(temp.dob).format("YYYYMMDD");
      await Info.create(data);
      const info = await Info.findOne({
        where: { name: data.name, phonenumber: data.phonenumber }
      });
      let imCode;
      if (info.id < 10) {
        imCode = "IM" + "000" + info.id;
      } else if (info.id >= 10 && info.id < 99) {
        imCode = "IM" + "00" + info.id;
      } else if (info.id >= 100 && info.id < 999) {
        imCode = "IM" + "0" + info.id;
      } else if (info.id >= 1000) {
        imCode = "IM" + info.id;
      }

      let immunizationCode = imCode;
      console.log(info);
      await Info.update(
        { immunizationCode },
        { where: { name: data.name, phonenumber: data.phonenumber } }
      );
    };

    menu.startState({
      run: async () => {
        await save(sessionId);
        // await update(save);
        menu.con(
          " Welcome to Remind Me \n" +
            "Please enter your child's name in full. \n" +
            "E.g Gloria Nana"
        );
      },
      next: {
        "*^[a-zA-Z]{3,}(?: [a-zA-Z]+){1,4}$": "dob"
      }
    });
    menu.state("begin", {
      run: async () => {
        menu.con(
          " Welcome to Remind Me \n" +
            "Please enter your child's name in full. \n" +
            "E.g Gloria Nana."
        );
      },
      next: {
        "*^[a-zA-Z]{3,}(?: [a-zA-Z]+){1,4}$": "dob"
      }
    });

    menu.state("dob", {
      run: async () => {
        const check = menu.val.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){1,4}$/);

        if (check) {
          let name = menu.val;
          await update(sessionId, "name", name);
        }
        menu.con(
          "Please enter your child's date of birth \n" +
            "In the format DDMMYYYY. \n" +
            "E.g 26082019.\n" +
            "Press # to go back"
        );
      },
      next: {
        "*\\b\\d{8}\\b": "gender",
        "#": "begin"
      }
    });

    menu.state("gender", {
      run: async () => {
        let dob = menu.val;
        const checkDob = moment(dob, "DDMMYYYY").toDate();
        if (checkDob == "Invalid Date") {
          menu.go("dob");
        }

        dob = moment(dob, "DDMMYYYY").format("YYYYMMDD");

        await update(sessionId, "dob", dob);
        menu.con(
          "Please select your child's gender \n" +
            "1. Female \n" +
            "2. Male\n" +
            "Press # to go back"
        );
      },
      next: {
        "*^[1-2]$": "phonenumber",
        "#": "dob"
      }
    });

    menu.state("phonenumber", {
      run: async () => {
        let code = menu.val;
        const check = code.match(/^[1-2]$/);
        if (check) {
          if (code == 1 || code == 2) {
            let gender = "";
            if (code == 1) {
              gender = "Female";
            } else {
              gender = "Male";
            }

            await update(sessionId, "gender", gender);
          }
        }
        menu.con(
          "Enter care giver's phone number \n" +
            "E.g 08031234123\n" +
            "Press # to go back"
        );
      },
      next: {
        "*^(0)([7-9])([0-9]{9})$": "language",
        "#": "gender"
      }
    });

    menu.state("language", {
      run: async () => {
        let phonenumber = menu.val;
        const check = phonenumber.match(/^(0)([7-9])([0-9]{9})$/);

        if (check) {
          await update(sessionId, "phonenumber", phonenumber);
          menu.con(
            "Please select preferred language for communications \n" +
              "1.English \n" +
              "2.Pidgin \n" +
              "3.Igbo \n" +
              "4.Yoruba \n" +
              "5.Hausa \n" +
              "Press # to go back"
          );
        }
      },
      next: {
        "*^[1-9]$": "end",
        "#": "phonenumber"
      }
    });

    menu.state("end", {
      run: async () => {
        let code = menu.val;
        let language = "";

        const check = code.match(/^[1-9]$/);
        if (check) {
          if (code == 1) {
            language = "English";
          }
          if (code == 2) {
            language = "Pidgin";
          }
          if (code == 3) {
            language = "Igbo";
          }
          if (code == 4) {
            language = "Yoruba";
          }
          if (code == 5) {
            language = "Hausa";
          }

          await update(sessionId, "language", language);
        }
        menu.end("Congratulations you have now registered your child's birth");
        await end(sessionId);
      }
    });

    menu.run(req.body, ussdResult => {
      res.send(ussdResult);
    });
    return menu;
  }
};
