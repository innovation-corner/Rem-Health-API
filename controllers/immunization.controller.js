const dotenv = require('dotenv');
const ImmunizationModel = require('../models/immunizationrecord');
const joi = require('joi');

dotenv.config();

class ImmunizationRecord {
    static async registerChild(req, res) {
        try {
            const child = await ImmunizationModel.create({ 
                registrationId: 'MSDD2',
                phoneNumber: '234092811111',
                fullName: 'Destiny Ajax',
                dateOfBirth: new Date(),
                state: 'Edo',
                preferredLanguage: 'Igbo',
                gender: 'Male', 
            });

            if (child) {
                res.status(200).json({
                    status: 'success',
                    message: 'Registration was successful',
                    data: child
                });
            }
           
        } catch(err) {
            return res.status(500).json(err);
        }
    }

    static async getAllRecord(req, res, next) {
        try {
            ImmunizationModel.findAll().then(records => {
                res.json({
                    status: 'success',
                    data: records
                });
            }).catch(err => res.json(err));
        } catch(err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = ImmunizationRecord; 