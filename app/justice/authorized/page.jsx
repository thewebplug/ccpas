"use client"
import Image from "next/image";
import { useEffect } from "react";

export default function Auth() {

  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.href = "/justice/login"
  //   }, 2000);
  // }, [])

  return (
    <main className="auth">
      <div className="auth__header">
        <Image alt="" src="/assets/logo.png" width={66.089} height={66.089} />
        <div className="auth__header__inner">
          <div className="auth__header__inner__title">
            Centralised Criminal Public Prosecution Administrative System CCPPAS
          </div>
          <div className="auth__header__inner__subtitle">
            Administered by Federal Ministry of Justice Department of Public
            Prosecution
          </div>
        </div>
      </div>

      <div className="auth__auth">
      <svg width="137" height="137" viewBox="0 0 137 137" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="68.5" cy="68.5" r="68.5" fill="#009B07"/>
<circle cx="69" cy="66" r="66" fill="#09660D"/>
<path d="M96 48.5L61 83.5L43.5 66" stroke="white" stroke-width="8.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


<h1 className="auth__unauth__title">Request has been filed</h1>
<h1 className="auth__unauth__subtitle">Request ID: <span>876545678</span></h1>
      </div>
    </main>
  );
}
