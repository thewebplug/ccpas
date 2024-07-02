"use client";

import { useDispatch } from "react-redux";

export default function DashboardSideBar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    document.cookie = "auth_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
    localStorage.removeItem("token");
    window.location.href="/justice/login"
    window.scrollTo(0, 0);
  };

    return (
      <div className="dashboard-sidebar">
    
      <div className="dashboard-sidebar__item"
      onClick={() => window.location.href = "/justice/dashboard/cases"}
      >
      <div>
      <svg style={{width: 24, height: 24}} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#7E9EA2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7" fill="00000" fill-opacity=".16"></path><path d="M21 7v11.6c0 1.33-1.07 2.4-2.4 2.4H5.4C4.07 21 3 19.93 3 18.6V7" stroke="00000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path><path d="M21.4 3H2.6A1.6 1.6 0 0 0 1 4.6v.8A1.6 1.6 0 0 0 2.6 7h18.8A1.6 1.6 0 0 0 23 5.4v-.8A1.6 1.6 0 0 0 21.4 3Z" fill="" stroke="00000" stroke-width="1.5" stroke-miterlimit="10"></path><path d="M8 11h8" stroke="00000" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path></g></svg>

      </div>
      <div className="dashboard-sidebar__item__title">Cases</div>

      </div>
      <div className="dashboard-sidebar__item"
      onClick={() => window.location.href = "/justice/dashboard/create-case"}
      >
        <div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" fill="#7E9EA2"/>
<path d="M16 12.75H8C7.59 12.75 7.25 12.41 7.25 12C7.25 11.59 7.59 11.25 8 11.25H16C16.41 11.25 16.75 11.59 16.75 12C16.75 12.41 16.41 12.75 16 12.75Z" fill="#7E9EA2"/>
<path d="M12 16.75C11.59 16.75 11.25 16.41 11.25 16V8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V16C12.75 16.41 12.41 16.75 12 16.75Z" fill="#7E9EA2"/>
</svg>
        </div>

        <div className="dashboard-sidebar__item__title">Create case</div>


      </div>
      <div className="dashboard-sidebar__item"
      // onClick={() => window.location.href = "/justice/dashboard/create-case"}
      >
     <div>
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21 6.72998C20.98 6.72998 20.95 6.72998 20.92 6.72998C15.63 6.19998 10.35 5.99998 5.11998 6.52998L3.07998 6.72998C2.65998 6.76998 2.28998 6.46998 2.24998 6.04998C2.20998 5.62998 2.50998 5.26998 2.91998 5.22998L4.95998 5.02998C10.28 4.48998 15.67 4.69998 21.07 5.22998C21.48 5.26998 21.78 5.63998 21.74 6.04998C21.71 6.43998 21.38 6.72998 21 6.72998Z" fill="#7E9EA2"/>
<path d="M8.50001 5.72C8.46001 5.72 8.42001 5.72 8.37001 5.71C7.97001 5.64 7.69001 5.25 7.76001 4.85L7.98001 3.54C8.14001 2.58 8.36001 1.25 10.69 1.25H13.31C15.65 1.25 15.87 2.63 16.02 3.55L16.24 4.85C16.31 5.26 16.03 5.65 15.63 5.71C15.22 5.78 14.83 5.5 14.77 5.1L14.55 3.8C14.41 2.93 14.38 2.76 13.32 2.76H10.7C9.64001 2.76 9.62001 2.9 9.47001 3.79L9.24001 5.09C9.18001 5.46 8.86001 5.72 8.50001 5.72Z" fill="#7E9EA2"/>
<path d="M15.21 22.7501H8.79002C5.30002 22.7501 5.16002 20.8201 5.05002 19.2601L4.40002 9.19007C4.37002 8.78007 4.69002 8.42008 5.10002 8.39008C5.52002 8.37008 5.87002 8.68008 5.90002 9.09008L6.55002 19.1601C6.66002 20.6801 6.70002 21.2501 8.79002 21.2501H15.21C17.31 21.2501 17.35 20.6801 17.45 19.1601L18.1 9.09008C18.13 8.68008 18.49 8.37008 18.9 8.39008C19.31 8.42008 19.63 8.77007 19.6 9.19007L18.95 19.2601C18.84 20.8201 18.7 22.7501 15.21 22.7501Z" fill="#7E9EA2"/>
<path d="M13.66 17.25H10.33C9.92002 17.25 9.58002 16.91 9.58002 16.5C9.58002 16.09 9.92002 15.75 10.33 15.75H13.66C14.07 15.75 14.41 16.09 14.41 16.5C14.41 16.91 14.07 17.25 13.66 17.25Z" fill="#7E9EA2"/>
<path d="M14.5 13.25H9.5C9.09 13.25 8.75 12.91 8.75 12.5C8.75 12.09 9.09 11.75 9.5 11.75H14.5C14.91 11.75 15.25 12.09 15.25 12.5C15.25 12.91 14.91 13.25 14.5 13.25Z" fill="#7E9EA2"/>
</svg>
     </div>

     <div className="dashboard-sidebar__item__title"></div>




      </div>
      <div className="dashboard-sidebar__item"
      onClick={handleLogout}
      >
     <div>
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14 20H6C4.89543 20 4 19.1046 4 18L4 6C4 4.89543 4.89543 4 6 4H14M10 12H21M21 12L18 15M21 12L18 9" stroke="#7E9EA2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
     </div>

     <div className="dashboard-sidebar__item__title"
     
     >Log out</div>




      </div>
     
    </div>
    )
}