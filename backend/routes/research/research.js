const express = require('express');
const publications = require('./publication');

const router = express.Router();

router.use('', publications);

module.exports = router;
