"use client";

import Image from "next/image";
import { useState } from "react";
import AddUserModal from "./add-user/page";
import AddedUserModal from "./added-user/page";
// import DeactivatedUser from "@/app/admin/deactivate-user/deactivated-user/page";
// import DeactivateUserModal from "@/app/admin/deactivate-user/page";

const Admin = () => {
  const [isAddUserModalOpen, setAddUserModalOpen] = useState(false);
  const [isAddedUserModalOpen, setAddedUserModalOpen] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeactivated, setIsDeactivated] = useState(false);

  const handleOpenAddUserModal = () => {
    setAddUserModalOpen(true);
  };

  const handleCloseAddUserModal = () => {
    setAddUserModalOpen(false);
  };

  const handleOpenAddedUserModal = () => {
    setAddedUserModalOpen(true);
  };

  const handleCloseAddedUserModal = () => {
    setAddedUserModalOpen(false);
  };

  // const openModal = () => {
  //   setIsModalOpen(true);
  // };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDeactivate = () => {
    setIsDeactivated(true);
    // closeModal();
  };

  const closeDeactivated = () => {
    setIsDeactivated(false);
  };

  return (
    <div className="admin">
      <div className="admin__body">
        <div className="admin__body__content">
          <div className="admin__header">
            <h3>
              Team Member
              <span>100 users</span>
            </h3>
            <div>
              <button className="add-button" onClick={handleOpenAddUserModal}>
                Add New User
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="13"
                  height="13"
                >
                  <path
                    fill="#ffffff"
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
                  />
                </svg>
              </button>

              <AddUserModal
                isOpen={isAddUserModalOpen}
                onClose={handleCloseAddUserModal}
                onInvite={handleOpenAddedUserModal}
              />

              <AddedUserModal
                isOpen={isAddedUserModalOpen}
                onClose={handleCloseAddedUserModal}
              />
            </div>
          </div>

          <table className="admin__table">
            <thead>
              <tr>
                <th>
                  <div className="name-header">
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
                    <span>Name</span>
                  </div>
                </th>

                <th>
                  <div className="name-header">
                    <span>Access</span>

                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_9599_1780)">
                        <path
                          d="M6.0587 5.99998C6.21543 5.55442 6.5248 5.17872 6.932 4.9394C7.3392 4.70009 7.81796 4.61261 8.28348 4.69245C8.749 4.7723 9.17124 5.01433 9.47542 5.37567C9.77959 5.737 9.94607 6.19433 9.94536 6.66665C9.94536 7.99998 7.94536 8.66665 7.94536 8.66665M7.9987 11.3333H8.00536M14.6654 7.99998C14.6654 11.6819 11.6806 14.6666 7.9987 14.6666C4.3168 14.6666 1.33203 11.6819 1.33203 7.99998C1.33203 4.31808 4.3168 1.33331 7.9987 1.33331C11.6806 1.33331 14.6654 4.31808 14.6654 7.99998Z"
                          stroke="#98A2B3"
                          stroke-width="1.33333"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_9599_1780">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </th>
                <th>Title</th>
                <th>Department</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Adeyemi Oloye",
                  email: "A.oloye@justice.gov.ng",
                  access: "Admin",
                  title: "Principal State Counsel",
                  department: "Department of Public Prosecutions (DPP)",
                  imageUrl: "/assets/avatars/ava-ade.png",
                },

                {
                  name: "Emeka Ani",
                  email: "E.ani@justice.gov.ng",
                  access: "User",
                  title: "Legal Officer",
                  department: "Department of Civil Litigation",
                  imageUrl: "/assets/avatars/ava-emeka.png",
                },

                {
                  name: "Lotanna Okor",
                  email: "L.okor@justice.gov.ng",
                  access: "Admin",
                  title: "Principal State Counsel",
                  department: "Department of Legal Drafting and Law Review",
                  imageUrl: "/assets/avatars/ava-okor.png",
                },

                {
                  name: "Demi Nike",
                  email: "D.nike@justice.gov.ng",
                  access: "Admin",
                  title: "Director of Public Prosecutions",
                  department: "Department of International and Comparative Law",
                  imageUrl: "/assets/avatars/ava-demi.png",
                },

                {
                  name: "Ahmed Wale",
                  email: "A.wale@justice.gov.ng",
                  access: "Admin",
                  title: "Director of Public Prosecutions",
                  department: "Department of Citizens' Rights",
                  imageUrl: "/assets/avatars/ava-wale.png",
                },

                {
                  name: "Natali Oboli",
                  email: "N.oboi@justice.gov.ng",
                  access: "User",
                  title: "Senior State Counsel",
                  department: "Department of Finance and Accounts",
                  imageUrl: "/assets/avatars/ava-oboli.png",
                },

                {
                  name: "Haruna Adamu",
                  email: "H.adamu@justice.gov.ng",
                  access: "User",
                  title: "Solicitor General",
                  department:
                    "Department of Planning, Research, and Statistics",
                  imageUrl: "/assets/avatars/ava-adamu.png",
                },

                {
                  name: "Kaduna Dede",
                  email: "K.dede@justice.gov.ng",
                  access: "User",
                  title: "Legal Officer",
                  department:
                    "Department of Corporate Affairs and External Relations",
                  imageUrl: "/assets/avatars/ava-dede.png",
                },

                {
                  name: "Anike Mustapha",
                  email: "A.mustapha@justice.gov.ng",
                  access: "Super Admin",
                  title: "Solicitor General of the Federation",
                  department: "Department of Human Resources Management",
                  imageUrl: "/assets/avatars/ava-anike.png",
                },

                {
                  name: "Kate Adebowale",
                  email: "K.adebowale@justice.gov.ng",
                  access: "User",
                  title: "Junior Legal Officers",
                  department: "Department of Administration",
                  imageUrl: "/assets/avatars/ava-kate.png",
                },
              ].map((user, index) => (
                <tr key={index}>
                  <td className="user-name">
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

                    <Image
                      alt=""
                      src={user.imageUrl}
                      width={40}
                      height={40}
                      style={{ borderRadius: "50%", float: "left" }}
                    />
                    <div>
                      {user.name} <br />
                      <span>{user.email}</span>
                    </div>
                  </td>
                  <td>
                    <span
                      className={`access ${user.access
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {user.access}
                    </span>
                  </td>
                  <td>{user.title}</td>
                  <td>{user.department}</td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 128 512"
                      width="13"
                      height="13"
                    >
                      <path
                        fill="#bfbfbf"
                        d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
                      />
                    </svg>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="admin__pagination">
            <button className="admin__pagination__prev">
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
              <span>Previous</span>
            </button>

            {/* <div className="admin__pagination__pages">
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <span style={{ margin: "9px" }}>...</span>
              <button>8</button>
              <button>9</button>
              <button>10</button>
          
            </div> */}

            <button className="admin__pagination__next">
              <span>Next</span>
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
            </button>
          </div>
        </div>
      </div>

      {/* <DeactivateUserModal
        // isOpen={isModalOpen}
        onClose={closeModal}
        onDeactivate={handleDeactivate}
      />

      <DeactivatedUser
        isOpen={isDeactivated}
        onClose={closeDeactivated}
      /> */}
    </div>
  );
};

export default Admin;
