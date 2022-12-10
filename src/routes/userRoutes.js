const express = require("express");
const router = express.Router();


const controller = require("../controllers/userController");
const authController = require("../controllers/authController");


const { checkAuth } = require("../middlewares/auth");

router.get("/all", checkAuth, controller.getAll);
router.post("/create", controller.createUser);
router.post("/login", authController.login);

router.get('/administrar',checkAuth, controller.getAll)


module.exports = router;