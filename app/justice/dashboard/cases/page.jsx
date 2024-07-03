"use client";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { assignCase, getCases } from "@/app/apis/case";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";

export default function Cases() {
  const auth = useSelector((state) => state.auth);

  const [modalOpen, setModalOpen] = useState(0);
  const [assignee, setAssignee] = useState(null);
  const [cases, setCases] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState("");
  const [loading, setLoading] = useState("");
  const open = Boolean(anchorEl);



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleModalClose = (e) => {
    if (e.target.classList.contains("cases__modal")) {
      setModalOpen(false);
    }
  };
  const handleGetCases = async () => {
    const response = await getCases(auth?.token);
    console.log("gotten cases", response);
    if (response?.status === 200) {
      setCases(response?.data?.reverse());
    }
  };

  const handleAssign = async (e) => {
    e.preventDefault();
    setLoading(true)
    const response = await assignCase(selectedId, assignee, auth?.token);
    console.log("gotten cases", response);
    // if (response?.status === 200) {
    //   setCases(response?.data?.reverse());
    // }
    setLoading(false)
  };

  useEffect(() => {
    handleGetCases();
  }, []);

  return (
    <div className="cases">
      <div className="cases__header">
        <div className="cases__header__title">
          <h2>Cases</h2>
          <h3>Input more Information here</h3>
        </div>
        <form className="cases__header__form">
          <input type="text" placeholder="Enter Name, Agency or Case #" />
          <button>Search</button>
        </form>

        <div className="cases__header__filter">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="23.5" fill="white" stroke="#A8A8A8" />
            <path
              d="M17 24V16M31 32V29M17 32V28M31 25V16M24 19V16M24 32V23"
              stroke="black"
              stroke-linecap="round"
            />
            <path
              d="M17 28C18.1046 28 19 27.1046 19 26C19 24.8954 18.1046 24 17 24C15.8954 24 15 24.8954 15 26C15 27.1046 15.8954 28 17 28Z"
              stroke="black"
              stroke-linecap="round"
            />
            <path
              d="M24 23C25.1046 23 26 22.1046 26 21C26 19.8954 25.1046 19 24 19C22.8954 19 22 19.8954 22 21C22 22.1046 22.8954 23 24 23Z"
              stroke="black"
              stroke-linecap="round"
            />
            <path
              d="M31 29C32.1046 29 33 28.1046 33 27C33 25.8954 32.1046 25 31 25C29.8954 25 29 25.8954 29 27C29 28.1046 29.8954 29 31 29Z"
              stroke="black"
              stroke-linecap="round"
            />
          </svg>

          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="24" cy="24" r="23.5" fill="white" stroke="#A8A8A8" />
            <path
              d="M29.5401 20.8106C31.1748 20.8106 32.5001 19.4854 32.5001 17.8506C32.5001 16.2159 31.1748 14.8906 29.5401 14.8906C27.9053 14.8906 26.5801 16.2159 26.5801 17.8506C26.5801 19.4854 27.9053 20.8106 29.5401 20.8106Z"
              fill="#292D32"
            />
            <path
              d="M18.46 20.8106C20.0948 20.8106 21.42 19.4854 21.42 17.8506C21.42 16.2159 20.0948 14.8906 18.46 14.8906C16.8252 14.8906 15.5 16.2159 15.5 17.8506C15.5 19.4854 16.8252 20.8106 18.46 20.8106Z"
              fill="#292D32"
            />
            <path
              d="M29.5401 33.1114C31.1748 33.1114 32.5001 31.7862 32.5001 30.1514C32.5001 28.5166 31.1748 27.1914 29.5401 27.1914C27.9053 27.1914 26.5801 28.5166 26.5801 30.1514C26.5801 31.7862 27.9053 33.1114 29.5401 33.1114Z"
              fill="#292D32"
            />
            <path
              d="M18.46 33.1114C20.0948 33.1114 21.42 31.7862 21.42 30.1514C21.42 28.5166 20.0948 27.1914 18.46 27.1914C16.8252 27.1914 15.5 28.5166 15.5 30.1514C15.5 31.7862 16.8252 33.1114 18.46 33.1114Z"
              fill="#292D32"
            />
          </svg>
        </div>
      </div>

      <div className="cases__table">
        <div className="cases__table__header">
          <div>Date Initiated</div>
          <div>Case No</div>
          <div>Agency</div>
          <div>
            Case Status
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_9229_30424)">
                <path
                  d="M6.06065 5.9987C6.21739 5.55314 6.52675 5.17744 6.93395 4.93812C7.34116 4.6988 7.81991 4.61132 8.28544 4.69117C8.75096 4.77102 9.1732 5.01305 9.47737 5.37438C9.78154 5.73572 9.94802 6.19305 9.94732 6.66536C9.94732 7.9987 7.94732 8.66536 7.94732 8.66536M8.00065 11.332H8.00732M14.6673 7.9987C14.6673 11.6806 11.6826 14.6654 8.00065 14.6654C4.31875 14.6654 1.33398 11.6806 1.33398 7.9987C1.33398 4.3168 4.31875 1.33203 8.00065 1.33203C11.6826 1.33203 14.6673 4.3168 14.6673 7.9987Z"
                  stroke="#98A2B3"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_9229_30424">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>
            Status of Suspect
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_9229_30424)">
                <path
                  d="M6.06065 5.9987C6.21739 5.55314 6.52675 5.17744 6.93395 4.93812C7.34116 4.6988 7.81991 4.61132 8.28544 4.69117C8.75096 4.77102 9.1732 5.01305 9.47737 5.37438C9.78154 5.73572 9.94802 6.19305 9.94732 6.66536C9.94732 7.9987 7.94732 8.66536 7.94732 8.66536M8.00065 11.332H8.00732M14.6673 7.9987C14.6673 11.6806 11.6826 14.6654 8.00065 14.6654C4.31875 14.6654 1.33398 11.6806 1.33398 7.9987C1.33398 4.3168 4.31875 1.33203 8.00065 1.33203C11.6826 1.33203 14.6673 4.3168 14.6673 7.9987Z"
                  stroke="#98A2B3"
                  stroke-width="1.33333"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_9229_30424">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div>Offence</div>
          <div>Type</div>
          <div>Assignee</div>
        </div>

        {cases?.map((item, index) => (
          <div
            className="cases__table__body"
            key={index}
            onClick={() => {
              // if (assignee) {
                window.location.href = `/justice/dashboard/case-details/${item?.id}`
              // }
            }}
          >
            <div>{moment(item?.dateInitiated).format("MMMM D, YYYY")}</div>
            <div>{item?.caseNumber}</div>
            <div>{item?.agency}</div>
            {item?.caseStatus == "Unassigned" &&
            <button className="cases__table__body__case-status cases__table__body__unassigned">
            Unassigned
          </button>
              }
              {item?.caseStatus == "Under review" && <button className="cases__table__body__case-status cases__table__body__review">
                Under review
              </button>}
              
           { item?.accusedStatus == "On Bail" &&
<button className="cases__table__body__accused-status cases__table__body__bail">
On Bail
            </button>}
           { item?.accusedStatus == "In Custody" &&
<button className="cases__table__body__accused-status cases__table__body__custody">
In Custody
            </button>}
           { item?.accusedStatus == "Convicted" &&
<button className="cases__table__body__accused-status cases__table__body__convicted">
Convicted
            </button>}
           { item?.accusedStatus == "Discharged" &&
<button className="cases__table__body__accused-status cases__table__body__discharged">
Discharged
            </button>}
           { item?.accusedStatus == "Deceased" &&
<button className="cases__table__body__accused-status cases__table__body__deceased">
Deceased
            </button>}
            <div>{item?.offenseCategory}</div>
            <div>{item?.offenseType}</div>
            {item?.assignedJudge === "" ? (
              <div
              className="cases__table__body__assign"
              onClick={(e) => {
                e.stopPropagation();
                setModalOpen(1)
                setSelectedId(item?.id)
              }}
            >
              Assign now{" "}
              <svg
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.92 8.67969H11.69H6.07999C5.11999 8.67969 4.63999 9.83969 5.31999 10.5197L10.5 15.6997C11.33 16.5297 12.68 16.5297 13.51 15.6997L15.48 13.7297L18.69 10.5197C19.36 9.83969 18.88 8.67969 17.92 8.67969Z"
                  fill="#009B07"
                />
              </svg>
            </div>
            ) : (
              item?.assignedJudge
            )}
            <div className="cases__table__body__options"
            onClick={handleClick}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
             
              >
<path d="M2.5 5.0013H4.16667M4.16667 5.0013H17.5M4.16667 5.0013V16.668C4.16667 17.11 4.34226 17.5339 4.65482 17.8465C4.96738 18.159 5.39131 18.3346 5.83333 18.3346H14.1667C14.6087 18.3346 15.0326 18.159 15.3452 17.8465C15.6577 17.5339 15.8333 17.11 15.8333 16.668V5.0013H4.16667ZM6.66667 5.0013V3.33464C6.66667 2.89261 6.84226 2.46868 7.15482 2.15612C7.46738 1.84356 7.89131 1.66797 8.33333 1.66797H11.6667C12.1087 1.66797 12.5326 1.84356 12.8452 2.15612C13.1577 2.46868 13.3333 2.89261 13.3333 3.33464V5.0013M8.33333 9.16797V14.168M11.6667 9.16797V14.168" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"
 onClick={(e) => {
  e.stopPropagation();
  window.location.href = "/justice/dashboard/edit-case"
}}
>
<g clip-path="url(#clip0_9318_21502)">
<path d="M14.166 2.49895C14.3849 2.28008 14.6447 2.10646 14.9307 1.98801C15.2167 1.86956 15.5232 1.80859 15.8327 1.80859C16.1422 1.80859 16.4487 1.86956 16.7347 1.98801C17.0206 2.10646 17.2805 2.28008 17.4993 2.49895C17.7182 2.71782 17.8918 2.97766 18.0103 3.26362C18.1287 3.54959 18.1897 3.85609 18.1897 4.16562C18.1897 4.47514 18.1287 4.78164 18.0103 5.06761C17.8918 5.35358 17.7182 5.61341 17.4993 5.83228L6.24935 17.0823L1.66602 18.3323L2.91602 13.7489L14.166 2.49895Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_9318_21502">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>

            </div>

           

          </div>
        ))}
        {/* <div
          className="cases__table__body"
          onClick={() =>
            (window.location.href = "/justice/dashboard/case-details")
          }
        >
          <div>11-03-2024</div>
          <div>EF18964</div>
          <div>EFCC</div>
          <button className="cases__table__body__case-status cases__table__body__review">
            Under review
          </button>
          <button className="cases__table__body__accused-status cases__table__body__remanded">
            Remanded In Jail
          </button>
          <div>Cyber Crime</div>
          <div>Criminal Case</div>
          <div>Ifesinachi Eze</div>
          <div className="cases__table__body__options">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 7.5C13.104 7.5 14 6.604 14 5.5C14 4.396 13.104 3.5 12 3.5C10.896 3.5 10 4.396 10 5.5C10 6.604 10.896 7.5 12 7.5ZM12 10.5C10.896 10.5 10 11.396 10 12.5C10 13.604 10.896 14.5 12 14.5C13.104 14.5 14 13.604 14 12.5C14 11.396 13.104 10.5 12 10.5ZM10 19.5C10 18.396 10.896 17.5 12 17.5C13.104 17.5 14 18.396 14 19.5C14 20.604 13.104 21.5 12 21.5C10.896 21.5 10 20.604 10 19.5Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div
          className="cases__table__body"
          onClick={() =>
            (window.location.href = "/justice/dashboard/case-details")
          }
        >
          <div>11-03-2024</div>
          <div>EF18964</div>
          <div>EFCC</div>
          <button className="cases__table__body__case-status cases__table__body__filed">
            Filed in Court
          </button>
          <button className="cases__table__body__accused-status cases__table__body__wanted">
            Wanted
          </button>
          <div>Cyber Crime</div>
          <div>Criminal Case</div>
          <div>Ifesinachi Eze</div>
          <div className="cases__table__body__options">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 7.5C13.104 7.5 14 6.604 14 5.5C14 4.396 13.104 3.5 12 3.5C10.896 3.5 10 4.396 10 5.5C10 6.604 10.896 7.5 12 7.5ZM12 10.5C10.896 10.5 10 11.396 10 12.5C10 13.604 10.896 14.5 12 14.5C13.104 14.5 14 13.604 14 12.5C14 11.396 13.104 10.5 12 10.5ZM10 19.5C10 18.396 10.896 17.5 12 17.5C13.104 17.5 14 18.396 14 19.5C14 20.604 13.104 21.5 12 21.5C10.896 21.5 10 20.604 10 19.5Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div
          className="cases__table__body"
          onClick={() =>
            (window.location.href = "/justice/dashboard/case-details")
          }
        >
          <div>11-03-2024</div>
          <div>EF18964</div>
          <div>EFCC</div>
          <button className="cases__table__body__case-status cases__table__body__closed">
            Closed
          </button>
          <button className="cases__table__body__accused-status cases__table__body__acquitted">
            Acquitted
          </button>
          <div>Cyber Crime</div>
          <div>Criminal Case</div>
          <div>Ifesinachi Eze</div>
          <div className="cases__table__body__options">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 7.5C13.104 7.5 14 6.604 14 5.5C14 4.396 13.104 3.5 12 3.5C10.896 3.5 10 4.396 10 5.5C10 6.604 10.896 7.5 12 7.5ZM12 10.5C10.896 10.5 10 11.396 10 12.5C10 13.604 10.896 14.5 12 14.5C13.104 14.5 14 13.604 14 12.5C14 11.396 13.104 10.5 12 10.5ZM10 19.5C10 18.396 10.896 17.5 12 17.5C13.104 17.5 14 18.396 14 19.5C14 20.604 13.104 21.5 12 21.5C10.896 21.5 10 20.604 10 19.5Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div
          className="cases__table__body"
          onClick={() =>
            (window.location.href = "/justice/dashboard/case-details")
          }
        >
          <div>11-03-2024</div>
          <div>EF18964</div>
          <div>EFCC</div>
          <button className="cases__table__body__case-status cases__table__body__re-opened">
            Re-Opened
          </button>
          <button className="cases__table__body__accused-status cases__table__body__remanded">
            Remanded In Jail
          </button>
          <div>Cyber Crime</div>
          <div>Criminal Case</div>
          <div>Ifesinachi Eze</div>
          <div className="cases__table__body__options">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 7.5C13.104 7.5 14 6.604 14 5.5C14 4.396 13.104 3.5 12 3.5C10.896 3.5 10 4.396 10 5.5C10 6.604 10.896 7.5 12 7.5ZM12 10.5C10.896 10.5 10 11.396 10 12.5C10 13.604 10.896 14.5 12 14.5C13.104 14.5 14 13.604 14 12.5C14 11.396 13.104 10.5 12 10.5ZM10 19.5C10 18.396 10.896 17.5 12 17.5C13.104 17.5 14 18.396 14 19.5C14 20.604 13.104 21.5 12 21.5C10.896 21.5 10 20.604 10 19.5Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div
          className="cases__table__body"
          onClick={() =>
            (window.location.href = "/justice/dashboard/case-details")
          }
        >
          <div>11-03-2024</div>
          <div>EF18964</div>
          <div>EFCC</div>
          <button className="cases__table__body__case-status cases__table__body__review">
            Under review
          </button>
          <button className="cases__table__body__accused-status cases__table__body__remanded">
            Remanded In Jail
          </button>
          <div>Cyber Crime</div>
          <div>Criminal Case</div>
          <div>Ifesinachi Eze</div>
          <div className="cases__table__body__options">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 7.5C13.104 7.5 14 6.604 14 5.5C14 4.396 13.104 3.5 12 3.5C10.896 3.5 10 4.396 10 5.5C10 6.604 10.896 7.5 12 7.5ZM12 10.5C10.896 10.5 10 11.396 10 12.5C10 13.604 10.896 14.5 12 14.5C13.104 14.5 14 13.604 14 12.5C14 11.396 13.104 10.5 12 10.5ZM10 19.5C10 18.396 10.896 17.5 12 17.5C13.104 17.5 14 18.396 14 19.5C14 20.604 13.104 21.5 12 21.5C10.896 21.5 10 20.604 10 19.5Z"
                fill="black"
              />
            </svg>
          </div>
        </div> */}

        <div className="cases__table__footer">
          <div className="cases__table__footer__nav">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8346 10.0013H4.16797M4.16797 10.0013L10.0013 15.8346M4.16797 10.0013L10.0013 4.16797"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div>Previous</div>
          </div>

          {/* pagination */}

          <div className="cases__table__footer__nav">
            <div>Next</div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16797 10.0013H15.8346M15.8346 10.0013L10.0013 4.16797M15.8346 10.0013L10.0013 15.8346"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div className="cases__modal" onClick={handleModalClose}>
          {modalOpen === 1 && (
            <div className="cases__modal__inner">
              <div className="cases__modal__inner__title">Assign case to</div>
              <form className="cases__modal__inner__form"
              onSubmit={handleAssign}
              >
                <label htmlFor="">Assign</label>
                <input type="text"
                placeholder="Enter judge name"
                 value={assignee}
                 onChange={(e) => setAssignee(e.target.value)}
                 required
                />
              
                {/* {!!assignee && (
                  <div className="cases__modal__inner__form__names">
                    <div>
                      Okoli Chiamaka
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M5.80806 5.80806C6.05214 5.56398 6.44786 5.56398 6.69194 5.80806L10 9.11612L13.3081 5.80806C13.5521 5.56398 13.9479 5.56398 14.1919 5.80806C14.436 6.05214 14.436 6.44786 14.1919 6.69194L10.8839 10L14.1919 13.3081C14.436 13.5521 14.436 13.9479 14.1919 14.1919C13.9479 14.436 13.5521 14.436 13.3081 14.1919L10 10.8839L6.69194 14.1919C6.44786 14.436 6.05214 14.436 5.80806 14.1919C5.56398 13.9479 5.56398 13.5521 5.80806 13.3081L9.11612 10L5.80806 6.69194C5.56398 6.44786 5.56398 6.05214 5.80806 5.80806Z"
                          fill="black"
                        />
                      </svg>
                    </div>
                  </div>
                )} */}
              <button 
                type="submit"
                >{loading ? "Loading..." : "Assign"}</button>
              </form>
            </div>
          )}
          {modalOpen === 2 && (
            <div className="cases__modal__success">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <rect
                  width="80"
                  height="80"
                  rx="40"
                  fill="url(#paint0_linear_5617_29803)"
                />
                <rect
                  x="20"
                  y="20"
                  width="40"
                  height="40"
                  fill="url(#pattern0_5617_29803)"
                />
                <defs>
                  <pattern
                    id="pattern0_5617_29803"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image0_5617_29803"
                      transform="scale(0.0138889)"
                    />
                  </pattern>
                  <linearGradient
                    id="paint0_linear_5617_29803"
                    x1="40"
                    y1="0"
                    x2="40"
                    y2="80"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FFC357" stop-opacity="0.25" />
                    <stop offset="1" stop-color="#FFC357" stop-opacity="0" />
                  </linearGradient>
                  <image
                    id="image0_5617_29803"
                    width="72"
                    height="72"
                    xlinkHref="data:image/png;base64,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"
                  />
                </defs>
              </svg>

              <div className="cases__modal__success__title">Case Assigned</div>

              <button onClick={() => setModalOpen(null)}>Close</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
