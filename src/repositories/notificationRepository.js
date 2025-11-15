const Notification = require("../models/notificationModel");

module.exports = {
  async save(record) {
    const notification = new Notification(record);    
    return await notification.save();
  },

  async findAll() {
    return await Notification.find().sort({ createdAt: -1 });
  }
};
