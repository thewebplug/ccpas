import axios from "axios";

export const listUsers = async () => {
  try {
    const res = await axios.get(
      `https://sso.centraconnect.ai/auth/users-no-auth`
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};