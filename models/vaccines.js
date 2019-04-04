'use strict';
const DataTypes = require('sequelize');
const sequelize = require('../config/db.config');

const Vaccines = sequelize.define('Vaccines', {
  disease: DataTypes.STRING,
  childAge: DataTypes.STRING,
  vaccineType: DataTypes.STRING,
  status: DataTypes.BOOLEAN
}, {});

Vaccines.associate = function(models) {
  // associations can be defined here
};

module.exports = Vaccines;
 