var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
  try {
    res.render("pages/index", { title: "Home Page || Blood Donation" });
  } catch (err) {
    console.log(err);
  }
});
/* 
Method : Get
Donate Page
*/
router.route("/donate").get((req, res) => {
  try {
    res.render("pages/donate", { title: "Donate Page" });
  } catch (err) {
    console.log(err);
  }
});
/* 
Method : Get
Register Page
*/
router.route("/register").get((req, res) => {
  try {
    res.render("pages/register", { title: "Register" });
  } catch (err) {
    console.log(err);
  }
});
/* 
Method : Get
Login Page
*/
router.route("/login").get((req, res) => {
  try {
    res.render("pages/login", { title: "Login" });
  } catch (err) {
    console.log(err);
  }
});
/* 
Method : Get
Request Blood Page
*/
router.route("/request").get((req, res) => {
  try {
    res.render("pages/request", { title: "Request Blood" });
  } catch (err) {
    console.log(err);
  }
});

router.render;
module.exports = router;
