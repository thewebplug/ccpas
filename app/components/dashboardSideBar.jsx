"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Sidebar() {
  const pathname = usePathname();
  console.log('pathname', pathname.split("/")?.length);
  const dispatch = useDispatch();
  const [dropdownActive, setDropdownActive] = useState(false)

  const handleLogout = () => {
    document.cookie =
      "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
    localStorage.removeItem("token");
    window.location.href = "/justice/login";
    window.scrollTo(0, 0);
  };


  return (
    <div className="adminDashboard-sidebar">
      <div
        className={
          pathname?.includes("dashboard") && pathname?.split("/")?.length < 4
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/justice/dashboard")}
      >
        <div>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.475 10.4577H12.1083C10.4333 10.4577 9.625 9.68268 9.625 8.08268V2.41602C9.625 0.816015 10.4417 0.0410156 12.1083 0.0410156H15.475C17.15 0.0410156 17.9583 0.816015 17.9583 2.41602V8.08268C17.9583 9.68268 17.1417 10.4577 15.475 10.4577ZM12.1083 1.29102C11.05 1.29102 10.875 1.57435 10.875 2.41602V8.08268C10.875 8.92435 11.05 9.20768 12.1083 9.20768H15.475C16.5333 9.20768 16.7083 8.92435 16.7083 8.08268V2.41602C16.7083 1.57435 16.5333 1.29102 15.475 1.29102H12.1083Z"
              fill="#7E92A2"
            />
            <path
              d="M15.475 17.457H12.1083C11.3384 17.457 10.8662 17.2781 10.5842 17.0083C10.3066 16.7426 10.125 16.3036 10.125 15.582V14.082C10.125 13.3618 10.308 12.9225 10.5869 12.6562C10.8704 12.3856 11.3432 12.207 12.1083 12.207H15.475C16.2449 12.207 16.7171 12.3859 16.9991 12.6558C17.2768 12.9215 17.4583 13.3605 17.4583 14.082V15.582C17.4583 16.3023 17.2754 16.7416 16.9964 17.0079C16.713 17.2784 16.2401 17.457 15.475 17.457ZM12.1083 12.457C11.5806 12.457 11.0756 12.516 10.7412 12.8504C10.4031 13.1885 10.375 13.675 10.375 14.082V15.582C10.375 15.9891 10.4031 16.4756 10.7412 16.8137C11.0756 17.1481 11.5806 17.207 12.1083 17.207H15.475C16.0027 17.207 16.5077 17.1481 16.8421 16.8137C17.1802 16.4756 17.2083 15.9891 17.2083 15.582V14.082C17.2083 13.675 17.1802 13.1885 16.8421 12.8504C16.5077 12.516 16.0027 12.457 15.475 12.457H12.1083Z"
              stroke="#7E92A2"
            />
            <path
              d="M5.8915 17.9577H2.52484C0.849837 17.9577 0.0415039 17.1827 0.0415039 15.5827V9.91602C0.0415039 8.31602 0.858171 7.54102 2.52484 7.54102H5.8915C7.5665 7.54102 8.37484 8.31602 8.37484 9.91602V15.5827C8.37484 17.1827 7.55817 17.9577 5.8915 17.9577ZM2.52484 8.79102C1.4665 8.79102 1.2915 9.07435 1.2915 9.91602V15.5827C1.2915 16.4243 1.4665 16.7077 2.52484 16.7077H5.8915C6.94984 16.7077 7.12484 16.4243 7.12484 15.5827V9.91602C7.12484 9.07435 6.94984 8.79102 5.8915 8.79102H2.52484Z"
              fill="#7E92A2"
            />
            <path
              d="M5.8915 6.29102H2.52484C0.849837 6.29102 0.0415039 5.51602 0.0415039 3.91602V2.41602C0.0415039 0.816016 0.858171 0.0410156 2.52484 0.0410156H5.8915C7.5665 0.0410156 8.37484 0.816016 8.37484 2.41602V3.91602C8.37484 5.51602 7.55817 6.29102 5.8915 6.29102ZM2.52484 1.29102C1.4665 1.29102 1.2915 1.57435 1.2915 2.41602V3.91602C1.2915 4.75768 1.4665 5.04102 2.52484 5.04102H5.8915C6.94984 5.04102 7.12484 4.75768 7.12484 3.91602V2.41602C7.12484 1.57435 6.94984 1.29102 5.8915 1.29102H2.52484Z"
              fill="#7E92A2"
            />
          </svg>
        </div>
        <div className="adminDashboard-sidebar__item__title">Dashboard</div>
      </div>
      <div className="adminDashboard-sidebar__item-container">
        <div
          className={
            pathname?.includes("cases")
              ? "adminDashboard-sidebar__item-container__item adminDashboard-sidebar__item-container__item-active"
              : "adminDashboard-sidebar__item-container__item"
          }
          onClick={() => setDropdownActive(!dropdownActive)}
        >
          <div>
            <div>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.3697 4.89012L13.5097 2.28012C12.6497 1.90012 11.3497 1.90012 10.4897 2.28012L4.62969 4.89012C3.14969 5.55012 2.92969 6.45012 2.92969 6.93012C2.92969 7.41012 3.14969 8.31012 4.62969 8.97012L10.4897 11.5801C10.9197 11.7701 11.4597 11.8701 11.9997 11.8701C12.5397 11.8701 13.0797 11.7701 13.5097 11.5801L19.3697 8.97012C20.8497 8.31012 21.0697 7.41012 21.0697 6.93012C21.0697 6.45012 20.8597 5.55012 19.3697 4.89012Z"
                  fill="#94A3B8"
                />
                <path
                  d="M12.0003 17.04C11.6203 17.04 11.2403 16.96 10.8903 16.81L4.15031 13.81C3.12031 13.35 2.32031 12.12 2.32031 10.99C2.32031 10.58 2.65031 10.25 3.06031 10.25C3.47031 10.25 3.80031 10.58 3.80031 10.99C3.80031 11.53 4.25031 12.23 4.75031 12.45L11.4903 15.45C11.8103 15.59 12.1803 15.59 12.5003 15.45L19.2403 12.45C19.7403 12.23 20.1903 11.54 20.1903 10.99C20.1903 10.58 20.5203 10.25 20.9303 10.25C21.3403 10.25 21.6703 10.58 21.6703 10.99C21.6703 12.11 20.8703 13.35 19.8403 13.81L13.1003 16.81C12.7603 16.96 12.3803 17.04 12.0003 17.04Z"
                  fill="#94A3B8"
                />
                <path
                  d="M12.0003 22C11.6203 22 11.2403 21.92 10.8903 21.77L4.15031 18.77C3.04031 18.28 2.32031 17.17 2.32031 15.95C2.32031 15.54 2.65031 15.21 3.06031 15.21C3.47031 15.21 3.80031 15.54 3.80031 15.95C3.80031 16.58 4.17031 17.15 4.75031 17.41L11.4903 20.41C11.8103 20.55 12.1803 20.55 12.5003 20.41L19.2403 17.41C19.8103 17.16 20.1903 16.58 20.1903 15.95C20.1903 15.54 20.5203 15.21 20.9303 15.21C21.3403 15.21 21.6703 15.54 21.6703 15.95C21.6703 17.17 20.9503 18.27 19.8403 18.77L13.1003 21.77C12.7603 21.92 12.3803 22 12.0003 22Z"
                  fill="#94A3B8"
                />
              </svg>
            </div>
            <div className="adminDashboard-sidebar__item__title">Cases</div>
          </div>
          {dropdownActive ? 
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.34876 3.42336L10.3438 7.4184C10.5365 7.61107 10.5365 7.92345 10.3438 8.11611L9.87782 8.58206C9.68547 8.77441 9.37373 8.77478 9.18093 8.58288L5.9999 5.41675L2.81888 8.58288C2.62608 8.77478 2.31434 8.77441 2.12199 8.58206L1.65604 8.11611C1.46336 7.92343 1.46336 7.61105 1.65604 7.4184L5.65103 3.42336C5.84371 3.23071 6.15609 3.23071 6.34876 3.42336Z" fill="#009B07"/>
          </svg>
          
          : <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 7.5L10 12.5L15 7.5"
              stroke="#94A3B8"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>}
        </div>

       
        <div className={dropdownActive ? "adminDashboard-sidebar__item-container__sub-items" : "adminDashboard-sidebar__item-container__sub-items-inactive"}>
          <div
            className={
              pathname?.includes("create-case")
                && "adminDashboard-sidebar__item-container__sub-items__active"
                
            }
            onClick={() =>
              (window.location.href = "/justice/dashboard/create-case")
            }
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>New Cases</div>
          </div>
          <div
            className={
              pathname?.includes("cases") && pathname.split("/")?.length < 5
                && "adminDashboard-sidebar__item-container__sub-items__active"
                
            }
            onClick={() => window.location.href = "/justice/dashboard/cases"}
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Case list</div>
          </div>
          <div
            className={
              pathname?.includes("favourite")
                && "adminDashboard-sidebar__item-container__sub-items__active"
                
            }
            onClick={() => window.location.href = "/justice/dashboard/cases/favourite-cases"}
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Favourites</div>
          </div>
          <div
            className={
              pathname?.includes("transferred")
                && "adminDashboard-sidebar__item-container__sub-items__active"
                
            }
            onClick={() => window.location.href = "/justice/dashboard/cases/transferred-cases"}
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Transferred Case</div>
          </div>
          <div
            className={
              pathname?.includes("deactivated")
                && "adminDashboard-sidebar__item-container__sub-items__active"
                
            }
            onClick={() => window.location.href = "/justice/dashboard/cases/deactivated-cases"}
          >
            <svg
              width="13"
              height="8"
              viewBox="0 0 13 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask id="path-1-inside-1_58_45759" fill="white">
                <path d="M0 0H13V8H8C3.58172 8 0 4.41828 0 0Z" />
              </mask>
              <path
                d="M0 0H13H0ZM13 10H8C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6H13V10ZM8 10C2.47715 10 -2 5.52285 -2 0H2C2 3.31371 4.68629 6 8 6V10ZM13 0V8V0Z"
                fill="#EBEBEB"
                mask="url(#path-1-inside-1_58_45759)"
              />
            </svg>

            <div>Deactivated Case</div>
          </div>
        </div>
      </div>
      <div
        className="adminDashboard-sidebar__item"
        // onClick={() => window.location.href = "/justice/dashboard/create-case"}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.9994 19.2601H10.9294C10.4794 19.2601 10.1094 18.8901 10.1094 18.4401C10.1094 17.9901 10.4794 17.6201 10.9294 17.6201H19.9994C20.4494 17.6201 20.8194 17.9901 20.8194 18.4401C20.8194 18.9001 20.4494 19.2601 19.9994 19.2601Z"
              fill="#94A3B8"
            />
            <path
              d="M19.9994 12.9701H10.9294C10.4794 12.9701 10.1094 12.6001 10.1094 12.1501C10.1094 11.7001 10.4794 11.3301 10.9294 11.3301H19.9994C20.4494 11.3301 20.8194 11.7001 20.8194 12.1501C20.8194 12.6001 20.4494 12.9701 19.9994 12.9701Z"
              fill="#94A3B8"
            />
            <path
              d="M19.9994 6.66979H10.9294C10.4794 6.66979 10.1094 6.29978 10.1094 5.84978C10.1094 5.39978 10.4794 5.02979 10.9294 5.02979H19.9994C20.4494 5.02979 20.8194 5.39978 20.8194 5.84978C20.8194 6.29978 20.4494 6.66979 19.9994 6.66979Z"
              fill="#94A3B8"
            />
            <path
              d="M4.90969 8.02992C4.68969 8.02992 4.47969 7.93992 4.32969 7.78992L3.41969 6.87992C3.09969 6.55992 3.09969 6.03992 3.41969 5.71992C3.73969 5.39992 4.25969 5.39992 4.57969 5.71992L4.90969 6.04992L7.04969 3.90992C7.36969 3.58992 7.88969 3.58992 8.20969 3.90992C8.52969 4.22992 8.52969 4.74992 8.20969 5.06992L5.48969 7.78992C5.32969 7.93992 5.12969 8.02992 4.90969 8.02992Z"
              fill="#94A3B8"
            />
            <path
              d="M4.90969 14.3302C4.69969 14.3302 4.48969 14.2502 4.32969 14.0902L3.41969 13.1802C3.09969 12.8602 3.09969 12.3402 3.41969 12.0202C3.73969 11.7002 4.25969 11.7002 4.57969 12.0202L4.90969 12.3502L7.04969 10.2102C7.36969 9.89021 7.88969 9.89021 8.20969 10.2102C8.52969 10.5302 8.52969 11.0502 8.20969 11.3702L5.48969 14.0902C5.32969 14.2502 5.11969 14.3302 4.90969 14.3302Z"
              fill="#94A3B8"
            />
            <path
              d="M4.90969 20.3302C4.69969 20.3302 4.48969 20.2502 4.32969 20.0902L3.41969 19.1802C3.09969 18.8602 3.09969 18.3402 3.41969 18.0202C3.73969 17.7002 4.25969 17.7002 4.57969 18.0202L4.90969 18.3502L7.04969 16.2102C7.36969 15.8902 7.88969 15.8902 8.20969 16.2102C8.52969 16.5302 8.52969 17.0502 8.20969 17.3702L5.48969 20.0902C5.32969 20.2502 5.11969 20.3302 4.90969 20.3302Z"
              fill="#94A3B8"
            />
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">Task</div>
      </div>
      <div
       className={
        pathname?.includes("email")
          ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
          : "adminDashboard-sidebar__item"
      }
        onClick={() => window.location.href = "/justice/dashboard/email"}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
              fill="#94A3B8"
            />
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">Email</div>
      </div>
      <div
        className={
          pathname?.includes("chat")
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/justice/dashboard/chat")}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 2H7C4.24 2 2 4.23 2 6.98V12.96V13.96C2 16.71 4.24 18.94 7 18.94H8.5C8.77 18.94 9.13 19.12 9.3 19.34L10.8 21.33C11.46 22.21 12.54 22.21 13.2 21.33L14.7 19.34C14.89 19.09 15.19 18.94 15.5 18.94H17C19.76 18.94 22 16.71 22 13.96V6.98C22 4.23 19.76 2 17 2ZM13 13.75H7C6.59 13.75 6.25 13.41 6.25 13C6.25 12.59 6.59 12.25 7 12.25H13C13.41 12.25 13.75 12.59 13.75 13C13.75 13.41 13.41 13.75 13 13.75ZM17 8.75H7C6.59 8.75 6.25 8.41 6.25 8C6.25 7.59 6.59 7.25 7 7.25H17C17.41 7.25 17.75 7.59 17.75 8C17.75 8.41 17.41 8.75 17 8.75Z"
              fill="#94A3B8"
            />
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">Message</div>
      </div>
      <div
        className={
          pathname?.includes("finance")
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/justice/dashboard/finance")}
      >
        <div>
        <svg fill="#94A3B8" width="24"
            height="24"
             viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs></defs><title>finance</title><rect x="2" y="28" width="28" height="2"></rect><path d="M27,11a1,1,0,0,0,1-1V7a1,1,0,0,0-.66-.94l-11-4a1,1,0,0,0-.68,0l-11,4A1,1,0,0,0,4,7v3a1,1,0,0,0,1,1H6V24H4v2H28V24H26V11ZM6,7.7,16,4.06,26,7.7V9H6ZM18,24H14V11h4ZM8,11h4V24H8ZM24,24H20V11h4Z" transform="translate(0 0)"></path><rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" class="cls-1" style={{fill: "none"}} width="32" height="32"></rect></g></svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">Finance</div>
      </div>
      <div
        className={
          pathname?.includes("admin")
            ? "adminDashboard-sidebar__item adminDashboard-sidebar__item-active"
            : "adminDashboard-sidebar__item"
        }
        onClick={() => (window.location.href = "/justice/admin")}
      >
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.2995 7.58018H15.7195C15.3295 7.58018 15.0195 7.27018 15.0195 6.88018C15.0195 6.49018 15.3295 6.18018 15.7195 6.18018H21.2995C21.6895 6.18018 21.9995 6.49018 21.9995 6.88018C21.9995 7.27018 21.6895 7.58018 21.2995 7.58018Z"
              fill="#94A3B8"
            />
            <path
              d="M6.42 7.58018H2.7C2.31 7.58018 2 7.27018 2 6.88018C2 6.49018 2.31 6.18018 2.7 6.18018H6.42C6.81 6.18018 7.12 6.49018 7.12 6.88018C7.12 7.27018 6.8 7.58018 6.42 7.58018Z"
              fill="#94A3B8"
            />
            <path
              d="M10.1414 10.8302C12.3229 10.8302 14.0914 9.0617 14.0914 6.88018C14.0914 4.69865 12.3229 2.93018 10.1414 2.93018C7.95988 2.93018 6.19141 4.69865 6.19141 6.88018C6.19141 9.0617 7.95988 10.8302 10.1414 10.8302Z"
              fill="#94A3B8"
            />
            <path
              d="M21.2989 17.8102H17.5789C17.1889 17.8102 16.8789 17.5002 16.8789 17.1102C16.8789 16.7202 17.1889 16.4102 17.5789 16.4102H21.2989C21.6889 16.4102 21.9989 16.7202 21.9989 17.1102C21.9989 17.5002 21.6889 17.8102 21.2989 17.8102Z"
              fill="#94A3B8"
            />
            <path
              d="M8.28 17.8102H2.7C2.31 17.8102 2 17.5002 2 17.1102C2 16.7202 2.31 16.4102 2.7 16.4102H8.28C8.67 16.4102 8.98 16.7202 8.98 17.1102C8.98 17.5002 8.66 17.8102 8.28 17.8102Z"
              fill="#94A3B8"
            />
            <path
              d="M13.8602 21.0699C16.0417 21.0699 17.8102 19.3014 17.8102 17.1199C17.8102 14.9384 16.0417 13.1699 13.8602 13.1699C11.6786 13.1699 9.91016 14.9384 9.91016 17.1199C9.91016 19.3014 11.6786 21.0699 13.8602 21.0699Z"
              fill="#94A3B8"
            />
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">
          Super Admin Section
        </div>
      </div>
      <div className="adminDashboard-sidebar__item" onClick={handleLogout}>
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M14 20H6C4.89543 20 4 19.1046 4 18L4 6C4 4.89543 4.89543 4 6 4H14M10 12H21M21 12L18 15M21 12L18 9"
                stroke="#7E9EA2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>{" "}
            </g>
          </svg>
        </div>

        <div className="adminDashboard-sidebar__item__title">Log out</div>
      </div>
    </div>
  );
}
