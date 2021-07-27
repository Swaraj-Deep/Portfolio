const express = require('express');
const router = express.Router();

router.get('/education', (req, res, next) => {
  res.status(200).json([{
    instituteName: 'NIT, Durgapur',
    address: {
      country: 'India',
      state: 'West Bengal',
      district: 'Durgapur',
      zipcode: '713213'
    },
    degree: 'MCA',
    major: 'Computer Application',
    from: 'Jun-01-2018',
    to: 'Jun-01-2021',
    CGPA: {
      got: '8.31',
      outOf: '10'
    },
    percentage: {
      got: '76.5',
      outOf: '100'
    }
  }, {
    instituteName: 'ABC College, Patna',
    address: {
      country: 'India',
      state: 'Bihar',
      district: 'Patna',
      zipcode: '800020'
    },
    degree: 'BCA',
    major: 'Computer Application',
    from: 'Jun-01-2015',
    to: 'Jun-01-2018',
    CGPA: {
      got: '8.31',
      outOf: '10'
    },
    percentage: {
      got: '76.5',
      outOf: '100'
    }
  }]);
});

router.post('/education', (req, res, next) => {
});

router.patch('/education', (req, res, next) => {
});

router.delete('/education', (req, res, next) => {
});

module.exports = router;
