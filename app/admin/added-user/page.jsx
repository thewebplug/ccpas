import React from 'react';

const AddedUserModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="added-user">
      <div className="added-user__overlay" onClick={onClose}></div>
      <div className="added-user__exp-notif">
        <svg
          width="42" 
          height="42" 
          viewBox="0 0 24 24" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        > 
        <circle cx="21" cy="21" r="64" fill="#d2ffe5"/>
          <path 
            d="M19.5119 5.85L13.5719 2.42C12.6019 1.86 11.4019 1.86 10.4219 2.42L4.49187 5.85C3.52187 6.41 2.92188 7.45 2.92188 8.58V15.42C2.92188 16.54 3.52187 17.58 4.49187 18.15L10.4319 21.58C11.4019 22.14 12.6019 22.14 13.5819 21.58L19.5219 18.15C20.4919 17.59 21.0919 16.55 21.0919 15.42V8.58C21.0819 7.45 20.4819 6.42 19.5119 5.85ZM12.0019 7.34C13.2919 7.34 14.3319 8.38 14.3319 9.67C14.3319 10.96 13.2919 12 12.0019 12C10.7119 12 9.67188 10.96 9.67188 9.67C9.67188 8.39 10.7119 7.34 12.0019 7.34ZM14.6819 16.66H9.32187C8.51187 16.66 8.04187 15.76 8.49187 15.09C9.17187 14.08 10.4919 13.4 12.0019 13.4C13.5119 13.4 14.8319 14.08 15.5119 15.09C15.9619 15.75 15.4819 16.66 14.6819 16.66Z" 
            fill="#009B07"
          />
        </svg>
        <div>A new user has been added <span>(Femi Olalekan)</span>
        </div>
      </div>
    </div>
  );
};

export default AddedUserModal;
