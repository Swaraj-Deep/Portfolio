const express = require('express');
const router = express.Router();

router.get('/skills', (req, res, next) => {
  res.status(200).json(["c++", "h", "JavaScript", "Azure DevOps", "Power BI", "React"]);
});

router.post('/skills', (req, res, next) => {

});

router.patch('/skills', (req, res, next) => {

});

router.delete('/skills', (req, res, next) => {

});

module.exports = router;
