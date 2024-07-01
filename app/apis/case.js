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
    console.log( {
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
      mugshot
    },);
    const res = await axios.post(
      `http://54.202.142.106:3000/fmoj/case`,
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
        mugshot
      },
      config
    );

    return res;
  } catch (error) {
    console.log("ERROR", error);
    return error?.response
  }
};


export const getCases = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.get(`http://54.202.142.106:3000/fmoj/cases`,
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
    const res = await axios.get(`http://54.202.142.106:3000/fmoj/case/${id}`,
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
    id, name, token
  });
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const res = await axios.put(`http://54.202.142.106:3000/crud/assigned-judge/${id}`, {
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