const express = require('express');
const router = express.Router();

const catRecords = require('../controllers/cat_record.controller');

router.get('/', catRecords.findAll);

router.post('/', catRecords.create);

module.exports = router;
