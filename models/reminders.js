'use strict';
const DataTypes = require('sequelize');
const sequelize = require('../config/db.config');

const Reminders = sequelize.define('Reminders', {
  vaccine_id: DataTypes.INTEGER,
  child_id: DataTypes.INTEGER,
  status: DataTypes.BOOLEAN
}, {});

Reminders.associate = function(models) {
  // associations can be defined here
};

module.exports = Reminders