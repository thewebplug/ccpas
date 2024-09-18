"use client";

import Image from "next/image";
import Menu from "./menu";
import { useEffect, useState } from "react";
import Notifications from "./notifications";
import Sidebar from "./dashboardSideBar";
import { useDispatch, useSelector } from "react-redux";

export default function DashboardHeader() {
  const dispatch = useDispatch();
  const mobileMenu = useSelector((state) => state.mobileMenu);
  const [open, setOpen] = useState(false)
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
console.log('mobileMenu', mobileMenu);

  }, [mobileMenu])
  const handleSidebarOpen = () => {
    if(mobileMenu) {
      dispatch({
        type: "SET_MENU_VISIBLE",
        payload: false
      });
    }else {
      dispatch({
        type: "SET_MENU_VISIBLE",
        payload: true
      });
    }
  }

  return (
    <div className="dashboard-header">
      <div className="dashboard-header__logo">
        <div className="dashboard-header__logo__mobile-menu">
          <button
            className="hamburger-menu"
            onClick={handleSidebarOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6H21V8H3V6ZM3 12H21V14H3V12ZM3 18H21V20H3V18Z"
                fill="black"
              />
            </svg>
          </button>

          {/* <div className="mobile-sidebar">
              <Sidebar />
            </div> */}

         
        </div>

        <div className="dashboard-header__logo__img">
          <Image
            alt=""
            src="/assets/logo.png"
            width={66.089}
            height={66.089}
            style={{ borderRadius: "50%" }}
            className="small-img"
          />
        </div>
        <div className="dashboard-header__logo__title-group">
          <h1 className="dashboard-header__logo__title-group__title">CCPPAS</h1>
          <h2 className="dashboard-header__logo__title-group__subtitle">
            Administered by Agency
          </h2>
        </div>
      </div>

      <form className="dashboard-header__board">
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
            d="M10 3.4556L4.16667 6.73727V6.8581C4.16667 10.8081 6.305 14.4656 9.74833 16.4031L10 16.5448L10.2517 16.4031C13.695 14.4656 15.8333 10.8081 15.8333 6.8581V6.73727L10 3.4556ZM10 18.2089C9.7175 18.2089 9.435 18.1389 9.18417 17.9973L8.93167 17.8548C4.96417 15.6239 2.5 11.4098 2.5 6.8581V6.73727C2.5 6.1381 2.825 5.58143 3.34833 5.2856L9.18333 2.00393C9.6875 1.7206 10.3133 1.71977 10.8158 2.0031L16.65 5.28477C17.175 5.58143 17.5 6.1381 17.5 6.73727V6.8581C17.5 11.4098 15.0358 15.6239 11.0683 17.8548L10.8167 17.9964C10.565 18.1381 10.2825 18.2089 10 18.2089Z"
            fill="black"
          />
        </svg>
        <h2>Agency HQ</h2>
      </form>

      <div className="dashboard-header__account">
        <button
          className="dashboard-header__account__button"
          onClick={() => setMenuActive(!menuActive)}
        >
          Case File
          <svg
            width="20"
            height="20"
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
        </button>

        {menuActive && (
          <Menu
            items={[
              { name: "Edit Case file" },
              {
                name: "Create New Case file",
                function: () =>
                  (window.location.href = "/justice/dashboard/create-case"),
              },
              {
                name: "Upload existing case file",
                function: () =>
                  (window.location.href = "/justice/dashboard/create-case"),
              },
            ]}
          />
        )}
        <div className="dashboard-header__account__search">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.58342 17.1243C3.87508 17.1243 0.041748 13.291 0.041748 8.58268C0.041748 3.87435 3.87508 0.0410156 8.58342 0.0410156C13.2917 0.0410156 17.1251 3.87435 17.1251 8.58268C17.1251 13.291 13.2917 17.1243 8.58342 17.1243ZM8.58342 1.29102C4.55841 1.29102 1.29175 4.56602 1.29175 8.58268C1.29175 12.5993 4.55841 15.8743 8.58342 15.8743C12.6084 15.8743 15.8751 12.5993 15.8751 8.58268C15.8751 4.56602 12.6084 1.29102 8.58342 1.29102Z"
              fill="#7E92A2"
            />
            <path
              d="M17.3334 17.9577C17.1751 17.9577 17.0167 17.8994 16.8917 17.7744L15.2251 16.1077C14.9834 15.866 14.9834 15.466 15.2251 15.2243C15.4667 14.9827 15.8667 14.9827 16.1084 15.2243L17.7751 16.891C18.0168 17.1327 18.0168 17.5327 17.7751 17.7744C17.6501 17.8994 17.4917 17.9577 17.3334 17.9577Z"
              fill="#7E92A2"
            />
          </svg>
        </div>

        <div className="dashboard-header__account__notifications" onClick={() => setOpen(true)}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.04173 19.0069H14.9583C14.7196 20.425 13.486 21.5054 12 21.5054C10.514 21.5054 9.28037 20.425 9.04173 19.0069ZM12 2.00781C16.1421 2.00781 19.5 5.36567 19.5 9.50781V13.5063L20.9183 16.6664C20.9732 16.7887 21.0016 16.9213 21.0016 17.0554C21.0016 17.5801 20.5763 18.0054 20.0516 18.0054H3.95219C3.8184 18.0054 3.68613 17.9772 3.56402 17.9225C3.08515 17.7081 2.87073 17.1461 3.08511 16.6672L4.50001 13.5067L4.50011 9.49489L4.50453 9.24497C4.6436 5.21425 7.95588 2.00781 12 2.00781Z"
              fill="black"
            />
            <circle cx="17.5" cy="5.5" r="4" fill="#BA0000" stroke="#E9E9E9" />
          </svg>
        </div>

        <Image
          className="pointer"
          onClick={() => (window.location.href = "/justice/dashboard/profile")}
          alt=""
          src="/assets/Avatar.png"
          width={50}
          height={50}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <Notifications open={open} setOpen={setOpen} />
    </div>
  );
}