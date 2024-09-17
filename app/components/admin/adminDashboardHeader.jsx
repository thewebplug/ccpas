"use client";

import Image from "next/image";
import Menu from "../menu";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AdminHeader() {
  const dispatch = useDispatch();
  const [menuActive, setMenuActive] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const mobileMenu = useSelector((state) => state.mobileMenu);

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

          {/* {mobileMenuActive && (
            <div
              className={`mobile-sidebar ${mobileMenuActive ? "active" : ""}`}
            >
              <Sidebar />
            </div>
          )} */}
        </div>

        <div className="dashboard-header__logo__img">
          <Image alt="" src="/assets/efcc-logo.png" width={66.089} height={66.089} />
        </div>
        <div className="dashboard-header__logo__title-group">
          <h1 className="dashboard-header__logo__title-group__title">EFCC</h1>
          {/* <h2 className="dashboard-header__logo__title-group__subtitle">
            Administered by Federal Ministry of Justice Department of Public
            Prosecution
          </h2> */}
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
        <h2>Economic and Financial Crimes Commission-Abuja HQ</h2>
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
              d="M14.9336 6.81641H9.74195H5.06695C4.26695 6.81641 3.86695 7.78307 4.43361 8.34974L8.75028 12.6664C9.44195 13.3581 10.5669 13.3581 11.2586 12.6664L12.9003 11.0247L15.5753 8.34974C16.1336 7.78307 15.7336 6.81641 14.9336 6.81641Z"
              fill="#ECECFE"
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

        <Image
          alt=""
          src="/assets/logo.png"
          width={50}
          height={50}
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
}
