import axios from "axios";
import { BASE_URL } from "../constant/url";

export async function createChat() {
  const response = await axios.post(`${BASE_URL}/`);
}
