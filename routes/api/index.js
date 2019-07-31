const router = require('express').Router();
const createEvent = require('./createEvent');
const createUser = require('./createUser');

router.use("", createEvent);
router.use("", createUser);

module.exports = router;