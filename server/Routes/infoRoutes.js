const express = require('express');
const router = express.Router();
const info = require('../Controllers/InfoController');

router.get('/list', info.list);
router.put('/edit/:id', info.editSingle);
router.post('/view/:id', info.listSingle);

module.exports = router;