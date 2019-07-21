const router = require('express').Router();
const createEvent = require('./createEvent');

router.use("", createEvent);

module.exports = router;