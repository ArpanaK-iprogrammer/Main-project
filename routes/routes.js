const express = require('express');
const path = require('path');
const authController = require('../controllers/authController');
const { validateRegistration, validateLogin } = require('../middleware/userValidation')

const router = express.Router();

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/view', 'Index.html'));
});
  
router.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/view', 'signup.html'));
});

router.post('/register', validateRegistration, authController.register);
router.post('/login', validateLogin, authController.login);


module.exports = router;