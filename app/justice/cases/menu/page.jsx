"use client"

import React, { useState } from "react";
import AddedFavourite from "../added-favourite/page";

const Menu = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="menu">
      <div className="menu-item">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_45_45720)">
            <path
              d="M14.166 2.50286C14.3849 2.28399 14.6447 2.11037 14.9307 1.99192C15.2167 1.87347 15.5232 1.8125 15.8327 1.8125C16.1422 1.8125 16.4487 1.87347 16.7347 1.99192C17.0206 2.11037 17.2805 2.28399 17.4993 2.50286C17.7182 2.72173 17.8918 2.98156 18.0103 3.26753C18.1287 3.5535 18.1897 3.85999 18.1897 4.16952C18.1897 4.47905 18.1287 4.78555 18.0103 5.07152C17.8918 5.35748 17.7182 5.61732 17.4993 5.83619L6.24935 17.0862L1.66602 18.3362L2.91602 13.7529L14.166 2.50286Z"
              stroke="#009B07"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_45_45720">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
        Edit/Append Case File
      </div>

      <div className="menu-item" onClick={handleOpenModal}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
            stroke="#009B07"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Make Favourites
        <AddedFavourite
          isOpen={isModalOpen} 
          onClose={handleCloseModal} 
        />
      </div>

      <div className="menu-item">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93"
            stroke="#009B07"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Deactivate
      </div>

      <div className="menu-item">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3 6H5M5 6H21M5 6V20C5 20.5304 5.21071 21.0391 5.58579 21.4142C5.96086 21.7893 6.46957 22 7 22H17C17.5304 22 18.0391 21.7893 18.4142 21.4142C18.7893 21.0391 19 20.5304 19 20V6H5ZM8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M10 11V17M14 11V17"
            stroke="#009B07"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Expunge Case File
      </div>

      <div className="menu-item">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 14L4 9M4 9L9 4M4 9H16C17.0609 9 18.0783 9.42143 18.8284 10.1716C19.5786 10.9217 20 11.9391 20 13V20"
            stroke="#009B07"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Transfer File within Agency
      </div>

      <div className="menu-item">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 14L20 9M20 9L15 4M20 9H8C6.93913 9 5.92172 9.42143 5.17157 10.1716C4.42143 10.9217 4 11.9391 4 13V20"
            stroke="#009B07"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Transfer File outside Agency
      </div>

      <div className="menu-item">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 17L12 22L22 17M2 12L12 17L22 12M12 2L2 7L12 12L22 7L12 2Z"
            stroke="#009B07"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Classify Case File
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.17969 6.08123L8.17969 12.3112L8.17969 17.9212C8.17969 18.8812 9.33969 19.3612 10.0197 18.6812L15.1997 13.5012C16.0297 12.6712 16.0297 11.3212 15.1997 10.4912L13.2297 8.52123L10.0197 5.31123C9.33969 4.64123 8.17969 5.12123 8.17969 6.08123Z"
            fill="#707172"
          />
        </svg>
      </div>

      <div className="menu-item">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9V2L18 2V9M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16L2 11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18M6 14L18 14V22H6V14Z"
            stroke="#009B07"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Print
      </div>

      <div className="menu-item">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33398 8.66667V8H2.66732V8.66667H3.33398ZM8.66732 8.66667V8H8.00065V8.66667H8.66732ZM8.66732 14H8.00065V14.6667H8.66732V14ZM18.0007 4.66667H18.6673V4.39067L18.4727 4.19467L18.0007 4.66667ZM14.0007 0.666667L14.4727 0.194667L14.2767 0H14.0007V0.666667ZM3.33398 9.33333H4.66732V8H3.33398V9.33333ZM4.00065 14.6667V11.3333H2.66732V14.6667H4.00065ZM4.00065 11.3333V8.66667H2.66732V11.3333H4.00065ZM4.66732 10.6667H3.33398V12H4.66732V10.6667ZM5.33398 10C5.33398 10.1768 5.26375 10.3464 5.13872 10.4714C5.0137 10.5964 4.84413 10.6667 4.66732 10.6667V12C5.19775 12 5.70646 11.7893 6.08153 11.4142C6.4566 11.0391 6.66732 10.5304 6.66732 10H5.33398ZM4.66732 9.33333C4.84413 9.33333 5.0137 9.40357 5.13872 9.5286C5.26375 9.65362 5.33398 9.82319 5.33398 10H6.66732C6.66732 9.46957 6.4566 8.96086 6.08153 8.58579C5.70646 8.21071 5.19775 8 4.66732 8V9.33333ZM8.00065 8.66667V14H9.33398V8.66667H8.00065ZM8.66732 14.6667H10.0007V13.3333H8.66732V14.6667ZM12.0007 12.6667V10H10.6673V12.6667H12.0007ZM10.0007 8H8.66732V9.33333H10.0007V8ZM12.0007 10C12.0007 9.46957 11.7899 8.96086 11.4149 8.58579C11.0398 8.21071 10.5311 8 10.0007 8V9.33333C10.1775 9.33333 10.347 9.40357 10.4721 9.5286C10.5971 9.65362 10.6673 9.82319 10.6673 10H12.0007ZM10.0007 14.6667C10.5311 14.6667 11.0398 14.456 11.4149 14.0809C11.7899 13.7058 12.0007 13.1971 12.0007 12.6667H10.6673C10.6673 12.8435 10.5971 13.013 10.4721 13.1381C10.347 13.2631 10.1775 13.3333 10.0007 13.3333V14.6667ZM13.334 8V14.6667H14.6673V8H13.334ZM14.0007 9.33333H17.334V8H14.0007V9.33333ZM14.0007 12H16.0007V10.6667H14.0007V12ZM2.66732 6.66667V2H1.33398V6.66667H2.66732ZM17.334 4.66667V6.66667H18.6673V4.66667H17.334ZM3.33398 1.33333H14.0007V0H3.33398V1.33333ZM13.5287 1.13867L17.5287 5.13867L18.4727 4.19467L14.4727 0.194667L13.5287 1.13867ZM2.66732 2C2.66732 1.82319 2.73756 1.65362 2.86258 1.5286C2.9876 1.40357 3.15717 1.33333 3.33398 1.33333V0C2.80355 0 2.29484 0.210714 1.91977 0.585786C1.5447 0.960859 1.33398 1.46957 1.33398 2H2.66732ZM1.33398 16V18H2.66732V16H1.33398ZM3.33398 20H16.6673V18.6667H3.33398V20ZM18.6673 18V16H17.334V18H18.6673ZM16.6673 20C17.1978 20 17.7065 19.7893 18.0815 19.4142C18.4566 19.0391 18.6673 18.5304 18.6673 18H17.334C17.334 18.1768 17.2637 18.3464 17.1387 18.4714C17.0137 18.5964 16.8441 18.6667 16.6673 18.6667V20ZM1.33398 18C1.33398 18.5304 1.5447 19.0391 1.91977 19.4142C2.29484 19.7893 2.80355 20 3.33398 20V18.6667C3.15717 18.6667 2.9876 18.5964 2.86258 18.4714C2.73756 18.3464 2.66732 18.1768 2.66732 18H1.33398Z"
            fill="#009B07"
          />
        </svg>
        PDF
      </div>
    </div>
  );
};

export default Menu;
