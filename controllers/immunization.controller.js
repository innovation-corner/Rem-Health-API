const dotenv = require('dotenv');
const ImmunizationModel = require('../models/immunizationrecord');
const joi = require('joi');
const Utility = require('../helpers/Utilities');
const smsService = require('../services/SMSServices');

dotenv.config();

class ImmunizationRecord {

    static async registerChild(req, res, next) {
        try {
            const { phone_number, date_of_birth, language, name, state, gender } = req.body;
            let regId = Utility.getRegistrationID(state);

            let child = new ImmunizationModel();
            child.registrationId = regId
            child.phoneNumber = phone_number;
            child.fullName = name;
            child.dateOfBirth = new Date(date_of_birth);
            child.gender = gender;
            child.state = state;
            child.preferredLanguage = language;

            const message = Utility.getPreferredLanguage(language, name, regId);

            child.save().then(data => {
                smsService.sendSMS(phone_number, message);
                res.status(200).json({
                    status: 'success',
                    message: 'Registration was successful',
                    data: data
                });
            }).catch(err => res.status(500).json(err));
            
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

    static async getChildProfile(req, res, next) {
        try {
            ImmunizationModel.findOne({ where: {registrationId: req.body.regId} })
            .then(data => {
                res.json({
                    status: 'success',
                    data: data
                });
            })
            .catch(err => res.json(err));

        } catch(err) {
            return res.status(500).json(err);
        }
    }

    static async searchRecords(req, res, next) {
        try {
            if(req.body.search_type === "child_id") {
                ImmunizationModel.findOne({ where: {registrationId: req.body.child_id} })
                .then(data => {
                    if(data.data.data !== null) {
                        res.json({
                            status: 'success',
                            data: data
                        });
                    }
                })
                .catch(err => res.status(404).json({status: 'failed', message: err}));
            }

            if(req.body.search_type === "gender") {
                ImmunizationModel.findAll({where: {gender: req.body.gender} })
                .then(data => {
                    res.json({
                        status: 'success',
                        data: data
                    });
                })
                .catch(err => res.json({status: 'failed', message: err}));
            }

            if(req.body.search_type === "state") {
                ImmunizationModel.findAll({where: {state: req.body.state} })
                .then(data => {
                    res.json({
                        status: 'success',
                        data: data
                    });
                })
                .catch(err => res.json({status: 'failed', message: err}));
            }

            if(req.body.search_type === "birthday_range") {
                ImmunizationModel.findAll({where: {
                    dateOfBirth: {$gte: new Date(req.body.start_date), $lte: new Date(req.body.end_date)}} 
                })
                .then(data => {
                    res.json({
                        status: 'success',
                        data: data
                    });
                })
                .catch(err => res.json({status: 'failed', message: err}));
            }

            if(req.body.serach_type === "all") {

            }
        } catch(err) {
            return res.status(500).json(err);
        }
    }
}

module.exports = ImmunizationRecord; 