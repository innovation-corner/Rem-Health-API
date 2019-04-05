const express = require('express');
const router = express.Router();
const ImmunizationController = require('../controllers/immunization.controller');

router.post('/immunization/child-registration', (req, res, next) => {
    ImmunizationController.registerChild(req, res, next);
});

router.get('/immunization/all-records', (req, res, next) => {
    ImmunizationController.getAllRecord(req, res, next);
});

router.post('/immunization/child-profile', (req, res, next) => {
    ImmunizationController.getChildProfile(req, res, next);
});

router.post('/immunization/search-records', (req, res, next) => {
    ImmunizationController.searchRecords(req, res, next);
});

module.exports = router;