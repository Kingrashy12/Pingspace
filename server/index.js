import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import AuthRoute from "./route/Auth.js";
import UserRoute from "./route/User.js";
import ChatRoute from "./route/Chat.js";
import MessageRoute from "./route/Message.js";
import { ConnectDB } from "./utils/ConnectDb.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.use("/auth", AuthRoute);
app.use("/users", UserRoute);
app.use("/chat", ChatRoute);
app.use("/message", MessageRoute);

app.get("/", (req, res) => {
  res.send("Home");

  console.log("Home");
});

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server running on port http://localhost:${port} 🔥`)
);

ConnectDB();
