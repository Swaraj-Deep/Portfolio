const express = require('express');
const router = express.Router();

router.get('/projects', (req, res, next) => {
  res.status(200).json({
    projectName: 'Blood Bank',
    technologiesUsed: ['HTML', 'CSS', 'Angular', 'MongoDB', 'Express', 'Node js', 'JavaScript'],
    link: 'https://sbsyb-patna.herokuapp.com/',
    description: 'A place where users can request for blood.',
    futureScope: ['Alert volunteer when a new request comes in.']
  });
});

router.post('/projects', (req, res, next) => {

});

router.patch('/projects', (req, res, next) => {

});

router.delete('/projects', (req, res, next) => {

});

module.exports = router;
