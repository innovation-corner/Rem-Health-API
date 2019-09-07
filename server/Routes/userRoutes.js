const express = require("express");
const router = express.Router();
const user = require("../Controllers/UserController");

router.get("/list", user.single);
router.put("/edit/:id", user.edit);
router.post("/view/:id", user.delete);

module.exports = router;
