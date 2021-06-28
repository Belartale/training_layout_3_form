const { Router } = require("express");
const singUpModel = require("../models/singUp");
const router = Router();

router.post("/createNewUser", async (req, res) => {
  const createNewUser = new singUpModel({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });

  await createNewUser.save();
  // await res.redirect("/infoUser");
});

module.exports = router;
