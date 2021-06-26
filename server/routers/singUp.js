const { Router } = require("express");
const singUp = require("../models/singUp");
const router = Router();

router.post("/createNewUser", async (req, res) => {
  const createNewUser = new singUp({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    password: req.body.password,
  });

  await createNewUser.save();
  await res.redirect("/infoUser");
});
