import React from "react";

const AddUserModal = ({ isOpen, onClose, onInvite }) => {
  if (!isOpen) return null;

  const handleInvite = () => {
    onClose();
    onInvite();
  };

  return (
    <div className="add-user">
      <div className="add-user__overlay" onClick={onClose}></div>
      <div className="add-user__content">
        <header className="add-user__header">
          <div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={onClose}
            >
              <path
                d="M9.57141 18.82C9.38141 18.82 9.19141 18.75 9.04141 18.6L2.97141 12.53C2.68141 12.24 2.68141 11.76 2.97141 11.47L9.04141 5.4C9.33141 5.11 9.81141 5.11 10.1014 5.4C10.3914 5.69 10.3914 6.17 10.1014 6.46L4.56141 12L10.1014 17.54C10.3914 17.83 10.3914 18.31 10.1014 18.6C9.96141 18.75 9.76141 18.82 9.57141 18.82Z"
                fill="#061B2E"
              />
              <path
                d="M20.5014 12.75H3.67141C3.26141 12.75 2.92141 12.41 2.92141 12C2.92141 11.59 3.26141 11.25 3.67141 11.25H20.5014C20.9114 11.25 21.2514 11.59 21.2514 12C21.2514 12.41 20.9114 12.75 20.5014 12.75Z"
                fill="#061B2E"
              />
            </svg>
            <h2>Add New User</h2>
          </div>

          <button className="close-button" onClick={onClose}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="39"
                height="39"
                rx="19.5"
                stroke="#EAEEF4"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.6233 20.6849L15.3536 24.9546L14.293 23.8939L18.5626 19.6243L14.293 15.3546L15.3536 14.2939L19.6233 18.5636L23.893 14.2939L24.9536 15.3546L20.684 19.6243L24.9536 23.8939L23.893 24.9546L19.6233 20.6849Z"
                fill="#ED1651"
              />
            </svg>
          </button>
        </header>

        <div className="add-user__body">
          <div className="user__photo">
            <div className="upload-photo">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0187 16.82L18.8887 9.50002C18.3187 8.16002 17.4687 7.40002 16.4987 7.35002C15.5387 7.30002 14.6087 7.97002 13.8987 9.25002L11.9987 12.66C11.5987 13.38 11.0287 13.81 10.4087 13.86C9.77867 13.92 9.14867 13.59 8.63867 12.94L8.41867 12.66C7.70867 11.77 6.82867 11.34 5.92867 11.43C5.02867 11.52 4.25867 12.14 3.74867 13.15L2.01867 16.6C1.39867 17.85 1.45867 19.3 2.18867 20.48C2.91867 21.66 4.18867 22.37 5.57867 22.37H18.3387C19.6787 22.37 20.9287 21.7 21.6687 20.58C22.4287 19.46 22.5487 18.05 22.0187 16.82Z"
                  fill="#64748B"
                />
                <path
                  d="M6.96984 8.38C8.83657 8.38 10.3498 6.86672 10.3498 5C10.3498 3.13327 8.83657 1.62 6.96984 1.62C5.10312 1.62 3.58984 3.13327 3.58984 5C3.58984 6.86672 5.10312 8.38 6.96984 8.38Z"
                  fill="#64748B"
                />
              </svg>
            </div>
            <a href="#">Upload photo</a>

            <form action="">
              <label htmlFor="">Role</label>
              <select name="" id="" required>
                <option value="">Role</option>
                <option value="">Admin</option>
              </select>

              <label htmlFor="">Security Clearance</label>
              <select name="" id="" required>
                <option value="">Official</option>
                <option value="">Option 2</option>
                <option value="">Option 3</option>
              </select>
            </form>
          </div>

          <form className="user__form">
            <div className="form__section">
              <div className="user-info">
                <h3>User Personal Info</h3>
                <small>Input users personal details here.</small>
              </div>

              {/* <label htmlFor="">First Name</label> */}
              <input type="text" placeholder="Enter First Name" />

              {/* <label htmlFor="">Middle Name</label> */}
              <input type="text" placeholder="Enter Middle Name" />

              {/* <label htmlFor="">Last Name</label> */}
              <input type="text" placeholder="Enter Last Name" />

              {/* <label htmlFor="">Date of Birth</label> */}
              <input type="date" placeholder="Date of Birth" className="date" />
            </div>
            <div className="form__section">
              <div className="user-info">
                <h3>User Work Info</h3>
                <small>Input users personal details here.</small>
              </div>

              {/* <label htmlFor="">User Title</label> */}
              <input type="text" placeholder="Enter User Title" />

              {/* <label htmlFor="">Grade Level</label> */}
              <input type="text" placeholder="Grade Level" />

              {/* <label htmlFor="">Government Issue Email</label> */}
              <input type="email" placeholder="Enter Email" />

              {/* <label htmlFor="">Government Issue Issued ID</label> */}
              <input type="text" placeholder="Enter ID" />

              {/* <label htmlFor=""Station at></label> */}
              <input type="text" placeholder="Enter Station" />

              {/* <label htmlFor="">Department</label> */}
              <input type="text" placeholder="Select Department" />

              {/* <label htmlFor="">Location</label> */}
              <input type="text" placeholder="Grade Level" />

              {/* <label htmlFor="">Date of Engagement</label> */}
              <input
                type="date"
                placeholder="Date of Engagement"
                className="date"
              />
            </div>

            <footer className="add-user__footer">
              <button className="button__cancel" onClick={onClose}>
                Cancel
              </button>
              <button className="button__invite" onClick={handleInvite}>
                Invite User
              </button>
            </footer>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;