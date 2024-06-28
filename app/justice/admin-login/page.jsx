"use client";

import { adminLogin, requestOtp, verifyOtp } from "@/app/apis/auth";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Auth() {
  const dispatch = useDispatch();

  const [officialEmail, setOfficialEmail] = useState("");
  const [govId, setGovId] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const response = await adminLogin(officialEmail, govId, password);

    console.log('response', response);
    // window.location.href = "/justice/dashboard";

    if(response?.status === 201) {
      setModalOpen(true);
    }
    else if (response?.data?.statusCode === 401 || response?.data?.statusCode === 403) {
      window.location.href = "/justice/unauthorized"
    }
    else {
      alert(response?.data?.message)
    }
    setLoading(false);

    console.log('respoooo', response);

  }
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);

    const otp = `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`

    const response = await verifyOtp(officialEmail, otp);

    console.log('response', response?.data?.token);

    if(response?.status === 201) {
      localStorage.setItem("token", response?.data?.token);
      document.cookie = `auth_token=${response?.data?.token}; path=/; max-age=${60 * 60 * 24 * 7};`
      dispatch({
        type: "USER_LOGIN_SUCCESS",
        payload: {
          token: response?.data?.token,
        },
      });
      window.location.href = "/justice/dashboard"
    }
    else if (response?.data?.statusCode === 401 || response?.data?.statusCode === 403) {
      window.location.href = "/justice/unauthorized"
    }
    else {
      alert(response?.data?.message)
    }
    setLoading(false);

    console.log('respoooo', response);

  }

  const handleResendOtp = async () => {
    setLoading(true);


    const response = await requestOtp(officialEmail);

    console.log('response', response);
    // window.location.href = "/justice/dashboard";

    if(response?.status === 201) {
      alert("A new OTP has been sent to your email")
    }
    else if (response?.data?.statusCode === 401 || response?.data?.statusCode === 403) {
      window.location.href = "/justice/unauthorized"
    }
    else {
      alert("Unable to resend OTP")
    }
    setLoading(false);

    console.log('respoooo', response);

  }

  
  const handleModalClose = (e) => {
    if (e.target.classList.contains("auth__modal")) {
      setModalOpen(false);
    }
  };

  useEffect(() => {
    const otpInputs = document.querySelectorAll(".auth__modal__inner__otp-group__input");

    otpInputs.forEach((input, index) => {
      input.addEventListener("input", (event) => {
        const inputValue = event.target.value;

        if (inputValue && index < otpInputs.length - 1) {
          otpInputs[index + 1].focus();
        }
      });

      input.addEventListener("keydown", (event) => {
        if (event.key === "Backspace" && index > 0 && !input.value) {
          otpInputs[index - 1].focus();
          event.preventDefault();
        }
      });
    });
  }, [modalOpen]);

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
        <h2 className="auth__form__title">Login as Admin</h2>
        <h3 className="auth__form__subtitle">Public Prosecutor</h3>
        {/* <h4 className="auth__form__error">Incorrect information you have 1 more try left</h4> */}
        <label htmlFor="" className="auth__form__label">FMoJ ID*</label>
        <input type="text" className="auth__form__input" placeholder="Enter your ID" required
        value={govId}
        onChange={(e) => setGovId(e.target.value)}
        />
        <label htmlFor="" className="auth__form__label">Email*</label>
        <input type="text" className="auth__form__input" placeholder="Enter your ID" required
        value={officialEmail}
        onChange={(e) => setOfficialEmail(e.target.value)}
        />
        <label htmlFor="" className="auth__form__label">Password*</label>
        <input type="password" className="auth__form__input" placeholder="Enter password" required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />

        <h4 className="auth__form__caution">
        Must be at least 8 characters.
        </h4>

        
        <button className="auth__form__button" type="submit"
        disabled={loading}
        >{loading ? "Loading..." : "Login"}</button>

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

      {modalOpen && <div className="auth__modal"
      onClick={handleModalClose}
      >
       <form className="auth__modal__inner" onSubmit={handleVerifyOtp}>
       <div className="auth__modal__inner__title">
       OTP
        </div>
       <div className="auth__modal__inner__subtitle">
       Enter the OTP sent to {officialEmail}
        </div>

        <div className="auth__modal__inner__otp-group">
          <input type="text"
          className="auth__modal__inner__otp-group__input"
          value={otp1}
          onChange={(e) => setOtp1(e.target.value)}
          maxLength={1}
          />
          <input type="text"
          className="auth__modal__inner__otp-group__input"
          value={otp2}
          onChange={(e) => setOtp2(e.target.value)}
          maxLength={1}
          />
          <input type="text"
          className="auth__modal__inner__otp-group__input"
          value={otp3}
          onChange={(e) => setOtp3(e.target.value)}
          maxLength={1}
          />
          <input type="text"
          className="auth__modal__inner__otp-group__input"
          value={otp4}
          onChange={(e) => setOtp4(e.target.value)}
          maxLength={1}
          />
          <input type="text"
          className="auth__modal__inner__otp-group__input"
          value={otp5}
          onChange={(e) => setOtp5(e.target.value)}
          maxLength={1}
          />
          <input type="text"
          className="auth__modal__inner__otp-group__input"
          value={otp6}
          onChange={(e) => setOtp6(e.target.value)}
          maxLength={1}
          />
        </div>
        <div className="auth__modal__inner__request pointer"
        
        onClick={handleResendOtp}>
        Request a new code
          </div>

          <button
          disabled={loading}
          >{loading ? "Loading..." : "Verify OTP"}</button>
   
</form>
    </div>}
    </main>
  );
}
