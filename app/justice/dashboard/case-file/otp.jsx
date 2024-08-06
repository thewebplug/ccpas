"use client";

import React, { useState, useRef, useEffect } from 'react';
import Modal from 'react-modal';
// import '../../../../styles/pages/justice/dashboard/_otp.scss' // imported it in the index.sccs

const otpStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    borderRadius: "12px",
    padding: "40px 65px 40px 65px",
    gap: "40px",
    transform: "translate(-50%, -50%)",
    width: "540px",
    height: "393px",
  },
};

const CaseOtpModal = ({ isOpen, onRequestClose }) => {
  const [otp, setOtp] = useState(new Array(4).fill(""));

  function handleChange(e, index) {
    if (isNaN(e.target.value)) return false;

    setOtp([
      ...otp.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  }

  const [isComplete, setIsComplete] = useState(false);
  const inputsRef = useRef([]);

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  useEffect(() => {
    setIsComplete(otp.every((digit) => digit.length === 1));
  }, [otp]);

  const buttonStyle = {
    padding: "16px 183px",
    border: isComplete ? "none" : "1px solid #e6e6e6",
    borderRadius: "40px",
    backgroundColor: isComplete ? "#009B07" : "#fff",
    color: isComplete ? "#fff" : "#000",
    cursor: isComplete ? "pointer" : "not-allowed",
    transition: "background-color 0.5s",
    fontWeight: "500",
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={otpStyles}
      contentLabel="OTP Modal"
    >
      <div className="case-otp">
        <h2>OTP</h2>
        <p>Enter the OTP sent to Alaba.Adenuga@fmoj.gov.ng</p>
        <div className="otp-inputs">
          {Array.from({ length: 4 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>
        <a href="#" className="request-new-code">
          Request a new code
        </a>
        <button
          style={buttonStyle}
          type="button"
          onClick={() => (window.location.href = "/justice/transfer-doc")}
        >
          {isComplete ? "Send" : "Transfer"}
        </button>
      </div>
    </Modal>
  );
};

export default CaseOtpModal;
