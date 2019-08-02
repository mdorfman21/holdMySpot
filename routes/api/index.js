const router = require('express').Router();
const createEvent = require('./createEvent');
const createUser = require('./createUser');
const getEvents = require('./getEvents');

router.use("", createEvent);
router.use("", createUser);
router.use("", getEvents);

module.exports = router;