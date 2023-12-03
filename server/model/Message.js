import mongoose from "mongoose";

const MessageSchema = mongoose.Schema(
  {
    chatId: { type: String, required: true },
    senderId: { type: String, required: true },
    image: { type: Object },
    text: { type: String },
    seen: { type: Boolean },
  },
  { timestamps: true }
);

const MessageModel = mongoose.model("Message", MessageSchema);

export default MessageModel;
