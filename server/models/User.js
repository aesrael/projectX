import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const UserSchema = mongoose.Schema(
	{
		passwordResetToken: String,
		passwordResetExpires: Date,
		email: {
			type: String,
			trim: true,
			lowercase: true
		},
		logs: {
			LastLogin: Date,
			lastPassword_reset: Date
		},
		state: {
			online: Boolean,
			available: Boolean
		},
		isAdmin: Boolean
	},
	{
		timestamps: true
	}
);

export const User = mongoose.model("User", UserSchema);

// on every save,if passowrd is modified hash it
UserSchema.pre("save", next => {
	const user = this;
	if (!user.isModified("password")) {
		return next();
	}
	bcrypt.genSalt(10, (err, salt) => {
		if (err) {
			return next(err);
		}
		bcrypt.hash(user.password, salt, (err, hash) => {
			if (err) {
				return next(err);
			}
			user.password = hash;
			next();
		});
	});
});

export const comparePassword = (password, hash, callback) => {
	bcrypt.compare(password, hash, (err, isMatch) => {
		if (err) throw err;
		callback(null, isMatch);
	});
};
