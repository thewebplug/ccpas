"use client";

import Image from "next/image";
import { useState } from "react";
import AddRoleModal from "../add-role/page";
import AddedRoleModal from "../added-role/page";
import CheckboxToggle from "../add-role/CheckboxToggle";

export default function Departments() {
  const [isAddRoleModalOpen, setAddRoleModalOpen] = useState(false);
  const [isAddedRoleModalOpen, setAddedRoleModalOpen] = useState(false);
  const [roleName, setRoleName] = useState("");
  const [roles, setRoles] = useState(["Super Admin", "Admin", "Role 1"]);

  const [activeTab, setActiveTab] = useState("userDetails");

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

  const handleTabClick = (tabName) => {
    setActiveTab(tabName === activeTab ? null : tabName);
  };

  const handleAddRole = () => {
    setRoles([...roles, roleName]);
    setRoleName(roleName);
    handleCloseAddRoleModal();
    handleOpenAddedRoleModal();
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
                <th>Invite User</th>
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
