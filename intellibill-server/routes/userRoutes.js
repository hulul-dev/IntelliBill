const express = require('express');
const router = express.Router();

const UserRegistry = require('../controllers/UserRegistry')
router.post('/UserSave', UserRegistry.UserSave);
router.get('/SingleUser', UserRegistry.SingleUser);

const UserLogin = require('../controllers/UserLogin.js')
router.post('/UserLogin_API',UserLogin.UserLogin),




module.exports = router;