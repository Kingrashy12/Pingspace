import UserModel from "../model/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    console.log({ error: error.message });
    return res.status(500).json({ error: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const users = await UserModel.findById(userId);
    res.status(200).json(users);
  } catch (error) {
    console.log({ error: error.message });
    return res.status(500).json({ error: error.message });
  }
};
