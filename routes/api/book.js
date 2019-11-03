const express = require("express");
const { check, validationResult } = require("express-validator/check");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../../models/User");
const CBDB = require("../../models/CBDB");
const Slot = require("../../models/Slot");
const Day = require("../../models/Day");
const Admin = require("../../models/Admin");

//@route POST api/book
//@desc  book a slot
//@access public

router.post("/", async (req, res) => {
  const { userid, slotid } = req.body;

  try {
    let slot = await Slot.findOne({ _id: slotid });

    if (!slot) {
      return res.status(400).json({ errors: [{ msg: "slotid not found" }] });
    }

    await Slot.updateOne({ _id: slotid }, { user: userid, booked: true });

    slot = await Slot.findOne({ _id: slotid });
    res.json(slot);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server Error in registration");
  }
});

module.exports = router;
