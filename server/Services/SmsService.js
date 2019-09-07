var http = require("http");

module.exports = {
  mainOptions: {
    token: process.env.sms_token,
    method: "POST",
    host: process.env.sms_base_url,
    path: "/",
    message: "",
    routing: 4,
    to: "",
    sender: "",
    type: 0
  },

  async sendSms(message, sender, recipients) {
    const options = Object.assign({}, this.mainOption);

    options.to = recipients;
    options.sender = sender || "Remind Me";
    options.message = message;

    await http.request(options,(res)=>{
        console.log(res)
    })
  }
};
