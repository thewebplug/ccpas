"use client";

import Image from "next/image";
import { useState } from "react";
import AddRoleModal from "../add-role/page";
import AddedRoleModal from "../added-role/page";
import CheckboxToggle from "../add-role/CheckboxToggle";
import UserRequest from "../user-request/page";
import InviteUser from "../invite-user/page";

export default function Departments() {
  const [isAddRoleModalOpen, setAddRoleModalOpen] = useState(false);
  const [isAddedRoleModalOpen, setAddedRoleModalOpen] = useState(false);
  const [inviteUserModal, setInviteUserModal] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [roles, setRoles] = useState(["Super Admin", "Admin", "Role 1"]);

  const [activeTab, setActiveTab] = useState("userDetails");

  const [isUserRequestOpen, setUserRequestOpen] = useState(false);

  const handleOpenAddRoleModal = () => {
    setAddRoleModalOpen(true);
  };

  const handleCloseAddRoleModal = () => {
    setAddRoleModalOpen(false);
  };

  const handleOpenAddedRoleModal = () => {
    setAddedRoleModalOpen(true);
  };

  const handleCloseAddedRoleModal = () => {
    setAddedRoleModalOpen(false);
  };

  const handleInviteUserOpen = () => {
    setInviteUserModal(true);
  };

  const handleInviteUserClose = () => {
    setInviteUserModal(false);
  };

  const handleTabClick = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName);
  };

  const handleAddRole = () => {
    setRoles([...roles, roleName]);
    setRoleName(roleName);
    handleCloseAddRoleModal();
    handleOpenAddedRoleModal();
  };

  const handleOpenUserRequest = () => {
    setUserRequestOpen(true);
  };

  const handleCloseUserRequest = () => {
    setUserRequestOpen(false);
  };

  return (
    <div className="access">
      <div className="access__header">
        <div className="access__header__title">Access Control</div>
        <div className="access__header__middle">
          <div
            className={`user ${activeTab === "userDetails" ? "roles" : ""}`}
            onClick={() => handleTabClick("userDetails")}
          >
            Roles
          </div>
          <div
            className={`user ${activeTab === "roles" ? "roles" : ""}`}
            onClick={() => handleTabClick("roles")}
          >
            Users
          </div>
        </div>

        <div
          className="access__header__button"
          onClick={handleOpenUserRequest}
        >
          Request{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" rx="6" fill="#ED1651" />
            <path
              d="M9.32528 7.27273V16H7.74432V8.81108H7.69318L5.65199 10.1151V8.66619L7.82102 7.27273H9.32528ZM11.5412 16V14.858L14.571 11.8878C14.8608 11.5952 15.1023 11.3352 15.2955 11.108C15.4886 10.8807 15.6335 10.6605 15.7301 10.4474C15.8267 10.2344 15.875 10.0071 15.875 9.76562C15.875 9.49006 15.8125 9.25426 15.6875 9.05824C15.5625 8.85938 15.3906 8.70597 15.1719 8.59801C14.9531 8.49006 14.7045 8.43608 14.4261 8.43608C14.1392 8.43608 13.8878 8.49574 13.6719 8.61506C13.456 8.73153 13.2884 8.89773 13.169 9.11364C13.0526 9.32955 12.9943 9.58665 12.9943 9.88494H11.4901C11.4901 9.33097 11.6165 8.84943 11.8693 8.44034C12.1222 8.03125 12.4702 7.71449 12.9134 7.49006C13.3594 7.26562 13.8707 7.15341 14.4474 7.15341C15.0327 7.15341 15.5469 7.26278 15.9901 7.48153C16.4332 7.70028 16.777 8 17.0213 8.38068C17.2685 8.76136 17.392 9.19602 17.392 9.68466C17.392 10.0114 17.3295 10.3324 17.2045 10.6477C17.0795 10.9631 16.8594 11.3125 16.544 11.696C16.2315 12.0795 15.7926 12.544 15.2273 13.0895L13.723 14.6193V14.679H17.5241V16H11.5412Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="access__actions">
        <form action="" className="access__actions__input">
          <input type="text" placeholder="User Name" />
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
        <form action="" className="access__actions__input">
          <select name="" id="">
            <option value="">Role</option>
          </select>
        </form>
        <form action="" className="access__actions__input">
          <select name="" id="">
            <option value="">Action</option>
          </select>
        </form>
        <form action="" className="access__actions__input">
          <select name="" id="">
            <option value="">Department</option>
          </select>
        </form>
        <div className="access__actions__filters">
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

      {activeTab === "userDetails" && (
        <div className="access__body">
          <table className="access-table">
            <thead>
              <tr>
                <th className="white"></th>
                <th colSpan="2" className="green">
                  Dashboard
                </th>
                <th colSpan="8" className="green">
                  Case File Management
                </th>
                <th colSpan="3" className="green">
                  User
                </th>
              </tr>
              <tr>
                <th>
                  <div className="user-flex">
                    <div>
                      <CheckboxToggle />
                    </div>
                    <span>Role</span>
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
                <th>View</th>
                <th>Edit</th>
                <th>View</th>
                <th>Create</th>
                <th>Append</th>
                <th>Assign</th>
                <th>Transfer within</th>
                <th>Transfer Outside</th>
                <th>Expunge</th>
                <th
                className="pointer"
                onClick={handleInviteUserOpen}
                >Invite User</th>
                <th>Grant Access</th>
                <th>View Users</th>
                <th>View Users</th>
              </tr>
            </thead>
            <tbody>
              {roles.map((role, index) => (
                <tr key={index}>
                  <td>
                    <div className="user-info">
                      <CheckboxToggle />
                      <div>
                        <h2>{role}</h2>
                      </div>
                    </div>
                  </td>
                  {Array(13)
                    .fill(0)
                    .map((_, i) => (
                      <td key={i}>
                        <CheckboxToggle />
                      </td>
                    ))}
                </tr>
              ))}
              <tr className="new-role" onClick={handleOpenAddRoleModal}>
                <td>
                  <div className="user-info">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="40" height="40" rx="20" fill="#009B07" />
                      <path
                        d="M20.0013 14.166V25.8327M14.168 19.9993H25.8346"
                        stroke="#F3F9F5"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    <div>
                      <h2>Add New Role</h2>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

          <UserRequest
            isOpen={isUserRequestOpen}
            onClose={handleCloseUserRequest}
          />

      <AddRoleModal
        isOpen={isAddRoleModalOpen}
        onClose={handleCloseAddRoleModal}
        onCreate={handleAddRole}
        roleName={roleName}
        setRoleName={setRoleName}
      />
      <AddedRoleModal
        isOpen={isAddedRoleModalOpen}
        onClose={handleCloseAddedRoleModal}
        roleName={roleName}
      />

      <InviteUser 
      isOpen={inviteUserModal}
      onClose={handleInviteUserClose}
      />


      {activeTab === "roles" && (
        <div className="access__body">
          <table className="access-table">
            <thead>
              <tr>
                <th className="white"></th>
                <th colSpan="4">Roles</th>
                <th>Dashboard</th>
                <th colSpan="4">Case File Management</th>
              </tr>
              <tr>
                <th>
                  <div className="user-flex">
                    <div>
                      <CheckboxToggle />
                    </div>
                    <span>User Name</span>
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
                <th className="green">Super Admin</th>
                <th className="green">Admin</th>
                <th className="green">User</th>
                <th className="green">Guest</th>
                <th>View Dashboard</th>
                <th>View Case File</th>
                <th>Create a Case File</th>
                <th>Expunge Case File</th>
                <th>Assign Case</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Adeyemi Oloye",
                  email: "A.oloye@justice.gov.ng",
                  imageUrl: "/assets/avatars/ava-ade.png",
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
                  imageUrl: "/assets/avatars/ava-oboli.png",
                },

                {
                  name: "Haruna Adamu",
                  email: "H.adamu@justice.gov.ng",
                  imageUrl: "/assets/avatars/ava-adamu.png",
                },

                {
                  name: "Kaduna Dede",
                  email: "K.dede@justice.gov.ng",
                  imageUrl: "/assets/avatars/ava-dede.png",
                },

                {
                  name: "Anike Mustapha",
                  email: "A.mustapha@justice.gov.ng",
                  imageUrl: "/assets/avatars/ava-anike.png",
                },

                {
                  name: "Kate Adebowale",
                  email: "K.adebowale@justice.gov.ng",
                  imageUrl: "/assets/avatars/ava-kate.png",
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
                  {Array(9)
                    .fill(0)
                    .map((_, i) => (
                      <td key={i}>
                        {/*  <input type="checkbox" /> */}
                        <CheckboxToggle />
                      </td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "roles" && (
        <div className="access__footer">
          <div className="access__footer__nav">
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

          <div className="access__footer__nav">
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
      )}
    </div>
  );
}
