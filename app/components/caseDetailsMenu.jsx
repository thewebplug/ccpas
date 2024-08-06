"use client"

import React, { useEffect, useRef, useState } from "react";
import AddedFavourite from "./addedFavouriteSuccessMessage";
import CaseFileModal from "../justice/dashboard/case-file/page";

const Menu = ({open, setOpen}) => {
  // const [open, setOpen] = useState(true)
  const [selectedItem, setSelectedItem] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStage, setModaleStage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const mediaRef = useRef(null);
  const [doc, setDoc] = useState("");

  useEffect(() => {
    const otpInputs = document.querySelectorAll(".case-details__modal__otp__otp-group__otp");

    otpInputs.forEach((input, index) => {
      input.addEventListener("input", (event) => {
        const inputValue = event.target.value;

        if (inputValue && index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }
      });

      input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && index > 0 && !input.value) {
          otpInputs[index - 1].focus();
          event.preventDefault();
        }
      });
    });
  }, [modalStage === 3]);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedItem(null);
  };

  const handleUpload = async (item) => {
    setLoading(true);
    setTimeout(() => {
      setDoc(item);
      setLoading(false);
    }, 5000);
  };
  const handleStage1 = () => {
    if (!!doc) {
      setModaleStage(2);
    } else {
      alert("Please Upload Certified Court Order For Expungement");
    }
  };
  const handleStage2 = () => {
    setModaleStage(3);
  };
  const handleStage3 = () => {
    setModaleStage(4);
  };
  const handleStage4 = () => {
    window.location.href = "/justice/expunge-doc";
  };
  const handleModalClose = (e) => {
    if (e.target.classList.contains("case-details__modal")) {
      setModalOpen(false);
      setModaleStage(1)
    }
  };

  return (
     open && <div className="menu-cover">
     <div className="menu-cover__menu">
      <div className="menu-cover__menu__menu-item">
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

      <div className="menu-cover__menu__menu-item" onClick={() => setIsModalOpen(true)}>
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
      </div>
        <AddedFavourite
          open={isModalOpen} 
          setOpen={setIsModalOpen} 
        />

      <div className="menu-cover__menu__menu-item">
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

      <div className="menu-cover__menu__menu-item"
      onClick={() => setModalOpen(true)}
      >
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

      <div className="menu-cover__menu__menu-item"
      onClick={openModal}
      >
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

      <div className="menu-cover__menu__menu-item"
       onClick={openModal}
      >
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

      <div className="menu-cover__menu__menu-item">
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

      <div className="menu-cover__menu__menu-item">
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

      <div className="menu-cover__menu__menu-item">
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

    <div className="menu-cover__modal"
      onClick={() => setOpen(false)}
      ></div>

<CaseFileModal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        item={selectedItem}
      />

{modalOpen && (
        <div className="case-details__modal" onClick={handleModalClose}>
          {modalStage === 1 || modalStage === 2 ? (
            <div className="case-details__modal__inner">
              <svg
                className="case-details__modal__inner__icon"
                width="80"
                height="81"
                viewBox="0 0 80 81"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  y="0.5"
                  width="80"
                  height="80"
                  rx="40"
                  fill="url(#paint0_linear_7644_138298)"
                />
                <path
                  d="M52.0942 31.4727C49.9475 31.2593 47.8009 31.0993 45.6409 30.9793V30.966L45.3475 29.2327C45.1475 28.006 44.8542 26.166 41.7342 26.166H38.2409C35.1342 26.166 34.8409 27.926 34.6275 29.2193L34.3475 30.926C33.1075 31.006 31.8675 31.086 30.6275 31.206L27.9075 31.4727C27.3475 31.526 26.9475 32.0193 27.0009 32.566C27.0542 33.1127 27.5342 33.5127 28.0942 33.4593L30.8142 33.1927C37.8009 32.4993 44.8409 32.766 51.9075 33.4727C51.9475 33.4727 51.9742 33.4727 52.0142 33.4727C52.5209 33.4727 52.9609 33.086 53.0142 32.566C53.0542 32.0193 52.6542 31.526 52.0942 31.4727Z"
                  fill="#ED1651"
                />
                <path
                  d="M49.6403 35.354C49.3203 35.0207 48.8803 34.834 48.427 34.834H31.5737C31.1203 34.834 30.667 35.0207 30.3603 35.354C30.0537 35.6873 29.8803 36.1407 29.907 36.6073L30.7337 50.2873C30.8803 52.314 31.067 54.8473 35.7203 54.8473H44.2803C48.9337 54.8473 49.1203 52.3273 49.267 50.2873L50.0937 36.6207C50.1203 36.1407 49.947 35.6873 49.6403 35.354ZM42.2136 48.1673H37.7737C37.227 48.1673 36.7737 47.714 36.7737 47.1673C36.7737 46.6207 37.227 46.1673 37.7737 46.1673H42.2136C42.7603 46.1673 43.2136 46.6207 43.2136 47.1673C43.2136 47.714 42.7603 48.1673 42.2136 48.1673ZM43.3337 42.834H36.667C36.1203 42.834 35.667 42.3807 35.667 41.834C35.667 41.2873 36.1203 40.834 36.667 40.834H43.3337C43.8803 40.834 44.3337 41.2873 44.3337 41.834C44.3337 42.3807 43.8803 42.834 43.3337 42.834Z"
                  fill="#ED1651"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_7644_138298"
                    x1="40"
                    y1="0.5"
                    x2="40"
                    y2="86.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#FF2B65" stop-opacity="0.2" />
                    <stop offset="1" stop-color="#ED1651" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>

              {modalStage === 1 && (
                <div className="case-details__modal__inner__title">
                  to Expunge Case No PF00458
                </div>
              )}
              {modalStage === 1 && (
                <div className="case-details__modal__inner__title">
                  <span>
                    Please upload Certified Court Order for Expungement
                  </span>
                </div>
              )}

              {modalStage === 1 && (
                <label>
                  <div className="case-details__modal__inner__upload">
                    <svg
                      width="60"
                      height="61"
                      viewBox="0 0 60 61"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="30" cy="30.5" r="30" fill="#E5FFE7" />
                    </svg>

                    <div className="case-details__modal__inner__upload__title">
                      Drag & drop files or <span>Browse</span>
                    </div>
                    <div className="case-details__modal__inner__upload__subtitle">
                      Supported formates: JPEG, PNG, PDF
                    </div>
                  </div>

                  <input
                    type="file"
                    name=""
                    id=""
                    hidden
                    ref={mediaRef}
                    accept=".pdf"
                    onChange={(e) => handleUpload(e.target.files[0])}
                  />
                </label>
              )}

              {modalStage === 1 && (
                <>
                  {loading && (
                    <div className="case-details__modal__inner__label">
                      Uploading
                    </div>
                  )}
                  {loading && (
                    <div className="case-details__modal__inner__uploading">
                      <div>Court-Order Expungement PF00458.PDF</div>

                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.5 16.5C6.37833 16.5 4.34331 15.6571 2.84315 14.1568C1.3429 12.6565 0.5 10.6217 0.5 8.5C0.5 6.37833 1.3429 4.34332 2.84315 2.84315C4.34353 1.3429 6.37833 0.5 8.5 0.5C10.6217 0.5 12.6567 1.3429 14.1568 2.84315C15.6571 4.34353 16.5 6.37833 16.5 8.5C16.4974 10.621 15.6538 12.6545 14.154 14.154C12.6543 15.6538 10.6207 16.4974 8.5 16.5ZM11.5851 6.44242V6.4423C11.7254 6.30678 11.8053 6.12063 11.8071 5.92558C11.8088 5.73053 11.7321 5.54292 11.5941 5.40496C11.4562 5.26701 11.2685 5.19031 11.0735 5.19202C10.8784 5.19372 10.6923 5.27371 10.5568 5.41397L8.5 7.47149L6.44323 5.41397C6.25853 5.2356 5.99346 5.16779 5.7457 5.23572C5.49805 5.30366 5.3046 5.49713 5.23665 5.74477C5.16871 5.99254 5.23653 6.2576 5.4149 6.4423L7.47167 8.49983L5.4149 10.5573C5.27464 10.6929 5.19465 10.879 5.19294 11.0741C5.19124 11.2691 5.26794 11.4567 5.40589 11.5947C5.54383 11.7326 5.73145 11.8093 5.9265 11.8076C6.12155 11.8059 6.3077 11.7259 6.44322 11.5857L8.49999 9.52815L10.5568 11.5857C10.6923 11.7259 10.8784 11.8059 11.0735 11.8076C11.2685 11.8093 11.4561 11.7326 11.5941 11.5947C11.7321 11.4567 11.8088 11.2691 11.807 11.0741C11.8053 10.879 11.7253 10.6929 11.5851 10.5573L9.52832 8.49983L11.5851 6.44242Z"
                          fill="#E6E6E6"
                        />
                      </svg>
                    </div>
                  )}
                  {!!doc && (
                    <div className="case-details__modal__inner__label">
                      Uploaded
                    </div>
                  )}
                  {!!doc && (
                    <div className="case-details__modal__inner__uploaded">
                      <div>Court-Order Expungement PF00458.PDF</div>

                      <svg
                        width="17"
                        height="17"
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="pointer"
                        onClick={() => setDoc(null)}
                      >
                        <circle cx="8.5" cy="8.5" r="8" fill="#FFF3F3" />
                        <path
                          d="M11.9769 5.64517H10.9774C10.964 5.64054 10.9501 5.63753 10.936 5.63614H9.87174V4.75348C9.8718 4.68714 9.8458 4.62346 9.79945 4.57608C9.75304 4.52871 9.68995 4.50138 9.62369 4.5H7.10672C7.03948 4.5 6.97501 4.52667 6.92752 4.57422C6.87997 4.62177 6.85324 4.68624 6.85324 4.75348V5.63614H5.79439C5.7803 5.63753 5.7664 5.64054 5.75303 5.64517H4.75347C4.66288 5.64517 4.57921 5.69345 4.53395 5.77188C4.48868 5.85031 4.48868 5.94691 4.53395 6.02535C4.57921 6.10378 4.66288 6.15211 4.75347 6.15211H5.56783L6.22585 12.2735C6.2329 12.3358 6.26263 12.3933 6.3094 12.4351C6.35611 12.4769 6.41661 12.4999 6.47932 12.5H10.2546C10.3167 12.4991 10.3763 12.4756 10.4223 12.4339C10.4683 12.3922 10.4975 12.3352 10.5045 12.2735L11.1625 6.16105H11.9769C12.0675 6.16105 12.1511 6.11277 12.1964 6.03434C12.2417 5.95591 12.2417 5.85924 12.1964 5.78087C12.1511 5.70244 12.0675 5.6541 11.9769 5.6541L11.9769 5.64517ZM7.36566 5.00695H9.36472V5.63614H7.36566V5.00695ZM10.0245 11.9894H6.70582L6.07663 6.16111H10.6537L10.0245 11.9894Z"
                          fill="#E41D1D"
                        />
                        <path
                          d="M8.36675 11.3957C8.43399 11.3957 8.49845 11.369 8.54601 11.3215C8.59356 11.2739 8.62023 11.2095 8.62023 11.1422V7.00742C8.62023 6.91683 8.57195 6.83316 8.49352 6.7879C8.41509 6.74257 8.31842 6.74257 8.23999 6.7879C8.16156 6.83317 8.11328 6.91683 8.11328 7.00742V11.1422C8.11328 11.2095 8.13995 11.2739 8.1875 11.3215C8.23505 11.369 8.29952 11.3957 8.36676 11.3957H8.36675Z"
                          fill="#E41D1D"
                        />
                        <path
                          d="M7.3674 11.3944H7.37817C7.44511 11.3917 7.50819 11.3625 7.5537 11.3133C7.59915 11.2641 7.62334 11.1989 7.62088 11.132L7.46805 6.99719L7.46811 6.99713C7.46672 6.92941 7.43777 6.86512 7.38787 6.81926C7.33791 6.77345 7.27146 6.75004 7.2038 6.75443C7.13687 6.75726 7.07379 6.78645 7.02834 6.83563C6.98283 6.88481 6.95869 6.95 6.9611 7.01694L7.11393 11.1517C7.11712 11.2169 7.14517 11.2784 7.19236 11.3236C7.23949 11.3687 7.30215 11.3941 7.3674 11.3944L7.3674 11.3944Z"
                          fill="#E41D1D"
                        />
                        <path
                          d="M9.35421 11.3931H9.36318C9.42999 11.3946 9.4947 11.3698 9.54345 11.3241C9.59215 11.2784 9.62104 11.2154 9.62387 11.1486L9.7767 7.01379H9.77664C9.77911 6.94686 9.75491 6.88167 9.70946 6.83249C9.66396 6.78331 9.60088 6.75412 9.53394 6.75129C9.4655 6.74424 9.39724 6.76633 9.34589 6.8122C9.29455 6.85801 9.26493 6.92338 9.26427 6.99224L9.10964 11.127H9.1097C9.10627 11.1949 9.13022 11.2613 9.17621 11.3113C9.22214 11.3613 9.2863 11.3908 9.35421 11.3931L9.35421 11.3931Z"
                          fill="#E41D1D"
                        />
                      </svg>
                    </div>
                  )}
                </>
              )}

              {modalStage === 1 && (
                <button
                  className="case-details__modal__inner__button"
                  onClick={handleStage1}
                >
                  Yes
                </button>
              )}

              {modalStage === 2 && (
                <>
                  <div className="case-details__modal__inner__title">
                    <span>expungement Review</span>
                  </div>
                  <div className="case-details__modal__inner__subtitle">
                    Expungement by: <span>Alaba Adenuga(FM56898324)</span>
                  </div>
                  <div className="case-details__modal__inner__subtitle">
                    Title: <span>Director of Legal Records</span>
                  </div>
                  <div className="case-details__modal__inner__subtitle">
                    Date: <span>06-06-2024</span>
                  </div>
                  <div className="case-details__modal__inner__subtitle">
                    Agency: <span>Federal Ministry of Justice HQ Abuja</span>
                  </div>
                  <div className="case-details__modal__inner__file-name">
                    Expunge case file: <span>PF00458</span>
                  </div>

                  <div className="case-details__modal__inner__question">
                    Are you sure you want to <br /> proceed?
                  </div>

                  <div className="case-details__modal__inner__label">
                    Uploaded
                  </div>
                  <div className="case-details__modal__inner__uploaded">
                    <div>Court-Order Expungement PF00458.PDF</div>

                    <div>View</div>
                  </div>

                  <button
                    className="case-details__modal__inner__button"
                    onClick={handleStage2}
                  >
                    Yes
                  </button>
                </>
              )}
            </div>
          ) : (
            ""
          )}

          {modalStage === 3 && (
            <form className="case-details__modal__otp" onSubmit={handleStage3}>
              <div className="case-details__modal__otp__title">OTP</div>
              <div className="case-details__modal__otp__subtitle">
                Enter the OTP sent to Alaba.Adenuga@fmoj.gov.ng
              </div>
              <div className="case-details__modal__otp__otp-group">
                <input className="case-details__modal__otp__otp-group__otp" type="text" required maxLength={1} />
                <input className="case-details__modal__otp__otp-group__otp" type="text" required maxLength={1} />
                <input className="case-details__modal__otp__otp-group__otp" type="text" required maxLength={1} />
                <input className="case-details__modal__otp__otp-group__otp" type="text" required maxLength={1} />
              </div>
              <div className="case-details__modal__otp__request">
                Request a new code
              </div>

              <button
                className="case-details__modal__otp__button"
                type="submit"
              >
                Proceed
              </button>
            </form>
          )}

          {modalStage === 4 && (
            <div
              className="case-details__modal__exp-notif pointer"
              onClick={handleStage4}
            >
              <svg
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="21" cy="21" r="21" fill="#FFC6D6" />
                <path
                  d="M30.0697 14.23C28.4597 14.07 26.8497 13.95 25.2297 13.86V13.85L25.0097 12.55C24.8597 11.63 24.6397 10.25 22.2997 10.25H19.6797C17.3497 10.25 17.1297 11.57 16.9697 12.54L16.7597 13.82C15.8297 13.88 14.8997 13.94 13.9697 14.03L11.9297 14.23C11.5097 14.27 11.2097 14.64 11.2497 15.05C11.2897 15.46 11.6497 15.76 12.0697 15.72L14.1097 15.52C19.3497 15 24.6297 15.2 29.9297 15.73C29.9597 15.73 29.9797 15.73 30.0097 15.73C30.3897 15.73 30.7197 15.44 30.7597 15.05C30.7897 14.64 30.4897 14.27 30.0697 14.23Z"
                  fill="#ED1651"
                />
                <path
                  d="M28.2297 17.14C27.9897 16.89 27.6597 16.75 27.3197 16.75H14.6797C14.3397 16.75 13.9997 16.89 13.7697 17.14C13.5397 17.39 13.4097 17.73 13.4297 18.08L14.0497 28.34C14.1597 29.86 14.2997 31.76 17.7897 31.76H24.2097C27.6997 31.76 27.8398 29.87 27.9497 28.34L28.5697 18.09C28.5897 17.73 28.4597 17.39 28.2297 17.14ZM22.6597 26.75H19.3297C18.9197 26.75 18.5797 26.41 18.5797 26C18.5797 25.59 18.9197 25.25 19.3297 25.25H22.6597C23.0697 25.25 23.4097 25.59 23.4097 26C23.4097 26.41 23.0697 26.75 22.6597 26.75ZM23.4997 22.75H18.4997C18.0897 22.75 17.7497 22.41 17.7497 22C17.7497 21.59 18.0897 21.25 18.4997 21.25H23.4997C23.9097 21.25 24.2497 21.59 24.2497 22C24.2497 22.41 23.9097 22.75 23.4997 22.75Z"
                  fill="#ED1651"
                />
              </svg>

              <div>
                Case File <span>PF00458 Expunged</span>
              </div>
            </div>
          )}
        </div>
      )}
   </div>
  );
};

export default Menu;
