"use-client";

import React, { useState } from 'react';
import Modal from 'react-modal';
import '../../../../styles/pages/justice/dashboard/_review.scss';
import CaseOtpModal from './otp';

const reviewModalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    borderRadius: '12px',
    padding: '75px 65px 40px 65px',
    gap: '24px',
    transform: 'translate(-50%, -50%)',
    width: '600px',
    height: '600px',
  },
};

const ReviewModal = ({ isOpen, onRequestClose, recipient, title, date, department, caseId }) => {
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  const handleSecureTransfer = (e) => {
    e.preventDefault();
    onRequestClose(); // Close Review modal
    setIsOtpModalOpen(true); // Open OTP modal
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={reviewModalStyles}
        contentLabel="Review Modal"
      >
        <div className='review-modal'>
          <div className='icon'>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="80" height="80" rx="40" fill="url(#paint0_linear_7814_148744)"/>
<path d="M43.1324 26.668H36.8657C35.479 26.668 34.3457 27.788 34.3457 29.1746V30.428C34.3457 31.8146 35.4657 32.9346 36.8524 32.9346H43.1324C44.519 32.9346 45.639 31.8146 45.639 30.428V29.1746C45.6524 27.788 44.519 26.668 43.1324 26.668Z" fill="#009B07"/>
<path d="M46.9867 30.4286C46.9867 32.5486 45.2534 34.2819 43.1334 34.2819H36.8667C34.7467 34.2819 33.0134 32.5486 33.0134 30.4286C33.0134 29.6819 32.2134 29.2153 31.5467 29.5619C29.6667 30.5619 28.3867 32.5486 28.3867 34.8286V47.3753C28.3867 50.6553 31.0667 53.3353 34.3467 53.3353H45.6534C48.9334 53.3353 51.6134 50.6553 51.6134 47.3753V34.8286C51.6134 32.5486 50.3334 30.5619 48.4534 29.5619C47.7867 29.2153 46.9867 29.6819 46.9867 30.4286ZM44.7067 47.3753C44.5067 47.5753 44.2534 47.6686 44.0001 47.6686C43.7467 47.6686 43.4934 47.5753 43.2934 47.3753L37.0001 41.0819V42.6686C37.0001 43.2153 36.5467 43.6686 36.0001 43.6686C35.4534 43.6686 35.0001 43.2153 35.0001 42.6686V38.6686C35.0001 38.1219 35.4534 37.6686 36.0001 37.6686H40.0001C40.5467 37.6686 41.0001 38.1219 41.0001 38.6686C41.0001 39.2153 40.5467 39.6686 40.0001 39.6686H38.4134L44.7067 45.9619C45.0934 46.3486 45.0934 46.9886 44.7067 47.3753Z" fill="#009B07"/>
<defs>
<linearGradient id="paint0_linear_7814_148744" x1="40" y1="0" x2="40" y2="86" gradientUnits="userSpaceOnUse">
<stop stop-color="#2BFF40" stop-opacity="0.2"/>
<stop offset="1" stop-color="#16ED52" stop-opacity="0"/>
</linearGradient>
</defs>
</svg>
          </div>
          <h2>Transfer Review</h2>
          <div className="details">
            <p>
              <small>Recipient</small> <br />{recipient}
            </p>             
            <p>
              <small>Title:</small> <br /> 
              {title}
            </p>
            <p>
              <small>Date</small> <br /> 
              {date}
            </p>
            <p>
              <small>Dept</small> <br /> {department}
            </p>
          </div>
            <div className='review-bottom'>
              <div className='case-id'>
              <span>{caseId}</span>
              </div>
            
            <p>Are You Sure You Want To <br /> Proceed?</p>
            <button 
              className='secure-transfer-button'
              onClick={handleSecureTransfer}
            >
              Secure Transfer
            </button>
          </div>
        </div>
      </Modal>

      <CaseOtpModal isOpen={isOtpModalOpen} onRequestClose={() => setIsOtpModalOpen(false)} />
    </>
  );
};

export default ReviewModal;
