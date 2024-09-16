"use client";
import Image from "next/image";
import { useState } from "react";
import TicketDetails from "../ticket-details/page";
import NotificationCreated from "@/app/components/notificationCreated";

export default function NotificationCenter() {
  const [ticketModal, setTicketModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [subDept, setSubDept] = useState(false);
  const [stage, setStage] = useState(1);

  const handleTicketModalOpen = () => {
    setTicketModal(true);
  };

  const handleTicketModalClose = () => {
    setTicketModal(false);
  };

  return (
    <div className="notification-center">
      <div className="notification-center__header">
        <div className="notification-center__header__title">
          Notification Center
        </div>
        <button
          className="notification-center__header__button"
          onClick={() => setModalOpen2(true)}
        >
          Create New Notification{" "}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
              fill="white"
            />
            <path
              d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <div className="notification-center__actions">
        <form action="" className="notification-center__actions__input">
          <input type="date" placeholder="Search" />
        </form>
        <form action="" className="notification-center__actions__input">
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
        <form action="" className="notification-center__actions__input">
          <select name="" id="">
            <option value="">Role</option>
          </select>
        </form>

        <form action="" className="notification-center__actions__input">
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

        <form action="" className="notification-center__actions__input">
          <select name="" id="">
            <option value="">Action</option>
          </select>
        </form>

        <button className="notification-center__actions__button">Apply</button>
      </div>
      <div className="notification-center__parameters">
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

      <div className="notification-center__heading">
        <div>
          Time Stamp{" "}
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

        <div>Title</div>
        <div>Sender Name</div>
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
          Notification Type{" "}
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
        <div>Target Audience</div>
      </div>

      <div className="notification-center__body">
        <div
          className="notification-center__body__inner"
          onClick={() => {
          setStage(1)
            setOpen(true)
          }}
        >
          <div className="notification-center__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
          <div className="notification-center__body__inner__desc">
            Case File <span>FM1803093003848</span> Expunged{" "}
          </div>{" "}
          <div className="notification-center__body__inner__name">
            <Image alt="" src="/assets/logo1.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
            </div>
          </div>
          <div className="notification-center__body__inner__priority notification-center__body__inner__priority-low">
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
          <button className="notification-center__body__inner__status notification-center__body__inner__status-pending">
            Pending
          </button>
          <div>System Alert</div>
          <div>All users</div>
        </div>

        <div
          className="notification-center__body__inner"
          onClick={() => {
          setStage(1)
            setOpen(true)
          }}
        >
          <div className="notification-center__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
          <div className="notification-center__body__inner__desc">
            Case File <span>FM1803093003848</span> Expunged{" "}
          </div>{" "}
          <div className="notification-center__body__inner__name">
            <Image alt="" src="/assets/logo1.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
            </div>
          </div>
          <div className="notification-center__body__inner__priority notification-center__body__inner__priority-high">
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
          <button className="notification-center__body__inner__status-delivered notification-center__body__inner__status">
            Delivered
          </button>
          <div>System Alert</div>
          <div>All users</div>
        </div>

        <div
          className="notification-center__body__inner"
          onClick={() => {
          setStage(1)
            setOpen(true)
          }}
        >
          <div className="notification-center__body__inner__time">
            <div>JUN-21-2024</div>
            <div>18:28:34 - 1 hour ago</div>
          </div>
          <div className="notification-center__body__inner__desc">
            Case File <span>FM1803093003848</span> Expunged{" "}
          </div>{" "}
          <div className="notification-center__body__inner__name">
            <Image alt="" src="/assets/logo1.png" width={40} height={40} />
            <div>
              <div>Adewumi Oloye</div>
            </div>
          </div>
          <div className="notification-center__body__inner__priority">
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
          <button className="notification-center__body__inner__status notification-center__body__inner__status-failed">
            Failed
          </button>
          <div>System Alert</div>
          <div>All users</div>
        </div>
      </div>

      <div className="notification-center__footer">
        <div className="notification-center__footer__nav">
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

        <div className="notification-center__footer__nav">
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
      {open && <div className="notification-center__modal-cover"></div>}

      {open && (
        <div className="notification-center__modal">
          <div className="notification-center__modal__header">
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer"
                onClick={() => setOpen(false)}
              >
                <path
                  d="M9.57141 18.8201C9.38141 18.8201 9.19141 18.7501 9.04141 18.6001L2.97141 12.5301C2.68141 12.2401 2.68141 11.7601 2.97141 11.4701L9.04141 5.40012C9.33141 5.11012 9.81141 5.11012 10.1014 5.40012C10.3914 5.69012 10.3914 6.17012 10.1014 6.46012L4.56141 12.0001L10.1014 17.5401C10.3914 17.8301 10.3914 18.3101 10.1014 18.6001C9.96141 18.7501 9.76141 18.8201 9.57141 18.8201Z"
                  fill="#061B2E"
                />
                <path
                  d="M20.5014 12.7501H3.67141C3.26141 12.7501 2.92141 12.4101 2.92141 12.0001C2.92141 11.5901 3.26141 11.2501 3.67141 11.2501H20.5014C20.9114 11.2501 21.2514 11.5901 21.2514 12.0001C21.2514 12.4101 20.9114 12.7501 20.5014 12.7501Z"
                  fill="#061B2E"
                />
              </svg>

              <div>New Notification</div>
            </div>

            <div>
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  stroke="#EAEEF4"
                />
                <path
                  d="M21.6933 19.1923C21.5759 19.3097 21.4168 19.3756 21.2508 19.3756C21.0848 19.3756 20.9256 19.3097 20.8083 19.1923C20.6909 19.075 20.625 18.9158 20.625 18.7498C20.625 18.5838 20.6909 18.4247 20.8083 18.3073L25.8083 13.3073C25.8664 13.2492 25.9354 13.2031 26.0113 13.1717C26.0872 13.1402 26.1686 13.124 26.2508 13.124C26.333 13.124 26.4143 13.1402 26.4903 13.1717C26.5662 13.2031 26.6352 13.2492 26.6933 13.3073C26.7514 13.3654 26.7975 13.4344 26.8289 13.5103C26.8604 13.5863 26.8766 13.6676 26.8766 13.7498C26.8766 13.832 26.8604 13.9134 26.8289 13.9893C26.7975 14.0652 26.7514 14.1342 26.6933 14.1923L21.6933 19.1923ZM14.1933 26.6923C14.1352 26.7504 14.0662 26.7965 13.9903 26.828C13.9143 26.8594 13.833 26.8756 13.7508 26.8756C13.6686 26.8756 13.5872 26.8594 13.5113 26.828C13.4354 26.7965 13.3664 26.7504 13.3083 26.6923C13.2502 26.6342 13.2041 26.5652 13.1726 26.4893C13.1412 26.4134 13.125 26.332 13.125 26.2498C13.125 26.1676 13.1412 26.0863 13.1726 26.0103C13.2041 25.9344 13.2502 25.8654 13.3083 25.8073L18.3083 20.8073C18.4256 20.69 18.5848 20.624 18.7508 20.624C18.9168 20.624 19.0759 20.69 19.1933 20.8073C19.3106 20.9247 19.3766 21.0838 19.3766 21.2498C19.3766 21.4158 19.3106 21.575 19.1933 21.6923L14.1933 26.6923Z"
                  fill="black"
                />
                <path
                  d="M13.75 26.875C13.5842 26.875 13.4253 26.8092 13.3081 26.6919C13.1908 26.5747 13.125 26.4158 13.125 26.25C13.125 26.0842 13.1908 25.9253 13.3081 25.8081C13.4253 25.6908 13.5842 25.625 13.75 25.625H18.75C18.9158 25.625 19.0747 25.6908 19.1919 25.8081C19.3092 25.9253 19.375 26.0842 19.375 26.25C19.375 26.4158 19.3092 26.5747 19.1919 26.6919C19.0747 26.8092 18.9158 26.875 18.75 26.875H13.75Z"
                  fill="black"
                />
                <path
                  d="M14.375 26.2495C14.375 26.4153 14.3092 26.5742 14.1919 26.6915C14.0747 26.8087 13.9158 26.8745 13.75 26.8745C13.5842 26.8745 13.4253 26.8087 13.3081 26.6915C13.1908 26.5742 13.125 26.4153 13.125 26.2495V21.2495C13.125 21.0838 13.1908 20.9248 13.3081 20.8076C13.4253 20.6904 13.5842 20.6245 13.75 20.6245C13.9158 20.6245 14.0747 20.6904 14.1919 20.8076C14.3092 20.9248 14.375 21.0838 14.375 21.2495V26.2495ZM26.875 18.7495C26.875 18.9153 26.8092 19.0742 26.6919 19.1915C26.5747 19.3087 26.4158 19.3745 26.25 19.3745C26.0842 19.3745 25.9253 19.3087 25.8081 19.1915C25.6908 19.0742 25.625 18.9153 25.625 18.7495V13.7495C25.625 13.5838 25.6908 13.4248 25.8081 13.3076C25.9253 13.1904 26.0842 13.1245 26.25 13.1245C26.4158 13.1245 26.5747 13.1904 26.6919 13.3076C26.8092 13.4248 26.875 13.5838 26.875 13.7495V18.7495Z"
                  fill="black"
                />
                <path
                  d="M21.25 14.375C21.0842 14.375 20.9253 14.3092 20.8081 14.1919C20.6908 14.0747 20.625 13.9158 20.625 13.75C20.625 13.5842 20.6908 13.4253 20.8081 13.3081C20.9253 13.1908 21.0842 13.125 21.25 13.125H26.25C26.4158 13.125 26.5747 13.1908 26.6919 13.3081C26.8092 13.4253 26.875 13.5842 26.875 13.75C26.875 13.9158 26.8092 14.0747 26.6919 14.1919C26.5747 14.3092 26.4158 14.375 26.25 14.375H21.25Z"
                  fill="black"
                />
              </svg>

              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="pointer"
                onClick={() => setModalOpen3(false)}
              >
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  fill="white"
                />
                <rect
                  x="0.5"
                  y="0.5"
                  width="39"
                  height="39"
                  rx="19.5"
                  stroke="#EAEEF4"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.6233 20.6849L15.3536 24.9546L14.293 23.8939L18.5626 19.6243L14.293 15.3546L15.3536 14.2939L19.6233 18.5636L23.893 14.2939L24.9536 15.3546L20.684 19.6243L24.9536 23.8939L23.893 24.9546L19.6233 20.6849Z"
                  fill="#ED1651"
                />
              </svg>
            </div>
          </div>

          {stage === 1 && <form className="notification-center__modal__form">
            <div>
              <label
                htmlFor=""
                className="notification-center__modal__form__label"
              >
                Notification Type
              </label>

              <input
                type="text"
                className="notification-center__modal__form__input"
                placeholder="Write down department"
                required
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="notification-center__modal__form__label"
              >
                Title
              </label>

              <input
                type="text"
                className="notification-center__modal__form__input"
                placeholder="Write down department Code"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="notification-center__modal__form__label"
              >
                Message
              </label>
              <textarea
                className="notification-center__modal__form__input notification-center__modal__form__textarea"
                name=""
                id=""
                placeholder="Enter a description..."
              ></textarea>
            </div>
            <div>
              <label
                htmlFor=""
                className="notification-center__modal__form__label"
              >
                Choose Target Audience
              </label>
              <div className="notification-center__modal__form__input notification-center__modal__form__select">
                <div>
                  <div>All user</div>
                  <div>Admin</div>
                </div>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="#667085"
                    stroke-width="1.66667"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="departments__new-dept__form__label"
                >
                  Sub Department
                </label>

                <div className="departments__new-dept__form__options">
                  <div
                    className={
                      subDept === "Low" && "departments__new-dept__form__options__active"
                    }
                    onClick={() =>
                      subDept ? setSubDept("") : setSubDept("Low")
                    }
                  >
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="5"
                        cy="5.5"
                        r="4"
                        fill="rgba(18, 183, 106, 1)"
                      />
                    </svg>
                    Low
                  </div>

                  <div
                    className={
                      subDept === "Medium" &&
                      "departments__new-dept__form__options__active"
                    }
                    onClick={() =>
                      subDept === "Medium" ? setSubDept("") : setSubDept("Medium")
                    }
                  >
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="5"
                        cy="5.5"
                        r="4"
                        fill="rgba(255, 199, 0, 1)"
                      />
                    </svg>
                    Medium
                  </div>
                  <div
                    className={
                      subDept === "High" &&
                      "departments__new-dept__form__options__active"
                    }
                    onClick={() =>
                      subDept === "High" ? setSubDept("") : setSubDept("High")
                    }
                  >
                    <svg
                      width="10"
                      height="11"
                      viewBox="0 0 10 11"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="5" cy="5.5" r="4" fill="#DA1E28" />
                    </svg>
                    High
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="notification-center__modal__form__input-group">
                <div>
                  <label
                    htmlFor=""
                    className="notification-center__modal__form__label"
                  >
                    Time
                  </label>
                  <input
                    type="date"
                    className="notification-center__modal__form__input"
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="notification-center__modal__form__label"
                  >
                    Date
                  </label>
                  <input
                    type="date"
                    className="notification-center__modal__form__input"
                  />
                </div>
              </div>
            </div>

            <button
              className="notification-center__modal__form__button"
              onClick={() => setStage(2)}
              // type="submit"
            >
              {loading ? "Loading..." : "Next"}
            </button>
          </form>}

          {stage === 2 && <div className="notification-center__modal__review">
            <div className="notification-center__modal__review__title">
              Review
            </div>

            <div className="notification-center__modal__review__inner">
              <div className="notification-center__modal__review__inner__title-group">
                <div>
                  <div className="notification-center__modal__review__inner__title">
                    Notification Type:
                  </div>
                  <div className="notification-center__modal__review__inner__subtitle">
                    System alert
                  </div>
                </div>
                <div>
                  <div className="notification-center__modal__review__inner__title notification-center__modal__review__inner__title-right">
                    Title:
                  </div>
                  <div className="notification-center__modal__review__inner__subtitle">
                    Granted Access by <span>Mustapha maheed</span>
                  </div>
                </div>
              </div>

              <div className="notification-center__modal__review__inner__title">
                Message:
              </div>
              <div className="notification-center__modal__review__inner__subtitle">
                The prosecution submits that there is prima facie evidence to
                support the charges against the accused. The prosecution will
                rely on witness testimonies, forensic evidence, and CCTV footage
                obtained from the crime scene to establish the guilt of the
                accused beyond a reasonable doubt.{" "}
              </div>

              <div className="notification-center__modal__review__inner__title-group">
                <div>
                  <div className="notification-center__modal__review__inner__title">
                  Target Audience:
                  </div>
                  <div className="notification-center__modal__review__inner__subtitle">
                  All User
                  </div>
                </div>
                <div>
                  <div className="notification-center__modal__review__inner__title">
                  Priority:
                  </div>
                  <div className="notification-center__modal__review__inner__priority">
                  <svg width="9" height="8" viewBox="0 0 9 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="4.0625" cy="4" r="3" fill="#FF9B26"/>
</svg>

Medium
                  </div>
                </div>
              </div>
            </div>
            <button
              className="notification-center__modal__form__button"
              onClick={() => {
                setOpen(false);
                setSuccessOpen(true)
              }}
              // type="submit"
            >
              {loading ? "Loading..." : "Next"}
            </button>
          </div>}
        </div>
      )}

      <NotificationCreated open={successOpen} setOpen={setSuccessOpen} />
    </div>
  );
}
