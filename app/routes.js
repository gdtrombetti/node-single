const express = require('express');

const router = express.Router();

module.exports = router;
router.get('/', function(require, res) {
	res.send('HER');
});