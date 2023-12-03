import ChatModel from "../model/Chat.js";

export const CreateChat = async (req, res) => {
  const { senderId, receiverId } = req.body;
  try {
    const chat = await ChatModel.findOne({
      people: { $all: [senderId, receiverId] },
    });
    if (chat) {
      return res.status(200).json(chat);
    } else {
      const newChat = new ChatModel({
        people: [senderId, receiverId],
      });
      const response = await newChat.save();
      res.status(201).json(response);
    }
  } catch (error) {
    console.log({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};

export const findUserChat = async (req, res) => {
  const { userId } = req.params;
  try {
    const chat = await ChatModel.find({
      people: { $in: [userId] },
    });
    if (!chat) return res.status(404).json("No chat found");
    res.status(200).json(chat);
  } catch (error) {
    console.log({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};

export const findChat = async (req, res) => {
  const { senderId, receiverId } = req.body;
  try {
    const chat = await ChatModel.findOne({
      people: { $all: [senderId, receiverId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    console.log({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};
