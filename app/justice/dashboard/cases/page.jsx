"use client";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { assignCase, getCases } from "@/app/apis/case";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import CheckboxToggle from "../../admin/add-role/CheckboxToggle";

export default function Cases() {
  const auth = useSelector((state) => state.auth);

  const [modalOpen, setModalOpen] = useState(0);
  const [assignee, setAssignee] = useState(null);
  const [cases, setCases] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedId, setSelectedId] = useState("");
  const [loading, setLoading] = useState("");
  const [caseType, setCaseType] = useState("active");
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
    setLoading(true);
    const response = await assignCase(selectedId, assignee, auth?.token);
    console.log("gotten cases", response);
    // if (response?.status === 200) {
    //   setCases(response?.data?.reverse());
    // }
    setLoading(false);
  };

  useEffect(() => {
    handleGetCases();
  }, []);

  return (
    <div className="cases">
      <div className="cases__header">
        <div className="cases__header__title">Cases</div>

        <div className="cases__header__middle">
          <div
            className={caseType === "active" ? "active" : "close"}
            onClick={() => setCaseType("active")}
          >
            Active
          </div>
          <div
            className={caseType === "close" ? "active" : "close"}
            onClick={() => setCaseType("close")}
          >
            Close
          </div>
        </div>

        <button
          className="cases__header__button"
          onClick={() =>
            (window.location.href = "/justice/dashboard/create-case")
          }
        >
          Create New Case{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.9987 3.3335V12.6668M3.33203 8.00016H12.6654"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="cases__actions">
        <form action="" className="cases__actions__input">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6667 1.83594V4.5026M5.33333 1.83594V4.5026M2 7.16927H14M3.33333 3.16927H12.6667C13.403 3.16927 14 3.76622 14 4.5026V13.8359C14 14.5723 13.403 15.1693 12.6667 15.1693H3.33333C2.59695 15.1693 2 14.5723 2 13.8359V4.5026C2 3.76622 2.59695 3.16927 3.33333 3.16927Z"
              stroke="#101828"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input type="text" placeholder="MM/DD/YY-MM/DD/YY" />
        </form>

        {/* Case No */}
        <form action="" className="cases__actions__input">
          <input type="text" placeholder="Case No" />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z"
              stroke="#101828"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </form>

        {/* Agency */}
        <form action="" className="cases__actions__input">
          <select name="" id="">
            <option value="">Agency</option>
          </select>
        </form>

        {/* Status of Suspect */}
        <form action="" className="cases__actions__input">
          <select name="" id="">
            <option value="">Status of Suspect </option>
          </select>
        </form>
        <div className="cases__actions__filters">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1554 3.5H3.84473C3.09527 3.5 2.71709 4.40935 3.24813 4.94039L9.74999 11.4432V18.6875C9.74999 18.9628 9.88433 19.2208 10.1099 19.3787L12.9224 21.3468C13.4773 21.7352 14.25 21.3415 14.25 20.6555V11.4432L20.752 4.94039C21.282 4.41041 20.9064 3.5 20.1554 3.5Z"
              fill="#033132"
            />
          </svg>
          Filter
        </div>
      </div>

      {/* --------------- */}

      <div className="cases__body">
        <table className="cases-table">
          <thead>
            <tr>
              <th>
                <div className="user-flex">
                  <div>
                    <CheckboxToggle />
                  </div>
                  <span>Date initiated</span>
                  <div>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.9987 1.33398V10.6673M5.9987 10.6673L10.6654 6.00065M5.9987 10.6673L1.33203 6.00065"
                        stroke="#667085"
                        stroke-width="1.33333"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </th>
              <th>Case No</th>
              <th>Agency</th>

              <th>
                <div className="user-flex">
                  <span>Case status</span>
                  <div>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_517_6623)">
                        <path
                          d="M6.89464 6.0026C7.05137 5.55705 7.36074 5.18134 7.76794 4.94203C8.17514 4.70271 8.6539 4.61523 9.11942 4.69508C9.58494 4.77493 10.0072 5.01695 10.3114 5.37829C10.6155 5.73963 10.782 6.19695 10.7813 6.66927C10.7813 8.0026 8.7813 8.66927 8.7813 8.66927M8.83464 11.3359H8.8413M15.5013 8.0026C15.5013 11.6845 12.5165 14.6693 8.83464 14.6693C5.15274 14.6693 2.16797 11.6845 2.16797 8.0026C2.16797 4.32071 5.15274 1.33594 8.83464 1.33594C12.5165 1.33594 15.5013 4.32071 15.5013 8.0026Z"
                          stroke="#98A2B3"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_517_6623">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.833984)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </th>

              <th>
                <div className="user-flex">
                  <span>Status of Suspect</span>
                  <div>
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_517_6623)">
                        <path
                          d="M6.89464 6.0026C7.05137 5.55705 7.36074 5.18134 7.76794 4.94203C8.17514 4.70271 8.6539 4.61523 9.11942 4.69508C9.58494 4.77493 10.0072 5.01695 10.3114 5.37829C10.6155 5.73963 10.782 6.19695 10.7813 6.66927C10.7813 8.0026 8.7813 8.66927 8.7813 8.66927M8.83464 11.3359H8.8413M15.5013 8.0026C15.5013 11.6845 12.5165 14.6693 8.83464 14.6693C5.15274 14.6693 2.16797 11.6845 2.16797 8.0026C2.16797 4.32071 5.15274 1.33594 8.83464 1.33594C12.5165 1.33594 15.5013 4.32071 15.5013 8.0026Z"
                          stroke="#98A2B3"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_517_6623">
                          <rect
                            width="16"
                            height="16"
                            fill="white"
                            transform="translate(0.833984)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </th>
              <th>Offences</th>
              <th>Assignee</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {cases.map((item, index) => (
              <tr
                key={index}
                onClick={() => {
                  // if (assignee) {
                  window.location.href = `/justice/dashboard/case-details/${item?.id}`;
                  // }
                }}
              >
                <td data-cell="date initiated">
                  <div className="user-info">
                    <CheckboxToggle />
                    <div>
                      <h2>
                        {moment(item?.dateInitiated).format("MMMM D, YYYY")}
                      </h2>
                    </div>
                  </div>
                </td>

                <td data-cell="case no">{item?.caseNumber}</td>
                <td data-cell="agency">{item?.agency}</td>
                <td data-cell="case status">
                  <div className="case-status">{item.caseStatus}</div>
                </td>

                <td data-cell="suspect status">
                  <span
                    className={`status ${item.accusedStatus
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {item.accusedStatus}
                  </span>
                </td>
                <td data-cell="offences">
                  {item.offenseCategory}
                  {/* , {item.offenseType} */}
                </td>
                <td data-cell="assignee">
                  <div className="assign-now">
                    {item?.assignedJudge === "" ? (
                      <>
                        <span className="text">Assign Now</span>

                        <span className="dropdown-icon">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M14.9336 6.82031H9.74195H5.06695C4.26695 6.82031 3.86695 7.78698 4.43361 8.35365L8.75028 12.6703C9.44195 13.362 10.5669 13.362 11.2586 12.6703L12.9003 11.0286L15.5753 8.35365C16.1336 7.78698 15.7336 6.82031 14.9336 6.82031Z"
                              fill="#009B07"
                            />
                          </svg>
                        </span>
                      </>
                    ) : (
                      item?.assignedJudge
                    )}
                  </div>
                </td>
                <td data-cell="view">
                  <div className="offence-icons">
                    <span
                      className="pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        window.location.href = `/justice/dashboard/case-details/${item?.id}`;
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M0.833984 10.0026C0.833984 10.0026 4.16732 3.33594 10.0007 3.33594C15.834 3.33594 19.1673 10.0026 19.1673 10.0026C19.1673 10.0026 15.834 16.6693 10.0007 16.6693C4.16732 16.6693 0.833984 10.0026 0.833984 10.0026Z"
                          stroke="#667085"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.0007 12.5026C11.3814 12.5026 12.5006 11.3833 12.5006 10.0026C12.5006 8.62189 11.3814 7.5026 10.0007 7.5026C8.61994 7.5026 7.50065 8.62189 7.50065 10.0026C7.50065 11.3833 8.61994 12.5026 10.0007 12.5026Z"
                          stroke="#667085"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>

                    <span
                      className="pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        // window.location.href = `/justice/dashboard/case-details/${item?.id}`
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99935 1.66406L12.5743 6.88073L18.3327 7.7224L14.166 11.7807L15.1493 17.5141L9.99935 14.8057L4.84935 17.5141L5.83268 11.7807L1.66602 7.7224L7.42435 6.88073L9.99935 1.66406Z"
                          stroke="#667085"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/*<ExcitingCase isOpen={isExcitingCaseOpen} onClose={handleCloseExcitingCase} /> */}
      </div>

      {/* footer */}

      <div className="cases__footer">
        <div className="cases__footer__nav">
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

        <div className="cases__footer__nav">
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
  );
}
