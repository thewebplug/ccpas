"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Profile() {
  const pathname = usePathname();
  const [tab, setTab] = useState("Personal Info");
  
  return (
    <div className="profile">
      <div className="profile__title">Account Profile</div>

      <div className="profile__tabs">
        <div
          className={
            tab === "Personal Info"
              ? "profile__tabs__item profile__tabs__active"
              : "profile__tabs__item"
          }
          onClick={() => setTab("Personal Info")}
        >
          Personal Info
        </div>
        <div
          className={
            tab === "Work"
            ? "profile__tabs__item profile__tabs__active"
            : "profile__tabs__item"
          }
          onClick={() => setTab("Work")}
        >
          Work
        </div>
        <div
          className={
            tab === "Password"
            ? "profile__tabs__item profile__tabs__active"
            : "profile__tabs__item"
          }
          onClick={() => setTab("Password")}
        >
          Password
        </div>
        <div
          className={
            tab === "Notifications"
              ? "profile__tabs__item profile__tabs__active"
              : "profile__tabs__item"
          }
          onClick={() => setTab("Notifications")}
        >
          Notifications
          {/* <div className="profile__tabs__item__badge">4</div> */}
        </div>
      </div>

      {tab === "Personal Info" && <div className="profile__title-group">
        <div>
          <div>Personal info</div>
          <div>Update your photo and personal details here.</div>
        </div>
        <div>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>}
      {tab === "Work" && <div className="profile__title-group">
        <div>
          <div>Work info</div>
          <div>Update your photo and personal details here.</div>
        </div>
        <div>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>}
      {tab === "Notifications" && <div className="profile__title-group">
        <div>
          <div>Notifications</div>
          <div>Choose your preferred method and timing for notifications update your photo and personal details here.</div>
        </div>
        <div>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>}
      


      {tab === "Personal Info" && <div className="profile__group">
        <div className="profile__group__label">
          <div className="profile__group__label__title">Your photo</div>
          <div className="profile__group__label__subtitle">
            This will be displayed on your profile.
          </div>
        </div>

        <div className="profile__group__image-upload">
          <Image
            alt=""
            src="/assets/logo.png"
            width={64}
            height={64}
            style={{ borderRadius: "50%" }}
          />

          <div className="profile__group__image-upload__drag-drop">
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="3" y="3" width="40" height="40" rx="20" fill="#F2F4F7" />
              <rect
                x="3"
                y="3"
                width="40"
                height="40"
                rx="20"
                stroke="#F9FAFB"
                stroke-width="6"
              />
              <g clip-path="url(#clip0_610_14402)">
                <path
                  d="M26.3326 26.3352L22.9992 23.0019M22.9992 23.0019L19.6659 26.3352M22.9992 23.0019V30.5019M29.9909 28.3269C30.8037 27.8838 31.4458 27.1826 31.8158 26.334C32.1858 25.4855 32.2627 24.5379 32.0344 23.6408C31.8061 22.7436 31.2855 21.9481 30.5548 21.3797C29.8241 20.8113 28.925 20.5025 27.9992 20.5019H26.9492C26.697 19.5262 26.2269 18.6205 25.5742 17.8527C24.9215 17.0849 24.1033 16.4751 23.181 16.069C22.2587 15.663 21.2564 15.4713 20.2493 15.5084C19.2423 15.5455 18.2568 15.8104 17.3669 16.2832C16.477 16.7561 15.7058 17.4244 15.1114 18.2382C14.517 19.0519 14.1148 19.9898 13.9351 20.9814C13.7553 21.9729 13.8027 22.9923 14.0736 23.9629C14.3445 24.9335 14.8319 25.8301 15.4992 26.5852"
                  stroke="#475467"
                  stroke-width="1.66667"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_610_14402">
                  <rect
                    width="20"
                    height="20"
                    fill="white"
                    transform="translate(13 13)"
                  />
                </clipPath>
              </defs>
            </svg>

            <div>
              <span>Click to upload </span>or drag and drop <br />
              SVG, PNG, JPG or GIF (max. 800x400px)
            </div>
          </div>
        </div>
      </div>}

      {tab === "Personal Info" && <div className="profile__group">
        <div className="profile__group__label">
          <div className="profile__group__label__title">Name</div>
        </div>
        <div className="profile__group__input-group">
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" placeholder="First Name" />
          </div>
          <div>
            <label htmlFor="">Middle Name</label>
            <input type="text" placeholder="Middle Name" />
          </div>
          <div>
            <label htmlFor="">Last Name</label>
            <input type="text" placeholder="Last Name" />
          </div>
        </div>
      </div>}
{tab === "Personal Info" && <>

<div className="profile__group">
        <div className="profile__group__label">
          <div className="profile__group__label__title">
            Gov Issued Email address
          </div>
        </div>

        <div className="profile__group__email">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3327 4.9987C18.3327 4.08203 17.5827 3.33203 16.666 3.33203H3.33268C2.41602 3.33203 1.66602 4.08203 1.66602 4.9987M18.3327 4.9987V14.9987C18.3327 15.9154 17.5827 16.6654 16.666 16.6654H3.33268C2.41602 16.6654 1.66602 15.9154 1.66602 14.9987V4.9987M18.3327 4.9987L9.99935 10.832L1.66602 4.9987"
              stroke="#667085"
              stroke-width="1.66667"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <input
            type="text"
            name=""
            id=""
            placeholder="h.aisha@fmoj.gov.ng"
            disabled
          />
        </div>
      </div>

      <div className="profile__group">
        <div className="profile__group__label">
          <div className="profile__group__label__title">Title</div>
        </div>

        <input
          className="profile__group__input-filled"
          type="text"
          placeholder="Title"
        />
      </div>
      <div className="profile__group">
        <div className="profile__group__label">
          <div className="profile__group__label__title">Stationed at</div>
        </div>

        <select name="" id="">
            <option value="">FMoJ-Dept of Public Prosecution-Abuja HQ</option>
        </select>
      </div>

      <div className="profile__group">
        <div className="profile__group__label">
          <div className="profile__group__label__title">Date of Birth</div>
        </div>

        <input
          className="profile__group__input-filled"
          type="text"
          placeholder="JAN-08-1998"
        />
      </div>

      <div className="profile__group">
        <div className="profile__group__label">
          <div className="profile__group__label__title">Date of Engagement</div>
        </div>

        <input
          className="profile__group__input-filled"
          type="text"
          placeholder="JAN-08-2018"
        />
      </div>
      <div className="profile__group">
        <div className="profile__group__label">
          <div className="profile__group__label__title">BVN</div>
        </div>

        <input
          className="profile__group__input-filled"
          type="text"
          placeholder="222 495 320 452"
        />
      </div>
      <div className="profile__group">
        <div className="profile__group__label">
          <div className="profile__group__label__title">NIN</div>
        </div>

        <input
          className="profile__group__input-filled"
          type="text"
          placeholder="777 490 320 452"
        />
      </div>
</>}


      {tab === "Work" && <div className="profile__group-multiple">
        <div>
            <label htmlFor="">Title</label>
            <input type="text" className="profile__group-multiple__input-filled"
            placeholder="General Prosecutor"
            />
        </div>
        <div>
            <label htmlFor="">Stationed at</label>
            <input type="text" placeholder="FMoJ-Dept of Public Prosecution-Abuja HQ" />
        </div>
        <div>
            <label htmlFor="">FMoJ ID</label>
            <input type="text" placeholder="FM968379821" />
        </div>
        <div>
            <label htmlFor="">Supervisor</label>
            <input type="text" placeholder="Mark Adekunle" />
        </div>
        <div>
            <label htmlFor="">Department</label>
            <input type="text" placeholder="Cybercrime" />
        </div>
        <div>
            <label htmlFor="">Supervisor Email</label>
            <input type="text" placeholder="M.Adekunle@fmoj.gov.ng" />
        </div>
        <div>
            <label htmlFor="">Security Clearance</label>
            <input type="text" placeholder="Secret" />
        </div>
        <div>
            <label htmlFor="">Date of Engagement</label>
            <input type="text" placeholder="JAN-08-2018" />
        </div>
      </div>}

     {tab === "Notifications" && <div className="profile__title-group">
        <div>
          <div>General Notification</div>
          <div>Select when you'll be notified of the following changes.</div>
        </div>

       <div></div>

        
      </div>}
      {tab === "Password" && <div className="profile__title-group">
        <div>
          <div>Password</div>
          <div>Please enter your current password to change your password</div>
        </div>

       <div></div>

        
      </div>}
      {tab === "Notifications" && <>
      <div className="profile__notifications-group">
        <div>
          <div>I’m mentioned in a message</div>
          <div></div>
        </div>

        <div className="profile__notifications-group__notification-options">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
        </div>

        
      </div>
      <div className="profile__notifications-group">
        <div>
          <div>Received an email</div>
          <div></div>
        </div>

        <div className="profile__notifications-group__notification-options">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
        </div>

        
      </div>
      <div className="profile__notifications-group">
        <div>
          <div>Received a chat message</div>
          <div></div>
        </div>

        <div className="profile__notifications-group__notification-options">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
        </div>

        
      </div>
      <div className="profile__notifications-group">
        <div>
          <div>Assigned a case</div>
          <div></div>
        </div>

        <div className="profile__notifications-group__notification-options">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
        </div>

        
      </div>
      <div className="profile__notifications-group">
        <div>
          <div>Case status update</div>
          <div></div>
        </div>

        <div className="profile__notifications-group__notification-options">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
        </div>

        
      </div>
      <div className="profile__notifications-group">
        <div>
          <div>I’m mentioned in a message</div>
          <div></div>
        </div>

        <div className="profile__notifications-group__notification-options">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
        </div>

        
      </div>
      </>}
      

      

{tab === "Password" && <>
      <div className="profile__group">
        <div className="profile__group__label">
          <div className="profile__group__label__title">Current password</div>
        </div>

        <input type="password" placeholder="******" />
      </div>
      <div className="profile__group">
        <div className="profile__group__label">
          <div className="profile__group__label__title">New password</div>
        </div>

        <input type="password" placeholder="******" />
        <div></div>
        <div className="profile__group__instruction">Your new password must be than 8 characters.</div>
      </div>
      <div className="profile__group">
        <div className="profile__group__label">
          <div className="profile__group__label__title">Confirmed password</div>
        </div>

        <input type="password" placeholder="******" />
      </div>
      </>}

      <div className="profile__title-group">
        <div>
          <div></div>
          <div></div>
        </div>
        <div>
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
    </div>
  );
}
