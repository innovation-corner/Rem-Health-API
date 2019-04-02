const router = require('express').Router();
const UserController = require('../../controllers/user.controller');
// const auth = require('../auth');

/** Connecting the signin route to the userController */
router.post('/login', (req, res, next) => {
    UserController.login(req, res, next);
});

router.post('/signup', (req, res, next) => {
    UserController.signup(req, res, next);
});

module.exports = router;