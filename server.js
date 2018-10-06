import express from "express";
import next from "next";
import mongoose from 'mongoose';
import passport from "passport";
import LocalStrategy from "passport-local";
import dotenv from "dotenv"

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
import routes from "./server/routes";

app
	.prepare()
	.then(() => {
		const server = express();
/**
 * Load environment variables from .env file,store of API keys and passwords
 */
dotenv.load({
	path: ".env.example"
  });

		server.use("/", routes);
		server.get("*", (req, res) => {
			return handle(req, res);
		});

		server.listen(3000, err => {
			if (err) throw err;
			console.log("> Ready on http://localhost:3000");
		});
	})
	.catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	});
