"use client";
import Image from "next/image";
import { useState } from "react";

export default function Logs() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalOpen2, setModalOpen2] = useState(false);
  const [modalOpen3, setModalOpen3] = useState(false);
  const [cardActive, setCardActive] = useState(0);
  const [subDept, setSubDept] = useState(false);
  return (
    <div className="support">
      <div className="support__header">
        <div className="support__header__title">Log Activities</div>
        <button
          className="support__header__button"
          onClick={() => setModalOpen2(true)}
        >
          Export{" "}
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 8V1H17V8M5 17H3C2.46957 17 1.96086 16.7893 1.58579 16.4142C1.21071 16.0391 1 15.5304 1 15V10C1 9.46957 1.21071 8.96086 1.58579 8.58579C1.96086 8.21071 2.46957 8 3 8H19C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10V15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H17M5 13H17V21H5V13Z"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="support__actions">
        <form action="" className="support__actions__input">
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
          <input type="text" placeholder="Search" />
        </form>
        <form action="" className="support__actions__input">
          <input type="date" placeholder="Search" />
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
              d="M19.5119 6.35L13.5719 2.92C12.6019 2.36 11.4019 2.36 10.4219 2.92L4.49187 6.35C3.52187 6.91 2.92188 7.95 2.92188 9.08V15.92C2.92188 17.04 3.52187 18.08 4.49187 18.65L10.4319 22.08C11.4019 22.64 12.6019 22.64 13.5819 22.08L19.5219 18.65C20.4919 18.09 21.0919 17.05 21.0919 15.92V9.08C21.0819 7.95 20.4819 6.92 19.5119 6.35ZM11.2519 8.25C11.2519 7.84 11.5919 7.5 12.0019 7.5C12.4119 7.5 12.7519 7.84 12.7519 8.25V13.5C12.7519 13.91 12.4119 14.25 12.0019 14.25C11.5919 14.25 11.2519 13.91 11.2519 13.5V8.25ZM12.9219 17.13C12.8719 17.25 12.8019 17.36 12.7119 17.46C12.5219 17.65 12.2719 17.75 12.0019 17.75C11.8719 17.75 11.7419 17.72 11.6219 17.67C11.4919 17.62 11.3919 17.55 11.2919 17.46C11.2019 17.36 11.1319 17.25 11.0719 17.13C11.0219 17.01 11.0019 16.88 11.0019 16.75C11.0019 16.49 11.1019 16.23 11.2919 16.04C11.3919 15.95 11.4919 15.88 11.6219 15.83C11.9919 15.67 12.4319 15.76 12.7119 16.04C12.8019 16.14 12.8719 16.24 12.9219 16.37C12.9719 16.49 13.0019 16.62 13.0019 16.75C13.0019 16.88 12.9719 17.01 12.9219 17.13Z"
              fill="#292D32"
            />
          </svg>
          Priority
        </div>
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
        <button className="support__actions__button">Apply</button>
      </div>
      <div className="support__parameters">
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
      </div>

      <div className="support__heading">
        <div>
          Ticket ID{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.9987 3.33203V12.6654M7.9987 12.6654L12.6654 7.9987M7.9987 12.6654L3.33203 7.9987"
              stroke="#667085"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div>Subject</div>
        <div>User</div>
        <div>
          Status{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.9987 3.33203V12.6654M7.9987 12.6654L12.6654 7.9987M7.9987 12.6654L3.33203 7.9987"
              stroke="#667085"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>
          Priority{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.9987 3.33203V12.6654M7.9987 12.6654L12.6654 7.9987M7.9987 12.6654L3.33203 7.9987"
              stroke="#667085"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>
          Request Date{" "}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.9987 3.33203V12.6654M7.9987 12.6654L12.6654 7.9987M7.9987 12.6654L3.33203 7.9987"
              stroke="#667085"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="support__body">
        <div
          className="support__body__inner"
          onClick={() => setModalOpen(true)}
        >
          <div>#TC-192</div>
          <div>Help, I can’t find my case file</div>
          <div className="support__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>
          <button className="support__body__inner__status">Admin</button>
          <div className="support__body__inner__priority">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Not Set
          </div>
          {/* <div className="support__body__inner__priority support__body__inner__priority-high">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            High
          </div>
          <div className="support__body__inner__priority support__body__inner__priority-medium">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Medium
          </div>
          <div className="support__body__inner__priority support__body__inner__priority-low">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Low
          </div> */}
          <div className="support__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
        </div>
        <div
          className="support__body__inner"
          onClick={() => setModalOpen(true)}
        >
          <div>#TC-192</div>
          <div>Help, I can’t find my case file</div>
          <div className="support__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>
          <button className="support__body__inner__status">Admin</button>
          <div className="support__body__inner__priority">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Not Set
          </div>
          {/* <div className="support__body__inner__priority support__body__inner__priority-high">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            High
          </div>
          <div className="support__body__inner__priority support__body__inner__priority-medium">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Medium
          </div>
          <div className="support__body__inner__priority support__body__inner__priority-low">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Low
          </div> */}
          <div className="support__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
        </div>
        <div
          className="support__body__inner"
          onClick={() => setModalOpen(true)}
        >
          <div>#TC-192</div>
          <div>Help, I can’t find my case file</div>
          <div className="support__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>
          <button className="support__body__inner__status">Admin</button>
          <div className="support__body__inner__priority">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Not Set
          </div>
          {/* <div className="support__body__inner__priority support__body__inner__priority-high">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            High
          </div>
          <div className="support__body__inner__priority support__body__inner__priority-medium">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Medium
          </div>
          <div className="support__body__inner__priority support__body__inner__priority-low">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Low
          </div> */}
          <div className="support__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
        </div>
        <div
          className="support__body__inner"
          onClick={() => setModalOpen(true)}
        >
          <div>#TC-192</div>
          <div>Help, I can’t find my case file</div>
          <div className="support__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>
          <button className="support__body__inner__status support__body__inner__status-assigned">Assigned</button>
          {/* <div className="support__body__inner__priority">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Not Set
          </div> */}
          <div className="support__body__inner__priority support__body__inner__priority-high">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            High
          </div>
          {/* 
          <div className="support__body__inner__priority support__body__inner__priority-medium">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Medium
          </div>
          <div className="support__body__inner__priority support__body__inner__priority-low">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Low
          </div> */}
          <div className="support__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
        </div>
        <div
          className="support__body__inner"
          onClick={() => setModalOpen(true)}
        >
          <div>#TC-192</div>
          <div>Help, I can’t find my case file</div>
          <div className="support__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>
          <button className="support__body__inner__status support__body__inner__status-assigned">Assigned</button>
          {/* <div className="support__body__inner__priority">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Not Set
          </div> */}
          <div className="support__body__inner__priority support__body__inner__priority-medium">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Medium
          </div>
          {/* 
          <div className="support__body__inner__priority support__body__inner__priority-high">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            High
          </div>
          
          <div className="support__body__inner__priority support__body__inner__priority-low">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Low
          </div> */}
          <div className="support__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
        </div>
        <div
          className="support__body__inner"
          onClick={() => setModalOpen(true)}
        >
          <div>#TC-192</div>
          <div>Help, I can’t find my case file</div>
          <div className="support__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>
          <button className="support__body__inner__status support__body__inner__status-assigned">Assigned</button>
          {/* <div className="support__body__inner__priority">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Not Set
          </div> */}
     

          <div className="support__body__inner__priority support__body__inner__priority-low">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Low
          </div>
          {/* 
          <div className="support__body__inner__priority support__body__inner__priority-high">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            High
          </div>

               <div className="support__body__inner__priority support__body__inner__priority-medium">
            <svg
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="3" fill="#141814" />
            </svg>
            Medium
          </div>
          
           */}
          <div className="support__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
        </div>
        
      </div>

      <div className="support__footer">
        <div className="support__footer__nav">
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

        <div className="support__footer__nav">
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
