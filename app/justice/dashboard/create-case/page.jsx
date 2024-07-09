"use client";
import { createCase } from "@/app/apis/case";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export default function CreateCase() {


  const offences = {
    "ADVANCE FEE FRAUD": [
      "OBT",
      "Conspiracy",
      "Attempt to commit AFF Crimes",
      "Forgery&Uttering",
      "possession of fraudlent Documents",
      "Stealing by Conversion",
      "Cheating",
      "Impersonation",
      "Use of Premises",
      "Currency Counterfeiting",
      "Other AFF",
    ],
    "BANK / SECURITY FRAUD": [
      "Issuance of Dud Cheque",
      "Breach of Trust",
      "Currency Counterfeiting",
      "Stealing by Conversion",
      "Cheque Kitting",
      "Cheque Cloning",
      "Conspiracy",
    ],
    "ECONOMIC GOVERNANCE FRAUD": [
      "Abuse of Office",
      "Diversion",
      "Missapropriation of Public Fund",
      "Conversion",
      "Breach of Trust",
      "Bribery, Extortion, Embezzlement",
      "Forgery&Uttering",
      "Conspiracy",
    ],
    "MONEY LAUNDERING": [
      "Attempt",
      "Conspiracy",
      "Aiding to Conspire",
      "Convertion / Transfer",
      "Aiding Convertion / Transfer",
      "Conceal / Disguise the origin of POC",
      "Aiding to Conceal / Disguise the origin of POC",
      "Possession of POC",
      "Aiding to Possess POC",
      "Non Disclosure, Non-declaration/ False declaration",
      "Aiding; Non Disclosure, Non-declaration/ False declaration",
      "Acquire/ Use / retain POC",
      "Aiding to Acquire with/ Use of / retain from POC",
      "Removal of POC from Jurisdiction",
      "Aiding to remove POC from Jurisdiction",
      "Taking posession or control of POC",
      "Aiding to take possession and control of POC",
      "incite",
      "induce",
      "procure",
      "Unjustified lifestyle",
      "Unjustified properties/ assets acquisition",
      "Financial Transactions, outside Financial Institution, exceeding approved thresholds",
      "Failure to do know-your-Customer (KYC) requirement",
    ],
    "TERRORISM FINANCING": [
      "Financing Terrorist Act (Directly/ Indirectly)",
      "Soliciting Funds for Terrorist Act",
      "Acquisition of Funds for Terrorist Act",
      "Possession of funds intended for Terrorist Act",
      "Makes assets, resources, services etc available for Terrorist Act",
      "Distribution of funds for Terrorist Act",
      "Attempt to commit/ facilitate/ participate in Terrorist Financing",
      "Conspiracy",
      "Aiding and abetting",
    ],
    "PROCUREMENT FRAUD": [
      "Contract inflation",
      "Breach of Trust",
      "Contract/ Tender Splitting",
      "Bid Rigging",
      "Forgery&Uttering",
      "Coilusion",
      "Conspiracy",
      "Manupulation",
    ],
    "CYBER CRIME": [
      "Email Hacking",
      "Attempt",
      "Conspiracy",
      "Aiding & Abetting",
      "Fraudlent issuance of e-instructions",
      "Credit Card Fraud",
      "email Phishing",
      "ATM & POS Transaction Fraud",
      "Identity Theft",
      "Electronic Signature Fraud",
      "Cyber Terrorisim",
      "Cyber Squatting",
      "Theft of Electronic Device",
      "Imputing and Supressing of Data",
    ],
    "EXTRACTIVE INDUSTRIES FRAUD": [
      "Illegal Oil Bunkering & Pipeline Vandalism",
      "Illegal Dealing in Petroleum Product",
      "Illegal Quarrying",
      "Illegal Mining",
      "Forgery",
      "Breach of Trust",
      "Cheating/Stealing & Conversion",
      "Attempt",
      "Conspiracy",
      "OBT",
      "Diversion of Petroleum Product",
      "Possession of Fraudulent Documents",
      "Bid Rigging",
      "Under/Non payments of Levys",
      "Issuance of Dud Check",
    ],
    "LANDS & PROPERTY FRAUD": [
      "Conversion",
      "Cheating",
      "OBT",
      "Conspiracy",
      "Forgery",
      "Stealing",
      "Breach of Trust",
      "Using as Geniune",
      "Tampering",
    ],
    "TAX FRAUD": [
      "Underdeclaration of revenue",
      "False information/ False Statement",
      "Non Registration",
      "Non Remittance of Tax Deducted",
      "Forgery",
      "Conspiracy",
      "Failure to Deduct Taxes",
      "Operating without License",
    ],
  };


  const cases = [
    "ASMS/ABJ/001",
    "ASMS/ABJ/002",
    "ASMS/ABJ/003",
    "ASMS/ABJ/004",
    "ASMS/ABJ/005",
    "ASMS/ABJ/006",
    "ASMS/ABJ/007",
    "ASMS/ABJ/008",
    "ASMS/ABJ/009",
  ];
  const courts = [
    "ASMS/ABJ/001",
    "ASMS/ABJ/002",
    "ASMS/ABJ/003",
    "ASMS/ABJ/004",
    "ASMS/ABJ/005",
    "ASMS/ABJ/006",
    "ASMS/ABJ/007",
    "ASMS/ABJ/008",
    "ASMS/ABJ/009",
  ];
  const chargeSheets = [
    "ASMS/ABJ/001",
    "ASMS/ABJ/002",
    "ASMS/ABJ/003",
    "ASMS/ABJ/004",
    "ASMS/ABJ/005",
    "ASMS/ABJ/006",
    "ASMS/ABJ/007",
    "ASMS/ABJ/008",
    "ASMS/ABJ/009",
  ];



  const judges = [
    "Saleem Jibril",
    "Osho James",
    "James Teddy",
    "John doe",
  ];

  const clerks = [
    "Saleem Jibril",
    "Osho James",
    "James Teddy",
    "John doe",
  ];

  const justiceOfficers = [
    "Jibril",
    "Osho James",
    "James Teddy",
    "John doe",
  ];
  const lawOfficers = [
    "Fincl",
    "Osho James",
    "James Teddy",
    "John doe",
  ];

  
  const auth = useSelector((state) => state.auth);
  const [filteredoffences, setFilteredOffences] = useState(
    Object.keys(offences)
  );
  const [offense, setOffense] = useState("");
  const [accusedImage, setAccusedImage] = useState("");
  const [chargeSheet, setChargeSheet] = useState("");
  const [evidenceAndWitness, setEvidenceAndWitness] = useState("");
  const [expertReport, setExpertReport] = useState("");
  const [courtDocument, setCourtDocument] = useState("");
  const [transcripts, setTranscripts] = useState("");
  const [discoveryMaterials, setDiscoveryMaterials] = useState("");
  const [miscellaneous, setMiscellaneous] = useState("");
  const [correspondence, setCorrespondence] = useState("");
  const [caseNumber, setCaseNumber] = useState("");
  const [audio, setAudio] = useState("");
  const [video, setVideo] = useState("");
  const [images, setImages] = useState([]);
  const [docs, setDocs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [docLoading, setDocLoading] = useState(false);
  const mediaRef = useRef("");
  const [activeSearchInput, setActiveSearchInput] = useState("");
  const [filteredOffenceType, setFilteredOffenceType] = useState(
    offences[offense]
  );
  const [offenseType, setOffenseType] = useState([]);
  const [filteredCases, setFilteredCases] = useState(cases);
  const [filteredCourt, setFilteredCourt] = useState(courts);
  const [court, setCourt] = useState("");
  const [filteredJudges, setFilteredJudges] = useState(judges);
  const [filteredClerks, setFilteredClerks] = useState(clerks);
  const [clerk, setClerk] = useState("");
  const [judge, setJudge] = useState("");
  const [justiceOfficer, setJusticeOfficer] = useState("");
  const [courtLocation, setCourtLocation] = useState("");
  const [filteredJusticeOfficers, setFilteredJusticeOfficers] = useState("");
  const [filteredChargeSheet, setFilteredChargeSheet] = useState(chargeSheets);
  const [agency, setAgency] = useState("FMOJ");
  const [filteredlawOfficers, setFilteredLawOfficers] = useState([lawOfficers]);
  const [lawOfficer, setLawOfficer] = useState("");
  const [accusedFirstName, setAccusedFirstName] = useState("");
  const [accusedMiddleName, setAccusedMiddleName] = useState("");
  const [accusedLastName, setAccusedLastName] = useState("");
  const [accusedAlias, setAccusedAlias] = useState("");
  const [accusedNin, setAccusedNin] = useState("");
  const [accusedBvn, setAccusedBvn] = useState("");
  const [caseStatus, setCaseStatus] = useState("unassigned");
  const [accusedStatus, setAccusedStatus] = useState("unassigned");
  const [dateInitiated, setDateInitiated] = useState("");
  const [associate, setAssociate] = useState([]);
  const [assoc, setAssoc] = useState("");
  const [legalBasis, setLegalBasis] = useState("");
  const [particularsOfOffense, setParticularsOfOffense] = useState("");
  const [chargeDetails, setChargeDetails] = useState("");
  const [legalBriefAndMemoranda, setLegalBriefAndMemoranda] = useState("");
  const [metadata, setMetadata] = useState("");
  const [metadatas, setMetadatas] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywords, setKeywords] = useState([]);

  const handleCreateCase = async (e) => {
    e.preventDefault();
    const response = await createCase(
      caseNumber,
      offense,
  "fmojDept",
  court,
  courtLocation,
  clerk,
  judge,
  chargeSheet,
  offenseType,
  agency,
  lawOfficer,
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
  docs,
  images,
  auth?.token
    );

    console.log('case created', response);

    if(response?.data?.statusCode === 201) {
      alert("Case created successfully");
      window.location.href = "/justice/dashboard/cases"
    } else {
      alert("Something went wrong")
    }

  };


  const handleAssAssoc = (e) => {
   if(assoc !== "") {
    const temp = associate;
    temp.push({name: assoc});
    setAssociate([...temp]);
    setAssoc("")
   }
    
  }

  const handleMugShotUpload = (e, docType) => {
    // setUploadLoading(true);

    let files = e.target.files;

    const fileToUri = (file, cb) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        cb(null, reader.result);
      };
      reader.onerror = function (error) {
        cb(error, null);
      };
    };

    if (files) {
      for (let i = 0; i < files.length; i++) {
        fileToUri(files[0], (err, result) => {
          if (result) {
            console.log("result", result);

            axios
              .post(
                `https://kaxl3c7ehj.execute-api.us-east-1.amazonaws.com/dev/v1/upload`,
                {
                  user: "teddy",
                  media_type: docType,
                  contents: result,
                }
                // ,{
                //   headers: {
                //     Authorization: `Bearer ${auth ? auth.token : ""}`,
                //   },
                // }
              )
              .then((response) => {
                console.log("response file uploaded", response);
                if (response?.status === 200) {
                  const temp = images;
                  temp.push({url: response?.data?.body?.data});
                  setImages([...temp]);
                }
              })
              .catch((err) => {
                console.log("ERRRR", err);
                // setUploadLoading(false);
              });
          }
        });
      }
    }
  };
  const handleImageUpload = (e, docType) => {
    // setUploadLoading(true);

    let files = e.target.files;

    const fileToUri = (file, cb) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        cb(null, reader.result);
      };
      reader.onerror = function (error) {
        cb(error, null);
      };
    };

    if (files) {
      for (let i = 0; i < files.length; i++) {
        fileToUri(files[0], (err, result) => {
          if (result) {
            console.log("result", result);

            axios
              .post(
                `https://kaxl3c7ehj.execute-api.us-east-1.amazonaws.com/dev/v1/upload`,
                {
                  user: "teddy",
                  media_type: docType,
                  contents: result,
                }
                // ,{
                //   headers: {
                //     Authorization: `Bearer ${auth ? auth.token : ""}`,
                //   },
                // }
              )
              .then((response) => {
                console.log("response file uploaded", response);
                if (response?.status === 200) {
                  setAccusedImage(response?.data?.body?.data);
                }
              })
              .catch((err) => {
                console.log("ERRRR", err);
                // setUploadLoading(false);
              });
          }
        });
      }
    }
  };

  const handleFileUpload = (e) => {
    setDocLoading(true);

    let files = e.target.files;
    let docType = files[0]?.type.split("/")[1];

    const fileToUri = (file, cb) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = function () {
        cb(null, reader.result);
      };
      reader.onerror = function (error) {
        cb(error, null);
      };
    };

    if (files) {
      for (let i = 0; i < files.length; i++) {
        fileToUri(files[0], (err, result) => {
          if (result) {
            console.log("result", result);

            axios
              .post(
                `https://kaxl3c7ehj.execute-api.us-east-1.amazonaws.com/dev/v1/upload`,
                {
                  user: "teddy",
                  media_type: docType === "mpeg" ? "mp3" : docType,
                  contents: result,
                }
                // ,{
                //   headers: {
                //     Authorization: `Bearer ${auth ? auth.token : ""}`,
                //   },
                // }
              )
              .then((response) => {
                console.log("response file uploaded", response);
                if (response?.status === 200) {
                  const temp = docs;
                  console.log("temp", temp);
                  temp.push({
                    name: files[0]?.name,
                    url: response?.data?.body?.data,
                  });
                  setDocs([...temp]);
                }

                setDocLoading(false);
              })
              .catch((err) => {
                console.log("ERRRR", err);
                setDocLoading(false);
              });
          }
        });
      }
    }
  };

  useEffect(() => {
    console.log("docs", docs);
  }, [docs]);

  const handleFileRemove = (index) => {
    const temp = docs;
    console.log("temp", temp);
    temp.splice(index, 1)
    setDocs([...temp]);
  };

  useEffect(() => {
    console.log("yooo");
    const temp = Object.keys(offences)?.filter((item) =>
      item.toLowerCase().includes(offense.toLocaleLowerCase())
    );
    console.log("temp", temp);
    setFilteredOffences(temp);
    setFilteredOffenceType(offences[offense]);
  }, [offense]);

  useEffect(() => {
    console.log("yooo");
    const temp = offences[offense]?.filter((item) =>
      item.toLowerCase().includes(offenseType.toLocaleLowerCase())
    );
    setFilteredOffenceType(temp);
  }, [offenseType]);

  useEffect(() => {
    console.log("yooo");
    const temp = cases.filter((item) =>
      item.toLowerCase().includes(caseNumber.toLocaleLowerCase())
    );
    console.log("temp", temp);
    setFilteredCases(temp);
  }, [caseNumber]);

  useEffect(() => {
    console.log("yooo");
    const temp = judges.filter((item) =>
      item.toLowerCase().includes(judge.toLocaleLowerCase())
    );
    console.log("temp", temp);
    setFilteredJudges(temp);
  }, [judge]);

  useEffect(() => {
    console.log("yooo");
    const temp = courts.filter((item) =>
      item.toLowerCase().includes(court.toLocaleLowerCase())
    );
    console.log("temp", temp);
    setFilteredCourt(temp);
  }, [court]);

  useEffect(() => {
    console.log("yooo");
    const temp = clerks.filter((item) =>
      item.toLowerCase().includes(clerk.toLocaleLowerCase())
    );
    console.log("temp", temp);
    setFilteredClerks(temp);
  }, [clerk]);

  useEffect(() => {
    console.log("yooo");
    const temp = justiceOfficers.filter((item) =>
      item.toLowerCase().includes(justiceOfficer.toLocaleLowerCase())
    );
    console.log("temp", temp);
    setFilteredJusticeOfficers(temp);
  }, [justiceOfficer]);
  useEffect(() => {
    console.log("yooo");
    const temp = chargeSheets.filter((item) =>
      item.toLowerCase().includes(chargeSheet.toLocaleLowerCase())
    );
    console.log("temp", temp);
    setFilteredChargeSheet(temp);
  }, [chargeSheet]);
  useEffect(() => {
    console.log("yooo");
    const temp = lawOfficers.filter((item) =>
      item.toLowerCase().includes(lawOfficer.toLocaleLowerCase())
    );
    console.log("temp", temp);
    setFilteredLawOfficers(temp);
  }, [lawOfficer]);


  
  const handleAddMetadata = () => {
    if(metadata !== "") {
      const temp = metadatas;
      temp.push(metadata);
      setMetadatas([...temp]);
      setMetadata("")
     }
  }
  const handleAddKeyword = () => {
    if(keyword !== "") {
      const temp = keywords;
      temp.push(keyword);
      setKeywords([...temp]);
      setKeyword("")
     }
  }
  return (
    <form className="case-from" onSubmit={handleCreateCase}>
      <div className="case-from__grid">
        <div className="case-from__grid__input">
          <label htmlFor="">Case Number</label>
          <input
            type="text"
            className=""
            placeholder="Enter Case Number"
            required
            value={caseNumber}
            onChange={(e) => setCaseNumber(e.target.value)}
            onClick={() =>
              activeSearchInput === "caseNumber"
                ? setActiveSearchInput(null)
                : setActiveSearchInput("caseNumber")
            }
          />

          {activeSearchInput === "caseNumber" && (
            <div className="case-from__grid__input__search-dropdown">
              {filteredCases.map((caseNum, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setCaseNumber(caseNum);
                    setActiveSearchInput(null);
                  }}
                >
                  {caseNum}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="case-from__grid__input">
          <label htmlFor="">Offence Category:</label>
          <input
            type="text"
            className=""
            placeholder="Enter Offence"
            required
            value={offense}
            onChange={(e) => setOffense(e.target.value)}
            onClick={() =>
              activeSearchInput === "offence"
                ? setActiveSearchInput(null)
                : setActiveSearchInput("offence")
            }
          />

          {activeSearchInput === "offence" && (
            <div className="case-from__grid__input__search-dropdown">
              {filteredoffences.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setOffense(item);
                    setActiveSearchInput(null);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="case-from__grid__input">
          <label htmlFor="">Offence Type:</label>
          <input
            type="text"
            className=""
            placeholder="Enter Offence"
            required
            value={offenseType}
            onChange={(e) => setOffenseType(e.target.value)}
            onClick={() =>
              activeSearchInput === "offenceType"
                ? setActiveSearchInput(null)
                : setActiveSearchInput("offenceType")
            }
          />

          {activeSearchInput === "offenceType" && (
            <div className="case-from__grid__input__search-dropdown">
              {filteredOffenceType?.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setOffenseType(item);
                    setActiveSearchInput(null);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

      

        <div className="case-from__grid__input">
          <label htmlFor="">Assigned Justice Officer:</label>
          <div className="case-from__grid__input__flex">
            <input type="text" placeholder="Select assigned officer" required
            
            value={justiceOfficer}
            onChange={(e) => setJusticeOfficer(e.target.value)}
            onClick={() =>
              activeSearchInput === "justiceOfficer"
                ? setActiveSearchInput(null)
                : setActiveSearchInput("justiceOfficer")
            }
            />
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4643_76588)">
                <path
                  d="M15.4497 14.9489C12.7161 17.6825 8.28392 17.6825 5.55025 14.9489C2.81658 12.2152 2.81658 7.78303 5.55025 5.04936C8.28392 2.31569 12.7161 2.31569 15.4497 5.04936C18.1834 7.78303 18.1834 12.2152 15.4497 14.9489ZM15.4497 14.9489L21 20.4991"
                  stroke="#7E92A2"
                  stroke-width="1.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_4643_76588">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            {activeSearchInput === "justiceOfficer" && (
            <div className="case-from__grid__input__flex__search-dropdown">
              {filteredJusticeOfficers.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setJusticeOfficer(item);
                    setActiveSearchInput(null);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
          </div>

          {/* <div className="case-from__grid__input__contact">
Ahmed Aisha
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.542 18.9577C13.6003 18.9577 12.6087 18.7327 11.5837 18.2993C10.5837 17.8743 9.57533 17.291 8.59199 16.5827C7.61699 15.866 6.67533 15.066 5.78366 14.191C4.90033 13.2993 4.10033 12.3577 3.39199 11.391C2.67533 10.391 2.10033 9.39102 1.69199 8.42435C1.25866 7.39102 1.04199 6.39102 1.04199 5.44935C1.04199 4.79935 1.15866 4.18268 1.38366 3.60768C1.61699 3.01602 1.99199 2.46602 2.50033 1.99102C3.14199 1.35768 3.87533 1.04102 4.65866 1.04102C4.98366 1.04102 5.31699 1.11602 5.60033 1.24935C5.92533 1.39935 6.20033 1.62435 6.40033 1.92435L8.33366 4.64935C8.50866 4.89102 8.64199 5.12435 8.73366 5.35768C8.84199 5.60768 8.90033 5.85768 8.90033 6.09935C8.90033 6.41602 8.80866 6.72435 8.63366 7.01602C8.50866 7.24102 8.31699 7.48268 8.07533 7.72435L7.50866 8.31602C7.51699 8.34102 7.52533 8.35768 7.53366 8.37435C7.63366 8.54935 7.83366 8.84935 8.21699 9.29935C8.62533 9.76602 9.00866 10.191 9.39199 10.5827C9.88366 11.066 10.292 11.4493 10.6753 11.766C11.1503 12.166 11.4587 12.366 11.642 12.4577L11.6253 12.4993L12.2337 11.8993C12.492 11.641 12.742 11.4493 12.9837 11.3243C13.442 11.041 14.0253 10.991 14.6087 11.2327C14.8253 11.3243 15.0587 11.4493 15.3087 11.6243L18.0753 13.591C18.3837 13.7993 18.6087 14.066 18.742 14.3827C18.867 14.6993 18.9253 14.991 18.9253 15.2827C18.9253 15.6827 18.8337 16.0827 18.6587 16.4577C18.4837 16.8327 18.267 17.1577 17.992 17.4577C17.517 17.9827 17.0003 18.3577 16.4003 18.5993C15.8253 18.8327 15.2003 18.9577 14.542 18.9577ZM4.65866 2.29102C4.20033 2.29102 3.77533 2.49102 3.36699 2.89102C2.98366 3.24935 2.71699 3.64102 2.55033 4.06602C2.37533 4.49935 2.29199 4.95768 2.29199 5.44935C2.29199 6.22435 2.47533 7.06602 2.84199 7.93268C3.21699 8.81602 3.74199 9.73268 4.40866 10.6493C5.07533 11.566 5.83366 12.4577 6.66699 13.2993C7.50033 14.1243 8.40033 14.891 9.32533 15.566C10.2253 16.2243 11.1503 16.7577 12.067 17.141C13.492 17.7493 14.8253 17.891 15.9253 17.4327C16.3503 17.2577 16.7253 16.991 17.067 16.6077C17.2587 16.3994 17.4087 16.1743 17.5337 15.9077C17.6337 15.6993 17.6837 15.4827 17.6837 15.266C17.6837 15.1327 17.6587 14.9993 17.592 14.8493C17.567 14.7993 17.517 14.7077 17.3587 14.5993L14.592 12.6327C14.4253 12.516 14.2753 12.4327 14.1337 12.3743C13.9503 12.2993 13.8753 12.2243 13.592 12.3993C13.4253 12.4827 13.2753 12.6077 13.1087 12.7743L12.4753 13.3993C12.1503 13.716 11.6503 13.791 11.267 13.6493L11.042 13.5493C10.7003 13.366 10.3003 13.0827 9.85866 12.7077C9.45866 12.366 9.02533 11.966 8.50033 11.4493C8.09199 11.0327 7.68366 10.591 7.25866 10.0993C6.86699 9.64102 6.58366 9.24935 6.40866 8.92435L6.30866 8.67435C6.25866 8.48268 6.24199 8.37435 6.24199 8.25768C6.24199 7.95768 6.35033 7.69102 6.55866 7.48268L7.18366 6.83268C7.35033 6.66602 7.47533 6.50768 7.55866 6.36602C7.62533 6.25768 7.65033 6.16602 7.65033 6.08268C7.65033 6.01602 7.62533 5.91602 7.58366 5.81602C7.52533 5.68268 7.43366 5.53268 7.31699 5.37435L5.38366 2.64102C5.30033 2.52435 5.20033 2.44102 5.07533 2.38268C4.94199 2.32435 4.80033 2.29102 4.65866 2.29102ZM11.6253 12.5077L11.492 13.0743L11.717 12.491C11.6753 12.4827 11.642 12.491 11.6253 12.5077Z" fill="#292D32"/>
</svg>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.05032 15.7425C5.98365 15.7425 5.917 15.7341 5.85033 15.7258C5.35033 15.6591 4.92533 15.3424 4.717 14.8924L3.66699 12.5841C2.00032 11.3508 1.04199 9.50912 1.04199 7.50911C1.04199 3.95078 4.12533 1.05078 7.91699 1.05078C10.592 1.05078 13.0337 2.51744 14.142 4.79244C14.567 5.63411 14.792 6.55078 14.792 7.50911C14.792 10.9758 11.867 13.8174 8.21699 13.9591L7.167 15.2258C6.88366 15.5508 6.47532 15.7425 6.05032 15.7425ZM7.91699 2.29244C4.81699 2.29244 2.29199 4.62577 2.29199 7.50077C2.29199 9.14244 3.10865 10.6591 4.52532 11.6591C4.61699 11.7258 4.69199 11.8091 4.73365 11.9091L5.85033 14.3674C5.892 14.4591 5.97533 14.4841 6.01699 14.4841C6.05866 14.4924 6.14199 14.4841 6.20033 14.4174L7.43366 12.9341C7.55032 12.7925 7.72533 12.7091 7.91699 12.7091C11.017 12.7091 13.542 10.3758 13.542 7.50077C13.542 6.74244 13.367 6.01742 13.0253 5.34242C12.1253 3.48408 10.117 2.29244 7.91699 2.29244Z" fill="#292D32"/>
<path d="M13.9504 18.9576C13.5171 18.9576 13.1171 18.7659 12.8337 18.4326L11.7837 17.1743C9.76706 17.0909 7.86706 16.1659 6.65039 14.6659C6.45872 14.4326 6.46706 14.0993 6.65873 13.8743L7.43372 12.941C7.55039 12.7993 7.72539 12.716 7.91706 12.716C11.0171 12.716 13.5421 10.3826 13.5421 7.50762C13.5421 6.74928 13.3671 6.02426 13.0254 5.34926C12.9171 5.1326 12.9421 4.87427 13.0921 4.68261C13.2421 4.49094 13.4921 4.40759 13.7254 4.45759C16.8087 5.16592 18.9587 7.74094 18.9587 10.7243C18.9587 12.7243 18.0004 14.566 16.3337 15.7993L15.2837 18.1076C15.0671 18.5743 14.6421 18.8909 14.1337 18.9493C14.0754 18.9576 14.0087 18.9576 13.9504 18.9576ZM7.96706 14.2493C9.00872 15.3076 10.5087 15.9243 12.0837 15.9243C12.2671 15.9243 12.4421 16.0076 12.5671 16.1493L13.8004 17.6326C13.8587 17.7076 13.9337 17.7159 13.9837 17.7076C14.0171 17.7076 14.1087 17.6826 14.1587 17.5826L15.2754 15.1243C15.3254 15.0243 15.3921 14.9326 15.4837 14.8743C16.9004 13.8743 17.7171 12.3576 17.7171 10.7159C17.7171 8.71593 16.4921 6.94097 14.6254 6.06597C14.7421 6.53263 14.8004 7.00761 14.8004 7.49928C14.8004 10.9659 11.8754 13.8076 8.22539 13.9493L7.96706 14.2493Z" fill="#292D32"/>
<path d="M9.99967 8.125H5.83301C5.49134 8.125 5.20801 7.84167 5.20801 7.5C5.20801 7.15833 5.49134 6.875 5.83301 6.875H9.99967C10.3413 6.875 10.6247 7.15833 10.6247 7.5C10.6247 7.84167 10.3413 8.125 9.99967 8.125Z" fill="#292D32"/>
</svg>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.91667 5.41667L9.39255 10.3688C9.75111 10.643 10.2489 10.643 10.6074 10.3688L17.0833 5.41667M3.5 15H16.5C17.0523 15 17.5 14.5523 17.5 14V6C17.5 5.44772 17.0523 5 16.5 5H3.5C2.94772 5 2.5 5.44772 2.5 6V14C2.5 14.5523 2.94772 15 3.5 15Z" stroke="#0E0E2C" stroke-width="1.5"/>
</svg>

          </div> */}
        </div>
      </div>
      <div className="case-from__grid">
        <div className="case-from__grid__input">
          <label htmlFor="">Court Number</label>
          <input
            type="text"
            className=""
            placeholder="Type court number"
            required
            value={court}
            onChange={(e) => setCourt(e.target.value)}
            onClick={() =>
              activeSearchInput === "court"
                ? setActiveSearchInput(null)
                : setActiveSearchInput("court")
            }
          />

{activeSearchInput === "court" && (
            <div className="case-from__grid__input__search-dropdown">
              {filteredCourt.map((court, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setCourt(court);
                    setActiveSearchInput(null);
                  }}
                >
                  {court}
                </div>
              ))}
            </div>
          )}
          {/* <div className="case-from__grid__input__contact">
Ahmed Aisha
</div> */}
        </div>
        <div className="case-from__grid__input">
          <label htmlFor="">Court Location:</label>
        <input type="text"
        placeholder="Select Court Location"
        value={courtLocation}
          onChange={(e) => setCourtLocation(e.target.value)}/>
          {/* <div className="case-from__grid__input__filled">
          Federal High Court, Abuja
          </div> */}
        </div>
        <div className="case-from__grid__input">
          <label htmlFor="">Court Clerk:</label>
          <input
            type="text"
            className=""
            placeholder="Type Court Clerk"
            required
            value={clerk}
          onChange={(e) => setClerk(e.target.value)}
          onClick={() =>
              activeSearchInput === "clerk"
                ? setActiveSearchInput(null)
                : setActiveSearchInput("clerk")
            }
          />

          {activeSearchInput === "clerk" && (
            <div className="case-from__grid__input__search-dropdown">
              {filteredClerks.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setClerk(item);
                    setActiveSearchInput(null);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="case-from__grid__input">
          <label htmlFor="">Assigned Judge:</label>
          <div className="case-from__grid__input__flex">
            <input type="text" placeholder="Select assigned officer"
            //  required
            
            value={judge}
            onChange={(e) => setJudge(e.target.value)}
            onClick={() =>
              activeSearchInput === "judge"
                ? setActiveSearchInput(null)
                : setActiveSearchInput("judge")
            }
            />
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4643_76588)">
                <path
                  d="M15.4497 14.9489C12.7161 17.6825 8.28392 17.6825 5.55025 14.9489C2.81658 12.2152 2.81658 7.78303 5.55025 5.04936C8.28392 2.31569 12.7161 2.31569 15.4497 5.04936C18.1834 7.78303 18.1834 12.2152 15.4497 14.9489ZM15.4497 14.9489L21 20.4991"
                  stroke="#7E92A2"
                  stroke-width="1.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_4643_76588">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            {activeSearchInput === "judge" && (
            <div className="case-from__grid__input__flex__search-dropdown">
              {filteredJudges.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setJudge(item);
                    setActiveSearchInput(null);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
          </div>
          {/* <div className="case-from__grid__input__contact">
          Olatunde Cardoso
</div> */}
        </div>
      </div>
      <div className="case-from__grid">
        <div className="case-from__grid__input">
          <label htmlFor="">Charge Sheet No</label>
          <input
            type="text"
            className=""
            placeholder="Type Sheet No"
            required

            value={chargeSheet}
            onChange={(e) => setChargeSheet(e.target.value)}
            onClick={() =>
              activeSearchInput === "chargeSheet"
                ? setActiveSearchInput(null)
                : setActiveSearchInput("chargeSheet")
            }
          />
          {/* <div className="case-from__grid__input__contact">
          NPF898458
</div> */}

{activeSearchInput === "chargeSheet" && (
            <div className="case-from__grid__input__flex__search-dropdown">
              {filteredChargeSheet.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setChargeSheet(item);
                    setActiveSearchInput(null);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="case-from__grid__input">
          <label htmlFor="">FMoJ Dept:</label>
          <select name="" id="" required>
            <option value="">Select FMoJ Dept</option>
            <option value="FMoJ Dept">FMoJ Dept</option>
          </select>
          {/* <div className="case-from__grid__input__filled">
          Public Prosecution
          </div> */}
        </div>
        <div className="case-from__grid__input">
          <label htmlFor="">Agency:</label>
          <input type="text"
           value={agency}
           onChange={(e) => setAgency(e.target.value)}
          disabled
          />

          {/* <div className="case-from__grid__input__filled">
Police
</div> */}
        </div>

        <div className="case-from__grid__input">
          <label htmlFor="">Law Enforcement Officer:</label>
          <div className="case-from__grid__input__flex">
            <input type="text" placeholder="Select assigned officer" required
            
            value={lawOfficer}
            onChange={(e) => setLawOfficer(e.target.value)}
            onClick={() =>
              activeSearchInput === "lawOfficer"
                ? setActiveSearchInput(null)
                : setActiveSearchInput("lawOfficer")
            }
            />

            
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_4643_76588)">
                <path
                  d="M15.4497 14.9489C12.7161 17.6825 8.28392 17.6825 5.55025 14.9489C2.81658 12.2152 2.81658 7.78303 5.55025 5.04936C8.28392 2.31569 12.7161 2.31569 15.4497 5.04936C18.1834 7.78303 18.1834 12.2152 15.4497 14.9489ZM15.4497 14.9489L21 20.4991"
                  stroke="#7E92A2"
                  stroke-width="1.5"
                />
              </g>
              <defs>
                <clipPath id="clip0_4643_76588">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>

            {activeSearchInput === "lawOfficer" && (
            <div className="case-from__grid__input__flex__search-dropdown">
              {filteredlawOfficers.map((item, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setLawOfficer(item);
                    setActiveSearchInput(null);
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          )}
          </div>

          {/* <div className="case-from__grid__input__contact">
Ahmed Aisha
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.542 18.9577C13.6003 18.9577 12.6087 18.7327 11.5837 18.2993C10.5837 17.8743 9.57533 17.291 8.59199 16.5827C7.61699 15.866 6.67533 15.066 5.78366 14.191C4.90033 13.2993 4.10033 12.3577 3.39199 11.391C2.67533 10.391 2.10033 9.39102 1.69199 8.42435C1.25866 7.39102 1.04199 6.39102 1.04199 5.44935C1.04199 4.79935 1.15866 4.18268 1.38366 3.60768C1.61699 3.01602 1.99199 2.46602 2.50033 1.99102C3.14199 1.35768 3.87533 1.04102 4.65866 1.04102C4.98366 1.04102 5.31699 1.11602 5.60033 1.24935C5.92533 1.39935 6.20033 1.62435 6.40033 1.92435L8.33366 4.64935C8.50866 4.89102 8.64199 5.12435 8.73366 5.35768C8.84199 5.60768 8.90033 5.85768 8.90033 6.09935C8.90033 6.41602 8.80866 6.72435 8.63366 7.01602C8.50866 7.24102 8.31699 7.48268 8.07533 7.72435L7.50866 8.31602C7.51699 8.34102 7.52533 8.35768 7.53366 8.37435C7.63366 8.54935 7.83366 8.84935 8.21699 9.29935C8.62533 9.76602 9.00866 10.191 9.39199 10.5827C9.88366 11.066 10.292 11.4493 10.6753 11.766C11.1503 12.166 11.4587 12.366 11.642 12.4577L11.6253 12.4993L12.2337 11.8993C12.492 11.641 12.742 11.4493 12.9837 11.3243C13.442 11.041 14.0253 10.991 14.6087 11.2327C14.8253 11.3243 15.0587 11.4493 15.3087 11.6243L18.0753 13.591C18.3837 13.7993 18.6087 14.066 18.742 14.3827C18.867 14.6993 18.9253 14.991 18.9253 15.2827C18.9253 15.6827 18.8337 16.0827 18.6587 16.4577C18.4837 16.8327 18.267 17.1577 17.992 17.4577C17.517 17.9827 17.0003 18.3577 16.4003 18.5993C15.8253 18.8327 15.2003 18.9577 14.542 18.9577ZM4.65866 2.29102C4.20033 2.29102 3.77533 2.49102 3.36699 2.89102C2.98366 3.24935 2.71699 3.64102 2.55033 4.06602C2.37533 4.49935 2.29199 4.95768 2.29199 5.44935C2.29199 6.22435 2.47533 7.06602 2.84199 7.93268C3.21699 8.81602 3.74199 9.73268 4.40866 10.6493C5.07533 11.566 5.83366 12.4577 6.66699 13.2993C7.50033 14.1243 8.40033 14.891 9.32533 15.566C10.2253 16.2243 11.1503 16.7577 12.067 17.141C13.492 17.7493 14.8253 17.891 15.9253 17.4327C16.3503 17.2577 16.7253 16.991 17.067 16.6077C17.2587 16.3994 17.4087 16.1743 17.5337 15.9077C17.6337 15.6993 17.6837 15.4827 17.6837 15.266C17.6837 15.1327 17.6587 14.9993 17.592 14.8493C17.567 14.7993 17.517 14.7077 17.3587 14.5993L14.592 12.6327C14.4253 12.516 14.2753 12.4327 14.1337 12.3743C13.9503 12.2993 13.8753 12.2243 13.592 12.3993C13.4253 12.4827 13.2753 12.6077 13.1087 12.7743L12.4753 13.3993C12.1503 13.716 11.6503 13.791 11.267 13.6493L11.042 13.5493C10.7003 13.366 10.3003 13.0827 9.85866 12.7077C9.45866 12.366 9.02533 11.966 8.50033 11.4493C8.09199 11.0327 7.68366 10.591 7.25866 10.0993C6.86699 9.64102 6.58366 9.24935 6.40866 8.92435L6.30866 8.67435C6.25866 8.48268 6.24199 8.37435 6.24199 8.25768C6.24199 7.95768 6.35033 7.69102 6.55866 7.48268L7.18366 6.83268C7.35033 6.66602 7.47533 6.50768 7.55866 6.36602C7.62533 6.25768 7.65033 6.16602 7.65033 6.08268C7.65033 6.01602 7.62533 5.91602 7.58366 5.81602C7.52533 5.68268 7.43366 5.53268 7.31699 5.37435L5.38366 2.64102C5.30033 2.52435 5.20033 2.44102 5.07533 2.38268C4.94199 2.32435 4.80033 2.29102 4.65866 2.29102ZM11.6253 12.5077L11.492 13.0743L11.717 12.491C11.6753 12.4827 11.642 12.491 11.6253 12.5077Z" fill="#292D32"/>
</svg>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.05032 15.7425C5.98365 15.7425 5.917 15.7341 5.85033 15.7258C5.35033 15.6591 4.92533 15.3424 4.717 14.8924L3.66699 12.5841C2.00032 11.3508 1.04199 9.50912 1.04199 7.50911C1.04199 3.95078 4.12533 1.05078 7.91699 1.05078C10.592 1.05078 13.0337 2.51744 14.142 4.79244C14.567 5.63411 14.792 6.55078 14.792 7.50911C14.792 10.9758 11.867 13.8174 8.21699 13.9591L7.167 15.2258C6.88366 15.5508 6.47532 15.7425 6.05032 15.7425ZM7.91699 2.29244C4.81699 2.29244 2.29199 4.62577 2.29199 7.50077C2.29199 9.14244 3.10865 10.6591 4.52532 11.6591C4.61699 11.7258 4.69199 11.8091 4.73365 11.9091L5.85033 14.3674C5.892 14.4591 5.97533 14.4841 6.01699 14.4841C6.05866 14.4924 6.14199 14.4841 6.20033 14.4174L7.43366 12.9341C7.55032 12.7925 7.72533 12.7091 7.91699 12.7091C11.017 12.7091 13.542 10.3758 13.542 7.50077C13.542 6.74244 13.367 6.01742 13.0253 5.34242C12.1253 3.48408 10.117 2.29244 7.91699 2.29244Z" fill="#292D32"/>
<path d="M13.9504 18.9576C13.5171 18.9576 13.1171 18.7659 12.8337 18.4326L11.7837 17.1743C9.76706 17.0909 7.86706 16.1659 6.65039 14.6659C6.45872 14.4326 6.46706 14.0993 6.65873 13.8743L7.43372 12.941C7.55039 12.7993 7.72539 12.716 7.91706 12.716C11.0171 12.716 13.5421 10.3826 13.5421 7.50762C13.5421 6.74928 13.3671 6.02426 13.0254 5.34926C12.9171 5.1326 12.9421 4.87427 13.0921 4.68261C13.2421 4.49094 13.4921 4.40759 13.7254 4.45759C16.8087 5.16592 18.9587 7.74094 18.9587 10.7243C18.9587 12.7243 18.0004 14.566 16.3337 15.7993L15.2837 18.1076C15.0671 18.5743 14.6421 18.8909 14.1337 18.9493C14.0754 18.9576 14.0087 18.9576 13.9504 18.9576ZM7.96706 14.2493C9.00872 15.3076 10.5087 15.9243 12.0837 15.9243C12.2671 15.9243 12.4421 16.0076 12.5671 16.1493L13.8004 17.6326C13.8587 17.7076 13.9337 17.7159 13.9837 17.7076C14.0171 17.7076 14.1087 17.6826 14.1587 17.5826L15.2754 15.1243C15.3254 15.0243 15.3921 14.9326 15.4837 14.8743C16.9004 13.8743 17.7171 12.3576 17.7171 10.7159C17.7171 8.71593 16.4921 6.94097 14.6254 6.06597C14.7421 6.53263 14.8004 7.00761 14.8004 7.49928C14.8004 10.9659 11.8754 13.8076 8.22539 13.9493L7.96706 14.2493Z" fill="#292D32"/>
<path d="M9.99967 8.125H5.83301C5.49134 8.125 5.20801 7.84167 5.20801 7.5C5.20801 7.15833 5.49134 6.875 5.83301 6.875H9.99967C10.3413 6.875 10.6247 7.15833 10.6247 7.5C10.6247 7.84167 10.3413 8.125 9.99967 8.125Z" fill="#292D32"/>
</svg>
<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.91667 5.41667L9.39255 10.3688C9.75111 10.643 10.2489 10.643 10.6074 10.3688L17.0833 5.41667M3.5 15H16.5C17.0523 15 17.5 14.5523 17.5 14V6C17.5 5.44772 17.0523 5 16.5 5H3.5C2.94772 5 2.5 5.44772 2.5 6V14C2.5 14.5523 2.94772 15 3.5 15Z" stroke="#0E0E2C" stroke-width="1.5"/>
</svg>

          </div> */}
        </div>
      </div>
      <div className="case-from__grid case-from__grid-mini">
      <div className="case-from__grid__input case-from__grid__assoc">
            <label htmlFor="">Keywords:</label>
         {/* <form onSubmit={handleAssAssoc}> */}
       <div>
       <input type="text" placeholder="Enter keyword related to record"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          />
          <button
          onClick={handleAddKeyword}
          type="button"
          >Add</button>
       </div>
         {/* </form> */}

            {keywords?.length > 0 && <div className="case-from__grid__assoc__list">
              {keywords?.map((item, index) => <div key={index}>{item}</div>)}
            </div>}

            {/* <div className="case-from__accused__bio__input__case-assoc">
              <div>Okoro Madu</div>
              <div>Shekau Ahmed</div>
              <div>Tope Adeniyi</div>
            </div> */}
          </div>

          <div className="case-from__grid__input case-from__grid__assoc">
            <label htmlFor="">Tags:</label>
         {/* <form onSubmit={handleAssAssoc}> */}
       <div>
       <input type="text" placeholder="Enter tag related to record"
          value={metadata}
          onChange={(e) => setMetadata(e.target.value)}
          />
          <button
          onClick={handleAddMetadata}
          type="button"
          >Add</button>
       </div>
         {/* </form> */}

            {metadatas?.length > 0 && <div className="case-from__grid__assoc__list">
              {metadatas?.map((item, index) => <div key={index}>{item}</div>)}
            </div>}

            {/* <div className="case-from__accused__bio__input__case-assoc">
              <div>Okoro Madu</div>
              <div>Shekau Ahmed</div>
              <div>Tope Adeniyi</div>
            </div> */}
          </div>
      </div>

      <div className="case-from__accused">
        <div className="case-from__accused__bio">
          <div className="case-from__accused__bio__title">Accused Bio</div>
          {!accusedImage && (
            <label className="pointer">
              <Image
                className="case-from__accused__bio__img"
                alt=""
                src="/assets/Image.png"
                width={215}
                height={171}
              />
              <input
                type="file"
                name=""
                id=""
                hidden
                ref={mediaRef}
                accept="image/*"
                onChange={(e) => handleImageUpload(e, "png")}
              />
              <label className="case-from__accused__bio__img-label">
                <svg
                  width="17"
                  height="17"
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.89286 12.8435V2.33993L5.06357 5.16921L4.20386 4.29736L8.5 0L12.7974 4.29736L11.9376 5.17043L9.10714 2.33993V12.8435H7.89286ZM1.96229 17C1.4029 17 0.936214 16.813 0.562214 16.439C0.188214 16.065 0.000809524 15.5979 0 15.0377V12.0955H1.21429V15.0377C1.21429 15.2247 1.292 15.3963 1.44743 15.5526C1.60286 15.7088 1.77407 15.7865 1.96107 15.7857H15.0389C15.2251 15.7857 15.3963 15.708 15.5526 15.5526C15.7088 15.3971 15.7865 15.2255 15.7857 15.0377V12.0955H17V15.0377C17 15.5971 16.813 16.0638 16.439 16.4378C16.065 16.8118 15.5979 16.9992 15.0377 17H1.96229Z"
                    fill="#696969"
                  />
                </svg>
                Please upload Image
              </label>
            </label>
          )}

          {accusedImage && (
            <Image
              className="case-from__accused__bio__img"
              alt=""
              src={`https://${accusedImage}`}
              width={215}
              height={171}
              style={{ objectFit: "cover" }}
            />
          )}

          <div className="case-from__accused__bio__input">
            <label htmlFor="">First Name</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Type Accused First Name"
              required
              value={accusedFirstName}
              onChange={(e) => setAccusedFirstName(e.target.value)}
            />
            {/* <div className="case-from__accused__bio__input__filled">
            Frank  Ammadou
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 13V12C9 10.346 10.346 9 12 9H13V5.667C13 5.299 12.701 5 12.333 5H5.667C5.299 5 5 5.299 5 5.667V12.333C5 12.701 5.299 13 5.667 13H9ZM9 15H5.667C4.196 15 3 13.804 3 12.333V5.667C3 4.196 4.196 3 5.667 3H12.333C13.804 3 15 4.196 15 5.667V9H18C19.654 9 21 10.346 21 12V18C21 19.654 19.654 21 18 21H12C10.346 21 9 19.654 9 18V15ZM11 12C11 11.449 11.449 11 12 11H18C18.552 11 19 11.449 19 12V18C19 18.551 18.552 19 18 19H12C11.449 19 11 18.551 11 18V12Z" fill="black"/>
</svg>

              </div> */}
          </div>
          <div className="case-from__accused__bio__input">
          <label htmlFor="">Middle Name</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Type Accused Middle Name"
              required
              value={accusedMiddleName}
              onChange={(e) => setAccusedMiddleName(e.target.value)}
            />
           
            {/* <div className="case-from__accused__bio__input__filled">
            Frank  Ammadou
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 13V12C9 10.346 10.346 9 12 9H13V5.667C13 5.299 12.701 5 12.333 5H5.667C5.299 5 5 5.299 5 5.667V12.333C5 12.701 5.299 13 5.667 13H9ZM9 15H5.667C4.196 15 3 13.804 3 12.333V5.667C3 4.196 4.196 3 5.667 3H12.333C13.804 3 15 4.196 15 5.667V9H18C19.654 9 21 10.346 21 12V18C21 19.654 19.654 21 18 21H12C10.346 21 9 19.654 9 18V15ZM11 12C11 11.449 11.449 11 12 11H18C18.552 11 19 11.449 19 12V18C19 18.551 18.552 19 18 19H12C11.449 19 11 18.551 11 18V12Z" fill="black"/>
</svg>

              </div> */}
          </div>
          <div className="case-from__accused__bio__input">
          <label htmlFor="">Last Name</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Type Accused Last Name"
              required
              value={accusedLastName}
              onChange={(e) => setAccusedLastName(e.target.value)}
            />
           
            {/* <div className="case-from__accused__bio__input__filled">
            Frank  Ammadou
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 13V12C9 10.346 10.346 9 12 9H13V5.667C13 5.299 12.701 5 12.333 5H5.667C5.299 5 5 5.299 5 5.667V12.333C5 12.701 5.299 13 5.667 13H9ZM9 15H5.667C4.196 15 3 13.804 3 12.333V5.667C3 4.196 4.196 3 5.667 3H12.333C13.804 3 15 4.196 15 5.667V9H18C19.654 9 21 10.346 21 12V18C21 19.654 19.654 21 18 21H12C10.346 21 9 19.654 9 18V15ZM11 12C11 11.449 11.449 11 12 11H18C18.552 11 19 11.449 19 12V18C19 18.551 18.552 19 18 19H12C11.449 19 11 18.551 11 18V12Z" fill="black"/>
</svg>

              </div> */}
          </div>
          <div className="case-from__accused__bio__input">
            <label htmlFor="">Alias:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Type Accused Alias"
              required
              value={accusedAlias}
              onChange={(e) => setAccusedAlias(e.target.value)}
            />

            {/* <div className="case-from__accused__bio__input__filled">
            Ororomo
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 13V12C9 10.346 10.346 9 12 9H13V5.667C13 5.299 12.701 5 12.333 5H5.667C5.299 5 5 5.299 5 5.667V12.333C5 12.701 5.299 13 5.667 13H9ZM9 15H5.667C4.196 15 3 13.804 3 12.333V5.667C3 4.196 4.196 3 5.667 3H12.333C13.804 3 15 4.196 15 5.667V9H18C19.654 9 21 10.346 21 12V18C21 19.654 19.654 21 18 21H12C10.346 21 9 19.654 9 18V15ZM11 12C11 11.449 11.449 11 12 11H18C18.552 11 19 11.449 19 12V18C19 18.551 18.552 19 18 19H12C11.449 19 11 18.551 11 18V12Z" fill="black"/>
</svg>

              </div> */}
          </div>
          <div className="case-from__accused__bio__input">
            <label htmlFor="">NIN:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Type NIN"
              required
              value={accusedNin}
              onChange={(e) => setAccusedNin(e.target.value)}
            />

            {/* <div className="case-from__accused__bio__input__filled">
            Ororomo
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 13V12C9 10.346 10.346 9 12 9H13V5.667C13 5.299 12.701 5 12.333 5H5.667C5.299 5 5 5.299 5 5.667V12.333C5 12.701 5.299 13 5.667 13H9ZM9 15H5.667C4.196 15 3 13.804 3 12.333V5.667C3 4.196 4.196 3 5.667 3H12.333C13.804 3 15 4.196 15 5.667V9H18C19.654 9 21 10.346 21 12V18C21 19.654 19.654 21 18 21H12C10.346 21 9 19.654 9 18V15ZM11 12C11 11.449 11.449 11 12 11H18C18.552 11 19 11.449 19 12V18C19 18.551 18.552 19 18 19H12C11.449 19 11 18.551 11 18V12Z" fill="black"/>
</svg>

              </div> */}
          </div>
          <div className="case-from__accused__bio__input">
            <label htmlFor="">BVN:</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Type BVN"
              required
              value={accusedBvn}
              onChange={(e) => setAccusedBvn(e.target.value)}
            />

            {/* <div className="case-from__accused__bio__input__filled">
            Ororomo
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 13V12C9 10.346 10.346 9 12 9H13V5.667C13 5.299 12.701 5 12.333 5H5.667C5.299 5 5 5.299 5 5.667V12.333C5 12.701 5.299 13 5.667 13H9ZM9 15H5.667C4.196 15 3 13.804 3 12.333V5.667C3 4.196 4.196 3 5.667 3H12.333C13.804 3 15 4.196 15 5.667V9H18C19.654 9 21 10.346 21 12V18C21 19.654 19.654 21 18 21H12C10.346 21 9 19.654 9 18V15ZM11 12C11 11.449 11.449 11 12 11H18C18.552 11 19 11.449 19 12V18C19 18.551 18.552 19 18 19H12C11.449 19 11 18.551 11 18V12Z" fill="black"/>
</svg>

              </div> */}
          </div>
          {/* <div className="case-from__accused__bio__input">
            <label htmlFor="">Case Status:</label>

            <select name="" id="" required>
              <option value="">Select Status</option>
              <option value="Status">Status</option>
            </select>
            <button className="case-from__accused__bio__input__case-status" disabled>
          Filed in Court
            </button>
          </div> */}
          <div className="case-from__accused__bio__input">
            <label htmlFor="">Accused Status:</label>
            <select name="" id="" required
            
            value={accusedStatus}
            onChange={(e) => setAccusedStatus(e.target.value)}
            >
              <option value="">Select Accused Status</option>
              <option value="On Bail">On Bail</option>
              <option value="In Custody">In Custody</option>
              <option value="Convicted">Convicted</option>
              <option value="Discharged">Discharged</option>
              <option value="Deceased">Deceased</option>
            </select>
            {/* <button className="case-from__accused__bio__input__case-remanded" disabled>
          Remamnded in Jail
            </button> */}
          </div>
          <div className="case-from__accused__bio__input">
            <label htmlFor="">Date Initiated:</label>
            <input
              type="date"
              name=""
              id=""
              placeholder="Type Accused Full Name"
              required
              value={dateInitiated}
            onChange={(e) => setDateInitiated(e.target.value)}
            />

            {/* <button className="case-from__accused__bio__input__case-date" disabled>
             31-12-2023
            </button> */}
          </div>
          <div className="case-from__accused__bio__input case-from__accused__bio__assoc">
            <label htmlFor="">Known Associates:</label>
         {/* <form onSubmit={handleAssAssoc}> */}
       <div>
       <input type="text" placeholder="Enter Known Associates"
          value={assoc}
          onChange={(e) => setAssoc(e.target.value)}
          />
          <button
          onClick={handleAssAssoc}
          type="button"
          >Add</button>
       </div>
         {/* </form> */}

            {associate?.length > 0 && <div className="case-from__accused__bio__assoc__list">
              {associate?.map((item, index) => <div key={index}>{item?.name}</div>)}
            </div>}

            {/* <div className="case-from__accused__bio__input__case-assoc">
              <div>Okoro Madu</div>
              <div>Shekau Ahmed</div>
              <div>Tope Adeniyi</div>
            </div> */}
          </div>
        </div>
        <div className="case-from__accused__details">
          <div className="case-from__accused__details__input">
            <label htmlFor="">Legal Basis</label>
            <textarea
              name=""
              id=""
              placeholder="Insert the legal basis"
              required

              value={legalBasis}
              onChange={(e) => setLegalBasis(e.target.value)}
            ></textarea>
          </div>
          <div className="case-from__accused__details__input">
            <label htmlFor="">Particulars of Offence</label>
            <textarea
              name=""
              id=""
              placeholder="Insert the particulars of offence"
              required
              value={particularsOfOffense}
              onChange={(e) => setParticularsOfOffense(e.target.value)}
            ></textarea>
          </div>
          <div className="case-from__accused__details__input">
            <label htmlFor="">Charge Details</label>
            <textarea
              name=""
              id=""
              placeholder="Insert the charge details"
              required
              value={chargeDetails}
              onChange={(e) => setChargeDetails(e.target.value)}
            ></textarea>
          </div>
          <div className="case-from__accused__details__input">
            <label htmlFor="">Legal Brief and Memoranda</label>
            <textarea
              name=""
              id=""
              placeholder="Insert the legal brief and memoranda"
              required
              value={legalBriefAndMemoranda}
              onChange={(e) => setLegalBriefAndMemoranda(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="case-from__accused__attachment">
          <div className="case-from__accused__attachment__title">
            ATTACHMENT
          </div>
          <label className="pointer">
            <input
              type="file"
              multiple
              // accept='video/*'
              accept=".docx, .pdf, .mp3, .wav, .mov, .mp4"
              hidden
              onChange={(e) => handleFileUpload(e)}
              ref={mediaRef}
            />
            <div className="case-from__accused__attachment__doc case-from__accused__attachment__doc-first">
              {docLoading ? "Loading..." : "Attach New Document"}{" "}
              {!docLoading && (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
                    fill="#292D32"
                  />
                  <path
                    d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
                    fill="#292D32"
                  />
                </svg>
              )}
            </div>
          </label>

          {docs?.map((doc, index) => (
            <div
              key={index}
              className="case-from__accused__attachment__doc case-from__accused__attachment__doc-filled"
            >
              <div>
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4417 8.00065L10.8333 3.39232C10.7162 3.27507 10.5574 3.20913 10.3917 3.20898H6.66667C6.05888 3.20898 5.47598 3.45043 5.04621 3.8802C4.61644 4.30997 4.375 4.89286 4.375 5.50065V15.5007C4.375 16.1084 4.61644 16.6913 5.04621 17.1211C5.47598 17.5509 6.05888 17.7923 6.66667 17.7923H13.3333C13.9411 17.7923 14.524 17.5509 14.9538 17.1211C15.3836 16.6913 15.625 16.1084 15.625 15.5007V8.41732C15.6184 8.26032 15.553 8.11156 15.4417 8.00065ZM11.0417 5.34232L13.4917 7.79232H11.0417V5.34232ZM13.3333 16.5423H6.66667C6.3904 16.5423 6.12545 16.4326 5.9301 16.2372C5.73475 16.0419 5.625 15.7769 5.625 15.5007V5.50065C5.625 5.22438 5.73475 4.95943 5.9301 4.76408C6.12545 4.56873 6.3904 4.45898 6.66667 4.45898H9.79167V8.41732C9.79382 8.58241 9.86037 8.74013 9.97711 8.85687C10.0939 8.97362 10.2516 9.04016 10.4167 9.04232H14.375V15.5007C14.375 15.7769 14.2653 16.0419 14.0699 16.2372C13.8746 16.4326 13.6096 16.5423 13.3333 16.5423Z"
                    fill="#334655"
                  />
                  <path
                    d="M11.2417 12.8743C10.7293 12.5528 10.3436 12.0641 10.15 11.491C10.3294 10.9548 10.3836 10.3847 10.3083 9.82433C10.2843 9.68316 10.2155 9.55347 10.112 9.45448C10.0085 9.35549 9.87592 9.29244 9.73382 9.27468C9.59172 9.25692 9.44769 9.28538 9.32303 9.35586C9.19837 9.42634 9.09972 9.53508 9.04168 9.66599C8.9468 10.3397 9.01833 11.0263 9.25001 11.666C8.93351 12.4054 8.58029 13.1285 8.19168 13.8327C7.60001 14.166 6.79168 14.666 6.66668 15.241C6.56668 15.7077 7.44168 16.9077 8.93334 14.3077C9.59662 14.0614 10.276 13.861 10.9667 13.7077C11.4772 13.9996 12.0468 14.1733 12.6333 14.216C12.768 14.2195 12.9007 14.1831 13.0148 14.1114C13.1288 14.0397 13.2192 13.9358 13.2744 13.8129C13.3296 13.69 13.3472 13.5536 13.3251 13.4207C13.303 13.2878 13.2421 13.1644 13.15 13.066C12.8 12.7077 11.7583 12.8077 11.2417 12.8743ZM7.25834 15.3743C7.49188 14.9747 7.80028 14.6238 8.16668 14.341C7.60001 15.241 7.25834 15.3993 7.25834 15.3827V15.3743ZM9.69168 9.69933C9.90834 9.69933 9.89168 10.6577 9.74168 10.916C9.62868 10.523 9.61154 10.1086 9.69168 9.70766V9.69933ZM8.96668 13.766C9.24902 13.2509 9.49409 12.7162 9.70001 12.166C9.92077 12.5768 10.2278 12.935 10.6 13.216C10.0409 13.356 9.49453 13.5428 8.96668 13.7743V13.766ZM12.8833 13.616C12.8833 13.616 12.7333 13.7993 11.775 13.3827C12.8167 13.316 12.9917 13.5577 12.8833 13.6243V13.616Z"
                    fill="#334655"
                  />
                </svg>
                {doc?.name}
              </div>

              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleFileRemove(index)}
                className="pointer"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.9991 13.0597L6.52941 18.5294L5.46875 17.4688L10.9384 11.9991L5.46875 6.52941L6.52941 5.46875L11.9991 10.9384L17.4688 5.46875L18.5294 6.52941L13.0597 11.9991L18.5294 17.4688L17.4688 18.5294L11.9991 13.0597Z"
                  fill="#0E0E2C"
                />
              </svg>
            </div>
          ))}
        </div>
      </div>

      <div className="case-from__mugshot">
        <div className="case-from__mugshot__title">Mugshot</div>
        <div className="case-from__mugshot__subtitle">
          Add Mugshot and add pictures highlighting any tattoos, piercing or
          body scar
        </div>
      </div>
      <div className="case-from__mugshots">
        {images?.map((item, index) => (
          <Image
            className="case-from__accused__bio__img"
            alt=""
            src={`https://${item?.url}`}
            width={349}
            height={273}
            style={{
              objectFit: "cover",
              borderRadius: "12px",
              minWidth: "349px",
            }}
            key={index}
          />
        ))}
        <div className="case-from__mugshots__upload">
          <label>
            <div className="case-from__mugshots__upload__inner">
              <svg
                width="65"
                height="64"
                viewBox="0 0 65 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.4985 6.37891C41.3905 6.37891 46.4347 12.449 47.167 19.7816H47.388C53.1171 19.7816 57.7509 24.5543 57.7509 30.4413C57.7509 30.7422 57.7394 31.04 57.7162 31.3346C55.4502 28.5041 52.3884 26.4172 48.9254 25.3428C45.4624 24.2684 41.757 24.2559 38.2868 25.3068C34.8166 26.3576 31.7407 28.4238 29.4555 31.2388C27.1704 34.0539 25.7807 37.4889 25.4657 41.101H17.6059C11.8831 41.101 7.24609 36.3283 7.24609 30.4413C7.24609 24.5543 11.8862 19.7816 17.6059 19.7816H17.83C18.5687 12.4016 23.6065 6.37891 32.4985 6.37891ZM43.5465 56.8838C47.3137 56.8838 50.9267 55.3872 53.5905 52.7234C56.2544 50.0595 57.7509 46.4465 57.7509 42.6793C57.7509 38.912 56.2544 35.299 53.5905 32.6352C50.9267 29.9713 47.3137 28.4748 43.5465 28.4748C39.7792 28.4748 36.1662 29.9713 33.5024 32.6352C30.8385 35.299 29.342 38.912 29.342 42.6793C29.342 46.4465 30.8385 50.0595 33.5024 52.7234C36.1662 55.3872 39.7792 56.8838 43.5465 56.8838ZM43.5465 34.7879C43.965 34.7879 44.3665 34.9542 44.6625 35.2502C44.9585 35.5461 45.1247 35.9476 45.1247 36.3662V41.101H49.8596C50.2781 41.101 50.6796 41.2673 50.9756 41.5633C51.2716 41.8592 51.4378 42.2607 51.4378 42.6793C51.4378 43.0979 51.2716 43.4993 50.9756 43.7953C50.6796 44.0913 50.2781 44.2575 49.8596 44.2575H45.1247V48.9924C45.1247 49.411 44.9585 49.8124 44.6625 50.1084C44.3665 50.4044 43.965 50.5707 43.5465 50.5707C43.1279 50.5707 42.7264 50.4044 42.4304 50.1084C42.1345 49.8124 41.9682 49.411 41.9682 48.9924V44.2575H37.2334C36.8148 44.2575 36.4133 44.0913 36.1173 43.7953C35.8214 43.4993 35.6551 43.0979 35.6551 42.6793C35.6551 42.2607 35.8214 41.8592 36.1173 41.5633C36.4133 41.2673 36.8148 41.101 37.2334 41.101H41.9682V36.3662C41.9682 35.9476 42.1345 35.5461 42.4304 35.2502C42.7264 34.9542 43.1279 34.7879 43.5465 34.7879Z"
                  fill="#37773A"
                  fill-opacity="0.57"
                />
              </svg>
              <div className="case-from__mugshots__upload__inner__title">
                Drag & drop files or Browse
              </div>
              <div className="case-from__mugshots__upload__inner__subtitle">
                Supported formats: PDF, Word, and PNG
              </div>
            </div>

            <input
              type="file"
              name=""
              id=""
              hidden
              ref={mediaRef}
              accept="image/*"
              onChange={(e) => handleMugShotUpload(e, "png")}
            />
          </label>
        </div>
      </div>

      <div className="case-from__button-group">
        <button>Cancel</button>
        <button>Next</button>
      </div>

      {modalOpen && (
        <div className="case-from__modal">
          <div className="case-from__modal__success">
            <svg
              width="80"
              height="80"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="80"
                height="80"
                rx="40"
                fill="url(#paint0_linear_4645_76935)"
              />
              <path
                d="M56.018 39.675C56.018 39.172 55.898 38.7 55.697 38.271C54.356 33.945 48.078 34.261 39.148 34.05C37.655 34.015 38.509 32.252 39.033 28.382C39.374 25.865 37.751 22 35.023 22C30.525 22 34.852 25.548 30.875 34.322C28.75 39.01 24 36.384 24 41.093V51.812C24 53.645 24.18 55.407 26.758 55.697C29.257 55.978 28.695 57.759 32.3 57.759H50.344C52.182 57.759 53.677 56.263 53.677 54.425C53.677 53.663 53.41 52.969 52.979 52.407C53.999 51.836 54.699 50.758 54.699 49.508C54.699 48.748 54.433 48.054 54.003 47.493C55.026 46.923 55.728 45.844 55.728 44.592C55.728 43.683 55.36 42.859 54.767 42.256C55.524 41.645 56.018 40.721 56.018 39.675Z"
                fill="#FFC357"
              />
              <path
                opacity="0.1"
                d="M44.082 43.0078H52.686C53.856 43.0078 54.954 42.3818 55.552 41.3748C55.798 40.9598 55.661 40.4228 55.245 40.1758C54.83 39.9288 54.293 40.0678 54.046 40.4828C53.763 40.9618 53.24 41.2578 52.685 41.2578H43.875C43.002 41.2578 42.292 40.5478 42.292 39.6748C42.292 38.8018 43.002 38.0918 43.875 38.0918H49.762C50.245 38.0918 50.637 37.6998 50.637 37.2168C50.637 36.7338 50.245 36.3418 49.762 36.3418H43.874C42.036 36.3418 40.541 37.8368 40.541 39.6748C40.541 40.6998 41.016 41.6068 41.746 42.2188C41.131 42.8238 40.748 43.6638 40.748 44.5918C40.748 45.6198 41.226 46.5298 41.96 47.1408C41.349 47.7448 40.97 48.5818 40.97 49.5078C40.97 50.6278 41.529 51.6158 42.379 52.2208C41.855 52.8098 41.527 53.5768 41.527 54.4248C41.527 56.2628 43.022 57.7578 44.86 57.7578H50.344C51.514 57.7578 52.613 57.1328 53.211 56.1258C53.458 55.7108 53.321 55.1738 52.906 54.9268C52.49 54.6818 51.953 54.8168 51.707 55.2318C51.422 55.7108 50.899 56.0078 50.344 56.0078H44.86C43.987 56.0078 43.277 55.2978 43.277 54.4248C43.277 53.5518 43.987 52.8418 44.86 52.8418H51.366C52.536 52.8418 53.636 52.2158 54.233 51.2088C54.48 50.7928 54.343 50.2558 53.928 50.0098C53.509 49.7588 52.974 49.8998 52.729 50.3148C52.44 50.8018 51.93 51.0918 51.366 51.0918H44.303C43.43 51.0918 42.72 50.3808 42.72 49.5078C42.72 48.6348 43.43 47.9248 44.303 47.9248H52.394C53.564 47.9248 54.663 47.2998 55.261 46.2928C55.508 45.8778 55.371 45.3408 54.956 45.0938C54.539 44.8478 54.003 44.9838 53.757 45.3988C53.468 45.8848 52.958 46.1748 52.394 46.1748H44.082C43.209 46.1748 42.499 45.4648 42.499 44.5918C42.499 43.7188 43.208 43.0078 44.082 43.0078Z"
                fill="black"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_4645_76935"
                  x1="40"
                  y1="0"
                  x2="40"
                  y2="80"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FFC357" stop-opacity="0.25" />
                  <stop offset="1" stop-color="#FFC357" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>

            <div className="case-from__modal__success__subtitle">
              Case Assigned
            </div>
            <div className="case-from__modal__success__title">
              A New case file has been added
            </div>

            <button
              onClick={() =>
                (window.location.href = "/justice/dashboard/cases")
              }
            >
              Close
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
