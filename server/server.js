const express = require("express");
const app = express();
const port = 5000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cors = require("cors");
// require("dotenv").config();
// console.log(process.env.);
mongoose.connect("mongodb://localhost:27017/meeting-app", () => {
    console.log("db connected");
});

const User = require("./model/user");
const JWT_SECERT = "dnhaushfsasndioadunasjcjahduwabfjhuy28ueiWU";
app.use(bodyParser.json());
app.use(cors());
app.get("/", (req, res) => {
    res.send("meeting app");
});

app.post("/register", async (req, res) => {
    const { email, password } = req.body;

    const hashpass = await bcrypt.hash(password, 10);

    try {
        const response = await User.create({
            email,
            password: hashpass,
        });
        console.log("user created : ", response);
    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            return res.json({ msg: "email is already registered" });
        }
        return res.status(500).json({ msg: "server error" });
    }
    return res.status(200).json({ msg: "user added" });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res
                .status(400)
                .json({ auth: false, msg: "email is not registered" });
        }
        if (await bcrypt.compare(password, user.password)) {
            const token = jwt.sign(
                { id: user._id, username: user.email },
                JWT_SECERT
            );

            return res
                .status(200)
                .json({ auth: true, msg: "user login", data: token });
        } else {
            return res
                .status(200)
                .json({ auth: false, msg: "invalid password" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ auth: false, msg: "server error" });
    }
});

app.get("/getUserdata", async (req, res) => {
    try {
        const decode = await jwt.verify(req.headers.jwttoken, JWT_SECERT);
        return res.json({ auth: true, email: decode.username, id: decode.id });
    } catch (error) {
        console.log(error);
        return res.json({ auth: false });
    }
});

app.listen(port, () => {
    console.log(`App started on port ${port}`);
});
