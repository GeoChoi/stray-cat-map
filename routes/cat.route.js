const express = require('express');
const router = express.Router();

const cats = require('../controllers/cat.controller');

router.post('/', cats.create);

module.exports = router;
