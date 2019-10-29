const express = require("express");
const { check, validationResult } = require("express-validator/check");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const User = require("../../models/User");
const Admin = require("../../models/Admin");

//@route POST api/register/admin
//@desc  register admin
//@access public

router.post(
  "/admin",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "please enter valid password").isLength({ min: 6 }),
    check("cdetails.cname", "Enter valid company name")
      .not()
      .isEmpty(),
    check("cdetails.location.street", "Enter valid street")
      .not()
      .isEmpty(),
    check("cdetails.location.city", "Enter valid street")
      .not()
      .isEmpty(),
    check("cdetails.location.state", "Enter valid state")
      .not()
      .isEmpty(),
    check("cdetails.location.pincode", "Enter valid pincode")
      .isLength({ min: 6, max: 6 })
      .isNumeric(),
    check("phone", "Enter valid phone number")
      .isMobilePhone()
      .isLength({ min: 10, max: 10 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, cdetails, phone } = req.body;

    try {
      let admin = await Admin.findOne({ email });

      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "You are already a User" }] });
      }

      if (admin) {
        return res
          .status(400)
          .json({ errors: [{ msg: "Admin already exists" }] });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      admin = new Admin({
        name,
        email,
        avatar,
        password,
        cdetails,
        phone
      });

      const salt = await bcrypt.genSalt(10);

      admin.password = await bcrypt.hash(password, salt);

      await admin.save();

      const payload = {
        user: {
          id: admin.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      //res.send("registration done");
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error in registration");
    }
  }
);

//@route POST api/register/user
//@desc  register admin
//@access public

router.post(
  "/user",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check("password", "please enter valid password").isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      let admin = await Admin.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      if (admin) {
        return res
          .status(400)
          .json({ errors: [{ msg: "You are already a admin" }] });
      }

      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      user = new User({
        name,
        email,
        avatar,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtSecret"),
        { expiresIn: 3600000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );

      //res.send("registration done");
    } catch (err) {
      console.error(err.message);
      return res.status(500).send("Server Error in registration");
    }
  }
);

module.exports = router;
