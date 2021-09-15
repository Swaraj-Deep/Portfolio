const express = require('express');
const router = express.Router();

router.get('/experience', (req, res, next) => {
  res.status(200).json({
    summary: 'Motivated Software Developer ready to learn new things',
  });
});

router.post('/experience', (req, res, next) => {
});

router.patch('/experience', (req, res, next) => {
});

router.delete('/experience', (req, res, next) => {
});

module.exports = router;
