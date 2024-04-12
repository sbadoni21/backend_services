const express = require('express');
const router = express.Router();
const tokenController = require('../controllers/tokenController');

router.get('/token', tokenController.getToken);

module.exports = router;
