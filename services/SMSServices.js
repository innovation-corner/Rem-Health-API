
const axios = require('axios');

class SMS {
    static async sendSMS(phone, message) {
        if(!phone || !message) return;

        axios.get("https://api.smartsmssolutions.com/smsapi.php?username=ezenwakakelechi@yahoo.com" +
        "&password=password&sender=RemindMe&recipient=" + phone + "&message=" + message)
        .then(function (response) {
            return true;
        })
        .catch(function (error) {
            return false;
        });
    }
}

module.exports = SMS;