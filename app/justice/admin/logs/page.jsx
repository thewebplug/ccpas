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
    <div className="logs">
      <div className="logs__header">
        <div className="logs__header__title">Log Activities</div>
        <button
          className="logs__header__button"
          onClick={() => setModalOpen2(true)}
        >
          Exports{" "}
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
      <div className="logs__actions">
        <form action="" className="logs__actions__input">
          <input type="date" placeholder="Search" />
        </form>
        <form action="" className="logs__actions__input">
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
        <form action="" className="logs__actions__input">
          <select name="" id="">
            <option value="">Role</option>
          </select>
        </form>

        <form action="" className="logs__actions__input">
          <input type="text" placeholder="IP Address" />
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

        <form action="" className="logs__actions__input">
          <select name="" id="">
            <option value="">Action</option>
          </select>
        </form>

        <button className="logs__actions__button">Apply</button>
      </div>
      <div className="logs__parameters">
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

      <div className="logs__heading">
        <div>Time Stamp</div>

        <div>Author Name</div>
        <div>
          Author Role{" "}
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.5587 6.00065C6.71543 5.5551 7.0248 5.17939 7.432 4.94007C7.8392 4.70076 8.31796 4.61328 8.78348 4.69313C9.249 4.77297 9.67124 5.015 9.97542 5.37634C10.2796 5.73767 10.4461 6.195 10.4454 6.66732C10.4454 8.00065 8.44536 8.66732 8.44536 8.66732M8.4987 11.334H8.50536M15.1654 8.00065C15.1654 11.6826 12.1806 14.6673 8.4987 14.6673C4.8168 14.6673 1.83203 11.6826 1.83203 8.00065C1.83203 4.31875 4.8168 1.33398 8.4987 1.33398C12.1806 1.33398 15.1654 4.31875 15.1654 8.00065Z"
              stroke="#98A2B3"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div>Author IP Address</div>
        <div>Action</div>
        <div>Description</div>
      </div>

      <div className="logs__body">
        <div className="logs__body__inner" onClick={() => setModalOpen(true)}>
          <div className="logs__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
          <div className="logs__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>
          <button className="logs__body__inner__role">Admin</button>
          <div>127.0.01</div>
          <div>Expunged</div>
          <div className="logs__body__inner__desc">
            Case File <span>FM1803093003848</span> Expunged{" "}
          </div>
        </div>
        <div className="logs__body__inner" onClick={() => setModalOpen(true)}>
          <div className="logs__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
          <div className="logs__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>
          <button className="logs__body__inner__role logs__body__inner__role-user">
            User
          </button>
          <div>127.0.01</div>
          <div>Expunged</div>
          <div className="logs__body__inner__desc">
            Case File <span>FM1803093003848</span> Expunged{" "}
          </div>
        </div>
        <div className="logs__body__inner" onClick={() => setModalOpen(true)}>
          <div className="logs__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
          <div className="logs__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>
          <button className="logs__body__inner__role">Admin</button>
          <div>127.0.01</div>
          <div>Expunged</div>
          <div className="logs__body__inner__desc">
            Case File <span>FM1803093003848</span> Expunged{" "}
          </div>
        </div>
        <div className="logs__body__inner" onClick={() => setModalOpen(true)}>
          <div className="logs__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
          <div className="logs__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>
          <button className="logs__body__inner__role logs__body__inner__role-user">
            User
          </button>
          <div>127.0.01</div>
          <div>Expunged</div>
          <div className="logs__body__inner__desc">
            Case File <span>FM1803093003848</span> Expunged{" "}
          </div>
        </div>
        <div className="logs__body__inner" onClick={() => setModalOpen(true)}>
          <div className="logs__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
          <div className="logs__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>
          <button className="logs__body__inner__role">Admin</button>
          <div>127.0.01</div>
          <div>Expunged</div>
          <div className="logs__body__inner__desc">
            Case File <span>FM1803093003848</span> Expunged{" "}
          </div>
        </div>
        <div className="logs__body__inner" onClick={() => setModalOpen(true)}>
          <div className="logs__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
          <div className="logs__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>
          <button className="logs__body__inner__role logs__body__inner__role-user">
            User
          </button>
          <div>127.0.01</div>
          <div>Expunged</div>
          <div className="logs__body__inner__desc">
            Case File <span>FM1803093003848</span> Expunged{" "}
          </div>
        </div>
        <div className="logs__body__inner" onClick={() => setModalOpen(true)}>
          <div className="logs__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
          <div className="logs__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>
          <button className="logs__body__inner__role">Admin</button>
          <div>127.0.01</div>
          <div>Expunged</div>
          <div className="logs__body__inner__desc">
            Case File <span>FM1803093003848</span> Expunged{" "}
          </div>
        </div>
        <div className="logs__body__inner" onClick={() => setModalOpen(true)}>
          <div className="logs__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
          <div className="logs__body__inner__name">
            <Image alt="" src="/assets/logo.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
              <div>A.oloye@justice.gov.ng</div>
            </div>
          </div>
          <button className="logs__body__inner__role logs__body__inner__role-user">
            User
          </button>
          <div>127.0.01</div>
          <div>Expunged</div>
          <div className="logs__body__inner__desc">
            Case File <span>FM1803093003848</span> Expunged{" "}
          </div>
        </div>
      </div>

      <div className="logs__footer">
        <div className="logs__footer__nav">
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

        <div className="logs__footer__nav">
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
