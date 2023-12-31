import { Benz, Bob, Eddie, Jane, John, KFX } from "~/assets";
import { generateUniqueId } from "~/libs/functions/genId";

export const userdata = [
  {
    name: "Rapheal Chizitere",
    username: "kingrashy",
    desc: "🚀FOREX TRADER 💹 AND A FINANCIAL MARKET ANALYST 💹 | MERN STACK Dev",
    image: KFX,
    status: "online",
    created: new Date(),
    friends: 310,
    id: generateUniqueId(),
  },
  {
    name: "John Doe",
    username: "JOhnnyD",
    desc: "🚀 Avaliable",
    image: John,
    status: "online",
    created: new Date(),
    friends: 85,
    id: generateUniqueId(),
  },
  {
    name: "Jane Smith",
    username: "J-Bby",
    desc: "Freelancer | Software Engineer | #1 boss laby",
    image: Jane,
    status: "offline",
    created: new Date(),
    friends: 107,
    id: generateUniqueId(),
  },
  {
    name: "Bob Johnson",
    username: "BJ-Banks",
    desc: "Hi, I'm using pingspace",
    image: Bob,
    status: "online",
    created: new Date(),
    friends: 210,
    id: generateUniqueId(),
  },
  {
    name: "Alice Brown",
    username: "iam_babia",
    desc: "GYM Instrutor | Always stay fit",
    status: "away",
    created: new Date(),
    friends: 31,
    id: generateUniqueId(),
  },
  {
    name: "Charlie Davis",
    username: "charlie_dave",
    desc: "....MOOD 😎😋",
    status: "away",
    id: generateUniqueId(),
    created: new Date(),
    friends: 102,
  },
  {
    name: "Ralph Eddie",
    username: "iam_eddie_r",
    desc: "Auto sport lover | Bmw fan boy",
    status: "offline",
    id: generateUniqueId(),
    created: new Date(),
    friends: 125,
    image: Eddie,
  },
  {
    name: "RAUTO",
    username: "rauto_",
    desc: "Your No.1 auto shop | AMG",
    status: "offline",
    id: generateUniqueId(),
    created: new Date(),
    friends: 125,
    image: Benz,
  },
];

export const currentUser = {
  name: "Rapheal Chizitere",
  username: "Kingrashy",
  created: new Date(),
  friends: 310,
  image: KFX,
  id: generateUniqueId(),
  desc: "🚀FOREX TRADER 💹 AND A FINANCIAL MARKET ANALYST 💹 | MERN STACK Dev",
};
