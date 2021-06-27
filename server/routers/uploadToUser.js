const { Router } = require("express");
const router = Router();
const path = require("path");

router.get("/", (req, res) => {
  // res.render("../../index", {});
  res.status(200);
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

module.exports = router;
