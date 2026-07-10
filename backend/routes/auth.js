const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
  try {
    const {
      telegramId,
      username,
      firstName,
      lastName
    } = req.body;

    let user = await User.findOne({ telegramId });

    if (!user) {
      const referralCode =
        "NEXO" + Math.random().toString(36).substring(2, 8).toUpperCase();

      user = await User.create({
        telegramId,
        username,
        firstName,
        lastName,
        userId: "NEXO" + Date.now(),
        referralCode
      });
    }

    res.json(user);

  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
});

module.exports = router;
