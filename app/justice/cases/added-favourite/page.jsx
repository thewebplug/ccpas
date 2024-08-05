import React from "react";

const AddedFavourite = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="added-favourite">
      <div className="added-favourite__overlay" onClick={onClose}></div>
      <div className="added-favourite__added-notif">
        <svg
          width="42"
          height="42"
          viewBox="0 0 42 42"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="21" cy="21" r="21" fill="#C5FFC7" />
          <path
            d="M16.9992 26.0038L20.9992 30.0038M20.9992 30.0038L24.9992 26.0038M20.9992 30.0038V21.0038M29.8792 27.0938C30.7486 26.4825 31.4006 25.61 31.7405 24.603C32.0804 23.596 32.0906 22.5069 31.7696 21.4937C31.4486 20.4805 30.8131 19.5959 29.9553 18.9684C29.0975 18.3409 28.062 18.003 26.9992 18.0038H25.7392C25.4384 16.8317 24.8757 15.7431 24.0933 14.8199C23.311 13.8968 22.3293 13.1631 21.2224 12.6742C20.1155 12.1853 18.912 11.9539 17.7027 11.9974C16.4934 12.0408 15.3097 12.3581 14.2408 12.9253C13.1718 13.4924 12.2454 14.2947 11.5314 15.2717C10.8174 16.2486 10.3343 17.3749 10.1185 18.5656C9.90267 19.7563 9.95981 20.9804 10.2856 22.1459C10.6113 23.3113 11.1973 24.3876 11.9992 25.2938"
            stroke="#101828"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        <div>
          Case File <span>PF00458 Added to Favourite</span>
        </div>
      </div>
    </div>
  );
};

export default AddedFavourite;
