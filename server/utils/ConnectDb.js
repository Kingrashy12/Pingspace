import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const option = {
  useNewUrlParser: true,
};

const url = process.env.DB;

export async function ConnectDB() {
  try {
    console.log("Connecting to the database...");
    await mongoose.connect(url, option);
    console.log("Successfully Connected");
  } catch (error) {
    console.log({ error: error.message });
  }
}
