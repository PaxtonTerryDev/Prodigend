const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());
app.use(cors());

// Encrypt borrower provided password
const encrypt = (password) => {
	return bcrypt.hashSync(password, 10);
};

mongoose
	.connect("mongodb://127.0.0.1:27017/prodigend", {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log("Connected to DB"))
	.catch(console.error);

const User = require("./schemas/users");

// Get list of users
app.get("/users", async (req, res) => {
	const users = await User.find();

	res.json(users);
});

// Create new user
app.post("/users/new", (req, res) => {
	const encryptedPassword = encrypt(req.body.password);
	const user = new User({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: encryptedPassword,
		subscribed: req.body.subscribed,
	});

	console.log(user);

	user.save();

	res.json(user);
});

// Delete user

app.delete("/users/delete/:id", async (req, res) => {
	const result = await User.findByIdAndDelete(req.params.id);

	res.json(result);
});

// Update subscription status

// ON
app.put("/users/subscriptionOn/:id", async (req, res) => {
	const user = await User.findById(req.params.id);
	user.subscribed = true;

	user.save();

	res.json(user);
});
// OFF
app.put("/users/subscriptionOff/:id", async (req, res) => {
	const user = await User.findById(req.params.id);
	user.subscribed = false;

	user.save();

	res.json(user);
});

app.use(express.json());

app.listen(4000, () => console.log("Listening on Port 4000..."));
