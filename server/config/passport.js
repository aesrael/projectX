import passport from "passport";
import LocalStrategy from "passport-local";
import User from "../models/User";

passport.serializeUser(function(user, done) {
	done(null, user.id);
});
passport.deserializeUser((id, done) => {
	User.findById(id, (err, user) => {
		if (user) return done(err, user);
	});
});

//module.exports.passportUser = function() {
passport.use(
	new LocalStrategy(
		{
			usernameField: "email"
		},
		(email, password, done) => {
			User.findOne(
				{
					email: email.toLowerCase()
				},
				(err, user) => {
					if (err) {
						return done(err);
					}
					if (!user) {
						return done(null, false, {
							message: `Email: ${email} not found.`
						});
					}

					//else compare password
					User.comparePassword(password, user.password, function(err, isMatch) {
						if (err) {
							throw err;
						}

						if (isMatch) {
							return done(null, user);
						} else {
							return done(null, false, { message: "Incorrect password." });
						}
					});
				}
			);
		}
	)
);
