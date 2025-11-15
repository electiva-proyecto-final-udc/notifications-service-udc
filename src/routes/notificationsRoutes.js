const express = require("express");
const router = express.Router();
const controller = require("../controllers/notificationController");

router.post("/history", controller.getNotifications);

module.exports = router;
