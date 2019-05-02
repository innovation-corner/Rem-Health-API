const dotenv = require('dotenv');
const ImmunizationModel = require('../models/immunizationrecord');
const joi = require('joi');
const Utility = require('../helpers/Utilities');
const smsService = require('../services/SMSServices');

dotenv.config();

class UssdService {
    
    static async create(req, response, next) {
        try {
            const { sessionId, serviceCode, phoneNumber, text } = req.body
            const SESSION_CONTINUE = "CON "
            const SESSION_END = "END "
            const RESPONSE_CODE = 200
            let res = ""

            if (text === '') {
                res = `${SESSION_CONTINUE}Welcome to Rem Health Service
                Press
                1. Immunization
                2. Hospital
                3. Confirm Immunization
                4. Unsubscribe`

            } else if(text === '1') {
                res = `${SESSION_CONTINUE}Press
                1. Child Registration
                2. Last Immunization
                3. Find Nearest Primary Health Centres
                4. Update Registration
                Press #:back`

            } else if(text === '2') {
                res = `${SESSION_END}`
                
            } else if(text === '3') {
                
            }

            response.set('Content-Type: text/plain');
            response.send(res);

        } catch(err) {
            return res.status(500).send(err);
        }
    }
}

module.exports = UssdService; 