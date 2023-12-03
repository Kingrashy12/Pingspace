import MessageModel from "../model/Message.js";

export const createMessage = async (req, res) => {
  const { chatId, senderId, text, image, url } = req.body;
  try {
    if (image) {
      const uploadRes = await cloudinary.uploader.upload(image, {
        upload_preset: "CHAT_IMAGE",
      });
      if (uploadRes) {
        const message = new MessageModel({
          chatId: chatId,
          senderId: senderId,
          text: text,
          image: uploadRes,
          seen: false,
        });
        const newmessage = await message.save();
        res.status(201).json(newmessage);
      }
    } else if (!image) {
      const message = new MessageModel({
        chatId: chatId,
        senderId: senderId,
        text: text,
        seen: false,
      });
      const newmessage = await message.save();
      res.status(201).json(newmessage);
    }
  } catch (error) {
    console.log({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};

export const getMessage = async (req, res) => {
  const { chatId } = req.params;
  try {
    const message = await MessageModel.find({ chatId });
    res.status(200).json(message);
  } catch (error) {
    console.log({ error: error.message });
    res.status(500).json({ error: error.message });
  }
};
