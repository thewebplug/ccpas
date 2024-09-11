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

export const getNotifications = async () => {
  try {
    const res = await axios.get(`https://sso.centraconnect.ai/auth/activities`);

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};
export const superAdminCreateUser = async (officialEmail,
  supervisorEmail,
  profile_image,
  dob,
  doe,
  nin,
  bvn,
  govId,
  departmentId,
  subDepartmentId, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
  try {
    const res = await axios.post(
      `https://sso.centraconnect.ai/auth/superadmin-user-register`,
      {
        officialEmail,
        supervisorEmail,
        profile_image,
        dob,
        doe,
        nin,
        bvn,
        govId,
        departmentId,
        subDepartmentId
      }
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
  }
};
