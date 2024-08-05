"use client";

import React, { useState } from "react";
import Image from "next/image";
import Menu from "../menu/page";
// import AddedFavourite from "../added-favourite/page";

const ExcitingCase = ({ isOpen, onClose,  text, maxLength  }) => {
  // if (!isOpen) return null;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  // const truncateString = (str, maxLength) => {
  //   if (str.length > maxLength) {
  //     return str.substring(0, maxLength) + "...";
  //   }
  //   return str;
  // };

  const assets = [
    {
      id: "EFCC/ABJ/INV/012/2024",
      description:
        "The EFCC conducted a raid on June 18, 2024, following a thorough investigation into allegat...",
      amount: "$10,000",
      status: "Checked In",
      image: "/assets/avatars/goods.png",
    },
    {
      id: "EFCC/ABJ/INV/012/2024",
      description:
        "The EFCC conducted a raid on June 18, 2024, following a thorough investigation into allegat...",
      amount: "₦10,000",
      status: "Checked Out",
      image: "/assets/avatars/goods.png",
    },
  ];

  return (
    <div className="exciting-cases">
      <div className="exciting-cases__header">
        <div className="exciting-cases__header__title">
          <svg
            width="62"
            height="56"
            viewBox="0 0 62 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.9091 0L8 10.1818V25.4545C8 39.5818 17.7745 52.7927 30.9091 56C44.0436 52.7927 53.8182 39.5818 53.8182 25.4545V10.1818L30.9091 0Z"
              fill="#01009A"
            />
            <g filter="url(#filter0_i_45_45225)">
              <path
                d="M30.8085 4L11 12.9091V26.2727C11 38.6341 19.4516 50.1936 30.8085 53C42.1654 50.1936 50.617 38.6341 50.617 26.2727V12.9091L30.8085 4Z"
                fill="url(#paint0_linear_45_45225)"
              />
            </g>
            <g clip-path="url(#clip0_45_45225)">
              <path
                d="M26.3244 31.9207L27.5644 26.6077L23.4414 23.0357L28.8724 22.5657L30.9994 17.5547L33.1264 22.5647L38.5564 23.0347L34.4334 26.6067L35.6744 31.9197L30.9994 29.0997L26.3244 31.9207Z"
                fill="#CCCCFF"
              />
            </g>
            <path
              d="M0.62325 44.4863C0.306749 43.2237 1.26156 42 2.56323 42H59.4368C60.7384 42 61.6933 43.2237 61.3768 44.4863L58.87 54.4863C58.647 55.376 57.8473 56 56.93 56H5.06997C4.15271 56 3.35302 55.376 3.12999 54.4863L0.62325 44.4863Z"
              fill="url(#paint1_linear_45_45225)"
            />
            <path
              d="M10.2766 48.6914H9.18781C9.16792 48.5505 9.12732 48.4254 9.06601 48.3161C9.00469 48.205 8.92597 48.1106 8.82986 48.0327C8.73374 47.9548 8.62271 47.8951 8.49676 47.8537C8.37247 47.8123 8.23741 47.7915 8.09157 47.7915C7.82808 47.7915 7.59856 47.857 7.40301 47.9879C7.20746 48.1172 7.05583 48.3061 6.94811 48.5547C6.84039 48.8016 6.78653 49.1016 6.78653 49.4545C6.78653 49.8175 6.84039 50.1224 6.94811 50.3693C7.05748 50.6162 7.20995 50.8027 7.4055 50.9286C7.60104 51.0546 7.82725 51.1175 8.08412 51.1175C8.22829 51.1175 8.3617 51.0985 8.48433 51.0604C8.60862 51.0223 8.71882 50.9667 8.81494 50.8938C8.91106 50.8192 8.9906 50.7289 9.05358 50.6229C9.11821 50.5168 9.16295 50.3958 9.18781 50.2599L10.2766 50.2649C10.2484 50.4986 10.178 50.724 10.0653 50.9411C9.95426 51.1565 9.80429 51.3496 9.61537 51.5202C9.4281 51.6893 9.20438 51.8235 8.9442 51.9229C8.68568 52.0207 8.39318 52.0696 8.06672 52.0696C7.61265 52.0696 7.20663 51.9669 6.84868 51.7614C6.49238 51.5559 6.21066 51.2584 6.00351 50.869C5.79801 50.4795 5.69527 50.008 5.69527 49.4545C5.69527 48.8994 5.79967 48.4271 6.00848 48.0376C6.21729 47.6482 6.50067 47.3516 6.85862 47.1477C7.21658 46.9422 7.61927 46.8395 8.06672 46.8395C8.3617 46.8395 8.63514 46.8809 8.88703 46.9638C9.14058 47.0466 9.36513 47.1676 9.56068 47.3267C9.75623 47.4841 9.91532 47.6772 10.038 47.9059C10.1622 48.1346 10.2418 48.3964 10.2766 48.6914ZM15.7267 49.4545C15.7267 50.0097 15.6215 50.482 15.411 50.8714C15.2022 51.2609 14.9172 51.5584 14.5559 51.7638C14.1963 51.9677 13.7919 52.0696 13.3428 52.0696C12.8904 52.0696 12.4844 51.9669 12.1248 51.7614C11.7652 51.5559 11.481 51.2584 11.2722 50.869C11.0633 50.4795 10.9589 50.008 10.9589 49.4545C10.9589 48.8994 11.0633 48.4271 11.2722 48.0376C11.481 47.6482 11.7652 47.3516 12.1248 47.1477C12.4844 46.9422 12.8904 46.8395 13.3428 46.8395C13.7919 46.8395 14.1963 46.9422 14.5559 47.1477C14.9172 47.3516 15.2022 47.6482 15.411 48.0376C15.6215 48.4271 15.7267 48.8994 15.7267 49.4545ZM14.6354 49.4545C14.6354 49.0949 14.5816 48.7917 14.4739 48.5447C14.3678 48.2978 14.2178 48.1106 14.0239 47.983C13.83 47.8554 13.603 47.7915 13.3428 47.7915C13.0826 47.7915 12.8556 47.8554 12.6617 47.983C12.4678 48.1106 12.317 48.2978 12.2093 48.5447C12.1032 48.7917 12.0502 49.0949 12.0502 49.4545C12.0502 49.8142 12.1032 50.1174 12.2093 50.3643C12.317 50.6113 12.4678 50.7985 12.6617 50.9261C12.8556 51.0537 13.0826 51.1175 13.3428 51.1175C13.603 51.1175 13.83 51.0537 14.0239 50.9261C14.2178 50.7985 14.3678 50.6113 14.4739 50.3643C14.5816 50.1174 14.6354 49.8142 14.6354 49.4545ZM20.7822 46.9091V52H19.8525L17.6377 48.7958H17.6004V52H16.524V46.9091H17.4686L19.6661 50.1108H19.7108V46.9091H20.7822ZM21.6715 52V46.9091H25.0422V47.7965H22.7478V49.0096H24.8185V49.897H22.7478V52H21.6715ZM26.8426 46.9091V52H25.7662V46.9091H26.8426ZM29.5328 52H27.7281V46.9091H29.5477C30.0598 46.9091 30.5006 47.011 30.8702 47.2148C31.2397 47.417 31.5239 47.7079 31.7228 48.0874C31.9233 48.4669 32.0236 48.9209 32.0236 49.4496C32.0236 49.9799 31.9233 50.4356 31.7228 50.8168C31.5239 51.1979 31.2381 51.4904 30.8652 51.6942C30.494 51.8981 30.0498 52 29.5328 52ZM28.8045 51.0778H29.4881C29.8062 51.0778 30.0739 51.0214 30.291 50.9087C30.5097 50.7944 30.6738 50.6179 30.7832 50.3793C30.8942 50.139 30.9497 49.8291 30.9497 49.4496C30.9497 49.0734 30.8942 48.766 30.7832 48.5273C30.6738 48.2887 30.5105 48.113 30.2935 48.0004C30.0764 47.8877 29.8087 47.8313 29.4905 47.8313H28.8045V51.0778ZM32.8209 52V46.9091H36.2513V47.7965H33.8972V49.0096H36.0748V49.897H33.8972V51.1126H36.2612V52H32.8209ZM41.3652 46.9091V52H40.4355L38.2207 48.7958H38.1834V52H37.107V46.9091H38.0516L40.2491 50.1108H40.2938V46.9091H41.3652ZM42.0606 47.7965V46.9091H46.2417V47.7965H44.6831V52H43.6192V47.7965H42.0606ZM48.0066 46.9091V52H46.9303V46.9091H48.0066ZM49.7697 52H48.6163L50.3737 46.9091H51.7608L53.5158 52H52.3623L51.0871 48.0724H51.0474L49.7697 52ZM49.6976 49.9989H52.422V50.8391H49.6976V49.9989ZM54.1285 52V46.9091H55.2049V51.1126H57.3874V52H54.1285Z"
              fill="white"
            />
            <defs>
              <filter
                id="filter0_i_45_45225"
                x="11"
                y="4"
                width="43.6172"
                height="53"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="4" dy="4" />
                <feGaussianBlur stdDeviation="5" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.57 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_45_45225"
                />
              </filter>
              <linearGradient
                id="paint0_linear_45_45225"
                x1="30.8085"
                y1="4"
                x2="30.8085"
                y2="53"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#01009A" />
                <stop offset="1" stop-color="#000034" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_45_45225"
                x1="31"
                y1="42"
                x2="31"
                y2="56"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#01009A" />
                <stop offset="1" stop-color="#000034" />
              </linearGradient>
              <clipPath id="clip0_45_45225">
                <rect
                  width="16"
                  height="15"
                  fill="white"
                  transform="translate(23 17)"
                />
              </clipPath>
            </defs>
          </svg>
          <span>Case File Created By:</span>
          <Image
            alt=""
            src="/assets/avatars/ava-niyi.png"
            width={24}
            height={24}
          />
          <h2>Ahmed Olaniyi</h2>
          <h3>Admin</h3>
        </div>

        <div className="exciting-cases__header__title">
          <h3>Status of case:</h3>
          <div className="court-btn">
            Filed in Court
            <svg
              width="12"
              height="12"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="#3538CD"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>

          <div className="more-btn" onClick={handleMenuToggle}>
            More
            <svg
              width="17"
              height="17"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7.5L10 12.5L15 7.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          {isMenuOpen && <Menu />}
          {/* <AddedFavourite /> */}
        </div>
      </div>

      <div className="exciting-cases__body">
        <div className="exciting-cases__body__left">
          <div className="heading">
            <h2>SUSPECT BIO</h2>
            <span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3327 10.7474V14.2474C13.3327 17.1641 12.166 18.3307 9.24935 18.3307H5.74935C2.83268 18.3307 1.66602 17.1641 1.66602 14.2474V10.7474C1.66602 7.83073 2.83268 6.66406 5.74935 6.66406H9.24935C12.166 6.66406 13.3327 7.83073 13.3327 10.7474Z"
                  fill="#667085"
                />
                <path
                  d="M14.2508 1.66406H10.7508C8.24733 1.66406 7.03919 2.52971 6.74673 4.61314C6.66931 5.16465 7.13077 5.6224 7.68769 5.6224H9.25078C12.7508 5.6224 14.3758 7.2474 14.3758 10.7474V12.3105C14.3758 12.8674 14.8335 13.3289 15.385 13.2514C17.4685 12.959 18.3341 11.7508 18.3341 9.2474V5.7474C18.3341 2.83073 17.1674 1.66406 14.2508 1.66406Z"
                  fill="#667085"
                />
              </svg>
              copy
            </span>
          </div>

          <div className="suspect-details">
            <div className="suspect-photo">
              {/* <Image
                alt=""
                src="/assets/avatars/ava-img.png"
                width={390}
                height={280}
              /> */}

              <div className="main-image">
                <img src="/assets/avatars/ava-sus2.png" alt="Suspect" />
              </div>

              <div className="thumbnail-container">
                <img src="/assets/avatars/ava-sus2.png" alt="Suspect" />

                <img src="/assets/avatars/ava-sus2.png" alt="Suspect" />

                <img src="/assets/avatars/ava-sus4.png" alt="Suspect" />
              </div>
            </div>
            <div className="details">
              <div>
                <div>
                  <h2>First Name:</h2>
                  <p>Frank</p>
                </div>

                <div>
                  <h2>Last Name:</h2>
                  <p>Frank</p>
                </div>
              </div>

              <div>
                <div>
                  <h2>Middle Name:</h2>
                  <p>Frank</p>
                </div>

                <div>
                  <h2>Alias:</h2>
                  <p>Frank</p>
                </div>
              </div>
            </div>

            <div className="other-detail">
              <div>
                <h2>Phone Number:</h2>
                <p>07034573670</p>
              </div>

              <div className="other-detail__email">
                <h2>Email</h2>
                <p>Frank.A@gmail.com</p>
              </div>

              <div className="other-detail__bail">
                <h2>Staus of Suspect:</h2>
                <p>On Bail</p>
              </div>

              <div>
                <h2>Date Initiated:</h2>
                <p>JUN-19-2024</p>
                <h2>18:32:23</h2>
              </div>

              <div className="other-detail__associate">
                <h2>Known Associates:</h2>
                <p>Okoro Madu</p>
                <p>Shekau Ahmed</p>
                <p>Tope Adeniyi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="exciting-cases__body__right">
          <div className="heading">
            <div>
              <h2>Case Number:</h2>
              <span>PF00458</span>
            </div>

            <div>
              <h2>Offense Category:</h2>
              <span>Criminal Case</span>
            </div>

            <div>
              <h2>FMoj Dept:</h2>
              <span>Public Prosecution</span>
            </div>

            <div>
              <h2>Assigned Justice Officer:</h2>

              <div className="right-icon">
                <span>Ahmed Aisha</span>

                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="28"
                    height="27"
                    rx="7.5"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="28"
                    height="27"
                    rx="7.5"
                    stroke="#334155"
                  />
                  <g clip-path="url(#clip0_45_45330)">
                    <path
                      d="M19.4196 16.1745L17.7263 15.9811C17.5272 15.9578 17.3254 15.9798 17.136 16.0456C16.9466 16.1114 16.7747 16.2193 16.633 16.3611L15.4063 17.5878C13.5138 16.6253 11.9755 15.087 11.013 13.1945L12.2463 11.9611C12.533 11.6745 12.673 11.2745 12.6263 10.8678L12.433 9.18781C12.3952 8.8626 12.2391 8.56264 11.9945 8.34504C11.7498 8.12745 11.4337 8.00742 11.1063 8.00781H9.95297C9.19964 8.00781 8.57297 8.63448 8.61964 9.38781C8.97297 15.0811 13.5263 19.6278 19.213 19.9811C19.9663 20.0278 20.593 19.4011 20.593 18.6478V17.4945C20.5996 16.8211 20.093 16.2545 19.4196 16.1745Z"
                      fill="#334155"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_45330">
                      <rect
                        width="13"
                        height="12"
                        fill="white"
                        transform="translate(8 8)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="7.5"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="7.5"
                    stroke="#334155"
                  />
                  <g clip-path="url(#clip0_45_45333)">
                    <path
                      d="M13.445 9.26978C13.5971 9.1683 13.7741 9.11044 13.9567 9.1025C14.1394 9.09457 14.3207 9.13686 14.481 9.22478L14.5545 9.26978L18.5545 11.9363C18.6798 12.0198 18.7847 12.1305 18.8612 12.2602C18.9377 12.3899 18.984 12.5352 18.9965 12.6853L19 12.7683V17.5008C19.0001 17.7531 18.9048 17.9961 18.7333 18.1811C18.5617 18.366 18.3266 18.4794 18.075 18.4983L18 18.5008H10C9.74771 18.5009 9.50472 18.4056 9.31973 18.234C9.13474 18.0625 9.02142 17.8274 9.0025 17.5758L9 17.5008V12.7683C9 12.6177 9.034 12.4691 9.09945 12.3336C9.1649 12.198 9.26012 12.0789 9.378 11.9853L9.4455 11.9363L13.445 9.26978ZM14 10.1018L10.4015 12.5008L14 14.8998L17.5985 12.5008L14 10.1018Z"
                      fill="#334155"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_45333">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(8 8)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="7.5"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="7.5"
                    stroke="#334155"
                  />
                  <path
                    d="M16.5 9H11.5C10.12 9 9 10.115 9 11.49V14.48V14.98C9 16.355 10.12 17.47 11.5 17.47H12.25C12.385 17.47 12.565 17.56 12.65 17.67L13.4 18.665C13.73 19.105 14.27 19.105 14.6 18.665L15.35 17.67C15.445 17.545 15.595 17.47 15.75 17.47H16.5C17.88 17.47 19 16.355 19 14.98V11.49C19 10.115 17.88 9 16.5 9ZM14.5 14.875H11.5C11.295 14.875 11.125 14.705 11.125 14.5C11.125 14.295 11.295 14.125 11.5 14.125H14.5C14.705 14.125 14.875 14.295 14.875 14.5C14.875 14.705 14.705 14.875 14.5 14.875ZM16.5 12.375H11.5C11.295 12.375 11.125 12.205 11.125 12C11.125 11.795 11.295 11.625 11.5 11.625H16.5C16.705 11.625 16.875 11.795 16.875 12C16.875 12.205 16.705 12.375 16.5 12.375Z"
                    fill="#334155"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="heading">
            <div>
              <h2>Court Number:</h2>
              <div className="right-icon">
                <span>FHC00458</span>
              </div>
            </div>

            <div>
              <h2>Court Location:</h2>
              <span>Federal Highj Court, Abuja</span>
            </div>

            <div>
              <h2>Court Clerk:</h2>
              <span>Hauwa Jada</span>
            </div>

            <div>
              <h2>Assigned Judge:</h2>

              <div className="right-icon">
                <span>Olatunde Cardoso</span>
              </div>
            </div>
          </div>

          <div className="heading">
            <div>
              <h2>Change Sheet No:</h2>
              <span className="underline">NPF898458</span>
            </div>

            <div>
              <h2>Offense Type:</h2>
              <div className="right-icon">
                <div>Armed Robbery</div>
                <div>
                  +4
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M2.5 6H9.5M9.5 6L6 2.5M9.5 6L6 9.5"
                      stroke="#7A5AF8"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div>
              <h2>Agency:</h2>
              <span>Police</span>
            </div>

            <div>
              <h2>Law Enforcement Officer:</h2>

              <div className="right-icon">
                <span>Audu Ibrahim</span>

                <svg
                  width="29"
                  height="28"
                  viewBox="0 0 29 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="28"
                    height="27"
                    rx="7.5"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="28"
                    height="27"
                    rx="7.5"
                    stroke="#334155"
                  />
                  <g clip-path="url(#clip0_45_45330)">
                    <path
                      d="M19.4196 16.1745L17.7263 15.9811C17.5272 15.9578 17.3254 15.9798 17.136 16.0456C16.9466 16.1114 16.7747 16.2193 16.633 16.3611L15.4063 17.5878C13.5138 16.6253 11.9755 15.087 11.013 13.1945L12.2463 11.9611C12.533 11.6745 12.673 11.2745 12.6263 10.8678L12.433 9.18781C12.3952 8.8626 12.2391 8.56264 11.9945 8.34504C11.7498 8.12745 11.4337 8.00742 11.1063 8.00781H9.95297C9.19964 8.00781 8.57297 8.63448 8.61964 9.38781C8.97297 15.0811 13.5263 19.6278 19.213 19.9811C19.9663 20.0278 20.593 19.4011 20.593 18.6478V17.4945C20.5996 16.8211 20.093 16.2545 19.4196 16.1745Z"
                      fill="#334155"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_45330">
                      <rect
                        width="13"
                        height="12"
                        fill="white"
                        transform="translate(8 8)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="7.5"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="7.5"
                    stroke="#334155"
                  />
                  <g clip-path="url(#clip0_45_45333)">
                    <path
                      d="M13.445 9.26978C13.5971 9.1683 13.7741 9.11044 13.9567 9.1025C14.1394 9.09457 14.3207 9.13686 14.481 9.22478L14.5545 9.26978L18.5545 11.9363C18.6798 12.0198 18.7847 12.1305 18.8612 12.2602C18.9377 12.3899 18.984 12.5352 18.9965 12.6853L19 12.7683V17.5008C19.0001 17.7531 18.9048 17.9961 18.7333 18.1811C18.5617 18.366 18.3266 18.4794 18.075 18.4983L18 18.5008H10C9.74771 18.5009 9.50472 18.4056 9.31973 18.234C9.13474 18.0625 9.02142 17.8274 9.0025 17.5758L9 17.5008V12.7683C9 12.6177 9.034 12.4691 9.09945 12.3336C9.1649 12.198 9.26012 12.0789 9.378 11.9853L9.4455 11.9363L13.445 9.26978ZM14 10.1018L10.4015 12.5008L14 14.8998L17.5985 12.5008L14 10.1018Z"
                      fill="#334155"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_45333">
                      <rect
                        width="12"
                        height="12"
                        fill="white"
                        transform="translate(8 8)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="7.5"
                    fill="white"
                  />
                  <rect
                    x="0.5"
                    y="0.5"
                    width="27"
                    height="27"
                    rx="7.5"
                    stroke="#334155"
                  />
                  <path
                    d="M16.5 9H11.5C10.12 9 9 10.115 9 11.49V14.48V14.98C9 16.355 10.12 17.47 11.5 17.47H12.25C12.385 17.47 12.565 17.56 12.65 17.67L13.4 18.665C13.73 19.105 14.27 19.105 14.6 18.665L15.35 17.67C15.445 17.545 15.595 17.47 15.75 17.47H16.5C17.88 17.47 19 16.355 19 14.98V11.49C19 10.115 17.88 9 16.5 9ZM14.5 14.875H11.5C11.295 14.875 11.125 14.705 11.125 14.5C11.125 14.295 11.295 14.125 11.5 14.125H14.5C14.705 14.125 14.875 14.295 14.875 14.5C14.875 14.705 14.705 14.875 14.5 14.875ZM16.5 12.375H11.5C11.295 12.375 11.125 12.205 11.125 12C11.125 11.795 11.295 11.625 11.5 11.625H16.5C16.705 11.625 16.875 11.795 16.875 12C16.875 12.205 16.705 12.375 16.5 12.375Z"
                    fill="#334155"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="exciting-cases__body__right__bottom">
            <div>
              <div>
                <h2>Legal Basis</h2>
                <div className="bottom-content">
                  The charges are based on the following legal provisions:{" "}
                  <br />
                  <span>1. Armed Robbery:</span>
                  The accused are charged with armed robbery under Section XX of
                  the Criminal Code Act, which states that "Any person who
                  commits robbery whilst armed with an offense and shall be
                  liable upon conviction to imprisonment for life."
                  <span>2. Illegal Possession of Firearms:</span>
                  The accused are charged with illegal possession of firearms
                  under...
                  <p className="center">Read More</p>
                </div>
              </div>

              <div>
                <h2>Charge Details</h2>
                <div className="bottom-content">
                  The accused are changing with the following offense: <br />
                  Armed Robbery - Contrary to Section XX of the Criminal Code
                  Act <br />
                  Illegal Possession of Firearms - Contrary to Section XX of the
                  Firearms Act
                </div>
              </div>
            </div>

            <div>
              <div>
                <h2>Legal Basis</h2>
                <div className="bottom-content">
                  The accused, on April 15, 2024, at approximately 11:30 AM, at
                  the XYZ Bank branch located on Victoria Island, Lagos,
                  Nigeria, did unlawfully and intentionally commit armed
                  robbery. The accused, armed with pistols and wearing masks,
                  entered the bank premises and threatened customers and staff
                  with violence. The accused forcibly stole a significant amount
                  of cash and valuables from the bank, thereby commiting the
                  offense of armed robbery.
                  <p className="center">Read More</p>
                </div>
              </div>

              <div>
                <h2>Legal Basis</h2>
                <div className="bottom-content">
                  The prosecution submits that there is prima facie evidence to
                  support the charges against the accused. The prosecution will
                  rely on witness testimonies, forensic evidence, and CCTV
                  footage obtained from the crime scene to establish the guilt
                  of the accused beyond a reasonable doubt. The prosecution
                  contends that the accused's actions constitute serious
                  violations of the law and warrant prosecution to the fullest
                  extent.
                </div>
              </div>
            </div>
          </div>

          <div className="exciting-cases__body__right__attachment">
            <h2>Attachment</h2>
            <p>Attach documents, videos and audio relating to this case</p>

            <div className="attachment">
              <div className="attachment-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_45_45432)">
                    <path d="M20 22.5H4V1.5H15L20 6.5V22.5Z" fill="#B6F0B9" />
                    <path d="M19.25 7H14.5V2.25L19.25 7Z" fill="#E1F5FE" />
                    <path
                      d="M13.6529 13.9851C13.6529 13.9851 16.0439 13.5516 16.0439 14.3683C16.0439 15.1851 14.5627 14.8528 13.6529 13.9851ZM11.8852 14.0473C11.5052 14.131 11.135 14.254 10.7804 14.4141L11.0804 13.7391C11.3804 13.0641 11.6917 12.1438 11.6917 12.1438C12.0487 12.7469 12.4653 13.3127 12.9352 13.8328C12.5815 13.8855 12.2309 13.9576 11.8852 14.0488V14.0473ZM10.9387 9.17233C10.9387 8.46058 11.1689 8.26633 11.3482 8.26633C11.5274 8.26633 11.7292 8.35258 11.7359 8.97058C11.6774 9.59199 11.5473 10.2046 11.3482 10.7961C11.0744 10.2998 10.9331 9.74134 10.9379 9.17458L10.9387 9.17233ZM7.4519 17.0593C6.7184 16.6206 8.99015 15.2698 9.4019 15.2263C9.39965 15.2271 8.2199 17.5183 7.4519 17.0593ZM16.7422 14.4651C16.7347 14.3901 16.6672 13.5598 15.1897 13.5951C14.5738 13.5843 13.9582 13.6277 13.3499 13.7248C12.7603 13.1314 12.2528 12.4617 11.8409 11.7336C12.1003 10.9831 12.2574 10.201 12.3082 9.40858C12.2864 8.50858 12.0712 7.99258 11.3812 8.00008C10.6912 8.00758 10.5907 8.61133 10.6814 9.50983C10.7702 10.1136 10.9379 10.7032 11.1802 11.2633C11.1802 11.2633 10.8614 12.2556 10.4399 13.2426C10.0184 14.2296 9.7304 14.7471 9.7304 14.7471C8.99734 14.9854 8.3073 15.3399 7.68665 15.7971C7.06865 16.3723 6.8174 16.8141 7.1429 17.2558C7.4234 17.6368 8.40515 17.7231 9.28265 16.5733C9.74809 15.9789 10.174 15.3546 10.5577 14.7043C10.5577 14.7043 11.8957 14.3376 12.3119 14.2371C12.7282 14.1366 13.2314 14.0571 13.2314 14.0571C13.2314 14.0571 14.4532 15.2863 15.6314 15.2428C16.8097 15.1993 16.7527 14.5386 16.7452 14.4666"
                      fill="#009B07"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_45432">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h3>Charge_sheet.pdf</h3>
                  <span>1.2 MB</span>
                </div>
              </div>

              <div className="attachment-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_45_45432)">
                    <path d="M20 22.5H4V1.5H15L20 6.5V22.5Z" fill="#B6F0B9" />
                    <path d="M19.25 7H14.5V2.25L19.25 7Z" fill="#E1F5FE" />
                    <path
                      d="M13.6529 13.9851C13.6529 13.9851 16.0439 13.5516 16.0439 14.3683C16.0439 15.1851 14.5627 14.8528 13.6529 13.9851ZM11.8852 14.0473C11.5052 14.131 11.135 14.254 10.7804 14.4141L11.0804 13.7391C11.3804 13.0641 11.6917 12.1438 11.6917 12.1438C12.0487 12.7469 12.4653 13.3127 12.9352 13.8328C12.5815 13.8855 12.2309 13.9576 11.8852 14.0488V14.0473ZM10.9387 9.17233C10.9387 8.46058 11.1689 8.26633 11.3482 8.26633C11.5274 8.26633 11.7292 8.35258 11.7359 8.97058C11.6774 9.59199 11.5473 10.2046 11.3482 10.7961C11.0744 10.2998 10.9331 9.74134 10.9379 9.17458L10.9387 9.17233ZM7.4519 17.0593C6.7184 16.6206 8.99015 15.2698 9.4019 15.2263C9.39965 15.2271 8.2199 17.5183 7.4519 17.0593ZM16.7422 14.4651C16.7347 14.3901 16.6672 13.5598 15.1897 13.5951C14.5738 13.5843 13.9582 13.6277 13.3499 13.7248C12.7603 13.1314 12.2528 12.4617 11.8409 11.7336C12.1003 10.9831 12.2574 10.201 12.3082 9.40858C12.2864 8.50858 12.0712 7.99258 11.3812 8.00008C10.6912 8.00758 10.5907 8.61133 10.6814 9.50983C10.7702 10.1136 10.9379 10.7032 11.1802 11.2633C11.1802 11.2633 10.8614 12.2556 10.4399 13.2426C10.0184 14.2296 9.7304 14.7471 9.7304 14.7471C8.99734 14.9854 8.3073 15.3399 7.68665 15.7971C7.06865 16.3723 6.8174 16.8141 7.1429 17.2558C7.4234 17.6368 8.40515 17.7231 9.28265 16.5733C9.74809 15.9789 10.174 15.3546 10.5577 14.7043C10.5577 14.7043 11.8957 14.3376 12.3119 14.2371C12.7282 14.1366 13.2314 14.0571 13.2314 14.0571C13.2314 14.0571 14.4532 15.2863 15.6314 15.2428C16.8097 15.1993 16.7527 14.5386 16.7452 14.4666"
                      fill="#009B07"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_45432">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h3>Evidence and Witness.PDF</h3>
                  <span>1.2 MB</span>
                </div>
              </div>

              <div className="attachment-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_45_45432)">
                    <path d="M20 22.5H4V1.5H15L20 6.5V22.5Z" fill="#B6F0B9" />
                    <path d="M19.25 7H14.5V2.25L19.25 7Z" fill="#E1F5FE" />
                    <path
                      d="M13.6529 13.9851C13.6529 13.9851 16.0439 13.5516 16.0439 14.3683C16.0439 15.1851 14.5627 14.8528 13.6529 13.9851ZM11.8852 14.0473C11.5052 14.131 11.135 14.254 10.7804 14.4141L11.0804 13.7391C11.3804 13.0641 11.6917 12.1438 11.6917 12.1438C12.0487 12.7469 12.4653 13.3127 12.9352 13.8328C12.5815 13.8855 12.2309 13.9576 11.8852 14.0488V14.0473ZM10.9387 9.17233C10.9387 8.46058 11.1689 8.26633 11.3482 8.26633C11.5274 8.26633 11.7292 8.35258 11.7359 8.97058C11.6774 9.59199 11.5473 10.2046 11.3482 10.7961C11.0744 10.2998 10.9331 9.74134 10.9379 9.17458L10.9387 9.17233ZM7.4519 17.0593C6.7184 16.6206 8.99015 15.2698 9.4019 15.2263C9.39965 15.2271 8.2199 17.5183 7.4519 17.0593ZM16.7422 14.4651C16.7347 14.3901 16.6672 13.5598 15.1897 13.5951C14.5738 13.5843 13.9582 13.6277 13.3499 13.7248C12.7603 13.1314 12.2528 12.4617 11.8409 11.7336C12.1003 10.9831 12.2574 10.201 12.3082 9.40858C12.2864 8.50858 12.0712 7.99258 11.3812 8.00008C10.6912 8.00758 10.5907 8.61133 10.6814 9.50983C10.7702 10.1136 10.9379 10.7032 11.1802 11.2633C11.1802 11.2633 10.8614 12.2556 10.4399 13.2426C10.0184 14.2296 9.7304 14.7471 9.7304 14.7471C8.99734 14.9854 8.3073 15.3399 7.68665 15.7971C7.06865 16.3723 6.8174 16.8141 7.1429 17.2558C7.4234 17.6368 8.40515 17.7231 9.28265 16.5733C9.74809 15.9789 10.174 15.3546 10.5577 14.7043C10.5577 14.7043 11.8957 14.3376 12.3119 14.2371C12.7282 14.1366 13.2314 14.0571 13.2314 14.0571C13.2314 14.0571 14.4532 15.2863 15.6314 15.2428C16.8097 15.1993 16.7527 14.5386 16.7452 14.4666"
                      fill="#009B07"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_45432">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h3>Expert_Report.PDF</h3>
                  <span>1.2 MB</span>
                </div>
              </div>

              <div className="attachment-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_45_45432)">
                    <path d="M20 22.5H4V1.5H15L20 6.5V22.5Z" fill="#B6F0B9" />
                    <path d="M19.25 7H14.5V2.25L19.25 7Z" fill="#E1F5FE" />
                    <path
                      d="M13.6529 13.9851C13.6529 13.9851 16.0439 13.5516 16.0439 14.3683C16.0439 15.1851 14.5627 14.8528 13.6529 13.9851ZM11.8852 14.0473C11.5052 14.131 11.135 14.254 10.7804 14.4141L11.0804 13.7391C11.3804 13.0641 11.6917 12.1438 11.6917 12.1438C12.0487 12.7469 12.4653 13.3127 12.9352 13.8328C12.5815 13.8855 12.2309 13.9576 11.8852 14.0488V14.0473ZM10.9387 9.17233C10.9387 8.46058 11.1689 8.26633 11.3482 8.26633C11.5274 8.26633 11.7292 8.35258 11.7359 8.97058C11.6774 9.59199 11.5473 10.2046 11.3482 10.7961C11.0744 10.2998 10.9331 9.74134 10.9379 9.17458L10.9387 9.17233ZM7.4519 17.0593C6.7184 16.6206 8.99015 15.2698 9.4019 15.2263C9.39965 15.2271 8.2199 17.5183 7.4519 17.0593ZM16.7422 14.4651C16.7347 14.3901 16.6672 13.5598 15.1897 13.5951C14.5738 13.5843 13.9582 13.6277 13.3499 13.7248C12.7603 13.1314 12.2528 12.4617 11.8409 11.7336C12.1003 10.9831 12.2574 10.201 12.3082 9.40858C12.2864 8.50858 12.0712 7.99258 11.3812 8.00008C10.6912 8.00758 10.5907 8.61133 10.6814 9.50983C10.7702 10.1136 10.9379 10.7032 11.1802 11.2633C11.1802 11.2633 10.8614 12.2556 10.4399 13.2426C10.0184 14.2296 9.7304 14.7471 9.7304 14.7471C8.99734 14.9854 8.3073 15.3399 7.68665 15.7971C7.06865 16.3723 6.8174 16.8141 7.1429 17.2558C7.4234 17.6368 8.40515 17.7231 9.28265 16.5733C9.74809 15.9789 10.174 15.3546 10.5577 14.7043C10.5577 14.7043 11.8957 14.3376 12.3119 14.2371C12.7282 14.1366 13.2314 14.0571 13.2314 14.0571C13.2314 14.0571 14.4532 15.2863 15.6314 15.2428C16.8097 15.1993 16.7527 14.5386 16.7452 14.4666"
                      fill="#009B07"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_45432">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h3>Court_Document.PDF</h3>
                  <span>1.2 MB</span>
                </div>
              </div>

              <div className="attachment-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_45_45432)">
                    <path d="M20 22.5H4V1.5H15L20 6.5V22.5Z" fill="#B6F0B9" />
                    <path d="M19.25 7H14.5V2.25L19.25 7Z" fill="#E1F5FE" />
                    <path
                      d="M13.6529 13.9851C13.6529 13.9851 16.0439 13.5516 16.0439 14.3683C16.0439 15.1851 14.5627 14.8528 13.6529 13.9851ZM11.8852 14.0473C11.5052 14.131 11.135 14.254 10.7804 14.4141L11.0804 13.7391C11.3804 13.0641 11.6917 12.1438 11.6917 12.1438C12.0487 12.7469 12.4653 13.3127 12.9352 13.8328C12.5815 13.8855 12.2309 13.9576 11.8852 14.0488V14.0473ZM10.9387 9.17233C10.9387 8.46058 11.1689 8.26633 11.3482 8.26633C11.5274 8.26633 11.7292 8.35258 11.7359 8.97058C11.6774 9.59199 11.5473 10.2046 11.3482 10.7961C11.0744 10.2998 10.9331 9.74134 10.9379 9.17458L10.9387 9.17233ZM7.4519 17.0593C6.7184 16.6206 8.99015 15.2698 9.4019 15.2263C9.39965 15.2271 8.2199 17.5183 7.4519 17.0593ZM16.7422 14.4651C16.7347 14.3901 16.6672 13.5598 15.1897 13.5951C14.5738 13.5843 13.9582 13.6277 13.3499 13.7248C12.7603 13.1314 12.2528 12.4617 11.8409 11.7336C12.1003 10.9831 12.2574 10.201 12.3082 9.40858C12.2864 8.50858 12.0712 7.99258 11.3812 8.00008C10.6912 8.00758 10.5907 8.61133 10.6814 9.50983C10.7702 10.1136 10.9379 10.7032 11.1802 11.2633C11.1802 11.2633 10.8614 12.2556 10.4399 13.2426C10.0184 14.2296 9.7304 14.7471 9.7304 14.7471C8.99734 14.9854 8.3073 15.3399 7.68665 15.7971C7.06865 16.3723 6.8174 16.8141 7.1429 17.2558C7.4234 17.6368 8.40515 17.7231 9.28265 16.5733C9.74809 15.9789 10.174 15.3546 10.5577 14.7043C10.5577 14.7043 11.8957 14.3376 12.3119 14.2371C12.7282 14.1366 13.2314 14.0571 13.2314 14.0571C13.2314 14.0571 14.4532 15.2863 15.6314 15.2428C16.8097 15.1993 16.7527 14.5386 16.7452 14.4666"
                      fill="#009B07"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_45432">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h3>Transcript.PDF</h3>
                  <span>1.2 MB</span>
                </div>
              </div>

              <div className="attachment-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_45_45432)">
                    <path d="M20 22.5H4V1.5H15L20 6.5V22.5Z" fill="#B6F0B9" />
                    <path d="M19.25 7H14.5V2.25L19.25 7Z" fill="#E1F5FE" />
                    <path
                      d="M13.6529 13.9851C13.6529 13.9851 16.0439 13.5516 16.0439 14.3683C16.0439 15.1851 14.5627 14.8528 13.6529 13.9851ZM11.8852 14.0473C11.5052 14.131 11.135 14.254 10.7804 14.4141L11.0804 13.7391C11.3804 13.0641 11.6917 12.1438 11.6917 12.1438C12.0487 12.7469 12.4653 13.3127 12.9352 13.8328C12.5815 13.8855 12.2309 13.9576 11.8852 14.0488V14.0473ZM10.9387 9.17233C10.9387 8.46058 11.1689 8.26633 11.3482 8.26633C11.5274 8.26633 11.7292 8.35258 11.7359 8.97058C11.6774 9.59199 11.5473 10.2046 11.3482 10.7961C11.0744 10.2998 10.9331 9.74134 10.9379 9.17458L10.9387 9.17233ZM7.4519 17.0593C6.7184 16.6206 8.99015 15.2698 9.4019 15.2263C9.39965 15.2271 8.2199 17.5183 7.4519 17.0593ZM16.7422 14.4651C16.7347 14.3901 16.6672 13.5598 15.1897 13.5951C14.5738 13.5843 13.9582 13.6277 13.3499 13.7248C12.7603 13.1314 12.2528 12.4617 11.8409 11.7336C12.1003 10.9831 12.2574 10.201 12.3082 9.40858C12.2864 8.50858 12.0712 7.99258 11.3812 8.00008C10.6912 8.00758 10.5907 8.61133 10.6814 9.50983C10.7702 10.1136 10.9379 10.7032 11.1802 11.2633C11.1802 11.2633 10.8614 12.2556 10.4399 13.2426C10.0184 14.2296 9.7304 14.7471 9.7304 14.7471C8.99734 14.9854 8.3073 15.3399 7.68665 15.7971C7.06865 16.3723 6.8174 16.8141 7.1429 17.2558C7.4234 17.6368 8.40515 17.7231 9.28265 16.5733C9.74809 15.9789 10.174 15.3546 10.5577 14.7043C10.5577 14.7043 11.8957 14.3376 12.3119 14.2371C12.7282 14.1366 13.2314 14.0571 13.2314 14.0571C13.2314 14.0571 14.4532 15.2863 15.6314 15.2428C16.8097 15.1993 16.7527 14.5386 16.7452 14.4666"
                      fill="#009B07"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_45432">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h3>Discovery_Material.PDF</h3>
                  <span>1.2 MB</span>
                </div>
              </div>

              <div className="attachment-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_45_45432)">
                    <path d="M20 22.5H4V1.5H15L20 6.5V22.5Z" fill="#B6F0B9" />
                    <path d="M19.25 7H14.5V2.25L19.25 7Z" fill="#E1F5FE" />
                    <path
                      d="M13.6529 13.9851C13.6529 13.9851 16.0439 13.5516 16.0439 14.3683C16.0439 15.1851 14.5627 14.8528 13.6529 13.9851ZM11.8852 14.0473C11.5052 14.131 11.135 14.254 10.7804 14.4141L11.0804 13.7391C11.3804 13.0641 11.6917 12.1438 11.6917 12.1438C12.0487 12.7469 12.4653 13.3127 12.9352 13.8328C12.5815 13.8855 12.2309 13.9576 11.8852 14.0488V14.0473ZM10.9387 9.17233C10.9387 8.46058 11.1689 8.26633 11.3482 8.26633C11.5274 8.26633 11.7292 8.35258 11.7359 8.97058C11.6774 9.59199 11.5473 10.2046 11.3482 10.7961C11.0744 10.2998 10.9331 9.74134 10.9379 9.17458L10.9387 9.17233ZM7.4519 17.0593C6.7184 16.6206 8.99015 15.2698 9.4019 15.2263C9.39965 15.2271 8.2199 17.5183 7.4519 17.0593ZM16.7422 14.4651C16.7347 14.3901 16.6672 13.5598 15.1897 13.5951C14.5738 13.5843 13.9582 13.6277 13.3499 13.7248C12.7603 13.1314 12.2528 12.4617 11.8409 11.7336C12.1003 10.9831 12.2574 10.201 12.3082 9.40858C12.2864 8.50858 12.0712 7.99258 11.3812 8.00008C10.6912 8.00758 10.5907 8.61133 10.6814 9.50983C10.7702 10.1136 10.9379 10.7032 11.1802 11.2633C11.1802 11.2633 10.8614 12.2556 10.4399 13.2426C10.0184 14.2296 9.7304 14.7471 9.7304 14.7471C8.99734 14.9854 8.3073 15.3399 7.68665 15.7971C7.06865 16.3723 6.8174 16.8141 7.1429 17.2558C7.4234 17.6368 8.40515 17.7231 9.28265 16.5733C9.74809 15.9789 10.174 15.3546 10.5577 14.7043C10.5577 14.7043 11.8957 14.3376 12.3119 14.2371C12.7282 14.1366 13.2314 14.0571 13.2314 14.0571C13.2314 14.0571 14.4532 15.2863 15.6314 15.2428C16.8097 15.1993 16.7527 14.5386 16.7452 14.4666"
                      fill="#009B07"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_45432">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h3>Correspondence.PDF</h3>
                  <span>1.2 MB</span>
                </div>
              </div>

              <div className="attachment-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_45_45607)">
                    <path d="M20 22.5H4V1.5H15L20 6.5V22.5Z" fill="#B6F0B9" />
                    <path d="M19.25 7H14.5V2.25L19.25 7Z" fill="#E1F5FE" />
                    <path
                      d="M11.5 17C12.6046 17 13.5 16.1046 13.5 15C13.5 13.8954 12.6046 13 11.5 13C10.3954 13 9.5 13.8954 9.5 15C9.5 16.1046 10.3954 17 11.5 17Z"
                      fill="#009B07"
                    />
                    <path
                      d="M15 10.5L12.5 9.5V15H13.5V11.45L15 12V10.5Z"
                      fill="#009B07"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_45_45607">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <div>
                  <h3>Audio.Mp3</h3>
                  <span>1.2 MB</span>
                </div>
              </div>

              <div className="attachment-box">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path d="M20 22.5H4V1.5H15L20 6.5V22.5Z" fill="#B6F0B9" />
                  <path d="M19.25 7H14.5V2.25L19.25 7Z" fill="#E1F5FE" />
                  <path d="M15 14L10 11V17L15 14Z" fill="#009B07" />
                </svg>
                <div>
                  <h3>Video.Mp4</h3>
                  <span>1.2 MB</span>
                </div>
              </div>
            </div>
          </div>

          <div className="exciting-cases__body__right__asset">
            <h2>Asset Siezure</h2>
            <div className="asset">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <g clip-path="url(#clip0_45_45641)">
                  <path
                    d="M8.33252 10.83C8.6904 11.3085 9.14699 11.7044 9.67131 11.9908C10.1956 12.2773 10.7754 12.4476 11.3714 12.4903C11.9674 12.533 12.5655 12.447 13.1253 12.2382C13.6851 12.0294 14.1935 11.7026 14.6159 11.28L17.1159 8.78005C17.8748 7.99421 18.2948 6.9417 18.2853 5.84921C18.2758 4.75672 17.8376 3.71167 17.0651 2.93914C16.2926 2.1666 15.2475 1.7284 14.155 1.71891C13.0625 1.70941 12.01 2.12939 11.2242 2.88838L9.79086 4.31338M11.6659 9.16338C11.308 8.68494 10.8514 8.28906 10.3271 8.0026C9.80274 7.71613 9.22293 7.54579 8.62698 7.5031C8.03103 7.46042 7.43287 7.54641 6.87307 7.75523C6.31327 7.96405 5.80493 8.29082 5.38252 8.71338L2.88252 11.2134C2.12353 11.9992 1.70355 13.0517 1.71305 14.1442C1.72254 15.2367 2.16075 16.2818 2.93328 17.0543C3.70581 17.8268 4.75086 18.265 5.84335 18.2745C6.93584 18.284 7.98835 17.864 8.77419 17.105L10.1992 15.68"
                    stroke="#009A29"
                    stroke-width="1.67"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_45_45641">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Link Asset
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M9.99935 4.16406V15.8307M4.16602 9.9974H15.8327"
                  stroke="#009A29"
                  stroke-width="1.67"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <h3>Link Asset</h3>

            <table className="table">
              <thead>
                <tr>
                  <th></th>
                  <th>Asset No</th>
                  <th>Description</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {assets.map((asset, index) => (
                  <tr key={index}>
                    <td>
                      <Image
                        alt=""
                        src={asset.image}
                        width={36}
                        height={36}
                        // style={{ float: "left" }}
                      />
                    </td>
                    <td>
                      <div className="link">{asset.id}</div>
                    </td>
                    <td>{asset.description}</td>
                    <td>{asset.amount}</td>
                    <td>{asset.status}</td>
                    <td>
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_637_17613)">
                          <path
                            d="M16.666 19.9974H23.3327M28.3327 19.9974C28.3327 24.5998 24.6017 28.3307 19.9993 28.3307C15.397 28.3307 11.666 24.5998 11.666 19.9974C11.666 15.395 15.397 11.6641 19.9993 11.6641C24.6017 11.6641 28.3327 15.395 28.3327 19.9974Z"
                            stroke="#667085"
                            stroke-width="1.66667"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_637_17613">
                            <rect
                              width="20"
                              height="20"
                              fill="white"
                              transform="translate(10 10)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExcitingCase;
