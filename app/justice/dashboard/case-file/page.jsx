"use-client" //....

import React, { useState } from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next'); // This is important for accessibility

const CaseFileModal = ({ isOpen, onRequestClose }) => {
  const [destinationAgency, setDestinationAgency] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({
      destinationAgency,
      email,
      note,
    });
    onRequestClose(); // Close the modal after submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Case File Modal"
    >
      <div>
        <h2>You are about sending this case file</h2>
        <div style={{ background: '#21D16B', color: '#fff', padding: '10px', borderRadius: '5px', textAlign: 'center' }}>
          PF309583
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Destination Agency</label>
            <select value={destinationAgency} onChange={(e) => setDestinationAgency(e.target.value)} required>
              <option value="" disabled>Select an agency</option>
              <option value="agency1">Agency 1</option>
              <option value="agency2">Agency 2</option>
              {/* Add more options... */}
            </select>
          </div>
          <div>
            <label>Email of Recipient</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Note</label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows="4"
            />
          </div>
          <button type="submit">Secure Transfer</button>
        </form>
      </div>
    </Modal>
  );
};

export default CaseFileModal;






















// pages/index.jsx

// import React, { useState } from 'react';
// import CaseFileModal from '../components/CaseFileModal';

// const Home = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>
//       <CaseFileModal isOpen={modalIsOpen} onRequestClose={closeModal} />
//     </div>
//   );
// };

// export default Home;
