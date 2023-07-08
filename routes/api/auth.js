const express = require("express");

const { schemas } = require("../../models/user");

const ctrl = require("../../controllers/users");

const { validateBody, authenticate, upload } = require("../../middlewares");

const router = express.Router();

router.get("/verify/:verificationToken", ctrl.verifyEmail);

router.post(
	"/verify",
	validateBody(schemas.emailSchema),
	ctrl.resendVerifyEmail
);

router.post("/register", validateBody(schemas.registerSchema), ctrl.register);

router.post("/login", validateBody(schemas.loginSchema), ctrl.login);

router.get("/current", authenticate, ctrl.getcurrent);

router.post("/logout", authenticate, ctrl.logout);

router.patch(
	"/avatars",
	authenticate,
	upload.single("avatar"),
	ctrl.updateAvatar
);

module.exports = router;
