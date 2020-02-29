const mongoose = require("mongoose");
const User = mongoose.model("user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { check, validationResult } = require("express-validator");

module.exports = app => {
  //Register
  app.post(
    "/api/register",
    [
      check("firstname", "กรุณากรอกชื่อจริง")
        .not()
        .isEmpty(),
      check("lastname", "กรุณากรอกนามสกุล")
        .not()
        .isEmpty(),
      check("nickname", "กรุณากรอกชื่อเล่น")
        .not()
        .isEmpty(),
      check("birthday", "กรุณากรอกวันเกิด")
        .not()
        .isEmpty(),
      check("birthday", "กรุณากรอกรูปแบบวันที่ให้ถูกต้อง").isISO8601(),
      check("email", "กรุณากรอกอีเมลล์")
        .not()
        .isEmpty(),
      check("email", "กรุณากรอกรูปแบบอีเมลล์ให้ถูกต้อง").isEmail(),
      check("password", "กรุณากรอกพาสเวิร์ด")
        .not()
        .isEmpty(),
      check("password", "พาสเวิร์ดต้องอย่างน้อย 4 ตัว").isLength({
        min: 4,
        max: undefined
      }),
      check("line", "กรุณากรอกไลน์")
        .not()
        .isEmpty(),
      check("phone", "กรุณากรอกเบอร์โทร")
        .not()
        .isEmpty(),
      check("phone", "กรุณากรอกรูปแบบเบอร์โทรให้ถูกต้อง").isMobilePhone(),
      check("gender", "กรุณาระบเพศ")
        .not()
        .isEmpty(),
      check("school", "กรุณาเลือกโรงเรียน")
        .not()
        .isEmpty(),
      check("course", "กรุณาเลือกคอร์ส")
        .not()
        .isEmpty(),
      check("start_date", "กรุณาระบุวันเดินทาง")
        .not()
        .isEmpty(),
      check("duration", "กรุณาระบุช่วงเวลา")
        .not()
        .isEmpty(),
      check("domitory", "กรุณาระบุจำนวนคนในที่พัก")
        .not()
        .isEmpty()
    ],
    async (req, res, next) => {
      const result = validationResult(req);
      var errors = result.errors;

      if (!result.isEmpty()) {
        res.send({ status: "validate fail", data: errors });
      }

      const checkEmailExist = await User.findOne({ email: req.body.email });
      if (checkEmailExist) {
        res.send({
          status: "Email Exist",
          msg: 'อีเมลล์นี้ถูกใช้ไปแล้ว'
        });
      }

      const user = await new User();
      user.firstname = req.body.firstname;
      user.lastname = req.body.lastname;
      user.nickname = req.body.nickname;
      user.birthday = req.body.birthday;
      user.email = req.body.email;
      user.password = bcrypt.hashSync(req.body.password);
      user.line = req.body.line;
      user.phone = req.body.phone;
      user.gender = req.body.gender;
      user.school = req.body.school;
      user.course = req.body.course;
      user.start_date = req.body.start_date;
      user.duration = req.body.duration;
      user.domitory = req.body.domitory;
      user.consult = req.body.consult;
      user.comments = req.body.comments;
      user.save();

      let token = jwt.sign({ userID: user._id }, "mango");
      res.send({ status: "success", token: token });
    }
  );
};
