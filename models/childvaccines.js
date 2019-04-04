'use strict';
const DataTypes = require('sequelize');
const sequelize = require('../config/db.config');

const ChildVaccines = sequelize.define('ChildVaccines', {
  vaccine_id: DataTypes.INTEGER,
  child_id: DataTypes.INTEGER,
  status: DataTypes.BOOLEAN
}, {});

ChildVaccines.associate = function(models) {
  // associations can be defined here
};

module.exports = ChildVaccines;