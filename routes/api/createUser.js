const router = require('express').Router();
const controller = require('../../controllers/api_controllers');

router.route('/create/user').post(controller.createUser);

module.exports = router;