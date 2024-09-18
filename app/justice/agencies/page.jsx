"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home(params) {
  const [agency, setAgency] = useState("");


  const handleAgencySelect = async () => {
window.location.href = "/justice/login"
  }
  return (
    <main className="justice-home">
      <Image
        className="justice-home__logo"
        alt=""
        src="/assets/logo.png"
        width={110}
        height={110}
      />

      <h1 className="justice-home__title">Centralised Criminal Public Prosecution Administrative System CCPPAS
      </h1>
      <h2 className="justice-home__subtitle">
        {/* Welcome to Federal Ministry of Justice Crime Database */}
      </h2>
      <div className="justice-home__agency-grid">
      <Image 
      className={agency === "customs" && "justice-home__agency-grid__img"}
      onClick={() => setAgency("customs")}
      src="/assets/images (5) 1.png" width={127.846} height={127.846} />

        <Image
          className={agency === "efcc" && "justice-home__agency-grid__img"}
          onClick={() => setAgency("efcc")}
          src="/assets/EFCC 1.png"
          width={127.846}
          height={127.846}
        />
        <Image
          className={agency === "immigration" && "justice-home__agency-grid__img"}
          onClick={() => setAgency("immigration")}
          src="/assets/images (4) 1.png"
          width={127.846}
          height={127.846}
        />
        <Image
          className={agency === "stateSecurityService" && "justice-home__agency-grid__img"}
          onClick={() => setAgency("stateSecurityService")}
          src="/assets/Logo 1.png"
          width={127.846}
          height={127.846}
        />
        <Image
          className={agency === "police" && "justice-home__agency-grid__img"}
          onClick={() => setAgency("police")}
          src="/assets/Nigerian-Police-logo 1.png"
          width={127.846}
          height={127.846}
        />
        <Image
          className={agency === "adviser" && "justice-home__agency-grid__img"}
          onClick={() => setAgency("adviser")}
          src="/assets/images 1.png"
          width={127.846}
          height={127.846}
        />
      </div>

      <button className="justice-home__button"
      
      onClick={handleAgencySelect}>Continue</button>
    </main>
  );
}
