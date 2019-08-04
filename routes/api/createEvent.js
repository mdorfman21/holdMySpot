const router = require("express").Router();
const controller = require("../../controllers/api_controllers");

router.route("/create/event").post(controller.createEvent);

module.exports = router;
