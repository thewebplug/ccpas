"use client";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { assignCase, getCases } from "@/app/apis/case";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import CheckboxToggle from "@/app/justice/admin/add-role/CheckboxToggle";

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
    <div className="exciting-case">
      <div className="exciting-case__header">
        <div className="exciting-case__header__title">Deactivated cases</div>

       
        <button
          className="exciting-case__header__button"
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

      <div className="exciting-case__actions">
        <form action="" className="exciting-case__actions__input">
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
        <form action="" className="exciting-case__actions__input">
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
        <form action="" className="exciting-case__actions__input">
          <select name="" id="">
            <option value="">Agency</option>
          </select>
        </form>

        {/* Status of Suspect */}
        <form action="" className="exciting-case__actions__input">
          <select name="" id="">
            <option value="">Status of Suspect </option>
          </select>
        </form>
        <div className="exciting-case__actions__filters">
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

      <div className="exciting-case__body">
        <table className="exciting-case-table">
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
              <tr key={index}
              onClick={() => {
                // if (assignee) {
                  window.location.href = `/justice/dashboard/case-details/${item?.id}`
                // }
              }}
              >
                <td>
                  <div className="user-info">
                    <CheckboxToggle />
                    <div>
                      <h2>
                        {moment(item?.dateInitiated).format("MMMM D, YYYY")}
                      </h2>
                    </div>
                  </div>
                </td>

                <td>{item?.caseNumber}</td>
                <td>{item?.agency}</td>
                <td>
                  <div className="case-status">{item.caseStatus}</div>
                </td>

                <td>
                  <span
                    className={`status ${item.accusedStatus
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {item.accusedStatus}
                  </span>
                </td>
                <td>
                  {item.offenseCategory}
                  {/* , {item.offenseType} */}
                </td>
                <td>
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
                <td>
                  <div className="offence-icons">
                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2.5 4.9974H4.16667M4.16667 4.9974H17.5M4.16667 4.9974V16.6641C4.16667 17.1061 4.34226 17.53 4.65482 17.8426C4.96738 18.1551 5.39131 18.3307 5.83333 18.3307H14.1667C14.6087 18.3307 15.0326 18.1551 15.3452 17.8426C15.6577 17.53 15.8333 17.1061 15.8333 16.6641V4.9974H4.16667ZM6.66667 4.9974V3.33073C6.66667 2.8887 6.84226 2.46478 7.15482 2.15222C7.46738 1.83966 7.89131 1.66406 8.33333 1.66406H11.6667C12.1087 1.66406 12.5326 1.83966 12.8452 2.15222C13.1577 2.46478 13.3333 2.8887 13.3333 3.33073V4.9974M8.33333 9.16406V14.1641M11.6667 9.16406V14.1641"
                          stroke="#667085"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>

                    <span>
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_517_14405)">
                          <path
                            d="M14.166 2.50286C14.3849 2.28399 14.6447 2.11037 14.9307 1.99192C15.2167 1.87347 15.5232 1.8125 15.8327 1.8125C16.1422 1.8125 16.4487 1.87347 16.7347 1.99192C17.0206 2.11037 17.2805 2.28399 17.4993 2.50286C17.7182 2.72173 17.8918 2.98156 18.0103 3.26753C18.1287 3.5535 18.1897 3.85999 18.1897 4.16952C18.1897 4.47905 18.1287 4.78555 18.0103 5.07152C17.8918 5.35748 17.7182 5.61732 17.4993 5.83619L6.24935 17.0862L1.66602 18.3362L2.91602 13.7529L14.166 2.50286Z"
                            stroke="#667085"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_517_14405">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
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

      <div className="exciting-case__footer">
        <div className="exciting-case__footer__nav">
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

        <div className="exciting-case__footer__nav">
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
