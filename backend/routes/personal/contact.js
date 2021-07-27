const express = require('express');
const router = express.Router();

router.get('/contact', (req, res, next) => {
  res.status(200).json({
    userDetails: {
      fName: 'Swaraj',
      lName: 'Deep',
      dataOfBirth: 'october-16-1998',
    },
    contactDetails: {
      email: 'swarajdeep33445@gmail.com',
      phone: '6205192142',
    },
    socialProfiles: {
      linkedInProfile: 'https://www.linkedin.com/in/swaraj-deep-419331180/',
      githubProfile: 'https://github.com/Swaraj-Deep',
    },
    address: {
      country: 'India',
      state: 'Bihar',
      district: 'Patna',
      zipcode: '800008'
    }
  })
});

router.post('/contact', (req, res, next) => {

});

router.patch('/contact', (req, res, next) => {

});

router.delete('/contact', (req, res, next) => {

});

module.exports = router;
