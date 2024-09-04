import axios from "axios";

export const createCase = async (
  caseNumber,
  offenseCategory,
  fmojDept,
  courtNumber,
  courtLocation,
  courtClerk,
  assignedJudge,
  chargeSheetNo,
  offenseType,
  agency,
  lawEnforcementOfficer,
  legalBasis,
  particularsOfOffense,
  chargeDetails,
  legalBriefAndMemoranda,
  accusedImage,
  accusedFirstName,
  accusedLastName,
  accusedMiddleName,
  accusedBvn,
  accusedNin,
  accusedAlias,
  caseStatus,
  accusedStatus,
  dateInitiated,
  associate,
  attachment,
  mugshot,
  token
) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    console.log({
      caseNumber,
      offenseCategory,
      fmojDept,
      courtNumber,
      courtLocation,
      courtClerk,
      assignedJudge,
      chargeSheetNo,
      offenseType,
      agency,
      lawEnforcementOfficer,
      legalBasis,
      particularsOfOffense,
      chargeDetails,
      legalBriefAndMemoranda,
      accusedImage,
      accusedFirstName,
      accusedLastName,
      accusedMiddleName,
      accusedBvn,
      accusedNin,
      accusedAlias,
      caseStatus,
      accusedStatus,
      dateInitiated,
      associate,
      attachment,
      mugshot,
    });
    const res = await axios.post(
      `https://ccppas.centraconnect.ai/fmoj/case`,
      {
        caseNumber,
        offenseCategory,
        fmojDept,
        courtNumber,
        courtLocation,
        courtClerk,
        assignedJudge,
        chargeSheetNo,
        offenseType,
        agency,
        lawEnforcementOfficer,
        legalBasis,
        particularsOfOffense,
        chargeDetails,
        legalBriefAndMemoranda,
        accusedImage,
        accusedFirstName,
        accusedLastName,
        accusedMiddleName,
        accusedBvn,
        accusedNin,
        accusedAlias,
        caseStatus,
        accusedStatus,
        dateInitiated,
        associate,
        attachment,
        mugshot,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getCases = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.get(
      `https://ccppas.centraconnect.ai/fmoj/cases`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getCase = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.get(
      `https://ccppas.centraconnect.ai/fmoj/case/${id}`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const assignCase = async (id, name, token) => {
  console.log({
    id,
    name,
    token,
  });
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.put(
      `https://ccppas.centraconnect.ai/crud/assigned-judge/${id}`,
      {
        name,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const getCaseSummary = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.get(
      `https://ccppas.centraconnect.ai/fmoj/summary`,
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const classifyCase = async (id, classification, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.patch(
      `https://ccppas.centraconnect.ai/fmoj/case/${id}/classifyCase`,
      {
        class: classification,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const expungeCase = async (
  fileLink,
  caseNumber,
  officialEmail,
  token
) => {
  console.log({
    fileLink,
    caseNumber,
    officialEmail,
    token,
  });

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(
      `https://ccppas.centraconnect.ai/fmoj/expunge/initiate`,
      {
        fileLink,
        caseNumber,
        officialEmail,
        token,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const verifyExpunge = async (
  otp,
  fileLink,
  caseNumber,
  officialEmail,
  token
) => {
  console.log("otp object", {
    otp,
    fileLink,
    caseNumber,
    officialEmail,
    token,
  });

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.post(
      `https://ccppas.centraconnect.ai/fmoj/expunge/verify-and-create/${caseNumber}?otp=${otp}`,
      
      {
        otp,
        fileLink,
        caseNumber,
        officialEmail,
        token,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};

export const transferCase = async (
  caseNumber,
    fmojDept,
    token
) => {
  console.log("otp object", {
    caseNumber,
    fmojDept,
    token
  });

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.patch(
      `https://ccppas.centraconnect.ai/fmoj/transfer/${caseNumber}/fmoj-dept`,
      
      {
        fmojDept,
        token,
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response;
  }
};
