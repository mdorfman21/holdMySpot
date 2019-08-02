const router = require('express').Router();
const controller = require('../../controllers/api_controllers');

router.route('/events').get(controller.getEvents);

module.exports = router;