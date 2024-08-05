"use client";

import CheckboxToggle from "../../admin/add-role/CheckboxToggle";

export default function FavouriteCase() {

  return (
    <div className="fav-cases">
      <div className="fav-cases__header">
        <div className="fav-cases__header__title">Favourites Cases</div>
      </div>
      <div className="fav-cases__actions">
        <form action="" className="fav-cases__actions__input">
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
        <form action="" className="fav-cases__actions__input">
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
        <form action="" className="fav-cases__actions__input">
          <select name="" id="">
            <option value="">Agency</option>
          </select>
        </form>

        {/* Status of Suspect */}
        <form action="" className="fav-cases__actions__input">
          <select name="" id="">
            <option value="">Status of Suspect </option>
          </select>
        </form>
        <div className="fav-cases__actions__filters">
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

      <div className="fav-cases__body">
        <table className="fav-cases-table">
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
            </tr>
          </thead>

          <tbody>
            {[
              {
                date: "JAN-6-2022",
                caseNo: "PF00364",
                agency: "EFCC",
                caseStatus: "Unassigned",
                status: "On Ball",
                offences: "Terrorism",
              },
              {
                date: "JAN-6-2022",
                caseNo: "PF00364",
                agency: "CUSTOM",
                caseStatus: "Unassigned",
                status: "In Custody",
                offences: "Cyber Crime",
              },
              {
                date: "JAN-6-2022",
                caseNo: "PF00364",
                agency: "NPF",
                caseStatus: "Unassigned",
                status: "On Ball",
                offences: "Armed Robbery",
              },
              {
                date: "JAN-6-2022",
                caseNo: "PF00364",
                agency: "DSS",
                caseStatus: "Unassigned",
                status: "In Custody",
                offences: "Fraud",
              },
              {
                date: "JAN-6-2022",
                caseNo: "PF00364",
                agency: "NPF",
                caseStatus: "Unassigned",
                status: "Convicted",
                offences: "Vandalism",
              },
              {
                date: "JAN-6-2022",
                caseNo: "PF00364",
                agency: "IMMIGRATION",
                caseStatus: "Unassigned",
                status: "Discharged",
                offences: "Impersonation",
              },
              {
                date: "JAN-6-2022",
                caseNo: "PF00364",
                agency: "EFCC",
                caseStatus: "Unassigned",
                status: "Convicted",
                offences: "Smuggling",
              },
              {
                date: "JAN-6-2022",
                caseNo: "PF00364",
                agency: "CUSTOM",
                caseStatus: "Unassigned",
                status: "Deceased",
                offences: "Currency Defacing",
              },
              {
                date: "JAN-6-2022",
                caseNo: "PF00364",
                agency: "DSS",
                caseStatus: "Unassigned",
                status: "Discharged",
                offences: "Fraud",
              },
              {
                date: "JAN-6-2022",
                caseNo: "PF00364",
                agency: "NPF",
                caseStatus: "Unassigned",
                status: "Deceased",
                offences: "Cyber Crime",
              },
            ].map((user, index) => (
              <tr key={index}>
                <td>
                  <div className="user-info">
                    <CheckboxToggle />
                    <div>
                      <h2>{user.date}</h2>
                    </div>
                  </div>
                </td>

                <td>{user.caseNo}</td>
                <td>{user.agency}</td>
                <td>
                  <div className="case-status">{user.caseStatus}</div>
                </td>

                <td>
                  <span
                    className={`status ${user.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {user.status}
                  </span>
                </td>
                <td>
                  <div className="offence-flex">
                    <span>{user.offences}</span>

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
                            d="M9.99935 1.66406L12.5743 6.88073L18.3327 7.7224L14.166 11.7807L15.1494 17.5141L9.99935 14.8057L4.84935 17.5141L5.83268 11.7807L1.66602 7.7224L7.42435 6.88073L9.99935 1.66406Z"
                            fill="#FFD02A"
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
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* footer */}

      <div className="fav-cases__footer">
        <div className="fav-cases__footer__nav">
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

        <div className="fav-cases__footer__nav">
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
