const { Router } = require("express");
const router = Router();
const path = require("path");
const pathViews = require("./pathViews");

router.get("/", (req, res) => {
  res.status(200);
  res.sendFile(`${pathViews}/index.html`);
  // res.sendFile(``);
});

module.exports = router;
