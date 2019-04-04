const router = require('express').Router();
const VaccineController = require('../../controllers/vaccine.controller');

router.get('/all-vaccines', (req, res, next) => {
    VaccineController.getAll(req, res, next);
});

module.exports = router;