import { compare, genSalt, hash } from "bcrypt";
import UserModel from "../model/User.js";
import genAuthToken from "../utils/genAuthToken.js";

export const RegisterUser = async (req, res) => {
  try {
    const { name, username, password, email } = req.body;
    const User = await UserModel.findOne({ email: email });
    if (User) return res.status(403).json("User already exits");
    const salt = await genSalt(12);
    const hashedPass = await hash(password, salt);

    const newUser = new UserModel({
      name: name,
      username: username,
      email: email,
      password: hashedPass,
    });
    const user = await newUser.save();
    const token = genAuthToken(user);
    res.status(201).json(token);
  } catch (error) {
    console.log({ error: error.message });
    return res.status(500).json({ error: error.message });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) return res.status(404).json("User not found");
    const isMatch = await compare(password, user.password);
    if (!isMatch) return res.status(403).json("invalid password");
    const token = genAuthToken(user);
    res.status(200).json(token);
  } catch (error) {
    console.log({ error: error.message });
    return res.status(500).json({ error: error.message });
  }
};
