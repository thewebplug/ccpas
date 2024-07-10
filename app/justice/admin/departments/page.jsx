import Image from "next/image";

export default function Departments() {
  return (
    <div className="departments">
      <div className="departments__header">
        <div className="departments__header__title">Department</div>
        <div className="departments__header__button">
          Add New Department{" "}
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
        </div>
      </div>
      <div className="departments__actions">
        <form action="" className="departments__actions__input">
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
          <input type="text" placeholder="Search" />
        </form>
        <form action="" className="departments__actions__input">
          <svg
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.6667 1.8335V4.50016M5.33333 1.8335V4.50016M2 7.16683H14M3.33333 3.16683H12.6667C13.403 3.16683 14 3.76378 14 4.50016V13.8335C14 14.5699 13.403 15.1668 12.6667 15.1668H3.33333C2.59695 15.1668 2 14.5699 2 13.8335V4.50016C2 3.76378 2.59695 3.16683 3.33333 3.16683Z"
              stroke="#101828"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <select name="" id="">
            <option value="">Location</option>
          </select>
        </form>

        <div className="departments__actions__filters">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5119 6.35L13.5719 2.92C12.6019 2.36 11.4019 2.36 10.4219 2.92L4.49187 6.35C3.52187 6.91 2.92188 7.95 2.92188 9.08V15.92C2.92188 17.04 3.52187 18.08 4.49187 18.65L10.4319 22.08C11.4019 22.64 12.6019 22.64 13.5819 22.08L19.5219 18.65C20.4919 18.09 21.0919 17.05 21.0919 15.92V9.08C21.0819 7.95 20.4819 6.92 19.5119 6.35ZM11.2519 8.25C11.2519 7.84 11.5919 7.5 12.0019 7.5C12.4119 7.5 12.7519 7.84 12.7519 8.25V13.5C12.7519 13.91 12.4119 14.25 12.0019 14.25C11.5919 14.25 11.2519 13.91 11.2519 13.5V8.25ZM12.9219 17.13C12.8719 17.25 12.8019 17.36 12.7119 17.46C12.5219 17.65 12.2719 17.75 12.0019 17.75C11.8719 17.75 11.7419 17.72 11.6219 17.67C11.4919 17.62 11.3919 17.55 11.2919 17.46C11.2019 17.36 11.1319 17.25 11.0719 17.13C11.0219 17.01 11.0019 16.88 11.0019 16.75C11.0019 16.49 11.1019 16.23 11.2919 16.04C11.3919 15.95 11.4919 15.88 11.6219 15.83C11.9919 15.67 12.4319 15.76 12.7119 16.04C12.8019 16.14 12.8719 16.24 12.9219 16.37C12.9719 16.49 13.0019 16.62 13.0019 16.75C13.0019 16.88 12.9719 17.01 12.9219 17.13Z"
              fill="#292D32"
            />
          </svg>
          Priority
        </div>
        <div className="departments__actions__filters">
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

        <button className="departments__actions__button">Apply</button>
      </div>

      <div className="departments__heading">
        <div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="19"
              height="19"
              rx="5.5"
              fill="white"
            />
            <rect
              x="0.5"
              y="0.5"
              width="19"
              height="19"
              rx="5.5"
              stroke="#D0D5DD"
            />
          </svg>
        </div>

        <div>Department</div>
        <div>Location</div>
        <div>
          Ongoing Case{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.9987 3.3335V12.6668M7.9987 12.6668L12.6654 8.00016M7.9987 12.6668L3.33203 8.00016"
              stroke="#667085"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>
          No of Prosecutors{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.9987 3.3335V12.6668M7.9987 12.6668L12.6654 8.00016M7.9987 12.6668L3.33203 8.00016"
              stroke="#667085"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="departments__body">
        <div className="departments__body__inner">
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="19"
                rx="5.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="19"
                rx="5.5"
                stroke="#D0D5DD"
              />
            </svg>
          </div>
          <div>Department of Public Prosecutions (DPP)</div>
          <div>Federal Secretariat Complex, Abuja</div>
          <div>132</div>
          <div>132</div>
        </div>
        <div className="departments__body__inner">
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="19"
                rx="5.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="19"
                rx="5.5"
                stroke="#D0D5DD"
              />
            </svg>
          </div>
          <div>Department of Public Prosecutions (DPP)</div>
          <div>Federal Secretariat Complex, Abuja</div>
          <div>132</div>
          <div>132</div>
        </div>
        <div className="departments__body__inner">
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="19"
                rx="5.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="19"
                rx="5.5"
                stroke="#D0D5DD"
              />
            </svg>
          </div>
          <div>Department of Public Prosecutions (DPP)</div>
          <div>Federal Secretariat Complex, Abuja</div>
          <div>132</div>
          <div>132</div>
        </div>
        <div className="departments__body__inner">
          <div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="19"
                rx="5.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="19"
                height="19"
                rx="5.5"
                stroke="#D0D5DD"
              />
            </svg>
          </div>
          <div>Department of Public Prosecutions (DPP)</div>
          <div>Federal Secretariat Complex, Abuja</div>
          <div>132</div>
          <div>132</div>
        </div>
      </div>

      <div className="departments__footer">
        <div className="departments__footer__nav">
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

        <div className="departments__footer__nav">
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

      <div className="departments__details">
        <div className="departments__details__header">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.57141 18.8201C9.38141 18.8201 9.19141 18.7501 9.04141 18.6001L2.97141 12.5301C2.68141 12.2401 2.68141 11.7601 2.97141 11.4701L9.04141 5.40012C9.33141 5.11012 9.81141 5.11012 10.1014 5.40012C10.3914 5.69012 10.3914 6.17012 10.1014 6.46012L4.56141 12.0001L10.1014 17.5401C10.3914 17.8301 10.3914 18.3101 10.1014 18.6001C9.96141 18.7501 9.76141 18.8201 9.57141 18.8201Z"
                fill="#061B2E"
              />
              <path
                d="M20.5014 12.7501H3.67141C3.26141 12.7501 2.92141 12.4101 2.92141 12.0001C2.92141 11.5901 3.26141 11.2501 3.67141 11.2501H20.5014C20.9114 11.2501 21.2514 11.5901 21.2514 12.0001C21.2514 12.4101 20.9114 12.7501 20.5014 12.7501Z"
                fill="#061B2E"
              />
            </svg>

            <div>Department of Public Prosecutions (DPP)</div>
          </div>

          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                stroke="#EAEEF4"
              />
              <path
                d="M21.6933 19.1923C21.5759 19.3097 21.4168 19.3756 21.2508 19.3756C21.0848 19.3756 20.9256 19.3097 20.8083 19.1923C20.6909 19.075 20.625 18.9158 20.625 18.7498C20.625 18.5838 20.6909 18.4247 20.8083 18.3073L25.8083 13.3073C25.8664 13.2492 25.9354 13.2031 26.0113 13.1717C26.0872 13.1402 26.1686 13.124 26.2508 13.124C26.333 13.124 26.4143 13.1402 26.4903 13.1717C26.5662 13.2031 26.6352 13.2492 26.6933 13.3073C26.7514 13.3654 26.7975 13.4344 26.8289 13.5103C26.8604 13.5863 26.8766 13.6676 26.8766 13.7498C26.8766 13.832 26.8604 13.9134 26.8289 13.9893C26.7975 14.0652 26.7514 14.1342 26.6933 14.1923L21.6933 19.1923ZM14.1933 26.6923C14.1352 26.7504 14.0662 26.7965 13.9903 26.828C13.9143 26.8594 13.833 26.8756 13.7508 26.8756C13.6686 26.8756 13.5872 26.8594 13.5113 26.828C13.4354 26.7965 13.3664 26.7504 13.3083 26.6923C13.2502 26.6342 13.2041 26.5652 13.1726 26.4893C13.1412 26.4134 13.125 26.332 13.125 26.2498C13.125 26.1676 13.1412 26.0863 13.1726 26.0103C13.2041 25.9344 13.2502 25.8654 13.3083 25.8073L18.3083 20.8073C18.4256 20.69 18.5848 20.624 18.7508 20.624C18.9168 20.624 19.0759 20.69 19.1933 20.8073C19.3106 20.9247 19.3766 21.0838 19.3766 21.2498C19.3766 21.4158 19.3106 21.575 19.1933 21.6923L14.1933 26.6923Z"
                fill="black"
              />
              <path
                d="M13.75 26.875C13.5842 26.875 13.4253 26.8092 13.3081 26.6919C13.1908 26.5747 13.125 26.4158 13.125 26.25C13.125 26.0842 13.1908 25.9253 13.3081 25.8081C13.4253 25.6908 13.5842 25.625 13.75 25.625H18.75C18.9158 25.625 19.0747 25.6908 19.1919 25.8081C19.3092 25.9253 19.375 26.0842 19.375 26.25C19.375 26.4158 19.3092 26.5747 19.1919 26.6919C19.0747 26.8092 18.9158 26.875 18.75 26.875H13.75Z"
                fill="black"
              />
              <path
                d="M14.375 26.2495C14.375 26.4153 14.3092 26.5742 14.1919 26.6915C14.0747 26.8087 13.9158 26.8745 13.75 26.8745C13.5842 26.8745 13.4253 26.8087 13.3081 26.6915C13.1908 26.5742 13.125 26.4153 13.125 26.2495V21.2495C13.125 21.0838 13.1908 20.9248 13.3081 20.8076C13.4253 20.6904 13.5842 20.6245 13.75 20.6245C13.9158 20.6245 14.0747 20.6904 14.1919 20.8076C14.3092 20.9248 14.375 21.0838 14.375 21.2495V26.2495ZM26.875 18.7495C26.875 18.9153 26.8092 19.0742 26.6919 19.1915C26.5747 19.3087 26.4158 19.3745 26.25 19.3745C26.0842 19.3745 25.9253 19.3087 25.8081 19.1915C25.6908 19.0742 25.625 18.9153 25.625 18.7495V13.7495C25.625 13.5838 25.6908 13.4248 25.8081 13.3076C25.9253 13.1904 26.0842 13.1245 26.25 13.1245C26.4158 13.1245 26.5747 13.1904 26.6919 13.3076C26.8092 13.4248 26.875 13.5838 26.875 13.7495V18.7495Z"
                fill="black"
              />
              <path
                d="M21.25 14.375C21.0842 14.375 20.9253 14.3092 20.8081 14.1919C20.6908 14.0747 20.625 13.9158 20.625 13.75C20.625 13.5842 20.6908 13.4253 20.8081 13.3081C20.9253 13.1908 21.0842 13.125 21.25 13.125H26.25C26.4158 13.125 26.5747 13.1908 26.6919 13.3081C26.8092 13.4253 26.875 13.5842 26.875 13.75C26.875 13.9158 26.8092 14.0747 26.6919 14.1919C26.5747 14.3092 26.4158 14.375 26.25 14.375H21.25Z"
                fill="black"
              />
            </svg>

            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                stroke="#EAEEF4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.6233 20.6849L15.3536 24.9546L14.293 23.8939L18.5626 19.6243L14.293 15.3546L15.3536 14.2939L19.6233 18.5636L23.893 14.2939L24.9536 15.3546L20.684 19.6243L24.9536 23.8939L23.893 24.9546L19.6233 20.6849Z"
                fill="#ED1651"
              />
            </svg>
          </div>
        </div>
        <div className="departments__details__body">
          <div className="departments__details__body__dept-head">
            <div className="departments__details__body__dept-head__info">
              <div className="departments__details__body__dept-head__info__title">
                Head of Department
              </div>
              <div className="departments__details__body__dept-head__info__group">
                <Image alt="" src="/assets/logo.png" width={48} height={48} />

                <div>
                  <div>Femi Adebanjo</div>
                  <div>Okonyetochi@gmail.com</div>
                </div>

                <div>Admin</div>
              </div>
            </div>

            <button className="departments__details__body__dept-head__button">
              Edit
            </button>
          </div>

          <div className="departments__details__body__stats">
            <div>
              <div>Location</div>
              <div>Federal Secretariat Complex, Abuja</div>
            </div>
            <div>
              <div>Number of Sub Departments</div>
              <div>14</div>
            </div>
            <div>
              <div>Number of Members</div>
              <div>240</div>
            </div>
          </div>

          <div className="departments__details__body__members">
            <div className="departments__details__body__members__title">
              All members
            </div>

            <div className="departments__details__body__members__table">
              <div className="departments__details__body__members__table__title">
                <div>Sub Department</div>
                <button>
                  Add New Sub Department{" "}
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.4987 3.8335V13.1668M3.83203 8.50016H13.1654"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="departments__details__body__members__table__cards">
                <div className="departments__details__body__members__table__cards__card">
                  <div className="departments__details__body__members__table__cards__card__title">
                    Cybercrime
                  </div>
                  <div className="departments__details__body__members__table__cards__card__info">
                    <div>
                      <div>Head of Sub Department</div>
                      <div>
                        <Image
                          alt=""
                          src="/assets/logo.png"
                          width={24}
                          height={24}
                        />
                        <div>Femi Adebanjo</div>
                        <div>Admin</div>
                      </div>
                    </div>

                    <div>
                      <div>Team members</div>
                      <div>12</div>
                    </div>
                  </div>
                </div>
                <div className="departments__details__body__members__table__cards__card">
                  <div className="departments__details__body__members__table__cards__card__title">
                    Cybercrime
                  </div>
                  <div className="departments__details__body__members__table__cards__card__info">
                    <div>
                      <div>Head of Sub Department</div>
                      <div>
                        <Image
                          alt=""
                          src="/assets/logo.png"
                          width={24}
                          height={24}
                        />
                        <div>Femi Adebanjo</div>
                        <div>Admin</div>
                      </div>
                    </div>

                    <div>
                      <div>Team members</div>
                      <div>12</div>
                    </div>
                  </div>
                </div>
                <div className="departments__details__body__members__table__cards__card">
                  <div className="departments__details__body__members__table__cards__card__title">
                    Cybercrime
                  </div>
                  <div className="departments__details__body__members__table__cards__card__info">
                    <div>
                      <div>Head of Sub Department</div>
                      <div>
                        <Image
                          alt=""
                          src="/assets/logo.png"
                          width={24}
                          height={24}
                        />
                        <div>Femi Adebanjo</div>
                        <div>Admin</div>
                      </div>
                    </div>

                    <div>
                      <div>Team members</div>
                      <div>12</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="departments__details__body__members__table__parameters">
                <form className="departments__details__body__members__table__parameters__input">
                  <input type="text" placeholder="Search" />

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

                <form
                  action=""
                  className="departments__details__body__members__table__parameters__input"
                >
                  <select name="" id="">
                    <option value="">Role</option>
                  </select>
                </form>
                <form
                  action=""
                  className="departments__details__body__members__table__parameters__input"
                >
                  <select name="" id="">
                    <option value="">Security Clearance</option>
                  </select>
                </form>
                <form
                  action=""
                  className="departments__details__body__members__table__parameters__input"
                >
                  <select name="" id="">
                    <option value="">Sub Department</option>
                  </select>
                </form>

                <div className="departments__details__body__members__table__parameters__filters">
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

                <button className="departments__details__body__members__table__parameters__button">
                  Apply
                </button>
              </div>

              <div className="departments__details__body__members__table__heading">
                <div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.5"
                      y="0.5"
                      width="19"
                      height="19"
                      rx="5.5"
                      fill="white"
                    />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="19"
                      height="19"
                      rx="5.5"
                      stroke="#D0D5DD"
                    />
                  </svg>
                  Name
                </div>

                <div className="departments__details__body__members__table__heading__center">
                  Access
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5587 6.50016C6.71543 6.05461 7.0248 5.6789 7.432 5.43958C7.8392 5.20027 8.31796 5.11279 8.78348 5.19264C9.249 5.27249 9.67124 5.51451 9.97542 5.87585C10.2796 6.23718 10.4461 6.69451 10.4454 7.16683C10.4454 8.50016 8.44536 9.16683 8.44536 9.16683M8.4987 11.8335H8.50536M15.1654 8.50016C15.1654 12.1821 12.1806 15.1668 8.4987 15.1668C4.8168 15.1668 1.83203 12.1821 1.83203 8.50016C1.83203 4.81826 4.8168 1.8335 8.4987 1.8335C12.1806 1.8335 15.1654 4.81826 15.1654 8.50016Z"
                      stroke="#98A2B3"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div className="departments__details__body__members__table__heading__center">
                  Security Clearance
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5587 6.50016C6.71543 6.05461 7.0248 5.6789 7.432 5.43958C7.8392 5.20027 8.31796 5.11279 8.78348 5.19264C9.249 5.27249 9.67124 5.51451 9.97542 5.87585C10.2796 6.23718 10.4461 6.69451 10.4454 7.16683C10.4454 8.50016 8.44536 9.16683 8.44536 9.16683M8.4987 11.8335H8.50536M15.1654 8.50016C15.1654 12.1821 12.1806 15.1668 8.4987 15.1668C4.8168 15.1668 1.83203 12.1821 1.83203 8.50016C1.83203 4.81826 4.8168 1.8335 8.4987 1.8335C12.1806 1.8335 15.1654 4.81826 15.1654 8.50016Z"
                      stroke="#98A2B3"
                      stroke-width="1.33333"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <div>Title</div>
              </div>

              <div className="departments__details__body__members__table__body">
                <div className="departments__details__body__members__table__body__inner">
                  
                  <div>  
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="19"
                        height="19"
                        rx="5.5"
                        fill="white"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="19"
                        height="19"
                        rx="5.5"
                        stroke="#D0D5DD"
                      />
                    </svg>

                    <Image alt="" src="/assets/logo.png" width={40} height={40} />
                    <div>
                      <div>Adewumi Oloye</div>
                      <div>A.oloye@fmoj.gov.ng</div>
                    </div>
                    </div>
                  <div className="departments__details__body__members__table__body__inner__center">132</div>
                  <div className="departments__details__body__members__table__body__inner__center">132</div>

                  <div className="departments__details__body__members__table__body__inner__title">Principal State Counsel</div>

                  <div className="departments__details__body__members__table__body__inner__actions">
                  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 15.4998H14.6667M14.6667 15.4998H28M14.6667 15.4998V27.1665C14.6667 27.6085 14.8423 28.0325 15.1548 28.345C15.4674 28.6576 15.8913 28.8332 16.3333 28.8332H24.6667C25.1087 28.8332 25.5326 28.6576 25.8452 28.345C26.1577 28.0325 26.3333 27.6085 26.3333 27.1665V15.4998H14.6667ZM17.1667 15.4998V13.8332C17.1667 13.3911 17.3423 12.9672 17.6548 12.6547C17.9674 12.3421 18.3913 12.1665 18.8333 12.1665H22.1667C22.6087 12.1665 23.0326 12.3421 23.3452 12.6547C23.6577 12.9672 23.8333 13.3911 23.8333 13.8332V15.4998M18.8333 19.6665V24.6665M22.1667 19.6665V24.6665" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24.668 12.9999C24.8868 12.7811 25.1467 12.6074 25.4326 12.489C25.7186 12.3705 26.0251 12.3096 26.3346 12.3096C26.6442 12.3096 26.9507 12.3705 27.2366 12.489C27.5226 12.6074 27.7824 12.7811 28.0013 12.9999C28.2202 13.2188 28.3938 13.4786 28.5122 13.7646C28.6307 14.0506 28.6917 14.3571 28.6917 14.6666C28.6917 14.9761 28.6307 15.2826 28.5122 15.5686C28.3938 15.8546 28.2202 16.1144 28.0013 16.3333L16.7513 27.5833L12.168 28.8333L13.418 24.2499L24.668 12.9999Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  </div>
                </div>
              
              </div>

              <div className="departments__details__body__members__table__footer">
                <div className="departments__details__body__members__table__footer__nav">
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

                <div className="departments__details__body__members__table__footer__nav">
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
          </div>
        </div>
      </div>
    </div>
  );
}
