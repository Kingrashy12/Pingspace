import mongoose from "mongoose";

const ChatSchema = mongoose.Schema(
  {
    people: { type: Array, default: [] },
  },
  { timestamps: true }
);

const ChatModel = mongoose.model("Chat", ChatSchema);

export default ChatModel;
