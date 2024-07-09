"use client"

import Image from "next/image";
import { useState } from "react";
import AddUserModal from "./add-user/page";
import AddedUserModal from "./added-user/page";
import DeactivateUserModal from "./deactivate-user/page";
import DeactivatedUser from "./deactivate-user/deactivated-user/page";

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
      <header className="admin__header">
        <div className="admin__header__info">
          <nav className="admin__header__breadcrumbs">
          <svg
              width="13"
              height="13"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginRight: "10px" }}
            >
              <path
                d="M10.0211 3.40997L7.14109 1.39497C6.35609 0.844969 5.15109 0.874969 4.39609 1.45997L1.89109 3.41497C1.39109 3.80497 0.996094 4.60497 0.996094 5.23497V8.68497C0.996094 9.95997 2.03109 11 3.30609 11H8.69609C9.97109 11 11.0061 9.96497 11.0061 8.68997V5.29997C11.0061 4.62497 10.5711 3.79497 10.0211 3.40997ZM6.37609 8.99997C6.37609 9.20497 6.20609 9.37497 6.00109 9.37497C5.79609 9.37497 5.62609 9.20497 5.62609 8.99997V7.49997C5.62609 7.29497 5.79609 7.12497 6.00109 7.12497C6.20609 7.12497 6.37609 7.29497 6.37609 7.49997V8.99997Z"
                fill="#99A2BB"
              />
            </svg>
           
              
           <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 320 512"
              width="13"
              height="13"
              >
            <path 
              fill="#a6a6a6" 
              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
            />
            </svg> 

              <a href="#">Super Admin</a>

           <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 320 512"
              width="13"
              height="13"
              >
            <path 
              fill="#a6a6a6" 
              d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"
            />
            </svg> 

              <a href="#" className="user-management">User Management</a>

          </nav>
        </div>
        <div className="admin__header__heading">
            <h2>Super Admin</h2>  
        </div>
      </header>
      <div className="admin__body">
        <div className="admin__body__tabs">
          <div className="menu-item active">User Management</div>
          <div>Department Management</div>
          <div>Support & Feedback</div>
          <div className="notify">
            Notification 
            <span>4</span> 
          </div>
          <div>Access Control</div>
          <div>Email</div>
          <div>Log Activities</div>
        </div>
        
        <div className="admin__body__content">
          <div className="admin__header">
            <h3>
              Team Member
              <span>100 users</span> 
            </h3>
            <div>
            <button 
              className="add-button"
              onClick={handleOpenAddUserModal}
              >
              Add New User
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
                width="13"
                height="13"
                >
                  <path  
                    fill="#ffffff" 
                    d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/>
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
                <input type="checkbox" />
                  Name
                  </th>
                <th>
                  Access
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 512 512"
                    width="13"
                    height="13"
                    >
                    <path 
                      fill="#c9c9c9" 
                      d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                  </svg>
                </th>
                <th>Title</th>
                <th>Department</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Adeyemi Oloye', email: 'A.oloye@justice.gov.ng', access: 'Admin', title: 'Principal State Counsel', department: 'Department of Public Prosecutions (DPP)', imageUrl: '/assets/avatars/ava-ade.png' },

                { name: 'Emeka Ani', email: 'E.ani@justice.gov.ng', access: 'User', title: 'Legal Officer', department: 'Department of Civil Litigation', imageUrl: '/assets/avatars/ava-emeka.png' },

                { name: 'Lotanna Okor', email: 'L.okor@justice.gov.ng', access: 'Admin', title: 'Principal State Counsel', department: 'Department of Legal Drafting and Law Review', imageUrl: '/assets/avatars/ava-okor.png' },

                { name: 'Demi Nike', email: 'D.nike@justice.gov.ng', access: 'Admin', title: 'Director of Public Prosecutions', department: 'Department of International and Comparative Law', imageUrl: '/assets/avatars/ava-demi.png' },

                { name: 'Ahmed Wale', email: 'A.wale@justice.gov.ng', access: 'Admin', title: 'Director of Public Prosecutions', department: 'Department of Citizens\' Rights', imageUrl: '/assets/avatars/ava-wale.png' },

                { name: 'Natali Oboi', email: 'N.oboi@justice.gov.ng', access: 'User', title: 'Senior State Counsel', department: 'Department of Finance and Accounts', imageUrl: '/assets/avatars/ava-oboli.png' },

                { name: 'Haruna Adamu', email: 'H.adamu@justice.gov.ng', access: 'User', title: 'Solicitor General', department: 'Department of Planning, Research, and Statistics', imageUrl: '/assets/avatars/ava-adamu.png' },

                { name: 'Kaduna Dede', email: 'K.dede@justice.gov.ng', access: 'User', title: 'Legal Officer', department: 'Department of Corporate Affairs and External Relations', imageUrl: '/assets/avatars/ava-dede.png' },

                { name: 'Anike Mustapha', email: 'A.mustapha@justice.gov.ng', access: 'Super Admin', title: 'Solicitor General of the Federation', department: 'Department of Human Resources Management', imageUrl: '/assets/avatars/ava-anike.png' },

                { name: 'Kate Adebowale', email: 'K.adebowale@justice.gov.ng', access: 'User', title: 'Junior Legal Officers', department: 'Department of Administration', imageUrl: '/assets/avatars/ava-kate.png' },
              ].map((user, index) => (
                <tr key={index}>
                  <td className="user-name">
                    <input type="checkbox" />
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
                      className={`access ${user.access.toLowerCase().replace(' ', '-')}`}>{user.access}
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
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
                width="12"
                height="12"
                className="previous-svg"
              >
                <path 
                  fill="000000"
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
              Previous
            </button>
            <div className="admin__pagination__pages">
              <button className="active">1</button>
              <button>2</button>
              <button>3</button>
              <span style={{ margin: "9px"}}>...</span>
              <button>8</button>
              <button>9</button>
              <button>10</button>
              {/* more pages... */}
            </div>
            <button className="admin__pagination__next">
              Next
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"    
                width="12"
                height="12"
                className="next-svg"
                >
                <path 
                  fill="#000000" 
                  d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
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
}

export default Admin;



// imageUrl: 'https://example.com/path/to/image.jpg'