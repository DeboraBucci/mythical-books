import axios from "axios";
import { apiAddress } from "./constants";

const address = apiAddress + "/auth";

export const registerUser = async (user: any): Promise<string | undefined> => {
  try {
    const res = await axios.post(`${address}/register`, user);

    console.log(res);
    return res.data.message;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

export const loginUser = async (
  email: string,
  password: string
): Promise<string | undefined> => {
  try {
    const res = await axios.post(`${address}/login`, { email, password });

    return res.data.token;
  } catch (err) {
    return undefined;
  }
};
