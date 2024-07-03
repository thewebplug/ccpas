"use client";

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import ReviewModal from './review'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    borderRadius: '12px',
    border: '1px solid #ccddcc',
    padding: '81px 65px 40px 65px',
    gap: '32px',
    transform: 'translate(-50%, -50%)',
    width: '630px',
    height: '630px',
  },
};

const CaseFileModal = ({ isOpen, onRequestClose  }) => {
  const [destinationAgency, setDestinationAgency] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);


  const handleSubmit = (e) => {
    e.preventDefault();
    setIsReviewModalOpen(true);; // Open OTP modal
    onRequestClose(); // Close Case File modal


    // Handle the form submission logic here
    console.log({
      destinationAgency,
      email,
      note,
    });
    // setIsOtpModalOpen(true); // Close the modal after submission
  };

  const buttonStyle = {
    padding: '14px 20px',
    border:  isFormFilled ? 'none' : '1px solid #e6e6e6',
    borderRadius: '40px',
    backgroundColor: isFormFilled ? '#009B07' : '#fff',
    color:  isFormFilled ? '#fff' : '#000',
    cursor: isFormFilled ? 'pointer' : 'not-allowed',
    transition: 'background-color 0.5s',
  };

  useEffect(() => {
    if (destinationAgency && email && note) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  }, [destinationAgency, email, note]);

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        style={customStyles}
        contentLabel="Case File Modal"
      >
        <div className="case-file">
          <h2>You are about sending this case file</h2>
          <div className="case-id">PF309583</div>
          {/* <div className={styles['case-id']}>PF309583</div> */}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Department</label>
              <select value={destinationAgency} onChange={(e) => setDestinationAgency(e.target.value)} required>
                <option value="" disabled>Select an agency</option>
                <option value="Homicide">Homicide</option>
                <option value="Legal">Legal</option>
                <option value="EFCC">EFCC</option>
                {/* Add more options... */}
              </select>
            </div>
            <div className="form-group">
              <label>Email of Recipient</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label></label>
                <textarea
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  rows="8"
                  placeholder="Note"
                />
            </div>
            <button 
              style={buttonStyle} 
              type="submit"
            >
              Secure Transfer
            </button>
          </form>
        </div>
      </Modal>

      <ReviewModal
        isOpen={isReviewModalOpen}
        onRequestClose={() => setIsReviewModalOpen(false)}
        recipient="Alaba Adenuga(FM56898324)"
        title="Director of Operations"
        date="06-06-2024"
        department={destinationAgency}
        caseId="PF309583"
      />
    </>
  );
};

export default CaseFileModal;
