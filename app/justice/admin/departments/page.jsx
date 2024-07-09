export default function Departments() {
    return (
        <div className="departments">
            <div className="departments__header">
            <div className="departments__header__title">Department</div>
            <div className="departments__header__button">Add New Department <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9987 3.3335V12.6668M3.33203 8.00016H12.6654" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
            </div>
            <div className="departments__actions">

                <form action="" className="departments__actions__input">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z" stroke="#101828" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<input type="text" placeholder="Search" />
                </form>
                <form action="" className="departments__actions__input">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6667 1.8335V4.50016M5.33333 1.8335V4.50016M2 7.16683H14M3.33333 3.16683H12.6667C13.403 3.16683 14 3.76378 14 4.50016V13.8335C14 14.5699 13.403 15.1668 12.6667 15.1668H3.33333C2.59695 15.1668 2 14.5699 2 13.8335V4.50016C2 3.76378 2.59695 3.16683 3.33333 3.16683Z" stroke="#101828" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>


<select name="" id="">
    <option value="">Location</option>
</select>
                </form>

                <div className="departments__actions__filters">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5119 6.35L13.5719 2.92C12.6019 2.36 11.4019 2.36 10.4219 2.92L4.49187 6.35C3.52187 6.91 2.92188 7.95 2.92188 9.08V15.92C2.92188 17.04 3.52187 18.08 4.49187 18.65L10.4319 22.08C11.4019 22.64 12.6019 22.64 13.5819 22.08L19.5219 18.65C20.4919 18.09 21.0919 17.05 21.0919 15.92V9.08C21.0819 7.95 20.4819 6.92 19.5119 6.35ZM11.2519 8.25C11.2519 7.84 11.5919 7.5 12.0019 7.5C12.4119 7.5 12.7519 7.84 12.7519 8.25V13.5C12.7519 13.91 12.4119 14.25 12.0019 14.25C11.5919 14.25 11.2519 13.91 11.2519 13.5V8.25ZM12.9219 17.13C12.8719 17.25 12.8019 17.36 12.7119 17.46C12.5219 17.65 12.2719 17.75 12.0019 17.75C11.8719 17.75 11.7419 17.72 11.6219 17.67C11.4919 17.62 11.3919 17.55 11.2919 17.46C11.2019 17.36 11.1319 17.25 11.0719 17.13C11.0219 17.01 11.0019 16.88 11.0019 16.75C11.0019 16.49 11.1019 16.23 11.2919 16.04C11.3919 15.95 11.4919 15.88 11.6219 15.83C11.9919 15.67 12.4319 15.76 12.7119 16.04C12.8019 16.14 12.8719 16.24 12.9219 16.37C12.9719 16.49 13.0019 16.62 13.0019 16.75C13.0019 16.88 12.9719 17.01 12.9219 17.13Z" fill="#292D32"/>
</svg>
Priority
                </div>
                <div className="departments__actions__filters">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.1554 3.5H3.84473C3.09527 3.5 2.71709 4.40935 3.24813 4.94039L9.74999 11.4432V18.6875C9.74999 18.9628 9.88433 19.2208 10.1099 19.3787L12.9224 21.3468C13.4773 21.7352 14.25 21.3415 14.25 20.6555V11.4432L20.752 4.94039C21.282 4.41041 20.9064 3.5 20.1554 3.5Z" fill="#033132"/>
</svg>

Filter
                </div>

                <button className="departments__actions__button">
                Apply
                </button>
            </div>

            <div className="departments__heading">
            <div><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="19" height="19" rx="5.5" fill="white"/>
<rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#D0D5DD"/>
</svg></div>

<div>Department</div>
<div>Location</div>
<div>Ongoing Case <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9987 3.3335V12.6668M7.9987 12.6668L12.6654 8.00016M7.9987 12.6668L3.33203 8.00016" stroke="#667085" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div>No of Prosecutors <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.9987 3.3335V12.6668M7.9987 12.6668L12.6654 8.00016M7.9987 12.6668L3.33203 8.00016" stroke="#667085" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
            </div>

            <div className="departments__body">
            <div className="departments__body__inner">
                <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="19" height="19" rx="5.5" fill="white"/>
<rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#D0D5DD"/>
</svg>
                </div>
                <div>Department of Public Prosecutions (DPP)</div>
                <div>Federal Secretariat Complex, Abuja</div>
                <div>132</div>
                <div>132</div>
            </div>
            <div className="departments__body__inner">
                <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="19" height="19" rx="5.5" fill="white"/>
<rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#D0D5DD"/>
</svg>
                </div>
                <div>Department of Public Prosecutions (DPP)</div>
                <div>Federal Secretariat Complex, Abuja</div>
                <div>132</div>
                <div>132</div>
            </div>
            <div className="departments__body__inner">
                <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="19" height="19" rx="5.5" fill="white"/>
<rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#D0D5DD"/>
</svg>
                </div>
                <div>Department of Public Prosecutions (DPP)</div>
                <div>Federal Secretariat Complex, Abuja</div>
                <div>132</div>
                <div>132</div>
            </div>
            <div className="departments__body__inner">
                <div>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="19" height="19" rx="5.5" fill="white"/>
<rect x="0.5" y="0.5" width="19" height="19" rx="5.5" stroke="#D0D5DD"/>
</svg>
                </div>
                <div>Department of Public Prosecutions (DPP)</div>
                <div>Federal Secretariat Complex, Abuja</div>
                <div>132</div>
                <div>132</div>
            </div>
            </div>

            <div className="departments__footer">
          <div className="departments__footer__nav">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.8346 10.0013H4.16797M4.16797 10.0013L10.0013 15.8346M4.16797 10.0013L10.0013 4.16797"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div>Previous</div>
          </div>

          {/* pagination */}

          <div className="departments__footer__nav">
            <div>Next</div>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16797 10.0013H15.8346M15.8346 10.0013L10.0013 4.16797M15.8346 10.0013L10.0013 15.8346"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        </div>
    )
}