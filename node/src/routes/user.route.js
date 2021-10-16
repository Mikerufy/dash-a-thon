const router = require("express").Router();
const view = require("../controllers/user.controller");

router.get("/logout", view.logout);
router.post("/login", view.login);
router.post("/register", view.registerUser);
router.get("/get", view.getUser);
router.post("/addProduct", view.addProduct);
router.get("/getProduct", view.getProduct);
router.get("/getImg", view.getImg);
router.post("/addbuyer", view.addbuyer);
router.post("/addseller", view.addseller);
router.get("/getbuyer", view.getbuyer);
router.get("/getseller", view.getseller);
router.post("/addseller",view.addseller);
router.get("/get")

module.exports = router;
