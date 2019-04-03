const router = require('express').Router();
const ImmunizationController = require('../../controllers/immunization.controller');

router.post('/child-registration', (req, res, next) => {
    ImmunizationController.registerChild(req, res, next);
});

router.get('/all-records', (req, res, next) => {
    ImmunizationController.getAllRecord(req, res, next);
});

router.post('/child-profile', (req, res, next) => {
    ImmunizationController.getChildProfile(req, res, next);
});

router.post('/search-records', (req, res, next) => {
    ImmunizationController.searchRecords(req, res, next);
});

module.exports = router;