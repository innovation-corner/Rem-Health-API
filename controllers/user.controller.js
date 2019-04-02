const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const UserModel = require('../models/user');
const joi = require('joi');

dotenv.config();

class User {
    static async login(req, res) {
        const user = await UserModel.findOne({ where: { email: req.body.email } });
        if (user && user.password === req.body.password) {
            const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
            res.header('x-auth-token', token).status(200).send({
                status: 'success',
            });
            return true;
        }
        res.status(400).send('Invalid email or password');
        return false;
    }

    static async signup(req, res, next) {
        try {
            const user = new User(req.body);
            const oldUser = await UserModel.findOne({ where: { email: req.body.email } });
            if (oldUser) {
                res.status(409).send({
                    status: 'failure',
                    message: `There\'s already a user with this email ${email}`,
                });
                return false;
            }

            user.setPassword(req.body.password);
            user.save().then(response => res.json({
                message: 'Registered successfully' 
            }).catch(error => next(err)));
            
        } catch (err) {
            return res.status(409);
        }
    }
}

module.exports = User; 