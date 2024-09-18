"use client";

import { requestAccess } from "@/app/apis/auth";
import Image from "next/image";
import { useState } from "react";

export default function Auth() {
  const [govId, setGovId] = useState("");
  const [officialEmail, setOfficialEmail] = useState("");
  const [supervisorEmail, setSupervisorEmail] = useState("");
  const [dob, setDob] = useState("");
  const [doe, setDoe] = useState("");
  const [nin, setNin] = useState("");
  const [bvn, setBvn] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmitRequest = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    if(bvn?.length < 11) {
      alert('BVN must be 11 digits')
      setLoading(false);
      return;
    }else if(nin?.length < 11) {
      alert('NIN must be 11 digits')
      setLoading(false);
      return
    }

    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    if (age < 18) {
      alert('You must be at least 18 years old.');
      setLoading(false);
      return;
    }

    const engagementDateObj = new Date(doe);
    if (engagementDateObj > today) {
      alert('Date of Engagement cannot be in the future.');
      setLoading(false)
      return;
    }


    const response = await requestAccess(
      officialEmail,
      supervisorEmail,
      dob,
      doe,
      nin,
      bvn,
      govId,
      // password
    );

    if(response?.data?.statusCode === 201) {
      window.location.href = "/justice/authorized"
    }
    else if (response?.data?.statusCode === 401 || response?.data?.statusCode === 403) {
      window.location.href = "/justice/unauthorized"
    }
    else {
      alert(response?.data?.message)
    }
    setLoading(false);

    console.log('respoooo', response);
  };
  return (
    <main className="auth">
      <div className="auth__header">
        <Image alt="" src="/assets/logo.png" width={66.089} height={66.089} />
        <div className="auth__header__inner">
          <div className="auth__header__inner__title">
            Centralised Criminal Public Prosecution Administrative System CCPPAS
          </div>
          <div className="auth__header__inner__subtitle">
            Administered by Agency
          </div>
        </div>
      </div>

      <form className="auth__form" onSubmit={handleSubmitRequest}>
        <h2 className="auth__form__title">Request Access</h2>
        {/* <h4 className="auth__form__error">Incorrect information you have 1 more try left</h4> */}
        <label htmlFor="" className="auth__form__label">
          Agency ID*
        </label>
        <input
          type="text"
          className="auth__form__input"
          placeholder="Enter your ID"
          required
          value={govId}
          onChange={(e) => setGovId(e.target.value)}
        />
        <label htmlFor="" className="auth__form__label">
          Gov Issued Email*
        </label>
        <input
          type="email"
          className="auth__form__input"
          placeholder="Enter your Email"
          required
          value={officialEmail}
          onChange={(e) => setOfficialEmail(e.target.value)}
        />
        <label htmlFor="" className="auth__form__label">
          Supervisor Email*
        </label>
        <input
          type="email"
          className="auth__form__input"
          placeholder="Enter Supervisor’s Email"
          required
          value={supervisorEmail}
          onChange={(e) => setSupervisorEmail(e.target.value)}
        />
        <label htmlFor="" className="auth__form__label">
          Date of Birth*
        </label>
        <input
          type="date"
          className="auth__form__input"
          required
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <label htmlFor="" className="auth__form__label">
          Date of Engagement*
        </label>
        <input
          type="date"
          className="auth__form__input"
          required
          value={doe}
          onChange={(e) => setDoe(e.target.value)}
        />
        <label htmlFor="" className="auth__form__label">
          NIN*
        </label>
        <input
          type="text"
          className="auth__form__input"
          placeholder="Enter your NIN"
          required
          value={nin}
          onChange={(e) => setNin(e.target.value)}
          maxLength={11}
        />
        <label htmlFor="" className="auth__form__label">
          BVN*
        </label>
        <input
          type="text"
          className="auth__form__input"
          placeholder="Enter your BVN"
          required
          value={bvn}
          onChange={(e) => setBvn(e.target.value)}
          maxLength={11}
        />
        {/* <label htmlFor="" className="auth__form__label">
          Password*
        </label>
        <input
          type="password"
          className="auth__form__input"
          placeholder="Enter your BVN"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /> */}

        <h4 className="auth__form__caution"></h4>

        <button className="auth__form__button" type="submit"
        disabled={loading}
        >
          {loading ? "Loading..." : "Request Access"}
        </button>
      </form>
    </main>
  );
}
