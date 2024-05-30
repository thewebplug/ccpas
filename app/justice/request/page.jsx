"use client";

import Image from "next/image";

export default function Auth() {

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    window.location.href = "/justice/authorized";
  }
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

      <form className="auth__form" onSubmit={handleSubmitRequest}>
        <h2 className="auth__form__title">Request Access</h2>
        {/* <h4 className="auth__form__error">Incorrect information you have 1 more try left</h4> */}
        <label htmlFor="" className="auth__form__label">
          FMoJ ID*
        </label>
        <input
          type="text"
          className="auth__form__input"
          placeholder="Enter your ID"
          required
        />
        <label htmlFor="" className="auth__form__label">
        Gov Issued Email*
        </label>
        <input
          type="text"
          className="auth__form__input"
          placeholder="Enter your Email"
          required
        />
        <label htmlFor="" className="auth__form__label">
        Supervisor Email*
        </label>
        <input
          type="text"
          className="auth__form__input"
          placeholder="Enter Supervisor’s Email"
          required
        />
        <label htmlFor="" className="auth__form__label">
        Date of Birth*
        </label>
        <input
          type="date"
          className="auth__form__input"
          required
        />
        <label htmlFor="" className="auth__form__label">
        Date of Engagement*
        </label>
        <input
          type="date"
          className="auth__form__input"
          required
        />
        <label htmlFor="" className="auth__form__label">
        NIN*
        </label>
        <input
          type="text"
          className="auth__form__input"
          placeholder="Enter your NIN"
          required
        />
        <label htmlFor="" className="auth__form__label">
        BVN*
        </label>
        <input
          type="text"
          className="auth__form__input"
          placeholder="Enter your BVN"
          required
        />
       

        <h4 className="auth__form__caution"></h4>

        <button className="auth__form__button" type="submit">Request Access</button>

       
      </form>
    </main>
  );
}
