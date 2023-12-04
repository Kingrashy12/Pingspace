import { Benz, KFX } from "~/assets";

export const chatdata = [
  { image: Benz, name: "RAUTO", username: "rauto_", totalMsg: 5 },
  { image: "", name: "Alice Brown", username: "iam_babia", totalMsg: 1 },
  { image: "", name: "Charlie Davis", username: "charlie_dave", totalMsg: 6 },
];

export const messagedata = [
  {
    image: Benz,
    username: "rauto_",
    messages: [
      { msg: "Hi do you have CLA45", reciever: true },
      { msg: "Hello sir", id: "34678", sender: true },
      { msg: "It's avalibale", id: "34678", sender: true },
    ],
  },
  {
    image: "",
    username: "iam_babia",
    messages: [{ msg: "Hi, am bia", sender: true }],
  },
  {
    image: "",
    username: "charlie_dave",
    messages: [
      { msg: "Whtup", reciever: true },
      { msg: "I'm gud and you", id: "346786", sender: true },
      { msg: "Did you see the move today", id: "346786", sender: true },
      { msg: "On GU", id: "346786", sender: true },
      { msg: "It's seems the bulls are in charge", id: "346786", sender: true },
      { msg: "Because the spike was aggressive", id: "346786", sender: true },
      { msg: "Hope you didn't miss it", id: "346786", sender: true },
    ],
  },
];
