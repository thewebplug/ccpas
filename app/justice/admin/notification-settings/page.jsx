"use client";
import Image from "next/image";
import { useState } from "react";

export default function NotificationSettings() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [cardActive, setCardActive] = useState(0);
  const [subDept, setSubDept] = useState(false);
  return (
    <div className="notification-settings">
      <div className="notification-settings__header">
        <div className="notification-settings__header__title">Notification Settings</div>
        <div
          className="notification-settings__header__button"
        >
          <button>Cancel</button>
          <button>Save</button>
        </div>
      </div>
      <div className="notification-settings__actions">
      
        <form action="" className="notification-settings__actions__input">
          <input type="text" placeholder="User Name" />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z"
              stroke="#101828"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </form>
        <form action="" className="notification-settings__actions__input">
          <select name="" id="">
            <option value="">Role</option>
          </select>
        </form>

      

        <form action="" className="notification-settings__actions__input">
          <select name="" id="">
            <option value="">Action</option>
          </select>
        </form>
        <form action="" className="notification-settings__actions__input">
          <select name="" id="">
            <option value="">Department</option>
          </select>
        </form>

 <div className="departments__actions__filters">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.1554 3.5H3.84473C3.09527 3.5 2.71709 4.40935 3.24813 4.94039L9.74999 11.4432V18.6875C9.74999 18.9628 9.88433 19.2208 10.1099 19.3787L12.9224 21.3468C13.4773 21.7352 14.25 21.3415 14.25 20.6555V11.4432L20.752 4.94039C21.282 4.41041 20.9064 3.5 20.1554 3.5Z"
              fill="#033132"
            />
          </svg>
          Filter
        </div>

        <button className="notification-settings__actions__button">Apply</button>
      </div>
      {/* <div className="notification-settings__parameters">
        <div>
          From: 1 April 2024 To: 24 April 2024
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99908 11.0597L5.52941 15.5294L4.46875 14.4688L8.93842 9.99908L4.46875 5.52941L5.52941 4.46875L9.99908 8.93842L14.4688 4.46875L15.5294 5.52941L11.0597 9.99908L15.5294 14.4688L14.4688 15.5294L9.99908 11.0597Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>
        <div>
          Role: Admin
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99908 11.0597L5.52941 15.5294L4.46875 14.4688L8.93842 9.99908L4.46875 5.52941L5.52941 4.46875L9.99908 8.93842L14.4688 4.46875L15.5294 5.52941L11.0597 9.99908L15.5294 14.4688L14.4688 15.5294L9.99908 11.0597Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>
        <div>
          IP Address: 27.0.01
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99908 11.0597L5.52941 15.5294L4.46875 14.4688L8.93842 9.99908L4.46875 5.52941L5.52941 4.46875L9.99908 8.93842L14.4688 4.46875L15.5294 5.52941L11.0597 9.99908L15.5294 14.4688L14.4688 15.5294L9.99908 11.0597Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>
        <div>
          Action: Expunged
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.99908 11.0597L5.52941 15.5294L4.46875 14.4688L8.93842 9.99908L4.46875 5.52941L5.52941 4.46875L9.99908 8.93842L14.4688 4.46875L15.5294 5.52941L11.0597 9.99908L15.5294 14.4688L14.4688 15.5294L9.99908 11.0597Z"
              fill="#0E0E2C"
            />
          </svg>
        </div>
      </div> */}

      <div className="notification-settings__heading">
        <div>User Name <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9987 3.33203V12.6654M7.9987 12.6654L12.6654 7.9987M7.9987 12.6654L3.33203 7.9987" stroke="#667085" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>

        <div>Assigned a Case</div>
        <div>
        Case status update
       
        </div>
        <div>Received an Email</div>
        <div>Received a Chat Message</div>
      </div>

      <div className="notification-settings__body">
        <div className="notification-settings__body__inner">
          
          <div className="notification-settings__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>
          
          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>
          
        </div>
        <div className="notification-settings__body__inner">
          
          <div className="notification-settings__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>
          
          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>
          
        </div>
        <div className="notification-settings__body__inner">
          
          <div className="notification-settings__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>
          
          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>
          
        </div>
        <div className="notification-settings__body__inner">
          
          <div className="notification-settings__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>
          
          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>
          
        </div>
        <div className="notification-settings__body__inner">
          
          <div className="notification-settings__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>

          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>
          
          <div className="notification-settings__body__inner__buttons">
            <button>None</button>
            <button>In-app</button>
            <button>Email</button>
          </div>
          
        </div>
       
       
      
       
      </div>

      <div className="notification-settings__footer">
        <div className="notification-settings__footer__nav">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.8346 10.0013H4.16797M4.16797 10.0013L10.0013 15.8346M4.16797 10.0013L10.0013 4.16797"
              stroke="#344054"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <div>Previous</div>
        </div>

        {/* pagination */}

        <div className="notification-settings__footer__nav">
          <div>Next</div>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.16797 10.0013H15.8346M15.8346 10.0013L10.0013 4.16797M15.8346 10.0013L10.0013 15.8346"
              stroke="#344054"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
