import axios from "axios";

export const signUp = async (email, phoneNumber, password, firstName, lastName, country, state) => {
  try {
    console.log(email, phoneNumber, password, firstName, lastName, country, state,)
    const res = await axios.post(
      `https://dd-backend.onrender.com/auth/signup`,
      {
        email, phoneNumber, password, firstName, lastName, country, state, userType: "user"
      }
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const login = async (email, password) => {
  try {
    const res = await axios.post(
      `https://dd-backend.onrender.com/auth/login`,
      {
        email, password
      }
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};
