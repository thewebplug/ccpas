"use client";

import Image from "next/image";

export default function Auth() {

  const handleLogin = (e) => {
    e.preventDefault();
    window.location.href = "/justice/dashboard";
  }

  return (
    <main className="auth">
      <div className="auth__header">
        <Image
          alt=""
          src="/assets/logo.png"
          width={66.089}
          height={66.089}
        />
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

      <h1 className="auth__title">
      Welcome to Federal Ministry of Justice 
Department of Public Prosecution Portal 
      </h1>

      <form className="auth__form" onSubmit={handleLogin}>
        <h2 className="auth__form__title">Login as</h2>
        <h3 className="auth__form__subtitle">Public Prosecutor</h3>
        {/* <h4 className="auth__form__error">Incorrect information you have 1 more try left</h4> */}
        <label htmlFor="" className="auth__form__label">FMoJ ID*</label>
        <input type="text" className="auth__form__input" placeholder="Enter your ID" required />
        <label htmlFor="" className="auth__form__label">Password*</label>
        <input type="password" className="auth__form__input" placeholder="Enter password" required />

        <h4 className="auth__form__caution">
        Must be at least 8 characters.
        </h4>

        
        <button className="auth__form__button" type="submit">Login</button>

        <h5 className="auth__form__request pointer"
        onClick={() => window.location.href = "/justice/request"}
        >
        Request Access
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0248 15.6829C11.8664 15.6829 11.7081 15.6246 11.5831 15.4996C11.3414 15.2579 11.3414 14.8579 11.5831 14.6163L16.1998 9.99961L11.5831 5.38294C11.3414 5.14128 11.3414 4.74128 11.5831 4.49961C11.8248 4.25794 12.2248 4.25794 12.4664 4.49961L17.5248 9.55794C17.7664 9.79961 17.7664 10.1996 17.5248 10.4413L12.4664 15.4996C12.3414 15.6246 12.1831 15.6829 12.0248 15.6829Z" fill="#009B07"/>
<path d="M16.9415 10.625H2.9165C2.57484 10.625 2.2915 10.3417 2.2915 10C2.2915 9.65833 2.57484 9.375 2.9165 9.375H16.9415C17.2832 9.375 17.5665 9.65833 17.5665 10C17.5665 10.3417 17.2832 10.625 16.9415 10.625Z" fill="#009B07"/>
</svg>


        </h5>

      </form>
    </main>
  );
}
