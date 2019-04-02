'use strict';
const DataTypes = require('sequelize');
const sequelize = require('../config/db.config');
const crypto = require('crypto');

const User = sequelize.define('User', {
  fullName: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    validate: {
      isEmail: true,
    },
  },
  password: DataTypes.STRING,
  salt: DataTypes.STRING
}, {});

User.prototype.setPassword = function setPassword (password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.password = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
}

User.associate = function(models) {
  // associations can be defined here
};

module.exports = User;