import axios from "axios";


export const getDepartments = async (token) => {
    console.log({name, token});
    
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await axios.get(`https://sso.centraconnect.ai/auth/all-departments`,
      config
    );
  
      return res;
    } catch (error) {
      console.log("ERROR", error);
      return error?.response;
    }
  };
export const createDepartment = async (name, token) => {
    console.log({name, token});
    
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await axios.post(`https://sso.centraconnect.ai/auth/departments`, {
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

export const createSubDepartment = async (name, parentDepartmentId, token) => {
    console.log({name, token});
    
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    try {
      const res = await axios.post(`https://sso.centraconnect.ai/auth/sub-departments`, {
        name,
        parentDepartmentId
      },
      config
    );
  
      return res;
    } catch (error) {
      console.log("ERROR", error);
      return error?.response;
    }
  };
  