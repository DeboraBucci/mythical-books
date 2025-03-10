import axios from "axios";
import { apiAddress } from "./constants";

const address = apiAddress + "/Auth";

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
