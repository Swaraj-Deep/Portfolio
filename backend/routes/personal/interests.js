const express = require('express');
const router = express.Router();

router.get('/interests', (req, res, next) => {
  res.status(200).json({
    interests: ['Distributed Systems', 'Caching', 'Highly Available Systems']
  })
});

router.post('/interests', (req, res, next) => {
});

router.patch('/interests', (req, res, next) => {
});

router.delete('/interests', (req, res, next) => {
});

module.exports = router;
