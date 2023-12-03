import axios from "axios";
import { BASE_URL } from "../constant/url";

export async function getUsers() {
  const response = await axios.get(`${BASE_URL}/users`);
  return response?.data;
}

export async function getUserChats(userId) {
  const response = await axios.get(`${BASE_URL}/chat/find/${userId}/all`);
  return response?.data;
}
export async function getChats(senderId, receiverId) {
  const response = await axios.get(`${BASE_URL}/chat/find/`, {
    senderId: senderId,
    receiverId: receiverId,
  });
  return response?.data;
}

export async function getUserById(userId) {
  const response = await axios.get(`${BASE_URL}/users/one/${userId}`);
  return response?.data;
}
