const express = require('express');
const skills = require('./skills');
const projects = require('./projects');
const workExperience = require('./workExperience');

const router = express.Router();

router.use('', skills);
router.use('', projects);
router.use('', workExperience);

module.exports = router;
