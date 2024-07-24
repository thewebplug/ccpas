import React from "react";

const AddedRoleModal = ({ isOpen, onClose, roleName }) => {
  if (!isOpen) return null;

  return (
    <div className="added-role">
      <div className="added-role__overlay" onClick={onClose}></div>
      <div className="added-role__added-notif">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="21" r="21" fill="#C0FFC3" />
          <path
            d="M25 21.9V26.1C25 29.6 23.6 31 20.1 31H15.9C12.4 31 11 29.6 11 26.1V21.9C11 18.4 12.4 17 15.9 17H20.1C23.6 17 25 18.4 25 21.9Z"
            fill="#009B07"
          />
          <path
            d="M26.1017 11H21.9017C18.8186 11 17.3727 12.0941 17.0715 14.739C17.0084 15.2923 17.4667 15.75 18.0236 15.75H20.1017C24.3017 15.75 26.2517 17.7 26.2517 21.9V23.9781C26.2517 24.535 26.7094 24.9933 27.2627 24.9303C29.9076 24.629 31.0017 23.1831 31.0017 20.1V15.9C31.0017 12.4 29.6017 11 26.1017 11Z"
            fill="#009B07"
          />
        </svg>

        <div>
          A new role has been created: <span>{roleName}</span>
        </div>
      </div>
    </div>
  );
};

export default AddedRoleModal;
