"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import AddUserModal from "./add-user/page";
import AddedUserModal from "./added-user/page";
import DeactivateUserModal from "./deactivate-user/page";
import DeactivatedUser from "./deactivated-user/page";
import PreviewUser from "./preview-user/page";
import { listUsers } from "@/app/apis/users";

const Admin = () => {
  const [isAddUserModalOpen, setAddUserModalOpen] = useState(false);
  const [isAddedUserModalOpen, setAddedUserModalOpen] = useState(false);
  const [previewModal, setPreviewModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeactivated, setIsDeactivated] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [users, setUsers] = useState([]);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  const handleFetUsers = async () => {
    const response = await listUsers();
    console.log('response from users', response);
    setUsers(response?.data?.data);
  }


  useEffect(() => {
    handleFetUsers();
  }, [])


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
                    <input type="checkbox" value={selectAll} onChange={(e) => setSelectAll(e.target.checked)} />
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
                <th>Gov ID</th>
                <th>Department</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user, index) => (
                <tr key={index} onClick={() => setPreviewModal(true)}>
                  <td className="user-name" >
                    
                    <input type="checkbox" checked={selectAll} />

                    <Image
                      alt=""
                      // src={user.imageUrl}
                      src="/assets/avatars/ava-ade.png"
                      width={40}
                      height={40}
                      style={{ borderRadius: "50%", float: "left" }}
                    />
                    <div>
                      {user.officialEmail} <br />
                      <span>{user.supervisorEmail}</span>
                    </div>
                  </td>
                  <td onClick={openModal}>
                    <span
                      className={`access user`}
                    >
                      User
                    </span>
                  </td>
                  <td onClick={openModal}>{user.govId}</td>
                  <td onClick={openModal}>{user.department}</td>
                  <td onClick={openModal}>
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

      <PreviewUser previewModal={previewModal} setPreviewModal={setPreviewModal} />

     

    </div>
  );
};

export default Admin;
