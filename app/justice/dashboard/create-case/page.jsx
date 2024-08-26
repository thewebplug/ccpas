"use client";
import { createCase } from "@/app/apis/case";
import CaseImageModal from "@/app/components/caseImageModal";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

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

  const judges = ["Saleem Jibril", "Osho James", "James Teddy", "John doe"];

  const clerks = ["Saleem Jibril", "Osho James", "James Teddy", "John doe"];

  const justiceOfficers = ["Jibril", "Osho James", "James Teddy", "John doe"];
  const lawOfficers = ["Fincl", "Osho James", "James Teddy", "John doe"];

  const dispatch = useDispatch();
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
  const [loading, setLoading] = useState(false);
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
  const [mugLoading, setMugLoading] = useState(false);

  const handleCreateCase = async (e) => {
    e.preventDefault();
    setLoading(true)
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

    console.log("case created", response);

    if (response?.data?.statusCode === 201) {
      alert("Case created successfully");
      window.location.href = "/justice/dashboard/cases";
    } else if(res?.data?.statusCode === 403) {
      document.cookie =
      "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
    localStorage.removeItem("token");
    window.location.href = "/justice/login";
    } 
    else {
      alert("Something went wrong");
    }
    setLoading(false)
  };

  const handleAssAssoc = (e) => {
    if (assoc !== "") {
      const temp = associate;
      temp.push({ name: assoc });
      setAssociate([...temp]);
      setAssoc("");
    }
  };

  const handleMugShotUpload = (e, docType) => {
    setMugLoading(true);

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
                  temp.unshift({ url: response?.data?.body?.data });
                  setImages([...temp]);
                }
                setMugLoading(false);
              })
              .catch((err) => {
                console.log("ERRRR", err);
                setMugLoading(false);
                alert("Mugshot upload failed. please try again")
              });
          }
        });
      }
    }
  };
  const handleMugshotRemove = (index) => {
    console.log('index', index);
    const temp = images;
    console.log("temp", temp);
    temp?.splice(index, 1);
    setImages([...temp]);
  };

  const handleFileUpload = (e) => {
    setDocLoading(true);

    let files = e.target.files;
    console.log("e.target.files", e.target.files);
    let docType = files[0]?.type.split("/")[1];

    function formatFileSize(bytes) {
      if (bytes < 1024) return bytes + " bytes";
      else if (bytes < 1048576) return (bytes / 1024).toFixed(2) + " KB";
      else if (bytes < 1073741824) return (bytes / 1048576).toFixed(2) + " MB";
      else return (bytes / 1073741824).toFixed(2) + " GB";
    }

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
                  media_type: docType.includes("mpeg") ? "mp3" : docType,
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
                    type: docType,
                    size: formatFileSize(files[0]?.size),
                  });
                  setDocs([...temp]);
                }

                setDocLoading(false);
              })
              .catch((err) => {
                console.log("ERRRR", err);
                setDocLoading(false);
                alert("Upload unsuccessful please try again");
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
    temp.splice(index, 1);
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
    if (metadata !== "") {
      const temp = metadatas;
      temp.push(metadata);
      setMetadatas([...temp]);
      setMetadata("");
    }
  };
  const handleAddKeyword = () => {
    if (keyword !== "") {
      const temp = keywords;
      temp.push(keyword);
      setKeywords([...temp]);
      setKeyword("");
    }
  };

  useEffect(() => {
    if(judge?.length > 0) {
      setCaseStatus("Assigned");
    }
  }, [judge]);
  return (
    <form className="create-case" onSubmit={handleCreateCase}>
      <div className="create-case__nav">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="pointer"
          onClick={() => (window.location.href = "/justice/dashboard")}
        >
          <path
            d="M10.0211 3.40985L7.14109 1.39485C6.35609 0.844847 5.15109 0.874847 4.39609 1.45985L1.89109 3.41485C1.39109 3.80485 0.996094 4.60485 0.996094 5.23485V8.68485C0.996094 9.95985 2.03109 10.9998 3.30609 10.9998H8.69609C9.97109 10.9998 11.0061 9.96485 11.0061 8.68985V5.29985C11.0061 4.62485 10.5711 3.79485 10.0211 3.40985ZM6.37609 8.99985C6.37609 9.20485 6.20609 9.37485 6.00109 9.37485C5.79609 9.37485 5.62609 9.20485 5.62609 8.99985V7.49985C5.62609 7.29485 5.79609 7.12485 6.00109 7.12485C6.20609 7.12485 6.37609 7.29485 6.37609 7.49985V8.99985Z"
            fill="#99A2BB"
          />
        </svg>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.94661 3.34552C5.01411 3.2781 5.10561 3.24023 5.20101 3.24023C5.29641 3.24023 5.38791 3.2781 5.45541 3.34552L7.85541 5.74552C7.92283 5.81302 7.96069 5.90452 7.96069 5.99992C7.96069 6.09532 7.92283 6.18682 7.85541 6.25432L5.45541 8.65432C5.42245 8.68969 5.38271 8.71806 5.33855 8.73773C5.29439 8.75741 5.24672 8.76799 5.19838 8.76884C5.15004 8.76969 5.10203 8.7608 5.0572 8.7427C5.01238 8.72459 4.97166 8.69764 4.93747 8.66346C4.90329 8.62927 4.87634 8.58855 4.85823 8.54373C4.84013 8.4989 4.83123 8.45088 4.83209 8.40255C4.83294 8.35421 4.84352 8.30654 4.8632 8.26238C4.88287 8.21822 4.91124 8.17848 4.94661 8.14552L7.09221 5.99992L4.94661 3.85432C4.8792 3.78682 4.84133 3.69532 4.84133 3.59992C4.84133 3.50452 4.8792 3.41302 4.94661 3.34552Z"
            fill="#99A2BB"
          />
        </svg>
        <div
          className="pointer"
          onClick={() => (window.location.href = "/justice/admin")}
        >
          Case
        </div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.94661 3.34552C5.01411 3.2781 5.10561 3.24023 5.20101 3.24023C5.29641 3.24023 5.38791 3.2781 5.45541 3.34552L7.85541 5.74552C7.92283 5.81302 7.96069 5.90452 7.96069 5.99992C7.96069 6.09532 7.92283 6.18682 7.85541 6.25432L5.45541 8.65432C5.42245 8.68969 5.38271 8.71806 5.33855 8.73773C5.29439 8.75741 5.24672 8.76799 5.19838 8.76884C5.15004 8.76969 5.10203 8.7608 5.0572 8.7427C5.01238 8.72459 4.97166 8.69764 4.93747 8.66346C4.90329 8.62927 4.87634 8.58855 4.85823 8.54373C4.84013 8.4989 4.83123 8.45088 4.83209 8.40255C4.83294 8.35421 4.84352 8.30654 4.8632 8.26238C4.88287 8.21822 4.91124 8.17848 4.94661 8.14552L7.09221 5.99992L4.94661 3.85432C4.8792 3.78682 4.84133 3.69532 4.84133 3.59992C4.84133 3.50452 4.8792 3.41302 4.94661 3.34552Z"
            fill="#99A2BB"
          />
        </svg>
        <div>Create New Case file</div>
      </div>
      <div className="create-case__title">
        <div>New Case File</div>
        <div>
          <button
          type="button"
          onClick={() => window.location.href = "/justice/dashboard/cases"}
          >Cancel</button>
          <button type="submit">Save</button>
        </div>
      </div>

      <div className="create-case__grid" >
        <div className="create-case__grid__personal-details">
          {images?.length < 1 && (
            <label>
              {!mugLoading && (
                <input
                  type="file"
                  name=""
                  id=""
                  hidden
                  ref={mediaRef}
                  accept="image/*"
                  onChange={(e) => handleMugShotUpload(e, "png")}
                />
              )}
              <div className="create-case__grid__personal-details__upload-image">
                {!mugLoading ? (
                  <svg
                    width="95"
                    height="73"
                    viewBox="0 0 95 73"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M63.7002 28.0299L58.4836 15.8299C57.5336 13.5965 56.1169 12.3299 54.5002 12.2465C52.9002 12.1632 51.3502 13.2799 50.1669 15.4132L47.0002 21.0965C46.3336 22.2965 45.3836 23.0132 44.3502 23.0965C43.3002 23.1965 42.2502 22.6465 41.4002 21.5632L41.0336 21.0965C39.8502 19.6132 38.3836 18.8965 36.8836 19.0465C35.3836 19.1965 34.1002 20.2299 33.2502 21.9132L30.3669 27.6632C29.3336 29.7465 29.4336 32.1632 30.6502 34.1299C31.8669 36.0965 33.9836 37.2799 36.3002 37.2799H57.5669C59.8002 37.2799 61.8836 36.1632 63.1169 34.2965C64.3836 32.4299 64.5836 30.0799 63.7002 28.0299Z"
                      fill="#64748B"
                    />
                    <path
                      d="M38.6167 13.9698C41.7279 13.9698 44.2501 11.4477 44.2501 8.33646C44.2501 5.22525 41.7279 2.70312 38.6167 2.70312C35.5055 2.70312 32.9834 5.22525 32.9834 8.33646C32.9834 11.4477 35.5055 13.9698 38.6167 13.9698Z"
                      fill="#64748B"
                    />
                    <path
                      d="M8.62376 66.388C8.62376 67.6667 8.28309 68.628 7.60176 69.272C6.92043 69.9067 5.94976 70.224 4.68976 70.224C3.40176 70.224 2.39376 69.9207 1.66576 69.314C0.947091 68.698 0.587758 67.7227 0.587758 66.388V60.004H1.91776V66.388C1.91776 67.284 2.15576 67.9653 2.63176 68.432C3.10776 68.8893 3.79376 69.118 4.68976 69.118C5.53909 69.118 6.18309 68.8893 6.62176 68.432C7.06976 67.9653 7.29376 67.284 7.29376 66.388V60.004H8.62376V66.388ZM10.5933 62.762H11.7833V63.742H11.8113C12.0073 63.3407 12.3153 63.0513 12.7353 62.874C13.1553 62.6873 13.6173 62.594 14.1213 62.594C14.6813 62.594 15.1666 62.6967 15.5773 62.902C15.9973 63.1073 16.3426 63.3873 16.6133 63.742C16.8933 64.0873 17.1033 64.4887 17.2433 64.946C17.3833 65.4033 17.4533 65.8887 17.4533 66.402C17.4533 66.9153 17.3833 67.4007 17.2433 67.858C17.1126 68.3153 16.9073 68.7167 16.6273 69.062C16.3566 69.398 16.0113 69.664 15.5913 69.86C15.1806 70.056 14.6999 70.154 14.1493 70.154C13.9719 70.154 13.7713 70.1353 13.5473 70.098C13.3326 70.0607 13.1179 70 12.9033 69.916C12.6886 69.832 12.4833 69.72 12.2873 69.58C12.1006 69.4307 11.9419 69.2487 11.8113 69.034H11.7833V72.758H10.5933V62.762ZM16.1933 66.318C16.1933 65.982 16.1466 65.6553 16.0533 65.338C15.9693 65.0113 15.8339 64.722 15.6473 64.47C15.4699 64.218 15.2366 64.0173 14.9473 63.868C14.6673 63.7187 14.3359 63.644 13.9533 63.644C13.5519 63.644 13.2113 63.7233 12.9313 63.882C12.6513 64.0407 12.4226 64.2507 12.2453 64.512C12.0679 64.764 11.9373 65.0533 11.8533 65.38C11.7786 65.7067 11.7413 66.038 11.7413 66.374C11.7413 66.7287 11.7833 67.074 11.8673 67.41C11.9513 67.7367 12.0819 68.026 12.2593 68.278C12.4459 68.53 12.6839 68.7353 12.9733 68.894C13.2626 69.0433 13.6126 69.118 14.0233 69.118C14.4339 69.118 14.7746 69.0387 15.0453 68.88C15.3253 68.7213 15.5493 68.5113 15.7173 68.25C15.8853 67.9887 16.0066 67.69 16.0813 67.354C16.1559 67.018 16.1933 66.6727 16.1933 66.318ZM18.9201 60.004H20.1101V70H18.9201V60.004ZM22.8216 66.388C22.8216 66.8267 22.8776 67.2187 22.9896 67.564C23.111 67.9 23.2743 68.1847 23.4796 68.418C23.685 68.642 23.923 68.8147 24.1936 68.936C24.4736 69.0573 24.7676 69.118 25.0756 69.118C25.3836 69.118 25.673 69.0573 25.9436 68.936C26.2236 68.8147 26.4663 68.642 26.6716 68.418C26.877 68.1847 27.0356 67.9 27.1476 67.564C27.269 67.2187 27.3296 66.8267 27.3296 66.388C27.3296 65.9493 27.269 65.562 27.1476 65.226C27.0356 64.8807 26.877 64.5913 26.6716 64.358C26.4663 64.1247 26.2236 63.9473 25.9436 63.826C25.673 63.7047 25.3836 63.644 25.0756 63.644C24.7676 63.644 24.4736 63.7047 24.1936 63.826C23.923 63.9473 23.685 64.1247 23.4796 64.358C23.2743 64.5913 23.111 64.8807 22.9896 65.226C22.8776 65.562 22.8216 65.9493 22.8216 66.388ZM21.5616 66.388C21.5616 65.856 21.6363 65.3613 21.7856 64.904C21.935 64.4373 22.159 64.036 22.4576 63.7C22.7563 63.3547 23.125 63.084 23.5636 62.888C24.0023 62.692 24.5063 62.594 25.0756 62.594C25.6543 62.594 26.1583 62.692 26.5876 62.888C27.0263 63.084 27.395 63.3547 27.6936 63.7C27.9923 64.036 28.2163 64.4373 28.3656 64.904C28.515 65.3613 28.5896 65.856 28.5896 66.388C28.5896 66.92 28.515 67.4147 28.3656 67.872C28.2163 68.3293 27.9923 68.7307 27.6936 69.076C27.395 69.412 27.0263 69.678 26.5876 69.874C26.1583 70.0607 25.6543 70.154 25.0756 70.154C24.5063 70.154 24.0023 70.0607 23.5636 69.874C23.125 69.678 22.7563 69.412 22.4576 69.076C22.159 68.7307 21.935 68.3293 21.7856 67.872C21.6363 67.4147 21.5616 66.92 21.5616 66.388ZM36.4047 69.972C36.1993 70.0933 35.9147 70.154 35.5507 70.154C35.2427 70.154 34.9953 70.07 34.8087 69.902C34.6313 69.7247 34.5427 69.44 34.5427 69.048C34.216 69.44 33.8333 69.7247 33.3947 69.902C32.9653 70.07 32.4987 70.154 31.9947 70.154C31.668 70.154 31.3553 70.1167 31.0567 70.042C30.7673 69.9673 30.5153 69.8507 30.3007 69.692C30.086 69.5333 29.9133 69.328 29.7827 69.076C29.6613 68.8147 29.6007 68.502 29.6007 68.138C29.6007 67.7273 29.6707 67.3913 29.8107 67.13C29.9507 66.8687 30.1327 66.6587 30.3567 66.5C30.59 66.332 30.8513 66.206 31.1407 66.122C31.4393 66.038 31.7427 65.968 32.0507 65.912C32.3773 65.8467 32.6853 65.8 32.9747 65.772C33.2733 65.7347 33.5347 65.688 33.7587 65.632C33.9827 65.5667 34.16 65.478 34.2907 65.366C34.4213 65.2447 34.4867 65.072 34.4867 64.848C34.4867 64.5867 34.4353 64.3767 34.3327 64.218C34.2393 64.0593 34.1133 63.938 33.9547 63.854C33.8053 63.77 33.6327 63.714 33.4367 63.686C33.25 63.658 33.0633 63.644 32.8767 63.644C32.3727 63.644 31.9527 63.742 31.6167 63.938C31.2807 64.1247 31.0987 64.484 31.0707 65.016H29.8807C29.8993 64.568 29.9927 64.19 30.1607 63.882C30.3287 63.574 30.5527 63.3267 30.8327 63.14C31.1127 62.944 31.43 62.804 31.7847 62.72C32.1487 62.636 32.536 62.594 32.9467 62.594C33.2733 62.594 33.5953 62.6173 33.9127 62.664C34.2393 62.7107 34.5333 62.8087 34.7947 62.958C35.056 63.098 35.266 63.2987 35.4247 63.56C35.5833 63.8213 35.6627 64.162 35.6627 64.582V68.306C35.6627 68.586 35.6767 68.7913 35.7047 68.922C35.742 69.0527 35.854 69.118 36.0407 69.118C36.1433 69.118 36.2647 69.0947 36.4047 69.048V69.972ZM34.4727 66.262C34.3233 66.374 34.1273 66.458 33.8847 66.514C33.642 66.5607 33.3853 66.6027 33.1147 66.64C32.8533 66.668 32.5873 66.7053 32.3167 66.752C32.046 66.7893 31.8033 66.8547 31.5887 66.948C31.374 67.0413 31.1967 67.1767 31.0567 67.354C30.926 67.522 30.8607 67.7553 30.8607 68.054C30.8607 68.25 30.898 68.418 30.9727 68.558C31.0567 68.6887 31.1593 68.796 31.2807 68.88C31.4113 68.964 31.5607 69.0247 31.7287 69.062C31.8967 69.0993 32.074 69.118 32.2607 69.118C32.6527 69.118 32.9887 69.0667 33.2687 68.964C33.5487 68.852 33.7773 68.7167 33.9547 68.558C34.132 68.39 34.2627 68.2127 34.3467 68.026C34.4307 67.83 34.4727 67.648 34.4727 67.48V66.262ZM38.3802 66.444C38.3802 66.78 38.4222 67.1113 38.5062 67.438C38.5995 67.7553 38.7349 68.04 38.9122 68.292C39.0989 68.544 39.3322 68.7447 39.6122 68.894C39.9015 69.0433 40.2375 69.118 40.6202 69.118C41.0215 69.118 41.3622 69.0387 41.6422 68.88C41.9222 68.7213 42.1509 68.516 42.3282 68.264C42.5055 68.0027 42.6315 67.7087 42.7062 67.382C42.7902 67.0553 42.8322 66.724 42.8322 66.388C42.8322 66.0333 42.7902 65.6927 42.7062 65.366C42.6222 65.03 42.4869 64.736 42.3002 64.484C42.1229 64.232 41.8895 64.0313 41.6002 63.882C41.3109 63.7233 40.9609 63.644 40.5502 63.644C40.1489 63.644 39.8082 63.7233 39.5282 63.882C39.2482 64.0407 39.0242 64.2507 38.8562 64.512C38.6882 64.7733 38.5669 65.072 38.4922 65.408C38.4175 65.744 38.3802 66.0893 38.3802 66.444ZM43.9802 70H42.7902V69.02H42.7622C42.5662 69.4213 42.2582 69.7107 41.8382 69.888C41.4182 70.0653 40.9562 70.154 40.4522 70.154C39.8922 70.154 39.4022 70.0513 38.9822 69.846C38.5715 69.6407 38.2262 69.3653 37.9462 69.02C37.6755 68.6747 37.4702 68.2733 37.3302 67.816C37.1902 67.3587 37.1202 66.8733 37.1202 66.36C37.1202 65.8467 37.1855 65.3613 37.3162 64.904C37.4562 64.4467 37.6615 64.05 37.9322 63.714C38.2122 63.3687 38.5575 63.098 38.9682 62.902C39.3882 62.6967 39.8735 62.594 40.4242 62.594C40.6109 62.594 40.8115 62.6127 41.0262 62.65C41.2409 62.6873 41.4555 62.7527 41.6702 62.846C41.8849 62.93 42.0855 63.0467 42.2722 63.196C42.4682 63.336 42.6315 63.5133 42.7622 63.728H42.7902V60.004H43.9802V70ZM49.9595 60.004H51.2895V70H49.9595V60.004ZM53.3306 62.762H54.4506V63.826H54.4786C55.0199 63.0047 55.7992 62.594 56.8166 62.594C57.2646 62.594 57.6706 62.6873 58.0346 62.874C58.3986 63.0607 58.6552 63.378 58.8046 63.826C59.0472 63.434 59.3646 63.1307 59.7566 62.916C60.1579 62.7013 60.5966 62.594 61.0726 62.594C61.4366 62.594 61.7632 62.636 62.0526 62.72C62.3512 62.7947 62.6032 62.916 62.8086 63.084C63.0232 63.252 63.1866 63.4713 63.2986 63.742C63.4199 64.0033 63.4806 64.3207 63.4806 64.694V70H62.2906V65.254C62.2906 65.03 62.2719 64.82 62.2346 64.624C62.1972 64.428 62.1272 64.26 62.0246 64.12C61.9219 63.9707 61.7772 63.854 61.5906 63.77C61.4132 63.686 61.1799 63.644 60.8906 63.644C60.3026 63.644 59.8406 63.812 59.5046 64.148C59.1686 64.484 59.0006 64.932 59.0006 65.492V70H57.8106V65.254C57.8106 65.0207 57.7872 64.806 57.7406 64.61C57.7032 64.414 57.6332 64.246 57.5306 64.106C57.4279 63.9567 57.2879 63.8447 57.1106 63.77C56.9426 63.686 56.7232 63.644 56.4526 63.644C56.1072 63.644 55.8086 63.714 55.5566 63.854C55.3139 63.994 55.1132 64.162 54.9546 64.358C54.8052 64.554 54.6932 64.7593 54.6186 64.974C54.5532 65.1793 54.5206 65.352 54.5206 65.492V70H53.3306V62.762ZM71.6781 69.972C71.4728 70.0933 71.1881 70.154 70.8241 70.154C70.5161 70.154 70.2688 70.07 70.0821 69.902C69.9048 69.7247 69.8161 69.44 69.8161 69.048C69.4895 69.44 69.1068 69.7247 68.6681 69.902C68.2388 70.07 67.7721 70.154 67.2681 70.154C66.9415 70.154 66.6288 70.1167 66.3301 70.042C66.0408 69.9673 65.7888 69.8507 65.5741 69.692C65.3595 69.5333 65.1868 69.328 65.0561 69.076C64.9348 68.8147 64.8741 68.502 64.8741 68.138C64.8741 67.7273 64.9441 67.3913 65.0841 67.13C65.2241 66.8687 65.4061 66.6587 65.6301 66.5C65.8635 66.332 66.1248 66.206 66.4141 66.122C66.7128 66.038 67.0161 65.968 67.3241 65.912C67.6508 65.8467 67.9588 65.8 68.2481 65.772C68.5468 65.7347 68.8081 65.688 69.0321 65.632C69.2561 65.5667 69.4335 65.478 69.5641 65.366C69.6948 65.2447 69.7601 65.072 69.7601 64.848C69.7601 64.5867 69.7088 64.3767 69.6061 64.218C69.5128 64.0593 69.3868 63.938 69.2281 63.854C69.0788 63.77 68.9061 63.714 68.7101 63.686C68.5235 63.658 68.3368 63.644 68.1501 63.644C67.6461 63.644 67.2261 63.742 66.8901 63.938C66.5541 64.1247 66.3721 64.484 66.3441 65.016H65.1541C65.1728 64.568 65.2661 64.19 65.4341 63.882C65.6021 63.574 65.8261 63.3267 66.1061 63.14C66.3861 62.944 66.7035 62.804 67.0581 62.72C67.4221 62.636 67.8095 62.594 68.2201 62.594C68.5468 62.594 68.8688 62.6173 69.1861 62.664C69.5128 62.7107 69.8068 62.8087 70.0681 62.958C70.3295 63.098 70.5395 63.2987 70.6981 63.56C70.8568 63.8213 70.9361 64.162 70.9361 64.582V68.306C70.9361 68.586 70.9501 68.7913 70.9781 68.922C71.0155 69.0527 71.1275 69.118 71.3141 69.118C71.4168 69.118 71.5381 69.0947 71.6781 69.048V69.972ZM69.7461 66.262C69.5968 66.374 69.4008 66.458 69.1581 66.514C68.9155 66.5607 68.6588 66.6027 68.3881 66.64C68.1268 66.668 67.8608 66.7053 67.5901 66.752C67.3195 66.7893 67.0768 66.8547 66.8621 66.948C66.6475 67.0413 66.4701 67.1767 66.3301 67.354C66.1995 67.522 66.1341 67.7553 66.1341 68.054C66.1341 68.25 66.1715 68.418 66.2461 68.558C66.3301 68.6887 66.4328 68.796 66.5541 68.88C66.6848 68.964 66.8341 69.0247 67.0021 69.062C67.1701 69.0993 67.3475 69.118 67.5341 69.118C67.9261 69.118 68.2621 69.0667 68.5421 68.964C68.8221 68.852 69.0508 68.7167 69.2281 68.558C69.4055 68.39 69.5361 68.2127 69.6201 68.026C69.7041 67.83 69.7461 67.648 69.7461 67.48V66.262ZM79.0296 69.384C79.0296 70.5693 78.759 71.456 78.2176 72.044C77.6763 72.632 76.827 72.926 75.6696 72.926C75.3336 72.926 74.9883 72.8887 74.6336 72.814C74.2883 72.7393 73.971 72.618 73.6816 72.45C73.4016 72.282 73.1683 72.0627 72.9816 71.792C72.795 71.5213 72.6923 71.19 72.6736 70.798H73.8636C73.873 71.0127 73.9383 71.1947 74.0596 71.344C74.1903 71.4933 74.3443 71.6147 74.5216 71.708C74.7083 71.8013 74.909 71.8667 75.1236 71.904C75.3383 71.9507 75.5436 71.974 75.7396 71.974C76.1316 71.974 76.463 71.904 76.7336 71.764C77.0043 71.6333 77.2283 71.4467 77.4056 71.204C77.583 70.9707 77.709 70.686 77.7836 70.35C77.8676 70.014 77.9096 69.6453 77.9096 69.244V68.768H77.8816C77.6763 69.216 77.3636 69.5473 76.9436 69.762C76.533 69.9673 76.0943 70.07 75.6276 70.07C75.0863 70.07 74.615 69.972 74.2136 69.776C73.8123 69.58 73.4763 69.3187 73.2056 68.992C72.935 68.656 72.7296 68.2687 72.5896 67.83C72.459 67.382 72.3936 66.9107 72.3936 66.416C72.3936 65.9867 72.4496 65.548 72.5616 65.1C72.6736 64.6427 72.8603 64.232 73.1216 63.868C73.383 63.4947 73.7283 63.1913 74.1576 62.958C74.587 62.7153 75.1143 62.594 75.7396 62.594C76.197 62.594 76.617 62.6967 76.9996 62.902C77.3823 63.098 77.681 63.3967 77.8956 63.798H77.9096V62.762H79.0296V69.384ZM75.6976 69.034C76.0896 69.034 76.421 68.9547 76.6916 68.796C76.9716 68.628 77.1956 68.4133 77.3636 68.152C77.5316 67.8813 77.653 67.578 77.7276 67.242C77.8116 66.906 77.8536 66.57 77.8536 66.234C77.8536 65.9167 77.8163 65.604 77.7416 65.296C77.667 64.988 77.5456 64.7127 77.3776 64.47C77.219 64.218 77.009 64.0173 76.7476 63.868C76.4863 63.7187 76.169 63.644 75.7956 63.644C75.413 63.644 75.0863 63.7187 74.8156 63.868C74.545 64.008 74.321 64.1993 74.1436 64.442C73.9756 64.6847 73.8496 64.9647 73.7656 65.282C73.691 65.5993 73.6536 65.9307 73.6536 66.276C73.6536 66.6027 73.6863 66.9293 73.7516 67.256C73.817 67.5827 73.929 67.8813 74.0876 68.152C74.2463 68.4133 74.4563 68.628 74.7176 68.796C74.979 68.9547 75.3056 69.034 75.6976 69.034ZM85.8507 65.688C85.832 65.408 85.7667 65.142 85.6547 64.89C85.552 64.638 85.4074 64.4233 85.2207 64.246C85.0434 64.0593 84.8287 63.9147 84.5767 63.812C84.334 63.7 84.0634 63.644 83.7647 63.644C83.4567 63.644 83.1767 63.7 82.9247 63.812C82.682 63.9147 82.472 64.0593 82.2947 64.246C82.1174 64.4327 81.9774 64.652 81.8747 64.904C81.772 65.1467 81.7114 65.408 81.6927 65.688H85.8507ZM86.9987 67.704C86.84 68.516 86.49 69.1273 85.9487 69.538C85.4074 69.9487 84.726 70.154 83.9047 70.154C83.326 70.154 82.822 70.0607 82.3927 69.874C81.9727 69.6873 81.618 69.426 81.3287 69.09C81.0394 68.754 80.82 68.3527 80.6707 67.886C80.5307 67.4193 80.4514 66.9107 80.4327 66.36C80.4327 65.8093 80.5167 65.3053 80.6847 64.848C80.8527 64.3907 81.086 63.994 81.3847 63.658C81.6927 63.322 82.052 63.0607 82.4627 62.874C82.8827 62.6873 83.34 62.594 83.8347 62.594C84.4787 62.594 85.0107 62.7293 85.4307 63C85.86 63.2613 86.2007 63.5973 86.4527 64.008C86.714 64.4187 86.8914 64.8667 86.9847 65.352C87.0874 65.8373 87.1294 66.2993 87.1107 66.738H81.6927C81.6834 67.0553 81.7207 67.3587 81.8047 67.648C81.8887 67.928 82.024 68.18 82.2107 68.404C82.3974 68.6187 82.6354 68.7913 82.9247 68.922C83.214 69.0527 83.5547 69.118 83.9467 69.118C84.4507 69.118 84.8614 69.0013 85.1787 68.768C85.5054 68.5347 85.72 68.18 85.8227 67.704H86.9987ZM89.0722 67.718C89.0816 67.9793 89.1422 68.2033 89.2542 68.39C89.3662 68.5673 89.5109 68.712 89.6882 68.824C89.8749 68.9267 90.0802 69.0013 90.3042 69.048C90.5376 69.0947 90.7756 69.118 91.0182 69.118C91.2049 69.118 91.4009 69.104 91.6062 69.076C91.8116 69.048 91.9982 68.9967 92.1662 68.922C92.3436 68.8473 92.4882 68.74 92.6002 68.6C92.7122 68.4507 92.7682 68.264 92.7682 68.04C92.7682 67.732 92.6516 67.4987 92.4182 67.34C92.1849 67.1813 91.8909 67.0553 91.5362 66.962C91.1909 66.8593 90.8129 66.7707 90.4022 66.696C89.9916 66.612 89.6089 66.5 89.2542 66.36C88.9089 66.2107 88.6196 66.0053 88.3862 65.744C88.1529 65.4827 88.0362 65.1187 88.0362 64.652C88.0362 64.288 88.1156 63.9753 88.2742 63.714C88.4422 63.4527 88.6522 63.2427 88.9042 63.084C89.1656 62.916 89.4549 62.7947 89.7722 62.72C90.0989 62.636 90.4209 62.594 90.7382 62.594C91.1489 62.594 91.5269 62.6313 91.8722 62.706C92.2176 62.7713 92.5209 62.8927 92.7822 63.07C93.0529 63.238 93.2676 63.4713 93.4262 63.77C93.5849 64.0593 93.6782 64.4233 93.7062 64.862H92.5162C92.4976 64.6287 92.4369 64.4373 92.3342 64.288C92.2316 64.1293 92.1009 64.0033 91.9422 63.91C91.7836 63.8167 91.6062 63.7513 91.4102 63.714C91.2236 63.6673 91.0322 63.644 90.8362 63.644C90.6589 63.644 90.4769 63.658 90.2902 63.686C90.1129 63.714 89.9496 63.7653 89.8002 63.84C89.6509 63.9053 89.5296 63.9987 89.4362 64.12C89.3429 64.232 89.2962 64.3813 89.2962 64.568C89.2962 64.7733 89.3662 64.946 89.5062 65.086C89.6556 65.2167 89.8422 65.3287 90.0662 65.422C90.2902 65.506 90.5422 65.5807 90.8222 65.646C91.1022 65.702 91.3822 65.7627 91.6622 65.828C91.9609 65.8933 92.2502 65.9727 92.5302 66.066C92.8196 66.1593 93.0716 66.2853 93.2862 66.444C93.5102 66.5933 93.6876 66.7847 93.8182 67.018C93.9582 67.2513 94.0282 67.5407 94.0282 67.886C94.0282 68.3247 93.9349 68.6887 93.7482 68.978C93.5709 69.2673 93.3329 69.5007 93.0342 69.678C92.7449 69.8553 92.4136 69.9767 92.0402 70.042C91.6762 70.1167 91.3122 70.154 90.9482 70.154C90.5469 70.154 90.1642 70.112 89.8002 70.028C89.4362 69.944 89.1142 69.8087 88.8342 69.622C88.5542 69.426 88.3302 69.174 88.1622 68.866C87.9942 68.5487 87.9009 68.166 87.8822 67.718H89.0722Z"
                      fill="#00B505"
                    />
                  </svg>
                ) : (
                  "Loading..."
                )}
              </div>
            </label>
          )}

          {images?.length > 0 && (
            <div className="create-case__grid__personal-details__image-preview">
              <Image
                alt=""
                src={`https://${images[images?.length - 1]?.url}`}
                layout="fill"
                objectFit="cover"
                style={{ borderRadius: "16px" }}
              />

              <svg
                className="pointer"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => handleMugshotRemove(images?.length - 1)}
              >
                <circle cx="16" cy="16" r="16" fill="#FFE1E9" />
                <path
                  d="M10 12.0026H11.3333M11.3333 12.0026H22M11.3333 12.0026V21.3359C11.3333 21.6896 11.4738 22.0287 11.7239 22.2787C11.9739 22.5288 12.313 22.6693 12.6667 22.6693H19.3333C19.687 22.6693 20.0261 22.5288 20.2761 22.2787C20.5262 22.0287 20.6667 21.6896 20.6667 21.3359V12.0026H11.3333ZM13.3333 12.0026V10.6693C13.3333 10.3156 13.4738 9.97651 13.7239 9.72646C13.9739 9.47641 14.313 9.33594 14.6667 9.33594H17.3333C17.687 9.33594 18.0261 9.47641 18.2761 9.72646C18.5262 9.97651 18.6667 10.3156 18.6667 10.6693V12.0026M14.6667 15.3359V19.3359M17.3333 15.3359V19.3359"
                  stroke="#FF2C20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          )}

          <div className="create-case__grid__personal-details__image-grid">
            {images?.length < 5 && images?.length > 0 ? (
              <label>
                {!mugLoading && (
                  <input
                    type="file"
                    name=""
                    id=""
                    hidden
                    ref={mediaRef}
                    accept="image/*"
                    onChange={(e) => handleMugShotUpload(e, "png")}
                  />
                )}
                <svg
                  className="pointer"
                  width="56"
                  height="56"
                  viewBox="0 0 56 56"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.35"
                    y="0.35"
                    width="55.3"
                    height="55.3"
                    rx="7.65"
                    fill="white"
                    stroke="#64748B"
                    stroke-width="0.7"
                    stroke-dasharray="3 1"
                  />
                  <path
                    d="M28.0001 22.1641V33.8307M22.1667 27.9974H33.8334"
                    stroke="#64748B"
                    stroke-width="1.3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </label>
            ) : (
              ""
            )}
            {images?.map((item, index) => (
              <div className="create-case__grid__personal-details__image-grid__image" key={index}>
                <Image
                  alt=""
                  src={`https://${item?.url}`}
                  objectFit="cover"
                  layout="fill"
                  style={{ borderRadius: "8px" }}
                />

                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={() => handleMugshotRemove(index)}
                >
                  <circle cx="8" cy="8" r="8" fill="#FFE1E9" />
                  <g clip-path="url(#clip0_20_196388)">
                    <path
                      d="M5 5.9974H5.66667M5.66667 5.9974H11M5.66667 5.9974V10.6641C5.66667 10.8409 5.7369 11.0104 5.86193 11.1355C5.98695 11.2605 6.15652 11.3307 6.33333 11.3307H9.66667C9.84348 11.3307 10.013 11.2605 10.1381 11.1355C10.2631 11.0104 10.3333 10.8409 10.3333 10.6641V5.9974H5.66667ZM6.66667 5.9974V5.33073C6.66667 5.15392 6.7369 4.98435 6.86193 4.85932C6.98695 4.7343 7.15652 4.66406 7.33333 4.66406H8.66667C8.84348 4.66406 9.01305 4.7343 9.13807 4.85932C9.2631 4.98435 9.33333 5.15392 9.33333 5.33073V5.9974M7.33333 7.66406V9.66406M8.66667 7.66406V9.66406"
                      stroke="#FF2C20"
                      stroke-width="0.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_20_196388">
                      <rect
                        width="8"
                        height="8"
                        fill="white"
                        transform="translate(4 4)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <div className="create-case__grid__personal-details__image-grid__image__overlay"></div>
              </div>
            ))}
          </div>

          <div className="create-case__grid__personal-details__upload-image-info">
            <div className="create-case__grid__personal-details__upload-image-info__sidebar"></div>

            <div>
              Add Mugshot and add pictures highlighting any tattoos, piercing or
              body scar
            </div>
          </div>

          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Type Accused First Name"
            required
            value={accusedFirstName}
            onChange={(e) => setAccusedFirstName(e.target.value)}
          />

          <label htmlFor="">Middle Name</label>
          <input
            type="text"
            name=""
            id=""
            placeholder="Type Accused Middle Name"
            // required
            value={accusedMiddleName}
            onChange={(e) => setAccusedMiddleName(e.target.value)}
          />
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
          <label htmlFor="">Accused Status:</label>
          <select
            name=""
            id=""
            required
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
          <label htmlFor="">Known Associates:</label>
          <div className="create-case__grid__personal-details__input-group">
            <div>
              <input
                type="text"
                placeholder="Enter Known Associates"
                value={assoc}
                onChange={(e) => setAssoc(e.target.value)}
              />
              <button onClick={handleAssAssoc} type="button">
                Add
              </button>
            </div>

            {associate?.length > 0 && (
              <div className="create-case__grid__personal-details__input-group__list">
                {associate?.map((item, index) => (
                  <div key={index}>{item?.name}</div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="create-case__grid__case-details">
          <div className="create-case__grid__case-details__tag">
            Case Details
          </div>
          <div className="create-case__grid__case-details__case-status">
            <label htmlFor="caseStatus">Case status:</label>
            <select name="" id="" required
            value={caseStatus}
            onChange={(e) => setCaseStatus(e.target.value)}
            >
              <option value="">Select Status</option>
              <option value="Unassigned">Unassigned</option>
              <option value="Assigned">Assigned</option>
              <option value="Filed in Court">Filed in Court</option>
            </select>
          </div>
          <div className="create-case__grid__case-details__title">
            Case Details
          </div>
          <div className="create-case__grid__case-details__grid">
            <div className="create-case__grid__case-details__grid__input">
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
                <div className="create-case__grid__case-details__grid__input__search-dropdown">
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
            <div className="create-case__grid__case-details__grid__input">
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
                <div className="create-case__grid__case-details__grid__input__search-dropdown">
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
            <div className="create-case__grid__case-details__grid__input">
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
                <div className="create-case__grid__case-details__grid__input__search-dropdown">
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

            <div className="create-case__grid__case-details__grid__input">
              <label htmlFor="">Assigned Justice Officer:</label>
              <div className="create-case__grid__case-details__grid__input__flex">
                <input
                  type="text"
                  placeholder="Select assigned officer"
                  required
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
                  <div className="create-case__grid__case-details__grid__input__flex__search-dropdown">
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

              {/* <div className="create-case__grid__case-details__grid__input__contact">
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

          <div className="create-case__grid__case-details__title">
            Court Details
          </div>

          <div className="create-case__grid__case-details__grid">
            <div className="create-case__grid__case-details__grid__input">
              <label htmlFor="">Court Number</label>
              <input
                type="text"
                className=""
                placeholder="Enter court number"
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
                <div className="create-case__grid__case-details__grid__input__search-dropdown">
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
              {/* <div className="create-case__grid__case-details__grid__input__contact">
Ahmed Aisha
</div> */}
            </div>
            <div className="create-case__grid__case-details__grid__input">
              <label htmlFor="">Court Location:</label>
              <input
                type="text"
                placeholder="Select Court Location"
                value={courtLocation}
                onChange={(e) => setCourtLocation(e.target.value)}
              />
              {/* <div className="create-case__grid__case-details__grid__input__filled">
    Federal High Court, Abuja
    </div> */}
            </div>
            <div className="create-case__grid__case-details__grid__input">
              <label htmlFor="">Court Clerk:</label>
              <input
                type="text"
                className=""
                placeholder="Enter Court Clerk Name"
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
                <div className="create-case__grid__case-details__grid__input__search-dropdown">
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

            <div className="create-case__grid__case-details__grid__input">
              <label htmlFor="">Assigned Judge:</label>
              <div className="create-case__grid__case-details__grid__input__flex">
                <input
                  type="text"
                  placeholder="Select assigned officer"
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
                  <div className="create-case__grid__case-details__grid__input__flex__search-dropdown">
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
              {/* <div className="create-case__grid__case-details__grid__input__contact">
    Olatunde Cardoso
</div> */}
            </div>
          </div>

          <div className="create-case__grid__case-details__title">
            Law Enforcement Details
          </div>

          <div className="create-case__grid__case-details__grid">
            <div className="create-case__grid__case-details__grid__input">
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
              {/* <div className="create-case__grid__case-details__grid__input__contact">
  NPF898458
</div> */}

              {activeSearchInput === "chargeSheet" && (
                <div className="create-case__grid__case-details__grid__input__flex__search-dropdown">
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
            <div className="create-case__grid__case-details__grid__input">
              <label htmlFor="">FMoJ Dept:</label>
              <select name="" id="" required>
                <option value="">Select FMoJ Dept</option>
                <option value="FMoJ Dept">FMoJ Dept</option>
              </select>
              {/* <div className="create-case__grid__case-details__grid__input__filled">
  Public Prosecution
  </div> */}
            </div>
            <div className="create-case__grid__case-details__grid__input">
              <label htmlFor="">Agency:</label>
              <input
                type="text"
                value={agency}
                onChange={(e) => setAgency(e.target.value)}
                disabled
              />

              {/* <div className="create-case__grid__case-details__grid__input__filled">
Police
</div> */}
            </div>

            <div className="create-case__grid__case-details__grid__input">
              <label htmlFor="">Law Enforcement Officer:</label>
              <div className="create-case__grid__case-details__grid__input__flex">
                <input
                  type="text"
                  placeholder="Select assigned officer"
                  required
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
                  <div className="create-case__grid__case-details__grid__input__flex__search-dropdown">
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

              {/* <div className="create-case__grid__case-details__grid__input__contact">
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

          <div className="create-case__grid__case-details__grid create-case__grid__case-details__grid-mini">
            <div className="create-case__grid__case-details__grid__input create-case__grid__case-details__grid__assoc">
              <label htmlFor="">Keywords:</label>
              {/* <form onSubmit={handleAssAssoc}> */}
              <div>
                <input
                  type="text"
                  placeholder="Enter keyword related to record"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
                <button onClick={handleAddKeyword} type="button">
                  Add
                </button>
              </div>
              {/* </form> */}

              {keywords?.length > 0 && (
                <div className="create-case__grid__case-details__grid__assoc__list">
                  {keywords?.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
              )}

              {/* <div className="case-from__accused__bio__input__case-assoc">
          <div>Okoro Madu</div>
          <div>Shekau Ahmed</div>
          <div>Tope Adeniyi</div>
        </div> */}
            </div>

            <div className="create-case__grid__case-details__grid__input create-case__grid__case-details__grid__assoc">
              <label htmlFor="">Tags:</label>
              {/* <form onSubmit={handleAssAssoc}> */}
              <div>
                <input
                  type="text"
                  placeholder="Enter tag related to record"
                  value={metadata}
                  onChange={(e) => setMetadata(e.target.value)}
                />
                <button onClick={handleAddMetadata} type="button">
                  Add
                </button>
              </div>
              {/* </form> */}

              {metadatas?.length > 0 && (
                <div className="create-case__grid__case-details__grid__assoc__list">
                  {metadatas?.map((item, index) => (
                    <div key={index}>{item}</div>
                  ))}
                </div>
              )}

              {/* <div className="case-from__accused__bio__input__case-assoc">
          <div>Okoro Madu</div>
          <div>Shekau Ahmed</div>
          <div>Tope Adeniyi</div>
        </div> */}
            </div>
          </div>

          <div className="create-case__grid__case-details__notes">
            <div>
              <label htmlFor="legalBasis">Legal Basis</label>
              <textarea
                name=""
                id=""
                placeholder="Insert the legal basis"
                required
                value={legalBasis}
                onChange={(e) => setLegalBasis(e.target.value)}
              ></textarea>
            </div>

            <div>
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
            <div>
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
            <div>
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

          <div className="create-case__grid__case-details__attachments">
            <div className="create-case__grid__case-details__title">
              Attachment
            </div>
            <div className="create-case__grid__case-details__subtitle">
              Attach documents, videos and audio relating to this case
            </div>

            <label>
              {!docLoading && (
                <input
                  type="file"
                  multiple
                  // accept='video/*'
                  accept=".docx, .pdf, .mp3, .wav, .mov, .mp4, .png, .jpg, .jpeg"
                  hidden
                  onChange={(e) => handleFileUpload(e)}
                  ref={mediaRef}
                />
              )}
              <div className="create-case__grid__case-details__attachments__attach">
                <div>
                  {!docLoading && (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.49992 14.9974H12.4999C12.736 14.9974 12.9341 14.9174 13.0941 14.7574C13.2535 14.598 13.3333 14.4002 13.3333 14.1641C13.3333 13.928 13.2535 13.7302 13.0941 13.5707C12.9341 13.4107 12.736 13.3307 12.4999 13.3307H7.49992C7.26381 13.3307 7.06603 13.4107 6.90659 13.5707C6.74659 13.7302 6.66659 13.928 6.66659 14.1641C6.66659 14.4002 6.74659 14.598 6.90659 14.7574C7.06603 14.9174 7.26381 14.9974 7.49992 14.9974ZM7.49992 11.6641H12.4999C12.736 11.6641 12.9341 11.5841 13.0941 11.4241C13.2535 11.2646 13.3333 11.0668 13.3333 10.8307C13.3333 10.5946 13.2535 10.3966 13.0941 10.2366C12.9341 10.0771 12.736 9.9974 12.4999 9.9974H7.49992C7.26381 9.9974 7.06603 10.0771 6.90659 10.2366C6.74659 10.3966 6.66659 10.5946 6.66659 10.8307C6.66659 11.0668 6.74659 11.2646 6.90659 11.4241C7.06603 11.5841 7.26381 11.6641 7.49992 11.6641ZM4.99992 18.3307C4.54159 18.3307 4.14936 18.1677 3.82325 17.8416C3.49659 17.5149 3.33325 17.1224 3.33325 16.6641V3.33073C3.33325 2.8724 3.49659 2.4799 3.82325 2.15323C4.14936 1.82712 4.54159 1.66406 4.99992 1.66406H10.9791C11.2013 1.66406 11.4133 1.70573 11.6149 1.78906C11.816 1.8724 11.993 1.99045 12.1458 2.14323L16.1874 6.1849C16.3402 6.33767 16.4583 6.51462 16.5416 6.71573C16.6249 6.9174 16.6666 7.12934 16.6666 7.35156V16.6641C16.6666 17.1224 16.5035 17.5149 16.1774 17.8416C15.8508 18.1677 15.4583 18.3307 14.9999 18.3307H4.99992ZM10.8333 6.66406V3.33073H4.99992V16.6641H14.9999V7.4974H11.6666C11.4305 7.4974 11.2327 7.4174 11.0733 7.2574C10.9133 7.09795 10.8333 6.90017 10.8333 6.66406ZM4.99992 3.33073V7.4974V3.33073V16.6641V3.33073Z"
                        fill="#0A0A0A"
                      />
                    </svg>
                  )}
                  {docLoading ? "Loading..." : "Attach New Document"}{" "}
                </div>
              </div>
            </label>

            <div className="create-case__grid__case-details__attachments__uploaded-files-grid">
              {docs?.map((doc, index) => (
                <div className="create-case__grid__case-details__attachments__uploaded-files-grid__card" key={index}>
                  <div className="create-case__grid__case-details__attachments__uploaded-files-grid__card__card-group">
                    {doc?.type.includes("pdf") && (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_20_196477)">
                          <path
                            d="M20 22.5H4V1.5H15L20 6.5V22.5Z"
                            fill="#C2F1C4"
                          />
                          <path
                            d="M19.25 7H14.5V2.25L19.25 7Z"
                            fill="#E1F5FE"
                          />
                          <path
                            d="M13.6529 13.9851C13.6529 13.9851 16.0439 13.5516 16.0439 14.3683C16.0439 15.1851 14.5627 14.8528 13.6529 13.9851ZM11.8852 14.0473C11.5052 14.131 11.135 14.254 10.7804 14.4141L11.0804 13.7391C11.3804 13.0641 11.6917 12.1438 11.6917 12.1438C12.0487 12.7469 12.4653 13.3127 12.9352 13.8328C12.5815 13.8855 12.2309 13.9576 11.8852 14.0488V14.0473ZM10.9387 9.17233C10.9387 8.46058 11.1689 8.26633 11.3482 8.26633C11.5274 8.26633 11.7292 8.35258 11.7359 8.97058C11.6774 9.59199 11.5473 10.2046 11.3482 10.7961C11.0744 10.2998 10.9331 9.74134 10.9379 9.17458L10.9387 9.17233ZM7.4519 17.0593C6.7184 16.6206 8.99015 15.2698 9.4019 15.2263C9.39965 15.2271 8.2199 17.5183 7.4519 17.0593ZM16.7422 14.4651C16.7347 14.3901 16.6672 13.5598 15.1897 13.5951C14.5738 13.5843 13.9582 13.6277 13.3499 13.7248C12.7603 13.1314 12.2528 12.4617 11.8409 11.7336C12.1003 10.9831 12.2574 10.201 12.3082 9.40858C12.2864 8.50858 12.0712 7.99258 11.3812 8.00008C10.6912 8.00758 10.5907 8.61133 10.6814 9.50983C10.7702 10.1136 10.9379 10.7032 11.1802 11.2633C11.1802 11.2633 10.8614 12.2556 10.4399 13.2426C10.0184 14.2296 9.7304 14.7471 9.7304 14.7471C8.99734 14.9854 8.3073 15.3399 7.68665 15.7971C7.06865 16.3723 6.8174 16.8141 7.1429 17.2558C7.4234 17.6368 8.40515 17.7231 9.28265 16.5733C9.74809 15.9789 10.174 15.3546 10.5577 14.7043C10.5577 14.7043 11.8957 14.3376 12.3119 14.2371C12.7282 14.1366 13.2314 14.0571 13.2314 14.0571C13.2314 14.0571 14.4532 15.2863 15.6314 15.2428C16.8097 15.1993 16.7527 14.5386 16.7452 14.4666"
                            fill="#009B07"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_20_196477">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    )}

                    {doc?.type.includes("mp3") || doc?.type.includes("wav") ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_20_196673)">
                          <path
                            d="M20 22.5H4V1.5H15L20 6.5V22.5Z"
                            fill="#C2F1C4"
                          />
                          <path
                            d="M19.25 7H14.5V2.25L19.25 7Z"
                            fill="#E1F5FE"
                          />
                          <path
                            d="M11.5 17C12.6046 17 13.5 16.1046 13.5 15C13.5 13.8954 12.6046 13 11.5 13C10.3954 13 9.5 13.8954 9.5 15C9.5 16.1046 10.3954 17 11.5 17Z"
                            fill="#009B07"
                          />
                          <path
                            d="M15 10.5L12.5 9.5V15H13.5V11.45L15 12V10.5Z"
                            fill="#009B07"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_20_196673">
                            <rect width="24" height="24" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      ""
                    )}

                    {doc?.type.includes("mp4") ||
                    doc?.type.includes("mov") ||
                    doc?.type.includes("flac") ||
                    doc?.type.includes("alac") ||
                    doc?.type.includes("aiff") ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 22.5H4V1.5H15L20 6.5V22.5Z"
                          fill="#C2F1C4"
                        />
                        <path d="M19.25 7H14.5V2.25L19.25 7Z" fill="#E1F5FE" />
                        <path d="M15 14L10 11V17L15 14Z" fill="#009B07" />
                      </svg>
                    ) : (
                      ""
                    )}

                    <div>
                      <div>{doc?.name}</div>
                      <div>{doc?.size}</div>
                    </div>
                  </div>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleFileRemove(index)}
                    className="pointer"
                  >
                    <circle cx="16" cy="16" r="16" fill="#FFE1E9" />
                    <path
                      d="M10.0002 12.0026H11.3336M11.3336 12.0026H22.0002M11.3336 12.0026V21.3359C11.3336 21.6896 11.4741 22.0287 11.7241 22.2787C11.9742 22.5288 12.3133 22.6693 12.6669 22.6693H19.3336C19.6872 22.6693 20.0263 22.5288 20.2764 22.2787C20.5264 22.0287 20.6669 21.6896 20.6669 21.3359V12.0026H11.3336ZM13.3336 12.0026V10.6693C13.3336 10.3156 13.4741 9.97651 13.7241 9.72646C13.9742 9.47641 14.3133 9.33594 14.6669 9.33594H17.3336C17.6872 9.33594 18.0263 9.47641 18.2764 9.72646C18.5264 9.97651 18.6669 10.3156 18.6669 10.6693V12.0026M14.6669 15.3359V19.3359M17.3336 15.3359V19.3359"
                      stroke="#FF2C20"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="create-case__grid__case-details__title">
            Asset Siezure
          </div>
          <div className="create-case__grid__case-details__subtitle">
            Link Assets and Evidence relating to this case{" "}
          </div>

          <button className="create-case__grid__case-details__link-asset">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_20_196161)">
                <path
                  d="M8.33326 10.83C8.69113 11.3085 9.14772 11.7044 9.67205 11.9908C10.1964 12.2773 10.7762 12.4476 11.3721 12.4903C11.9681 12.533 12.5662 12.447 13.126 12.2382C13.6858 12.0294 14.1942 11.7026 14.6166 11.28L17.1166 8.78005C17.8756 7.99421 18.2956 6.9417 18.2861 5.84921C18.2766 4.75672 17.8384 3.71167 17.0658 2.93914C16.2933 2.1666 15.2482 1.7284 14.1558 1.71891C13.0633 1.70941 12.0108 2.12939 11.2249 2.88838L9.79159 4.31338M11.6666 9.16338C11.3087 8.68494 10.8521 8.28906 10.3278 8.0026C9.80347 7.71613 9.22367 7.54579 8.62771 7.5031C8.03176 7.46042 7.4336 7.54641 6.8738 7.75523C6.314 7.96405 5.80566 8.29082 5.38326 8.71338L2.88326 11.2134C2.12426 11.9992 1.70429 13.0517 1.71378 14.1442C1.72327 15.2367 2.16148 16.2818 2.93401 17.0543C3.70655 17.8268 4.7516 18.265 5.84408 18.2745C6.93657 18.284 7.98908 17.864 8.77492 17.105L10.1999 15.68"
                  stroke="#009A29"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_20_196161">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Link Asset
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0001 4.16406V15.8307M4.16675 9.9974H15.8334"
                stroke="#009A29"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <div className="create-case__grid__case-details__assets">
            <div className="create-case__grid__case-details__assets__title">
              Link Asset
            </div>

            <div className="create-case__grid__case-details__assets__form">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                  stroke="#101828"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input type="text" placeholder="Search for Asset" />
            </div>

            <div className="create-case__grid__case-details__assets__button-group">
              <button type="button">Cancel</button>
              <button type="button">Link Asset</button>
            </div>

            <div className="create-case__grid__case-details__assets__table-header">
              <div></div>
              <div>Asset No</div>
              <div>Description</div>
              <div>Amount</div>
              <div>Status</div>
            </div>

            <div className="create-case__grid__case-details__assets__inner">
              <div className="create-case__grid__case-details__assets__inner__table-body">
                <Image
                  alt=""
                  src="/assets/Image (2).png"
                  width={56}
                  height={56}
                  style={{ borderRadius: "6px" }}
                />
                <div>
                  <span>EFCC/ABJ/INV/012/2024</span>
                </div>
                <div>
                  The EFCC conducted a raid on June 18, 2024, following a
                  thorough investigation into allegati
                </div>
                <div>$ 10,000</div>
                <div>Checked In</div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_574_22588)">
                    <path
                      d="M6.66663 9.9974H13.3333M18.3333 9.9974C18.3333 14.5998 14.6023 18.3307 9.99996 18.3307C5.39759 18.3307 1.66663 14.5998 1.66663 9.9974C1.66663 5.39502 5.39759 1.66406 9.99996 1.66406C14.6023 1.66406 18.3333 5.39502 18.3333 9.9974Z"
                      stroke="#667085"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_574_22588">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className="create-case__grid__case-details__assets__inner__table-body">
                <Image
                  alt=""
                  src="/assets/Image (2).png"
                  width={56}
                  height={56}
                  style={{ borderRadius: "6px" }}
                />
                <div>
                  <span>EFCC/ABJ/INV/012/2024</span>
                </div>
                <div>
                  The EFCC conducted a raid on June 18, 2024, following a
                  thorough investigation into allegati
                </div>
                <div>$ 10,000</div>
                <div>Checked In</div>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_574_22588)">
                    <path
                      d="M6.66663 9.9974H13.3333M18.3333 9.9974C18.3333 14.5998 14.6023 18.3307 9.99996 18.3307C5.39759 18.3307 1.66663 14.5998 1.66663 9.9974C1.66663 5.39502 5.39759 1.66406 9.99996 1.66406C14.6023 1.66406 18.3333 5.39502 18.3333 9.9974Z"
                      stroke="#667085"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_574_22588">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      <CaseImageModal open={modalOpen} images={images} />
    </form>
  );
}
