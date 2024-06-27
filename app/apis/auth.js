import axios from "axios";

export const requestAccess = async (
  officialEmail,
  supervisorEmail,
  dob,
  doe,
  nin,
  bvn,
  govId,
  password
) => {
  try {
    console.log({
      officialEmail,
      supervisorEmail,
      dob,
      doe,
      nin,
      bvn,
      govId,
      password,
    });
    const res = await axios.post(`http://54.149.227.204:3000/auth/register`, {
      officialEmail,
      supervisorEmail,
      dob,
      doe,
      nin,
      bvn,
      govId,
      password,
      departmentId: "FMOJ",
      subDepartmentId: "JPP|LEA",
    });

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const login = async (officialEmail, govId, password) => {
  try {
    const res = await axios.post(`http://54.149.227.204:3000/auth/login`, {
      officialEmail,
      govId,
      password,
    });

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
export const verifyOtp = async (officialEmail, otp) => {
  try {
    const res = await axios.post(`http://54.149.227.204:3000/auth/verify-otp`, {
      officialEmail,
      otp,
    });

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
export const requestOtp = async (officialEmail) => {
  try {
    const res = await axios.post(`http://54.149.227.204:3000/auth/resend-otp`, {
      officialEmail,
    });

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
