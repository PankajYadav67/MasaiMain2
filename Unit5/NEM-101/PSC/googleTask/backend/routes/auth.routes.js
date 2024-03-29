const { Router } = require("express");
const UserModel = require("../models/User");

const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
    console.log(req.body);
    try {
        const user = new UserModel(req.body);
        await user.save();
        res.status(201).send({ message: "Sign up success", token: 54321 });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Error occurred" });
    }
});

authRouter.post("/login", async (req, res) => {
    console.log(req.body);
    const checkUser = await UserModel.find(req.body);
    if (checkUser.length >= 1) {
        let { name, _id } = checkUser[0];
        let payload = {
            _id,
            name,
            token: 54321,
        };
        res.send(payload);
    } else {
        res.send({ message: "Wrong credentials" });
    }
});

module.exports = authRouter;
