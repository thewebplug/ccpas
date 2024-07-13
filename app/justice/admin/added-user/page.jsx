import React from "react";

const AddedUserModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="added-user">
      <div className="added-user__overlay" onClick={onClose}></div>
      <div className="added-user__added-notif">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="21" r="21" fill="#C0FFC3" />
          <path
            d="M28.5119 14.85L22.5719 11.42C21.6019 10.86 20.4019 10.86 19.4219 11.42L13.4919 14.85C12.5219 15.41 11.9219 16.45 11.9219 17.58V24.42C11.9219 25.54 12.5219 26.58 13.4919 27.15L19.4319 30.58C20.4019 31.14 21.6019 31.14 22.5819 30.58L28.5219 27.15C29.4919 26.59 30.0919 25.55 30.0919 24.42V17.58C30.0819 16.45 29.4819 15.42 28.5119 14.85ZM21.0019 16.34C22.2919 16.34 23.3319 17.38 23.3319 18.67C23.3319 19.96 22.2919 21 21.0019 21C19.7119 21 18.6719 19.96 18.6719 18.67C18.6719 17.39 19.7119 16.34 21.0019 16.34ZM23.6819 25.66H18.3219C17.5119 25.66 17.0419 24.76 17.4919 24.09C18.1719 23.08 19.4919 22.4 21.0019 22.4C22.5119 22.4 23.8319 23.08 24.5119 24.09C24.9619 24.75 24.4819 25.66 23.6819 25.66Z"
            fill="#009B07"
          />
        </svg>
        <div>
          A new user has been added <span>(Femi Olalekan)</span>
        </div>
      </div>
    </div>
  );
};

export default AddedUserModal;
