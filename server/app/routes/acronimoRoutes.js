const express = require('express');
const router = express.Router();
const AcronimoController = require("../controllers/acronimoController");

router.get('/apiacronimo', AcronimoController.search);
router.post("/create", AcronimoController.create);
router.get("/getdata", AcronimoController.getData);

module.exports = router;
