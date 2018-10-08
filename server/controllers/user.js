import User from "../models/User";
import passport from "passport";

export const getUserLogin = (req, res) => {
	res.status(200).json('login');
};
export const userSignup = (req, res, next) => {
	const { email, password, confirmPassword } = req.body;

	const user = new User({
		password,
		email,
		isAdmin: false
	});

	User.findOne(
		{
			email: req.body.email
		},
		(err, existingUser) => {
			if (err) {
				return next(err);
			}
			if (existingUser) {
				return res.redirect("/register");
			}
			user.save(err => {
				if (err) {
					return next(err);
				}
				req.flash("success", {
					msg: "your account have been registered you can now log in."
				});
				res.redirect("/login");
			});
		}
	);
};

/**
 * POST /login
 * Sign in using email and password.
 */

export const userLogin = (req, res, next) => {
	passport.authenticate("local", {
		successRedirect: "/",
		failureRedirect: "/login",
		failureFlash: true
	})(req, res, next);
};
