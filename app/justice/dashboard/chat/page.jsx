import Image from "next/image";

export default function Chat() {
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
          <div className="chat__chat-list__nav__item chat__chat-list__nav__item-active">All</div>
          <div className="chat__chat-list__nav__item">Department <span>4</span></div>
          <div className="chat__chat-list__nav__item">Agency <span>4</span></div>
          <div className="chat__chat-list__nav__item">Out-side Agency <span>4</span></div>
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
                <div>3</div>
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
                <div>3</div>
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
                <div>3</div>
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
                <div>3</div>
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
                <div>3</div>
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
                <div>3</div>
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

<svg width="66" height="66" viewBox="0 0 66 66" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>

        <div className="chat__chat-room__form">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
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


        <div className="chat__chat-room__form__input">
            <input type="text" placeholder="Type your message here ..." />

            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2017 17.3799C11.5017 17.3799 10.7917 17.1099 10.2617 16.5799C9.74172 16.0599 9.45172 15.3699 9.45172 14.6399C9.45172 13.9099 9.74172 13.2099 10.2617 12.6999L11.6717 11.2899C11.9617 10.9999 12.4417 10.9999 12.7317 11.2899C13.0217 11.5799 13.0217 12.0599 12.7317 12.3499L11.3217 13.7599C11.0817 13.9999 10.9517 14.3099 10.9517 14.6399C10.9517 14.9699 11.0817 15.2899 11.3217 15.5199C11.8117 16.0099 12.6017 16.0099 13.0917 15.5199L15.3117 13.2999C16.5817 12.0299 16.5817 9.96994 15.3117 8.69994C14.0417 7.42994 11.9817 7.42994 10.7117 8.69994L8.29169 11.1199C7.78169 11.6299 7.50171 12.2999 7.50171 13.0099C7.50171 13.7199 7.78169 14.3999 8.29169 14.8999C8.58169 15.1899 8.58169 15.6699 8.29169 15.9599C8.00169 16.2499 7.52169 16.2499 7.23169 15.9599C6.44169 15.1699 6.01172 14.1199 6.01172 12.9999C6.01172 11.8799 6.44169 10.8299 7.23169 10.0399L9.65173 7.61992C11.5017 5.76992 14.5217 5.76992 16.3717 7.61992C18.2217 9.46992 18.2217 12.4899 16.3717 14.3399L14.1517 16.5599C13.6117 17.1099 12.9117 17.3799 12.2017 17.3799Z" fill="#292D32"/>
<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#292D32"/>
</svg>

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
