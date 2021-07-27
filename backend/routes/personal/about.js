const express = require('express');
const router = express.Router();

router.get('/about', (req, res, next) => {
  res.status(200).json({
    summary: 'Motivated Software Developer ready to learn new things',
  });
});

router.post('/about', (req, res, next) => {
});

router.patch('/about', (req, res, next) => {
});

router.delete('/about', (req, res, next) => {
});

module.exports = router;
