import axios from "axios";
import { BASE_URL } from "../constant/url";

export async function createChat(senderId, receiverId) {
  const response = await axios.post(`${BASE_URL}/chat/new`, {
    senderId: senderId,
    receiverId: receiverId,
  });
  return response?.data;
}
