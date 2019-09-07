const { Info } = require("../models");

module.exports = {
  async list(req, res) {
    try {
      const data = await Info.findAll({});
      return res.json({ message: "Data retrieved", data });
    } catch (e) {
      return res.status(400).json({ message: "An error occurred", e });
    }
  },

  async listSingle(req, res) {
    try {
      const { id } = req.params;

      const data = await Info.findOne({ where: { id } });

      if (!data) {
        return res.status(400).json({ message: "Data does not exist", e });
      }

      return res.status(200).json({ message: "Data retrieved", data });
    } catch (e) {
      return res.status(400).json({ message: "An error occurred", e });
    }
  },

  async editSingle(req, res) {
    try {
      const { id } = req.params;
      const update = req.body;

      const reqData = await Info.findOne({ where: { id } });

      if (!reqData) {
        return res.status(400).json({ message: "Data does not exist", e });
      }

      await Info.update(update, { where: { id } });

      const data = await Info.findOne({ where: { id } });

      return res.status(200).json({ message: "Data updated", data });
    } catch (e) {
      return res.status(400).json({ message: "An error occurred", e });
    }
  }
};
