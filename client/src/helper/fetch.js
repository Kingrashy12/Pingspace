import axios from "axios";
import { BASE_URL } from "../constant/url";

export async function getUsers() {
  const response = await axios.get(`${BASE_URL}/users`);
  return response?.data;
}
