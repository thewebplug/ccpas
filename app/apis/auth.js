import axios from "axios";

export const requestAccess = async (
  officialEmail,
  supervisorEmail,
  dob,
  doe,
  nin,
  bvn,
  govId,
  // password
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
      // password,
    });
    const res = await axios.post(`https://sso.centraconnect.ai/auth/register`, {
      officialEmail,
      supervisorEmail,
      dob,
      doe,
      nin,
      bvn,
      govId,
      // password,
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
  console.log({officialEmail, govId, password});
  try {
    const res = await axios.post(`https://sso.centraconnect.ai/auth/login`, {
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
export const adminLogin = async (officialEmail, govId, password) => {
  try {
    const res = await axios.post(`https://sso.centraconnect.ai/auth/login-admin`, {
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
    const res = await axios.post(`https://sso.centraconnect.ai/auth/verify-otp`, {
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
    const res = await axios.post(`https://sso.centraconnect.ai/auth/resend-otp`, {
      officialEmail,
    });

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const changPassword = async (currentPassword, newPassword, id, token) => {
  console.log({currentPassword, newPassword, id, token});
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.patch(`https://sso.centraconnect.ai/auth/update-password`, {
      id,
      currentPassword,
      newPassword,
    },
    config
  );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getProfile = async (officialEmail, token) => {
  console.log({officialEmail, token});
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(`https://sso.centraconnect.ai/auth/profile`, {
      officialEmail
    },
    config
  );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getRoles = async (token) => {
  console.log({token});
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.get(`https://sso.centraconnect.ai/auth/roles`,
    config
  );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const createRole = async (name, token) => {
  console.log({name, token});
  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(`https://sso.centraconnect.ai/auth/roles`, {
      name
    },
    config
  );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};