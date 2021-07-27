const express = require('express');
const router = express.Router();
const contact = require('./contact');
const about = require('./about');
const interests = require('./interests');
const education = require('./educations');

router.use('', contact);
router.use('', about);
router.use('', interests);
router.use('', education);

module.exports = router;
