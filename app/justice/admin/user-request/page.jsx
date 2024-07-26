"use client";

import React from "react";
import Image from "next/image";
import CheckboxToggle from "../add-role/CheckboxToggle";

const UserRequest = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="user-request">
      <div className="user-request__overlay" onClick={onClose}></div>
      <div className="user-request__content">
        <header className="user-request__header">
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
            <h2>Request</h2>
          </div>

          <div>
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
                  d="M21.6933 19.1933C21.5759 19.3106 21.4168 19.3766 21.2508 19.3766C21.0848 19.3766 20.9256 19.3106 20.8083 19.1933C20.6909 19.0759 20.625 18.9168 20.625 18.7508C20.625 18.5848 20.6909 18.4256 20.8083 18.3083L25.8083 13.3083C25.8664 13.2502 25.9354 13.2041 26.0113 13.1726C26.0872 13.1412 26.1686 13.125 26.2508 13.125C26.333 13.125 26.4143 13.1412 26.4903 13.1726C26.5662 13.2041 26.6352 13.2502 26.6933 13.3083C26.7514 13.3664 26.7975 13.4354 26.8289 13.5113C26.8604 13.5872 26.8766 13.6686 26.8766 13.7508C26.8766 13.833 26.8604 13.9143 26.8289 13.9903C26.7975 14.0662 26.7514 14.1352 26.6933 14.1933L21.6933 19.1933ZM14.1933 26.6933C14.1352 26.7514 14.0662 26.7975 13.9903 26.8289C13.9143 26.8604 13.833 26.8766 13.7508 26.8766C13.6686 26.8766 13.5872 26.8604 13.5113 26.8289C13.4354 26.7975 13.3664 26.7514 13.3083 26.6933C13.2502 26.6352 13.2041 26.5662 13.1726 26.4903C13.1412 26.4143 13.125 26.333 13.125 26.2508C13.125 26.1686 13.1412 26.0872 13.1726 26.0113C13.2041 25.9354 13.2502 25.8664 13.3083 25.8083L18.3083 20.8083C18.4256 20.6909 18.5848 20.625 18.7508 20.625C18.9168 20.625 19.0759 20.6909 19.1933 20.8083C19.3106 20.9256 19.3766 21.0848 19.3766 21.2508C19.3766 21.4168 19.3106 21.5759 19.1933 21.6933L14.1933 26.6933Z"
                  fill="black"
                />
                <path
                  d="M13.75 26.875C13.5842 26.875 13.4253 26.8092 13.3081 26.6919C13.1908 26.5747 13.125 26.4158 13.125 26.25C13.125 26.0842 13.1908 25.9253 13.3081 25.8081C13.4253 25.6908 13.5842 25.625 13.75 25.625H18.75C18.9158 25.625 19.0747 25.6908 19.1919 25.8081C19.3092 25.9253 19.375 26.0842 19.375 26.25C19.375 26.4158 19.3092 26.5747 19.1919 26.6919C19.0747 26.8092 18.9158 26.875 18.75 26.875H13.75Z"
                  fill="black"
                />
                <path
                  d="M14.375 26.25C14.375 26.4158 14.3092 26.5747 14.1919 26.6919C14.0747 26.8092 13.9158 26.875 13.75 26.875C13.5842 26.875 13.4253 26.8092 13.3081 26.6919C13.1908 26.5747 13.125 26.4158 13.125 26.25V21.25C13.125 21.0842 13.1908 20.9253 13.3081 20.8081C13.4253 20.6908 13.5842 20.625 13.75 20.625C13.9158 20.625 14.0747 20.6908 14.1919 20.8081C14.3092 20.9253 14.375 21.0842 14.375 21.25V26.25ZM26.875 18.75C26.875 18.9158 26.8092 19.0747 26.6919 19.1919C26.5747 19.3092 26.4158 19.375 26.25 19.375C26.0842 19.375 25.9253 19.3092 25.8081 19.1919C25.6908 19.0747 25.625 18.9158 25.625 18.75V13.75C25.625 13.5842 25.6908 13.4253 25.8081 13.3081C25.9253 13.1908 26.0842 13.125 26.25 13.125C26.4158 13.125 26.5747 13.1908 26.6919 13.3081C26.8092 13.4253 26.875 13.5842 26.875 13.75V18.75Z"
                  fill="black"
                />
                <path
                  d="M21.25 14.375C21.0842 14.375 20.9253 14.3092 20.8081 14.1919C20.6908 14.0747 20.625 13.9158 20.625 13.75C20.625 13.5842 20.6908 13.4253 20.8081 13.3081C20.9253 13.1908 21.0842 13.125 21.25 13.125H26.25C26.4158 13.125 26.5747 13.1908 26.6919 13.3081C26.8092 13.4253 26.875 13.5842 26.875 13.75C26.875 13.9158 26.8092 14.0747 26.6919 14.1919C26.5747 14.3092 26.4158 14.375 26.25 14.375H21.25Z"
                  fill="black"
                />
              </svg>
            </button>

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
          </div>
        </header>

        <div className="user-request__container">
          <div className="user-request__table">
            <div className="user-request__table__heading">
              <h2>
                Request<span>(70)</span>
              </h2>
              <div>
                <button className="approve-btn">Approve All</button>
                <button className="deny-btn">Deny All</button>
              </div>
            </div>

            <div className="user-request__table__body">
              <table className="request-table">
                <thead>
                  <tr>
                    <th>
                      <div className="user-flex">
                        <div>
                          <CheckboxToggle />
                        </div>
                        <span>Name</span>
                      </div>
                    </th>

                    <th>FMOJ ID</th>
                    <th>BVN</th>
                    <th>NIN</th>
                    <th>Role</th>

                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Adeyemi Oloye",
                      email: "A.oloye@justice.gov.ng",
                      imageUrl: "/assets/avatars/ava-olo.png",
                    },

                    {
                      name: "Emeka Ani",
                      email: "E.ani@justice.gov.ng",
                      imageUrl: "/assets/avatars/ava-emeka.png",
                    },

                    {
                      name: "Lotanna Okor",
                      email: "L.okor@justice.gov.ng",
                      imageUrl: "/assets/avatars/ava-okor.png",
                    },

                    {
                      name: "Demi Nike",
                      email: "D.nike@justice.gov.ng",
                      imageUrl: "/assets/avatars/ava-demi.png",
                    },

                    {
                      name: "Ahmed Wale",
                      email: "A.wale@justice.gov.ng",
                      imageUrl: "/assets/avatars/ava-wale.png",
                    },

                    {
                      name: "Natali Oboli",
                      email: "N.oboi@justice.gov.ng",
                      imageUrl: "/assets/avatars/ava-nat.png",
                    },

                    {
                      name: "Haruna Adamu",
                      email: "H.adamu@justice.gov.ng",
                      imageUrl: "/assets/avatars/ava-haru.png",
                    },

                    {
                      name: "Kaduna Dede",
                      email: "K.dede@justice.gov.ng",
                      imageUrl: "/assets/avatars/ava-dede.png",
                    },

                    {
                      name: "Anike Mustapha",
                      email: "A.mustapha@justice.gov.ng",
                      imageUrl: "/assets/avatars/ava-must.png",
                    },

                    {
                      name: "Kate Adebowale",
                      email: "K.adebowale@justice.gov.ng",
                      imageUrl: "/assets/avatars/ava-bowa.png",
                    },
                  ].map((user, index) => (
                    <tr key={index}>
                      <td>
                        <div className="user-info">
                          <CheckboxToggle />

                          <Image
                            alt=""
                            src={user.imageUrl}
                            width={40}
                            height={40}
                            style={{ borderRadius: "50%", float: "left" }}
                          />
                          <div className="user-details">
                            <div className="user-name">{user.name}</div>
                            <div className="user-email">{user.email}</div>
                          </div>
                        </div>
                      </td>

                      <td>PF00364</td>
                      <td>777896543246</td>
                      <td>777896543246</td>

                      <td>
                        <div className="select">
                          <select>
                            <option>Official</option>
                            <option>Official</option>
                          </select>
                        </div>
                      </td>

                      <td>
                        <div className="btn">
                          <button className="approve-btn">Approve</button>
                          <button className="deny-btn">Deny</button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="user-request__table__footer">
              <div className="user-request__table__footer__nav">
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

              <div className="user-request__table__footer__nav">
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
  );
};

export default UserRequest;
