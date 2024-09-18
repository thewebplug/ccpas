"use client";
import Image from "next/image";

export default function Home(params) {
  return (
    <main className="justice-home">
      <Image className="justice-home__logo" alt="" src="/assets/logo.png" width={110} height={110} />

      <h1 className="justice-home__title">
        Centralised Criminal Public Prosecution Administrative System CCPPAS
      </h1>
      <h2 className="justice-home__subtitle">
        {/* Administered by Federal Ministry of Justice Department of Public
        Prosecution */}
      </h2>
      <h3 className="justice-home__subsubtitle">Login as</h3>

      <div className="justice-home__cards">
        <div className="justice-home__cards__card"
        onClick={() =>  window.location.href = "/justice/login"}
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.816406"
              y="0.904297"
              width="32"
              height="32"
              rx="16"
              fill="#FFA24C"
            />
          </svg>
          <h4>Legal Personnel </h4>
        </div>
        <div className="justice-home__cards__card"
        onClick={() =>  window.location.href = "/justice/login"}
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.816406"
              y="0.904297"
              width="32"
              height="32"
              rx="16"
              fill="#FFA24C"
            />
          </svg>
          <h4>Law Enforcement Agent</h4>
        </div>
        <div className="justice-home__cards__card"
        onClick={() =>  window.location.href = "/justice/agencies"}
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.816406"
              y="0.904297"
              width="32"
              height="32"
              rx="16"
              fill="#FFA24C"
            />
          </svg>
          <h4>Other Authorized Personnel</h4>
        </div>
        {/* <div className="justice-home__cards__card"
        onClick={() =>  window.location.href = "/justice/request"}
        >
          <svg
            width="33"
            height="33"
            viewBox="0 0 33 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.816406"
              y="0.904297"
              width="32"
              height="32"
              rx="16"
              fill="#FFA24C"
            />
          </svg>
          <h4>Background Check Center (BCC)</h4>
        </div> */}
      </div>
    </main>
  );
}
