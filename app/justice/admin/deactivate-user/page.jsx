import React from "react";

const DeactivateUserModal = ({ isOpen, onClose, onDeactivate }) => {

  if (!isOpen) return null;
  
  const handleDeactivate = () => {
    onClose();
    onDeactivate();
  };

  return (
    <div className="modal">
      <div className="modal__overlay" onClick={onClose}></div>
      <div className="modal-content">
        <div className="header">
          <div>
            <svg
              width="75"
              height="65"
              viewBox="0 0 106 107"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M61.832 18.1667H44.1654C27.5101 18.1667 19.1803 18.1667 14.0084 23.343C8.83203 28.5149 8.83203 36.8448 8.83203 53.5C8.83203 70.1553 8.83203 78.4851 14.0084 83.657C19.1803 88.8334 27.5101 88.8334 44.1654 88.8334H61.832C78.4873 88.8334 86.8171 88.8334 91.989 83.657C97.1654 78.4851 97.1654 70.1553 97.1654 53.5C97.1654 36.8448 97.1654 28.5149 91.989 23.343C86.8171 18.1667 78.4873 18.1667 61.832 18.1667Z"
                fill="#009B07"
              />
              <path
                d="M58.5195 40.25C58.5195 39.3715 58.8685 38.5289 59.4897 37.9077C60.111 37.2865 60.9535 36.9375 61.832 36.9375H83.9154C84.7939 36.9375 85.6364 37.2865 86.2577 37.9077C86.8789 38.5289 87.2279 39.3715 87.2279 40.25C87.2279 41.1286 86.8789 41.9711 86.2577 42.5923C85.6364 43.2135 84.7939 43.5625 83.9154 43.5625H61.832C60.9535 43.5625 60.111 43.2135 59.4897 42.5923C58.8685 41.9711 58.5195 41.1286 58.5195 40.25ZM62.9362 53.5C62.9362 52.6215 63.2852 51.7789 63.9064 51.1577C64.5276 50.5365 65.3702 50.1875 66.2487 50.1875H83.9154C84.7939 50.1875 85.6364 50.5365 86.2577 51.1577C86.8789 51.7789 87.2279 52.6215 87.2279 53.5C87.2279 54.3786 86.8789 55.2211 86.2577 55.8423C85.6364 56.4635 84.7939 56.8125 83.9154 56.8125H66.2487C65.3702 56.8125 64.5276 56.4635 63.9064 55.8423C63.2852 55.2211 62.9362 54.3786 62.9362 53.5ZM67.3529 66.75C67.3529 65.8715 67.7019 65.0289 68.3231 64.4077C68.9443 63.7865 69.7868 63.4375 70.6654 63.4375H83.9154C84.7939 63.4375 85.6364 63.7865 86.2577 64.4077C86.8789 65.0289 87.2279 65.8715 87.2279 66.75C87.2279 67.6286 86.8789 68.4711 86.2577 69.0923C85.6364 69.7135 84.7939 70.0625 83.9154 70.0625H70.6654C69.7868 70.0625 68.9443 69.7135 68.3231 69.0923C67.7019 68.4711 67.3529 67.6286 67.3529 66.75ZM39.7487 49.0834C42.0914 49.0834 44.3382 48.1527 45.9948 46.4961C47.6514 44.8396 48.582 42.5928 48.582 40.25C48.582 37.9073 47.6514 35.6605 45.9948 34.0039C44.3382 32.3473 42.0914 31.4167 39.7487 31.4167C37.406 31.4167 35.1592 32.3473 33.5026 34.0039C31.846 35.6605 30.9154 37.9073 30.9154 40.25C30.9154 42.5928 31.846 44.8396 33.5026 46.4961C35.1592 48.1527 37.406 49.0834 39.7487 49.0834ZM39.7487 75.5834C57.4154 75.5834 57.4154 71.6304 57.4154 66.75C57.4154 61.8696 49.5095 57.9167 39.7487 57.9167C29.9879 57.9167 22.082 61.8696 22.082 66.75C22.082 71.6304 22.082 75.5834 39.7487 75.5834Z"
                fill="#009B07"
              />
            </svg>
          </div>
          <button className="closeButton" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="31"
              viewBox="0 0 47 48"
              fill="none"
            >
              <rect
                x="0.5875"
                y="1.0875"
                width="45.825"
                height="45.825"
                rx="22.9125"
                fill="white"
              />
              <rect
                x="0.5875"
                y="1.0875"
                width="45.825"
                height="45.825"
                rx="22.9125"
                stroke="#EAEEF4"
                stroke-width="1.175"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.0563 24.8038L18.0392 29.8209L16.793 28.5746L21.8101 23.5575L16.7934 18.5409L18.0397 17.2946L23.0563 22.3112L28.073 17.2946L29.3192 18.5409L24.3026 23.5575L29.3197 28.5746L28.0734 29.8209L23.0563 24.8038Z"
                fill="#0B0B0B"
              />
            </svg>
          </button>
        </div>

        <h2 className="title">Deactivate User</h2>

        <div className="userInfo">
          <div>
            <p>
              First Name: <br /> <strong>Adewumi</strong>
            </p>
            <p>
              Middle Name: <br /> <strong className="med-p">Sandra</strong>
            </p>
            <p>
              Last Name: <br /> <strong className="last-p">Oloye</strong>
            </p>
          </div>
          {/* php Copy code */}
          <div>
            <p>
              Government Issued ID: <strong>FM56898324</strong>
            </p>
            <p>
              Government Issued Email: <strong>A.adenuga@fmoj.gov.ng </strong>
            </p>
          </div>
          <p>
            Title: <br /> <strong>Director, Operations</strong>
          </p>
          <div>
            <p>
              Role: <br />
              <strong>Admin</strong>
            </p>
            <p>
              Security Clearance: <br />
              <strong className="last-p">Secret</strong>
            </p>
          </div>
          <p>
            Deactivation Date: <br /> <strong>JUN-06-2024</strong>
          </p>
        </div>

        <div className="actions">
          <button className="cancelButton" onClick={onClose}>
            Cancel
          </button>
          <button className="deactivateButton" onClick={handleDeactivate}>
            Deactivate User
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeactivateUserModal;
