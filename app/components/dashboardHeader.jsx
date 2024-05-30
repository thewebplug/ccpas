"use client";

import Image from "next/image";

export default function DashboardHeader() {
    return (
        <div className="dashboard-header">
        <div className="dashboard-header__logo">
          <div className="dashboard-header__logo__img">
            <Image
              alt=""
              src="/assets/logo.png"
              width={66.089}
              height={66.089}
            />
          </div>
          <div className="dashboard-header__logo__title-group">
            <h1 className="dashboard-header__logo__title-group__title">
              CCPPAS
            </h1>
            <h2 className="dashboard-header__logo__title-group__subtitle">
              Administered by Federal Ministry of Justice Department of Public
              Prosecution
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
          <h2>FMoJ-Dept of Public Prosecution-Abuja HQ</h2>
        </form>

        <div className="dashboard-header__account">
          <button className="dashboard-header__account__button"
          onClick={() => window.location.href = "/justice/dashboard/create-case"}
          >
            Create New Case file
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 6.625H1C0.658333 6.625 0.375 6.34167 0.375 6C0.375 5.65833 0.658333 5.375 1 5.375H11C11.3417 5.375 11.625 5.65833 11.625 6C11.625 6.34167 11.3417 6.625 11 6.625Z"
                fill="#ECECFE"
              />
              <path
                d="M6 11.625C5.65833 11.625 5.375 11.3417 5.375 11V1C5.375 0.658333 5.65833 0.375 6 0.375C6.34167 0.375 6.625 0.658333 6.625 1V11C6.625 11.3417 6.34167 11.625 6 11.625Z"
                fill="#ECECFE"
              />
            </svg>
          </button>
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
    )
}