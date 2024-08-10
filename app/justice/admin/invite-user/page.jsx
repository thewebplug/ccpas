"use client";

import React from "react";

const InviteUser = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="invite-user">
      <div className="invite-user__overlay" onClick={onClose}></div>
      <div className="invite-user__content">
        <header className="invite-user__header">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClose}
            >
              <path
                d="M9.57141 18.82C9.38141 18.82 9.19141 18.75 9.04141 18.6L2.97141 12.53C2.68141 12.24 2.68141 11.76 2.97141 11.47L9.04141 5.4C9.33141 5.11 9.81141 5.11 10.1014 5.4C10.3914 5.69 10.3914 6.17 10.1014 6.46L4.56141 12L10.1014 17.54C10.3914 17.83 10.3914 18.31 10.1014 18.6C9.96141 18.75 9.76141 18.82 9.57141 18.82Z"
                fill="#061B2E"
              />
              <path
                d="M20.5014 12.75H3.67141C3.26141 12.75 2.92141 12.41 2.92141 12C2.92141 11.59 3.26141 11.25 3.67141 11.25H20.5014C20.9114 11.25 21.2514 11.59 21.2514 12C21.2514 12.41 20.9114 12.75 20.5014 12.75Z"
                fill="#061B2E"
              />
            </svg>
            <h2>Invite User</h2>
          </div>

          <button className="close-button" onClick={onClose}>
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
          </button>
        </header>

        <div className="invite-user__container">
          <div className="invite-user__heading">
            <h2>Invite User</h2>
            <p>
              Input Users email and select role to give them access into the
              platform
            </p>
          </div>

          <form className="invite-user__form">
            {/* --- gov --- */}
            <div className="upload-form">
              <div className="field">
                <label className="label">Government Issued Emailed</label>
                <div className="select-gov">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3346 4.9987C18.3346 4.08203 17.5846 3.33203 16.668 3.33203H3.33464C2.41797 3.33203 1.66797 4.08203 1.66797 4.9987M18.3346 4.9987V14.9987C18.3346 15.9154 17.5846 16.6654 16.668 16.6654H3.33464C2.41797 16.6654 1.66797 15.9154 1.66797 14.9987V4.9987M18.3346 4.9987L10.0013 10.832L1.66797 4.9987"
                      stroke="#667085"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <input type="email" placeholder="workemail@gmail.com" />
                </div>
              </div>

              <div className="field">
                <label className="label">Government Issued Emailed</label>
                <div className="select-gov">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3346 4.9987C18.3346 4.08203 17.5846 3.33203 16.668 3.33203H3.33464C2.41797 3.33203 1.66797 4.08203 1.66797 4.9987M18.3346 4.9987V14.9987C18.3346 15.9154 17.5846 16.6654 16.668 16.6654H3.33464C2.41797 16.6654 1.66797 15.9154 1.66797 14.9987V4.9987M18.3346 4.9987L10.0013 10.832L1.66797 4.9987"
                      stroke="#667085"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <input type="email" placeholder="workemail@gmail.com" />
                </div>
              </div>
            </div>

            {/* --- roles  */}
            <div className="upload-form">
              <div className="field">
                <label className="label">Role</label>
                <div className="select-role">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6654 17.5V15.8333C16.6654 14.9493 16.3142 14.1014 15.6891 13.4763C15.0639 12.8512 14.2161 12.5 13.332 12.5H6.66536C5.78131 12.5 4.93346 12.8512 4.30834 13.4763C3.68322 14.1014 3.33203 14.9493 3.33203 15.8333V17.5M13.332 5.83333C13.332 7.67428 11.8396 9.16667 9.9987 9.16667C8.15775 9.16667 6.66536 7.67428 6.66536 5.83333C6.66536 3.99238 8.15775 2.5 9.9987 2.5C11.8396 2.5 13.332 3.99238 13.332 5.83333Z"
                      stroke="#667085"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <select>
                    <option>Role</option>
                    <option>Role</option>
                  </select>

                  <svg
                    className="dropdown-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="#667085"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="field">
                <label className="label">Role</label>
                <div className="select-role">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.6654 17.5V15.8333C16.6654 14.9493 16.3142 14.1014 15.6891 13.4763C15.0639 12.8512 14.2161 12.5 13.332 12.5H6.66536C5.78131 12.5 4.93346 12.8512 4.30834 13.4763C3.68322 14.1014 3.33203 14.9493 3.33203 15.8333V17.5M13.332 5.83333C13.332 7.67428 11.8396 9.16667 9.9987 9.16667C8.15775 9.16667 6.66536 7.67428 6.66536 5.83333C6.66536 3.99238 8.15775 2.5 9.9987 2.5C11.8396 2.5 13.332 3.99238 13.332 5.83333Z"
                      stroke="#667085"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <select>
                    <option>Role</option>
                    <option>Role</option>
                  </select>

                  <svg
                    className="dropdown-icon"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="#667085"
                      strokeWidth="1.66667"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </form>

          <div className="invite-user__access">
            <div className="access-flex">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.0013 4.16797V15.8346M4.16797 10.0013H15.8346"
                  stroke="#1D2939"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Add another</span>
            </div>

            <div>
              <button className="access-btn">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.0009 14.4589C10.7511 14.4589 11.3592 13.8507 11.3592 13.1005C11.3592 12.3503 10.7511 11.7422 10.0009 11.7422C9.25072 11.7422 8.64258 12.3503 8.64258 13.1005C8.64258 13.8507 9.25072 14.4589 10.0009 14.4589Z"
                    fill="white"
                  />
                  <path
                    d="M13.8743 7.86797H6.12435C6.05768 7.86797 5.99935 7.86797 5.93268 7.86797V6.9013C5.93268 4.45964 6.62435 2.83464 9.99935 2.83464C13.6077 2.83464 14.066 4.59297 14.066 6.1263C14.066 6.4513 14.3243 6.70964 14.6493 6.70964C14.9743 6.70964 15.2327 6.4513 15.2327 6.1263C15.2327 3.16797 13.4743 1.66797 9.99935 1.66797C5.30768 1.66797 4.76602 4.6513 4.76602 6.9013V7.94297C2.43268 8.23464 1.66602 9.41797 1.66602 12.3263V13.8763C1.66602 17.293 2.70768 18.3346 6.12435 18.3346H13.8743C17.291 18.3346 18.3327 17.293 18.3327 13.8763V12.3263C18.3327 8.90964 17.291 7.86797 13.8743 7.86797ZM9.99935 15.618C8.60768 15.618 7.48268 14.4846 7.48268 13.1013C7.48268 11.7096 8.61602 10.5846 9.99935 10.5846C11.3827 10.5846 12.516 11.718 12.516 13.1013C12.516 14.493 11.391 15.618 9.99935 15.618Z"
                    fill="white"
                  />
                </svg>
                <span>Give Access</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InviteUser;
