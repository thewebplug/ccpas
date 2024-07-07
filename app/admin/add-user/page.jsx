import React from 'react';

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
            <h2>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
                width="17"
                height="17"
              >
                <path 
                  fill="000000"
                  d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/>
              </svg>

              Add New User
            </h2>

          </div>
        
          <button className="add-user__close" onClick={onClose}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 384 512" 
              width="17" 
              height="17"
              >
                <path 
                  fill="#ff0000" 
                  d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
                />
            </svg>
          </button>
        </header>

        <div className="add-user__body">
          <div className="user__photo">

            <div className='upload-photo'>
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
                  fill="#64748B"/>
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
              <div className='user-info'>
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
              <div className='user-info'>
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
              <input type="date" placeholder="Date of Engagement" className="date" />
            </div>

            <footer className="add-user__footer">
              <button className="button__cancel" onClick={onClose}>Cancel</button>
              <button className="button__invite" onClick={handleInvite}>Invite User</button>
          </footer>
          </form>
        </div>


      </div>
    </div>
  );
};

export default AddUserModal;
