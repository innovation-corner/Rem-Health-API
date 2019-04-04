const dotenv = require('dotenv');
const VaccineModel = require('../models/vaccines');
const joi = require('joi');

dotenv.config();

class VaccineController {
    static async getAll(req, res, next) {
        try {
            VaccineModel.findAll()
            .then(vaccines => {
                res.status(200).json({
                    status: 'success',
                    data: vaccines
                });
            })
            .catch(err => res.json(err));

        } catch(err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = VaccineController;