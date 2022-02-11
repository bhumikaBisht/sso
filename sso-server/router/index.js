const express = require("express");

const router = express.Router();
const controller = require("../controller");

router
  .route("/login")
  .get(controller.login)
  .post(controller.doLogin);

router.get("/verifytoken", controller.verifySsoToken);
router.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
module.exports = router;
