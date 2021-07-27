const express = require('express');
const router = express.Router();

router.get('/workExperience', (req, res, next) => {
  res.status(200).json({
    companyName: 'MAQ Software',
    designation: 'Software Development Engineer 1',
    from: 'Jan-04-2021',
    to: 'current',
    regularTechStack: ['JavaScript', 'Python', 'CSS', 'HTML5'],
    familiarTechStack: ['C#', '.NET', 'Power BI', 'Azure Pipelines'],
    achievement: 'Worked on Angular solution'
  });
});

router.post('/workExperience', (req, res, next) => {

});
router.patch('/workExperience', (req, res, next) => {

});
router.delete('/workExperience', (req, res, next) => {

});

module.exports = router;
