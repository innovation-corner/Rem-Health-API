const ImmunizationModel = require('../models/immunizationrecord');

class Utilities {
    static getStateShortCode(state) {
        if(!state) return;
        switch (state.toLowerCase()) {
            case "abuja":return "FCT";break;case "abia":return "AB";break;case "adamawa":return "AD";break;case "akwa ibom": return "AK";break;
            case "anambra":return "AN";break;case "bauchi":return "BA";break;case "bayelsa":return "BY";break;case "benue":return "BE";break;
            case "borno":return "BO";break;case "cross river":return "CR";break;case "delta":return "DE";break;case "ebonyi":return"EB";break;
            case"edo":return"ED";break;case"ekiti":return"EK";break;case"enugu":return"EN";break;case"gombe":return"GO";break;case"imo":return"IM";
            break;case"jigawa":return"JI";break;case"kaduna":return"KD";break;case"kano":return"KN";break;case"katsina":return"KT";break;case"kebbi":
            return"KE";break;case"kogi":return"KO";break;case"kwara":return"KW";break;case"lagos":return"LA";break;case"nasarawa":return"NA";break;
            case"niger":return"NI";break;case"ogun":return"OG";break;case"ondo":return"ON";break;case"osun":return"OS";break;case"oyo":return"OY";break;
            case"plateau":return"PL";break;case"rivers":return"RI";break;case"sokoto":return"SO";break;case"taraba":return"TA";break;case"yobe":return"YO";
            break;case"zamfara":return"ZA";break;default:break;
        }
    }

    static getRegistrationID(state) {
        if(!state) return;
        var totalRecords = Math.floor(Math.random() * (100 - 1) + 100);
        if(totalRecords === 0) {
            totalRecords + 1;
        } else {
            totalRecords++;
        }

        let regID = "IM"+this.getStateShortCode(state)+totalRecords;
        return regID;
    }

    static validPhoneNumber(phone) {
        if(!phone) return;
        let response = "";
        let number = phone.split("");

        if(number.length === 11) {

        }
    }

    static getPreferredLanguage(language, name, regId) {
        if(!language) return;
        switch(language) {
            case "English":
            return `Hi, ${name}'s has been registered successfully, and his immunization number is ${regId}`;
            break;

            case "Yoruba":
            return `Ekaboo, ${name} ka ibi ti a ti aami-ni ifijis. Nmba ajesara r? ni ${regId}`;
            break;

            case "Igbo":
            return `Ndewo, e debere aha ${name} nke oma. Nomba ogwu mgbochi ita ce ${regId}`;
            break;

            case "Hausa":
            return `Sannu, ${name} ya yi rajista sosai. Lambar shaidar rigakafi ita ce ${regId}`;
            break;

            case "Pigin":
            return `Howfa, ${name} birth don register well. e immunization number na ${regId}`
            break;

            default:
            break;
        }
    }
}

module.exports = Utilities;