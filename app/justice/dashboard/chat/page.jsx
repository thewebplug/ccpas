"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function Chat() {
  const [emojiModal, setEmojiModal] = useState(false)
  const [attachModal, setAttachModal] = useState(false)
  const [fileModal, setFileModal] = useState(false)
  const [tab, setTab] = useState("All")
  const [text, setText] = useState("");
  const mediaRef = useRef("");

  return (
    <div className="chat">
      <div className="chat__chat-list">
        <div className="chat__chat-list__title">
          <div>Message</div>

          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="16" cy="16" r="16" fill="#009B07" />
            <path
              d="M16 11.1992V20.7992"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11.1992 16H20.7992"
              stroke="white"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="chat__chat-list__nav">
          <div className={tab === "All" ? "chat__chat-list__nav__item chat__chat-list__nav__item-active" : "chat__chat-list__nav__item"}
          onClick={() => setTab("All")}
          >All</div>
          <div className={tab === "Department" ? "chat__chat-list__nav__item chat__chat-list__nav__item-active" : "chat__chat-list__nav__item"}
          onClick={() => setTab("Department")}>Department <span>4</span></div>
          <div className={tab === "Agency" ? "chat__chat-list__nav__item chat__chat-list__nav__item-active" : "chat__chat-list__nav__item"}
          onClick={() => setTab("Agency")}>Agency <span>4</span></div>
          <div className={tab === "Out-side Agency" ? "chat__chat-list__nav__item chat__chat-list__nav__item-active" : "chat__chat-list__nav__item"}
          onClick={() => setTab("Out-side Agency")}>Out-side Agency <span>4</span></div>
        </div>

        <input
          type="text"
          className="chat__chat-list__input"
          placeholder="Search or start a new chat"
        />
        <div className="chat__chat-list__cards">
          <div className="chat__chat-list__cards__card">
            <div>
              <Image
                alt=""
                src="/assets/Image (2).png"
                width={48}
                height={48}
                objectFit="cover"
                style={{ borderRadius: "50%" }}
              />
              <div>
                <div>Naomi Adekunle</div>
                <div>Can we review the case file later</div>
              </div>
            </div>

            <div>
                <div>1 min ago</div>
                {/* <div className="chat__chat-list__cards__card__unread">3</div> */}
                <div className="chat__chat-list__cards__card__typing">typing</div>
            </div>

           
          </div>
          <div className="chat__chat-list__cards__card">
            <div>
              <Image
                alt=""
                src="/assets/Image (2).png"
                width={48}
                height={48}
                objectFit="cover"
                style={{ borderRadius: "50%" }}
              />
              <div>
                <div>Naomi Adekunle</div>
                <div>Can we review the case file later</div>
              </div>
            </div>

            <div>
                <div>1 min ago</div>
                <div className="chat__chat-list__cards__card__unread">3</div>
                {/* <div className="chat__chat-list__cards__card__typing">typing</div> */}
            </div>

           
          </div>
          <div className="chat__chat-list__cards__card">
            <div>
              <Image
                alt=""
                src="/assets/Image (2).png"
                width={48}
                height={48}
                objectFit="cover"
                style={{ borderRadius: "50%" }}
              />
              <div>
                <div>Naomi Adekunle</div>
                <div>Can we review the case file later</div>
              </div>
            </div>

            <div>
                <div>1 min ago</div>
                <div className="chat__chat-list__cards__card__unread">3</div>
                {/* <div className="chat__chat-list__cards__card__typing">typing</div> */}
            </div>

           
          </div>
          <div className="chat__chat-list__cards__card">
            <div>
              <Image
                alt=""
                src="/assets/Image (2).png"
                width={48}
                height={48}
                objectFit="cover"
                style={{ borderRadius: "50%" }}
              />
              <div>
                <div>Naomi Adekunle</div>
                <div>Can we review the case file later</div>
              </div>
            </div>

            <div>
                <div>1 min ago</div>
                <div className="chat__chat-list__cards__card__unread">3</div>
                {/* <div className="chat__chat-list__cards__card__typing">typing</div> */}
            </div>

           
          </div>
          <div className="chat__chat-list__cards__card">
            <div>
              <Image
                alt=""
                src="/assets/Image (2).png"
                width={48}
                height={48}
                objectFit="cover"
                style={{ borderRadius: "50%" }}
              />
              <div>
                <div>Naomi Adekunle</div>
                <div>Can we review the case file later</div>
              </div>
            </div>

            <div>
                <div>1 min ago</div>
                <div className="chat__chat-list__cards__card__unread">3</div>
                {/* <div className="chat__chat-list__cards__card__typing">typing</div> */}
            </div>

           
          </div>
          <div className="chat__chat-list__cards__card">
            <div>
              <Image
                alt=""
                src="/assets/Image (2).png"
                width={48}
                height={48}
                objectFit="cover"
                style={{ borderRadius: "50%" }}
              />
              <div>
                <div>Naomi Adekunle</div>
                <div>Can we review the case file later</div>
              </div>
            </div>

            <div>
                <div>1 min ago</div>
                <div className="chat__chat-list__cards__card__unread">3</div>
                {/* <div className="chat__chat-list__cards__card__typing">typing</div> */}
            </div>

           
          </div>
        </div>
      </div>
      <div className="chat__chat-room">

        <div className="chat__chat-room__header">
        <div className="chat__chat-room__header__user">
        <div>
        <Image
                alt=""
                src="/assets/Image (2).png"
                width={40}
                height={40}
                objectFit="cover"
                style={{ borderRadius: "50%" }}
              />
        </div>

        <div>
            <div>Ammi Watts</div>
            <div>Online</div>
        </div>
            </div>

            <div className="chat__chat-room__header__options">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z" fill="#009B07"/>
<path d="M21.9995 22.7514C21.8095 22.7514 21.6195 22.6814 21.4695 22.5314L19.4695 20.5314C19.1795 20.2414 19.1795 19.7614 19.4695 19.4714C19.7595 19.1814 20.2395 19.1814 20.5295 19.4714L22.5295 21.4714C22.8195 21.7614 22.8195 22.2414 22.5295 22.5314C22.3795 22.6814 22.1895 22.7514 21.9995 22.7514Z" fill="#009B07"/>
</svg>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.4873 17.1383L16.4223 13.4423C16.2301 13.2676 15.9776 13.1745 15.7181 13.1825C15.4585 13.1905 15.2123 13.2991 15.0313 13.4853L12.6383 15.9463C12.0623 15.8363 10.9043 15.4753 9.71228 14.2863C8.52028 13.0933 8.15928 11.9323 8.05228 11.3603L10.5113 8.96629C10.6977 8.78541 10.8064 8.53911 10.8144 8.27949C10.8225 8.01988 10.7292 7.76733 10.5543 7.57529L6.85928 3.51129C6.68432 3.31864 6.44116 3.20179 6.18143 3.18555C5.92171 3.1693 5.66588 3.25494 5.46828 3.42429L3.29828 5.28529C3.12539 5.4588 3.0222 5.68974 3.00828 5.93429C2.99328 6.18429 2.70728 12.1063 7.29928 16.7003C11.3053 20.7053 16.3233 20.9983 17.7053 20.9983C17.9073 20.9983 18.0313 20.9923 18.0643 20.9903C18.3088 20.9766 18.5396 20.8729 18.7123 20.6993L20.5723 18.5283C20.7423 18.3313 20.8286 18.0757 20.8127 17.816C20.7968 17.5563 20.68 17.3131 20.4873 17.1383Z" fill="#009B07"/>
</svg>

<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 7C18 5.897 17.103 5 16 5H4C2.897 5 2 5.897 2 7V17C2 18.103 2.897 19 4 19H16C17.103 19 18 18.103 18 17V13.667L22 17V7L18 10.333V7Z" fill="#009B07"/>
</svg>

<svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg" className="pointer"

onClick={() => setFileModal(!fileModal)}>
<g filter="url(#filter0_d_7938_82641)">
<rect x="16" y="12" width="34" height="34" rx="8" fill="white"/>
<path d="M33.1118 24.75C34.3421 24.75 35.3487 23.7938 35.3487 22.625C35.3487 21.4562 34.3421 20.5 33.1118 20.5C31.8816 20.5 30.875 21.4562 30.875 22.625C30.875 23.7938 31.8816 24.75 33.1118 24.75ZM33.1118 26.875C31.8816 26.875 30.875 27.8313 30.875 29C30.875 30.1687 31.8816 31.125 33.1118 31.125C34.3421 31.125 35.3487 30.1687 35.3487 29C35.3487 27.8313 34.3421 26.875 33.1118 26.875ZM33.1118 33.25C31.8816 33.25 30.875 34.2063 30.875 35.375C30.875 36.5438 31.8816 37.5 33.1118 37.5C34.3421 37.5 35.3487 36.5438 35.3487 35.375C35.3487 34.2063 34.3421 33.25 33.1118 33.25Z" fill="#1A1A1B"/>
</g>
<defs>
<filter id="filter0_d_7938_82641" x="0" y="0" width="66" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="8"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 0.32 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7938_82641"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7938_82641" result="shape"/>
</filter>
</defs>
</svg>

            </div>
       
        </div>
 
        <div className="chat__chat-room__room">
            <div className="chat__chat-room__room__received">
                <div className="chat__chat-room__room__received__text">Hey there! 👋</div>
                <div className="chat__chat-room__room__received__timestamp">10:10</div>
            </div>
            <div className="chat__chat-room__room__received">
                <div className="chat__chat-room__room__received__text">This is your delivery driver from Speedy Chow. I'm just around the corner from your place. 😊</div>
                <div className="chat__chat-room__room__received__timestamp">10:10</div>
            </div>
            <div className="chat__chat-room__room__sent">
                <div className="chat__chat-room__room__sent__text">Hi!</div>
                <div className="chat__chat-room__room__sent__timestamp">
                    <div>10:10</div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.03838 4.04543C9.2204 4.20434 9.23914 4.48071 9.08023 4.66273L4.4969 9.91273C4.41382 10.0079 4.29365 10.0625 4.16732 10.0625C4.04099 10.0625 3.92083 10.0079 3.83775 9.91273L2.00441 7.81273C1.84551 7.63071 1.86425 7.35434 2.04627 7.19543C2.22829 7.03652 2.50466 7.05526 2.66357 7.23728L4.16732 8.95977L8.42108 4.08728C8.57999 3.90526 8.85636 3.88652 9.03838 4.04543Z" fill="#E9EAEB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9692 4.09469C12.1441 4.26133 12.1509 4.53825 11.9842 4.71322L6.9841 9.96322C6.89573 10.056 6.77113 10.1054 6.64319 10.0983C6.51525 10.0913 6.39684 10.0285 6.31921 9.92654L6.06936 9.59841C5.92298 9.40618 5.96015 9.13167 6.15239 8.98529C6.31754 8.85954 6.5434 8.86925 6.69658 8.99637L11.3506 4.10976C11.5173 3.9348 11.7942 3.92805 11.9692 4.09469Z" fill="#E9EAEB"/>
</svg>

                </div>
            </div>
            <div className="chat__chat-room__room__sent">
                <div className="chat__chat-room__room__sent__text">Awesome, thanks for letting me know! Can't wait for my delivery. 🎉</div>
                <div className="chat__chat-room__room__sent__timestamp">
                    <div>10:10</div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.03838 4.04543C9.2204 4.20434 9.23914 4.48071 9.08023 4.66273L4.4969 9.91273C4.41382 10.0079 4.29365 10.0625 4.16732 10.0625C4.04099 10.0625 3.92083 10.0079 3.83775 9.91273L2.00441 7.81273C1.84551 7.63071 1.86425 7.35434 2.04627 7.19543C2.22829 7.03652 2.50466 7.05526 2.66357 7.23728L4.16732 8.95977L8.42108 4.08728C8.57999 3.90526 8.85636 3.88652 9.03838 4.04543Z" fill="#E9EAEB"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9692 4.09469C12.1441 4.26133 12.1509 4.53825 11.9842 4.71322L6.9841 9.96322C6.89573 10.056 6.77113 10.1054 6.64319 10.0983C6.51525 10.0913 6.39684 10.0285 6.31921 9.92654L6.06936 9.59841C5.92298 9.40618 5.96015 9.13167 6.15239 8.98529C6.31754 8.85954 6.5434 8.86925 6.69658 8.99637L11.3506 4.10976C11.5173 3.9348 11.7942 3.92805 11.9692 4.09469Z" fill="#E9EAEB"/>
</svg>

                </div>
            </div>

            <div className="chat__chat-room__room__received">
                <div className="chat__chat-room__room__received__text">
                No problem at all! 
                I'll be there in about 15 minutes.
                </div>
                <div className="chat__chat-room__room__received__timestamp">10:10</div>
            </div>
            <div className="chat__chat-room__room__received">
                <div className="chat__chat-room__room__received__text">
                I'll text you when I arrive.
                </div>
                <div className="chat__chat-room__room__received__timestamp">10:10</div>
            </div>

            <div className="chat__chat-room__room__call chat__chat-room__room__received-call">
              <div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="#009B07"/>
<path d="M31.7059 28.5332L28.055 25.2137C27.8824 25.0568 27.6557 24.9732 27.4226 24.9804C27.1895 24.9876 26.9683 25.0851 26.8057 25.2523L24.6565 27.4626C24.1392 27.3638 23.0991 27.0396 22.0285 25.9717C20.958 24.9002 20.6337 23.8575 20.5376 23.3438L22.7461 21.1936C22.9136 21.0312 23.0112 20.81 23.0184 20.5768C23.0256 20.3436 22.9418 20.1168 22.7848 19.9443L19.4662 16.2943C19.309 16.1213 19.0906 16.0163 18.8574 16.0018C18.6241 15.9872 18.3943 16.0641 18.2169 16.2162L16.2679 17.8876C16.1126 18.0434 16.0199 18.2509 16.0074 18.4705C15.994 18.695 15.7371 24.0138 19.8613 28.1398C23.4593 31.7368 27.9661 32 29.2073 32C29.3888 32 29.5001 31.9946 29.5298 31.9928C29.7494 31.9805 29.9567 31.8874 30.1118 31.7315L31.7823 29.7816C31.935 29.6047 32.0125 29.3751 31.9982 29.1419C31.9839 28.9086 31.8791 28.6902 31.7059 28.5332Z" fill="white"/>
</svg>


<div>
  <div>Voice call</div>
  <div>23min 4sec</div>
</div>
              </div>

              <div>10:11</div>
            </div>
            <div className="chat__chat-room__room__call chat__chat-room__room__missed-call">
              <div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="24" cy="24" r="24" fill="#E90D02"/>
<path d="M31.7059 28.5332L28.055 25.2137C27.8824 25.0568 27.6557 24.9732 27.4226 24.9804C27.1895 24.9876 26.9683 25.0851 26.8057 25.2523L24.6565 27.4626C24.1392 27.3638 23.0991 27.0396 22.0285 25.9717C20.958 24.9002 20.6337 23.8575 20.5376 23.3438L22.7461 21.1936C22.9136 21.0312 23.0112 20.81 23.0184 20.5768C23.0256 20.3436 22.9418 20.1168 22.7848 19.9443L19.4662 16.2943C19.309 16.1213 19.0906 16.0163 18.8574 16.0018C18.6241 15.9872 18.3943 16.0641 18.2169 16.2162L16.2679 17.8876C16.1126 18.0434 16.0199 18.2509 16.0074 18.4705C15.994 18.695 15.7371 24.0138 19.8613 28.1398C23.4593 31.7368 27.9661 32 29.2073 32C29.3888 32 29.5001 31.9946 29.5298 31.9928C29.7494 31.9805 29.9567 31.8874 30.1118 31.7315L31.7823 29.7816C31.935 29.6047 32.0125 29.3751 31.9982 29.1419C31.9839 28.9086 31.8791 28.6902 31.7059 28.5332Z" fill="white"/>
</svg>



<div>
  <div>Missed voice call</div>
  <div>23min 4sec</div>
</div>
              </div>

              <div>10:11</div>
            </div>
            


<div className="chat__chat-room__room__drop">
  <div className="chat__chat-room__room__drop__inner">
  <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M35.9992 7.2002C46.1404 7.2002 51.8932 14.123 52.7284 22.4858H52.9804C59.5144 22.4858 64.7992 27.929 64.7992 34.643C64.7992 34.9862 64.786 35.3258 64.7596 35.6618C62.1753 32.4337 58.6833 30.0535 54.7338 28.8282C50.7843 27.6029 46.5583 27.5886 42.6007 28.7871C38.643 29.9856 35.1349 32.342 32.5287 35.5526C29.9226 38.7631 28.3377 42.6806 27.9784 46.8002H19.0144C12.4876 46.8002 7.19922 41.357 7.19922 34.643C7.19922 27.929 12.4912 22.4858 19.0144 22.4858H19.27C20.1124 14.069 25.858 7.2002 35.9992 7.2002ZM48.5992 64.8002C52.8957 64.8002 57.0163 63.0934 60.0543 60.0553C63.0924 57.0172 64.7992 52.8967 64.7992 48.6002C64.7992 44.3037 63.0924 40.1832 60.0543 37.1451C57.0163 34.107 52.8957 32.4002 48.5992 32.4002C44.3027 32.4002 40.1822 34.107 37.1441 37.1451C34.106 40.1832 32.3992 44.3037 32.3992 48.6002C32.3992 52.8967 34.106 57.0172 37.1441 60.0553C40.1822 63.0934 44.3027 64.8002 48.5992 64.8002ZM48.5992 39.6002C49.0766 39.6002 49.5344 39.7898 49.872 40.1274C50.2096 40.465 50.3992 40.9228 50.3992 41.4002V46.8002H55.7992C56.2766 46.8002 56.7344 46.9898 57.072 47.3274C57.4096 47.665 57.5992 48.1228 57.5992 48.6002C57.5992 49.0776 57.4096 49.5354 57.072 49.873C56.7344 50.2106 56.2766 50.4002 55.7992 50.4002H50.3992V55.8002C50.3992 56.2776 50.2096 56.7354 49.872 57.073C49.5344 57.4106 49.0766 57.6002 48.5992 57.6002C48.1218 57.6002 47.664 57.4106 47.3264 57.073C46.9889 56.7354 46.7992 56.2776 46.7992 55.8002V50.4002H41.3992C40.9218 50.4002 40.464 50.2106 40.1264 49.873C39.7889 49.5354 39.5992 49.0776 39.5992 48.6002C39.5992 48.1228 39.7889 47.665 40.1264 47.3274C40.464 46.9898 40.9218 46.8002 41.3992 46.8002H46.7992V41.4002C46.7992 40.9228 46.9889 40.465 47.3264 40.1274C47.664 39.7898 48.1218 39.6002 48.5992 39.6002Z" fill="#37773A" fill-opacity="0.57"/>
</svg>

<div className="chat__chat-room__room__drop__inner__title">
Drag & drop files or Browse
</div>
<div className="chat__chat-room__room__drop__inner__subtitle">
Supported formats: PDF, Word, and PNG
</div>
  </div>
</div>

<div className="chat__chat-room__room__file">
              <div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.0759 1.55273L22.2489 5.90273V22.4447H6.66016V22.4987H22.3022V5.95748L18.0759 1.55273Z" fill="#909090"/>
                  <path d="M18.0227 1.5H6.60547V22.446H22.2475V5.90475L18.0227 1.5Z" fill="#F4F4F4"/>
                  <path d="M6.49172 2.625H1.69922V7.74525H16.7742V2.625H6.49172Z" fill="#7A7B7C"/>
                  <path d="M16.8546 7.65818H1.79688V2.53418H16.8546V7.65818Z" fill="#DD2025"/>
                  <path d="M6.78884 3.40099H5.80859V7.00099H6.57959V5.78674L6.74984 5.79649C6.91533 5.79421 7.07929 5.76456 7.23509 5.70874C7.37206 5.66223 7.49794 5.58793 7.60484 5.49049C7.71447 5.39857 7.8006 5.28184 7.85609 5.14999C7.93203 4.93152 7.95891 4.69902 7.93484 4.46899C7.93057 4.30463 7.90175 4.14183 7.84934 3.98599C7.80212 3.87335 7.7319 3.7718 7.64317 3.68786C7.55445 3.60391 7.44918 3.53941 7.33409 3.49849C7.23488 3.46174 7.13206 3.4356 7.02734 3.42049C6.94824 3.40761 6.86824 3.40109 6.78809 3.40099M6.64634 5.12149H6.57959V4.01149H6.72434C6.78823 4.00688 6.85233 4.01669 6.91192 4.04019C6.9715 4.06368 7.02505 4.10027 7.06859 4.14724C7.15883 4.268 7.20704 4.41499 7.20584 4.56574C7.20584 4.75024 7.20584 4.91749 7.03934 5.03524C6.91942 5.10129 6.78287 5.13175 6.64634 5.12149ZM9.39959 3.39124C9.31634 3.39124 9.23534 3.39724 9.17834 3.39949L8.99984 3.40399H8.41484V7.00399H9.10334C9.36643 7.01076 9.62831 6.96617 9.87434 6.87274C10.0724 6.79451 10.2478 6.66791 10.3843 6.50449C10.5182 6.34035 10.6137 6.14845 10.6641 5.94274C10.7232 5.71018 10.752 5.47094 10.7496 5.23099C10.7643 4.94761 10.7423 4.66351 10.6843 4.38574C10.6288 4.18151 10.5261 3.99319 10.3843 3.83599C10.2732 3.70887 10.1365 3.60664 9.98309 3.53599C9.85171 3.47509 9.71346 3.43026 9.57134 3.40249C9.51483 3.39322 9.45761 3.38896 9.40034 3.38974M9.26384 6.34249H9.18884V4.04449H9.19859C9.35322 4.02661 9.50968 4.05451 9.64859 4.12474C9.75034 4.20598 9.83325 4.30834 9.89159 4.42474C9.95456 4.54724 9.99086 4.68169 9.99809 4.81924C10.0048 4.98424 9.99809 5.11924 9.99809 5.23099C10.0009 5.35971 9.99259 5.48843 9.97334 5.61574C9.94975 5.74629 9.90704 5.87265 9.84659 5.99074C9.77831 6.10087 9.68504 6.19337 9.57434 6.26074C9.48188 6.32074 9.37225 6.34868 9.26234 6.34024M13.0723 3.40399H11.2498V7.00399H12.0208V5.57599H12.9958V4.90699H12.0208V4.07299H13.0708V3.40399" fill="#464648"/>
                  <path d="M16.3365 15.1902C16.3365 15.1902 18.7275 14.7567 18.7275 15.5734C18.7275 16.3902 17.2462 16.0579 16.3365 15.1902ZM14.5687 15.2524C14.1888 15.3361 13.8186 15.459 13.464 15.6192L13.764 14.9442C14.064 14.2692 14.3752 13.3489 14.3752 13.3489C14.7323 13.952 15.1489 14.5178 15.6187 15.0379C15.265 15.0906 14.9145 15.1627 14.5687 15.2539V15.2524ZM13.6222 10.3774C13.6222 9.66566 13.8525 9.47141 14.0317 9.47141C14.211 9.47141 14.4127 9.55766 14.4195 10.1757C14.361 10.7971 14.2309 11.4096 14.0317 12.0012C13.758 11.5049 13.6167 10.9464 13.6215 10.3797L13.6222 10.3774ZM10.1355 18.2644C9.40199 17.8257 11.6737 16.4749 12.0855 16.4314C12.0832 16.4322 10.9035 18.7234 10.1355 18.2644ZM19.4257 15.6702C19.4182 15.5952 19.3507 14.7649 17.8732 14.8002C17.2574 14.7894 16.6418 14.8328 16.0335 14.9299C15.4439 14.3365 14.9364 13.6668 14.5245 12.9387C14.7838 12.1881 14.941 11.4061 14.9917 10.6137C14.97 9.71366 14.7547 9.19766 14.0647 9.20516C13.3747 9.21266 13.2742 9.81641 13.365 10.7149C13.4538 11.3187 13.6215 11.9082 13.8637 12.4684C13.8637 12.4684 13.545 13.4607 13.1235 14.4477C12.702 15.4347 12.414 15.9522 12.414 15.9522C11.6809 16.1905 10.9909 16.545 10.3702 17.0022C9.75225 17.5774 9.501 18.0192 9.8265 18.4609C10.107 18.8419 11.0887 18.9282 11.9662 17.7784C12.4317 17.184 12.8576 16.5596 13.2412 15.9094C13.2412 15.9094 14.5792 15.5427 14.9955 15.4422C15.4117 15.3417 15.915 15.2622 15.915 15.2622C15.915 15.2622 17.1367 16.4914 18.315 16.4479C19.4932 16.4044 19.4362 15.7437 19.4287 15.6717" fill="#DD2025"/>
                  <path d="M17.9648 1.55859V5.96334H22.1896L17.9648 1.55859Z" fill="#909090"/>
                  <path d="M18.0234 1.5V5.90475H22.2482L18.0234 1.5Z" fill="#F4F4F4"/>
                  <path d="M6.73025 3.3424H5.75V6.9424H6.524V5.7289L6.695 5.73865C6.86048 5.73636 7.02445 5.70671 7.18025 5.6509C7.31722 5.60439 7.4431 5.53009 7.55 5.43265C7.6588 5.34047 7.74415 5.22377 7.799 5.09215C7.87493 4.87368 7.90182 4.64117 7.87775 4.41115C7.87347 4.24678 7.84466 4.08399 7.79225 3.92815C7.74502 3.8155 7.6748 3.71396 7.58608 3.63001C7.49735 3.54607 7.39208 3.48157 7.277 3.44065C7.17733 3.40354 7.074 3.37714 6.96875 3.3619C6.88965 3.34901 6.80964 3.34249 6.7295 3.3424M6.58775 5.0629H6.521V3.9529H6.6665C6.73039 3.94829 6.79449 3.9581 6.85407 3.98159C6.91366 4.00509 6.9672 4.04167 7.01075 4.08865C7.10099 4.20941 7.1492 4.3564 7.148 4.50715C7.148 4.69165 7.148 4.8589 6.9815 4.97665C6.86158 5.0427 6.72502 5.07241 6.5885 5.06215M9.341 3.33265C9.25775 3.33265 9.17675 3.33865 9.11975 3.3409L8.9435 3.3454H8.3585V6.94539H9.047C9.31009 6.95216 9.57197 6.90758 9.818 6.81415C10.0161 6.73592 10.1914 6.60931 10.328 6.4459C10.4618 6.28176 10.5574 6.08986 10.6077 5.88415C10.6669 5.65159 10.6956 5.41234 10.6932 5.1724C10.7079 4.88901 10.686 4.60492 10.628 4.32715C10.5725 4.12291 10.4697 3.9346 10.328 3.7774C10.2168 3.65028 10.0801 3.54805 9.92675 3.4774C9.79537 3.41649 9.65712 3.37167 9.515 3.3439C9.45848 3.33463 9.40126 3.33036 9.344 3.33115M9.2075 6.2839H9.1325V3.9859H9.14225C9.29687 3.96802 9.45334 3.99592 9.59225 4.06615C9.694 4.14739 9.7769 4.24974 9.83525 4.36615C9.89822 4.48865 9.93451 4.6231 9.94175 4.76065C9.9485 4.92565 9.94175 5.06065 9.94175 5.1724C9.94452 5.30112 9.93624 5.42984 9.917 5.55715C9.8934 5.68769 9.8507 5.81405 9.79025 5.93215C9.72196 6.04228 9.6287 6.13478 9.518 6.20215C9.42553 6.26215 9.3159 6.29008 9.206 6.28165M13.0138 3.3454H11.1912V6.94539H11.9622V5.5174H12.9372V4.8484H11.9622V4.0144H13.0122V3.3454" fill="white"/>
                  </svg>
                  

<div>
  <div>Case file.pdf</div>
  <div>1.2 MB</div>
</div>
              </div>

              <div>10:11</div>
            </div>

          {fileModal &&  <div className="chat__chat-room__room__file-list">
              <div className="chat__chat-room__room__file-list__title">
                <div>Files</div>
                <div>125</div>
              </div>

              
            <div className="chat__chat-room__room__file-list__group">
              <div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="12" fill="#FFF5F5"/>
<path d="M20 24.2H27M20 28.2H24.38M22 18H26C28 18 28 17 28 16C28 14 27 14 26 14H22C21 14 20 14 20 16C20 18 21 18 22 18Z" stroke="#F56565" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M28 16.0195C31.33 16.1995 33 17.4295 33 21.9995V27.9995C33 31.9995 32 33.9995 27 33.9995H21C16 33.9995 15 31.9995 15 27.9995V21.9995C15 17.4395 16.67 16.1995 20 16.0195" stroke="#F56565" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<div>
  <div>Follow-up document.pdf</div>
  <div>2.4 MB Apr-24-2024, 10:14 AM</div>
</div>
              </div>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 13.03L12.53 16.03C12.38 16.18 12.19 16.25 12 16.25C11.81 16.25 11.62 16.18 11.47 16.03L8.47 13.03C8.18 12.74 8.18 12.26 8.47 11.97C8.76 11.68 9.24 11.68 9.53 11.97L11.25 13.69V8.5C11.25 8.09 11.59 7.75 12 7.75C12.41 7.75 12.75 8.09 12.75 8.5V13.69L14.47 11.97C14.76 11.68 15.24 11.68 15.53 11.97C15.82 12.26 15.82 12.74 15.53 13.03Z" fill="#009B07"/>
</svg>

            </div>
            <div className="chat__chat-room__room__file-list__group">
              <div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="12" fill="#F0FFF4"/>
<path d="M21 34H27C32 34 34 32 34 27V21C34 16 32 14 27 14H21C16 14 14 16 14 21V27C14 32 16 34 21 34Z" stroke="#48BB78" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.6719 30.95L19.6019 27.64C20.3919 27.11 21.5319 27.17 22.2419 27.78L22.5719 28.07C23.3519 28.74 24.6119 28.74 25.3919 28.07L29.5519 24.5C30.3319 23.83 31.5919 23.83 32.3719 24.5L34.0019 25.9M21.0019 22C21.5323 22 22.041 21.7893 22.4161 21.4142C22.7912 21.0391 23.0019 20.5304 23.0019 20C23.0019 19.4696 22.7912 18.9609 22.4161 18.5858C22.041 18.2107 21.5323 18 21.0019 18C20.4714 18 19.9627 18.2107 19.5877 18.5858C19.2126 18.9609 19.0019 19.4696 19.0019 20C19.0019 20.5304 19.2126 21.0391 19.5877 21.4142C19.9627 21.7893 20.4714 22 21.0019 22Z" stroke="#48BB78" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


<div>
  <div>Transcript.png</div>
  <div>2.4 MB Apr-24-2024, 10:14 AM</div>
</div>
              </div>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 13.03L12.53 16.03C12.38 16.18 12.19 16.25 12 16.25C11.81 16.25 11.62 16.18 11.47 16.03L8.47 13.03C8.18 12.74 8.18 12.26 8.47 11.97C8.76 11.68 9.24 11.68 9.53 11.97L11.25 13.69V8.5C11.25 8.09 11.59 7.75 12 7.75C12.41 7.75 12.75 8.09 12.75 8.5V13.69L14.47 11.97C14.76 11.68 15.24 11.68 15.53 11.97C15.82 12.26 15.82 12.74 15.53 13.03Z" fill="#009B07"/>
</svg>

            </div>
            <div className="chat__chat-room__room__file-list__group">
              <div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="12" fill="#EBF8FF"/>
<path d="M33 19V29C33 32 31.5 34 28 34H20C16.5 34 15 32 15 29V19C15 16 16.5 14 20 14H28C31.5 14 33 16 33 19Z" stroke="#4299E1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.5 16.5V18.5C26.5 19.6 27.4 20.5 28.5 20.5H30.5M20 25H24M20 29H28" stroke="#4299E1" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>



<div>
  <div>Interview.docx</div>
  <div>420 KB Apr-12-2024, 11:09 PM</div>
</div>
              </div>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 13.03L12.53 16.03C12.38 16.18 12.19 16.25 12 16.25C11.81 16.25 11.62 16.18 11.47 16.03L8.47 13.03C8.18 12.74 8.18 12.26 8.47 11.97C8.76 11.68 9.24 11.68 9.53 11.97L11.25 13.69V8.5C11.25 8.09 11.59 7.75 12 7.75C12.41 7.75 12.75 8.09 12.75 8.5V13.69L14.47 11.97C14.76 11.68 15.24 11.68 15.53 11.97C15.82 12.26 15.82 12.74 15.53 13.03Z" fill="#009B07"/>
</svg>

            </div>
            <div className="chat__chat-room__room__file-list__group">
              <div>
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="48" height="48" rx="12" fill="#FAF5FF"/>
<path d="M33 19V29C33 32 31.5 34 28 34H20C16.5 34 15 32 15 29V19C15 16 16.5 14 20 14H28C31.5 14 33 16 33 19Z" stroke="#9F7AEA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M26.5 16.5V18.5C26.5 19.6 27.4 20.5 28.5 20.5H30.5M22 25L20 27L22 29M26 25L28 27L26 29" stroke="#9F7AEA" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>




<div>
  <div>Interview.docx</div>
  <div>420 KB Apr-12-2024, 11:09 PM</div>
</div>
              </div>

              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.53 13.03L12.53 16.03C12.38 16.18 12.19 16.25 12 16.25C11.81 16.25 11.62 16.18 11.47 16.03L8.47 13.03C8.18 12.74 8.18 12.26 8.47 11.97C8.76 11.68 9.24 11.68 9.53 11.97L11.25 13.69V8.5C11.25 8.09 11.59 7.75 12 7.75C12.41 7.75 12.75 8.09 12.75 8.5V13.69L14.47 11.97C14.76 11.68 15.24 11.68 15.53 11.97C15.82 12.26 15.82 12.74 15.53 13.03Z" fill="#009B07"/>
</svg>

            </div>
            </div>
}

        </div>

        <div className="chat__chat-room__form">
          <div className="chat__chat-room__form__emoji">

        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"
        onClick={() => setEmojiModal(!emojiModal)}
        >
<g filter="url(#filter0_d_7938_82604)">
<path d="M32.1032 14.7832C24.7432 14.7832 18.7832 20.7565 18.7832 28.1165C18.7832 35.4765 24.7432 41.4499 32.1032 41.4499C39.4765 41.4499 45.4499 35.4765 45.4499 28.1165C45.4499 20.7565 39.4765 14.7832 32.1032 14.7832ZM27.4499 22.7832C28.5565 22.7832 29.4499 23.6765 29.4499 24.7832C29.4499 25.8899 28.5565 26.7832 27.4499 26.7832C26.3432 26.7832 25.4499 25.8899 25.4499 24.7832C25.4499 23.6765 26.3432 22.7832 27.4499 22.7832ZM32.1165 36.1165C29.0765 36.1165 26.4899 33.9032 25.4499 30.7832H38.7832C37.7432 33.9032 35.1565 36.1165 32.1165 36.1165ZM36.7832 26.7832C35.6765 26.7832 34.7832 25.8899 34.7832 24.7832C34.7832 23.6765 35.6765 22.7832 36.7832 22.7832C37.8899 22.7832 38.7832 23.6765 38.7832 24.7832C38.7832 25.8899 37.8899 26.7832 36.7832 26.7832Z" fill="#009B07"/>
</g>
<defs>
<filter id="filter0_d_7938_82604" x="-1" y="-1" width="66" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="8"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 0.32 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7938_82604"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7938_82604" result="shape"/>
</filter>
</defs>
</svg>

{emojiModal && <div className="chat__chat-room__form__emoji__list">
  <div
  onClick={() => setText(`${text}😀`)}
  >😀</div>
  <div
  onClick={() => setText(`${text}🥰`)}
  >🥰</div>
  <div
  onClick={() => setText(`${text}😇`)}
  >😇</div>
  <div
  onClick={() => setText(`${text}😇`)}
  >😇</div>
  <div
  onClick={() => setText(`${text}😇`)}
  >😇</div>
  <div
  onClick={() => setText(`${text}🤪`)}
  >🤪</div>
  <div
  onClick={() => setText(`${text}🤐`)}
  >🤐</div>
  <div
  onClick={() => setText(`${text}😏`)}
  >😏</div>
  <div
  onClick={() => setText(`${text}🤗`)}
  >🤗</div>
  <div
  onClick={() => setText(`${text}🤗`)}
  >🤗</div>
  <div
  onClick={() => setText(`${text}🙄`)}
  >🙄</div>
  <div
  onClick={() => setText(`${text}🤫`)}
  >🤫</div>
  <div
  onClick={() => setText(`${text}😴`)}
  >😴</div>
  <div
  onClick={() => setText(`${text}🥵`)}
  >🥵</div>
  <div
  onClick={() => setText(`${text}😀`)}
  >😀</div>
  <div
  onClick={() => setText(`${text}😫`)}
  >😫</div>
  <div
  onClick={() => setText(`${text}😫`)}
  >😫</div>
  <div
  onClick={() => setText(`${text}😫`)}
  >😫</div>
 {/* 😅 🥰 😇 😇 😇
🤪 🤐 😏 🤗 🤗 🙄
🤫 😴 🥵 😫 😫 😫 */}
</div>}
{emojiModal && <div className="chat__chat-room__form__emoji__anchor"></div>}
          </div>


        <div className="chat__chat-room__form__input">
            <input type="text" placeholder="Type your message here ..." 
            value={text}
            onChange={(e) => setText(e.target.value)}
            />


<div className="chat__chat-room__form__input__attach">

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
            onClick={() => setAttachModal(!attachModal)}
            >
<path d="M12.2017 17.3799C11.5017 17.3799 10.7917 17.1099 10.2617 16.5799C9.74172 16.0599 9.45172 15.3699 9.45172 14.6399C9.45172 13.9099 9.74172 13.2099 10.2617 12.6999L11.6717 11.2899C11.9617 10.9999 12.4417 10.9999 12.7317 11.2899C13.0217 11.5799 13.0217 12.0599 12.7317 12.3499L11.3217 13.7599C11.0817 13.9999 10.9517 14.3099 10.9517 14.6399C10.9517 14.9699 11.0817 15.2899 11.3217 15.5199C11.8117 16.0099 12.6017 16.0099 13.0917 15.5199L15.3117 13.2999C16.5817 12.0299 16.5817 9.96994 15.3117 8.69994C14.0417 7.42994 11.9817 7.42994 10.7117 8.69994L8.29169 11.1199C7.78169 11.6299 7.50171 12.2999 7.50171 13.0099C7.50171 13.7199 7.78169 14.3999 8.29169 14.8999C8.58169 15.1899 8.58169 15.6699 8.29169 15.9599C8.00169 16.2499 7.52169 16.2499 7.23169 15.9599C6.44169 15.1699 6.01172 14.1199 6.01172 12.9999C6.01172 11.8799 6.44169 10.8299 7.23169 10.0399L9.65173 7.61992C11.5017 5.76992 14.5217 5.76992 16.3717 7.61992C18.2217 9.46992 18.2217 12.4899 16.3717 14.3399L14.1517 16.5599C13.6117 17.1099 12.9117 17.3799 12.2017 17.3799Z" fill="#292D32"/>
<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#292D32"/>
</svg>

{attachModal && <div className="chat__chat-room__form__input__attach__list">
 <label style={{width: "100%"}}>
 <div className="chat__chat-room__form__input__attach__list__item">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M22 10V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H14" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M22 10H18C15 10 14 9 14 6V2L22 10Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
Send File
  </div>

  <input
                type="file"
                name=""
                id=""
                hidden
                ref={mediaRef}
                accept=".pdf, .docx"
                // onChange={(e) => handleImageUpload(e, "png")}
              />

 </label>
 <label style={{width: "100%"}}>
  <div className="chat__chat-room__form__input__attach__list__item">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 8V2L20 4" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18 2L16 4" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M2.67188 18.9496L7.60187 15.6396C8.39187 15.1096 9.53187 15.1696 10.2419 15.7796L10.5719 16.0696C11.3519 16.7396 12.6119 16.7396 13.3919 16.0696L17.5519 12.4996C18.3319 11.8296 19.5919 11.8296 20.3719 12.4996L22.0019 13.8996" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

Attach a picture
  </div>

  <input
                type="file"
                name=""
                id=""
                hidden
                ref={mediaRef}
                accept="image/*"
                // onChange={(e) => handleImageUpload(e, "png")}
              />
  </label>
</div>}
{attachModal && <div className="chat__chat-room__form__input__attach__anchor">

</div>}
</div>

            </div>

<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_7938_82612)">
<path d="M32.2104 30.7832C31.0993 30.7832 30.1548 30.3943 29.377 29.6165C28.5993 28.8388 28.2104 27.8943 28.2104 26.7832V18.7832C28.2104 17.6721 28.5993 16.7276 29.377 15.9499C30.1548 15.1721 31.0993 14.7832 32.2104 14.7832C33.3215 14.7832 34.2659 15.1721 35.0437 15.9499C35.8215 16.7276 36.2104 17.6721 36.2104 18.7832V26.7832C36.2104 27.8943 35.8215 28.8388 35.0437 29.6165C34.2659 30.3943 33.3215 30.7832 32.2104 30.7832ZM32.2104 40.1165C31.8326 40.1165 31.5161 39.9885 31.261 39.7325C31.005 39.4774 30.877 39.161 30.877 38.7832V35.9832C28.8104 35.7165 27.0548 34.861 25.6104 33.4165C24.1659 31.9721 23.2881 30.2388 22.977 28.2165C22.9104 27.8388 23.0104 27.5054 23.277 27.2165C23.5437 26.9276 23.8993 26.7832 24.3437 26.7832C24.6548 26.7832 24.9326 26.8996 25.177 27.1325C25.4215 27.3663 25.577 27.6499 25.6437 27.9832C25.9326 29.5388 26.6881 30.8388 27.9104 31.8832C29.1326 32.9276 30.5659 33.4499 32.2104 33.4499C33.8548 33.4499 35.2881 32.9276 36.5104 31.8832C37.7326 30.8388 38.4881 29.5388 38.777 27.9832C38.8437 27.6499 39.005 27.3663 39.261 27.1325C39.5161 26.8996 39.7993 26.7832 40.1104 26.7832C40.5326 26.7832 40.877 26.9276 41.1437 27.2165C41.4104 27.5054 41.5104 27.8388 41.4437 28.2165C41.1326 30.2388 40.2548 31.9721 38.8104 33.4165C37.3659 34.861 35.6104 35.7165 33.5437 35.9832V38.7832C33.5437 39.161 33.4161 39.4774 33.161 39.7325C32.905 39.9885 32.5881 40.1165 32.2104 40.1165Z" fill="#009B07"/>
</g>
<defs>
<filter id="filter0_d_7938_82612" x="-1" y="-1" width="66" height="66" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="8"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 0 0.85098 0 0 0 0.32 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_7938_82612"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_7938_82612" result="shape"/>
</filter>
</defs>
</svg>

        </div>
      </div>
    </div>
  );
}
