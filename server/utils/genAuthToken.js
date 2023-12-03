import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const genAuthToken = (user) => {
  const AuthKey = process.env.AUTH_KEY;
  const token = jwt.sign(
    {
      id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
      profile: user.profile,
      created: user.createdAt,
    },
    AuthKey
  );

  return token;
};

export default genAuthToken;
