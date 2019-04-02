'use strict';
const DataTypes = require('sequelize');
const sequelize = require('../config/db.config');

const ImmunizationRecord = sequelize.define('ImmunizationRecord', {
  fullName: DataTypes.STRING,
  phoneNumber: DataTypes.STRING,
  registrationId: DataTypes.STRING,
  state: DataTypes.STRING,
  preferredLanguage: DataTypes.STRING,
  dateOfBirth: DataTypes.DATE,
  gender: DataTypes.STRING,
  isActive: DataTypes.BOOLEAN
}, {});

ImmunizationRecord.associate = function(models) {
  // associations can be defined here
};

module.exports = ImmunizationRecord;