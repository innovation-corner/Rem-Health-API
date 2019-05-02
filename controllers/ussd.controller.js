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
            const data = text.split("*")

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
                res = `${SESSION_CONTINUE}Press
                1. Register
                2. Find Nearest Primary Health Centres
                4. Update Registration

                Press #:back`
                
            } else if(text === '3') {
                res = `${SESSION_CONTINUE}What's the child's immunization number?
                e.g. LA123

                Press #:back`
            } else if (text === '4') {
                res = `${SESSION_END}You have unsubscribed from Rem Healh Service.
                To activate again, run immunization update registration. Bye and we hope to see you again.`

            } else if(text === '1*1') {
                res = `${SESSION_CONTINUE}What's your child's fullname?
                e.g. Idowu Mohammed Okeke

                Press #:back`
            } else if(data[0] && data[0] !== '') {
                res = `${SESSION_END}your name is ${data[0]}?`
                
            }

            response.set('Content-Type: text/plain');
            response.send(res);

        } catch(err) {
            return res.status(500).send(err);
        }
    }
}

module.exports = UssdService; 