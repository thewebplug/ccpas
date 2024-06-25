"use-client";

import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styles from '../../../../styles/pages/justice/dashboard/_case-file.scss'; 
import CaseOtpModal from './otp'

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

const CaseFileModal = ({ isOpen, onRequestClose }) => {
  const [destinationAgency, setDestinationAgency] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [isOtpModalOpen, setIsOtpModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({
      destinationAgency,
      email,
      note,
    });
    setIsOtpModalOpen(true); // Close the modal after submission
  };

  const buttonStyle = {
    padding: '14px 20px',
    border: 'none',
    borderRadius: '40px',
    backgroundColor: isFormFilled ? '#009B07' : '#ccc',
    color: '#fff',
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
                <option value="agency1">Homicide</option>
                <option value="agency2">Homicide</option>
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
            <button style={buttonStyle} type="submit">
              Secure Transfer
            </button>
          </form>
        </div>
      </Modal>
      <CaseOtpModal isOpen={isOtpModalOpen} onRequestClose={() => setIsOtpModalOpen(false)} />
    </>
  );
};

export default CaseFileModal;
