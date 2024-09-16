"use client";

import { useEffect, useRef, useState } from "react";
import ReportsTab from "./components/tab";
import Chart from "chart.js/auto";

export default function CreateCase() {
  const [dropDown, setDropDown] = useState("MLA Foreign Jurisdiction");
  const [currentType, setCurrentType] = useState("Analytics");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const dateInputRef1 = useRef(null);
  const dateInputRef2 = useRef(null);
  useEffect(() => {
    const ctx = document.getElementById("reportChart");

    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Terrorism", "Armed Robbery", "Cybercrime", "Securities Fraud", "Currency Defacing", "Insurance Fraud"],
        datasets: [
          {
            label: "Sept 2024",
            data: [750, 980, 1000, 1500, 890, 890],
            borderWidth: 1,
            backgroundColor: [
              "#7086FD",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem?.label}`;
              },
              label: function (tooltipItem) {
                return `${tooltipItem?.formattedValue}`;
              },
            },
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, [currentType]);

  return (
    <div className="reports">
      <div className="reports__nav">
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 9.5V11H1V9.5C1 9.225 1.225 9 1.5 9H10.5C10.775 9 11 9.225 11 9.5Z"
            fill="#99A2BB"
            stroke="#99A2BB"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M3.5 5.5H2.5V9H3.5V5.5Z" fill="#99A2BB" />
          <path d="M5.5 5.5H4.5V9H5.5V5.5Z" fill="#99A2BB" />
          <path d="M7.5 5.5H6.5V9H7.5V5.5Z" fill="#99A2BB" />
          <path d="M9.5 5.5H8.5V9H9.5V5.5Z" fill="#99A2BB" />
          <path
            d="M11.5 11.375H0.5C0.295 11.375 0.125 11.205 0.125 11C0.125 10.795 0.295 10.625 0.5 10.625H11.5C11.705 10.625 11.875 10.795 11.875 11C11.875 11.205 11.705 11.375 11.5 11.375Z"
            fill="#99A2BB"
          />
          <path
            d="M10.685 2.87687L6.185 1.07687C6.085 1.03688 5.915 1.03688 5.815 1.07687L1.315 2.87687C1.14 2.94687 1 3.15187 1 3.34187V5.00187C1 5.27688 1.225 5.50187 1.5 5.50187H10.5C10.775 5.50187 11 5.27688 11 5.00187V3.34187C11 3.15187 10.86 2.94687 10.685 2.87687ZM6 4.25187C5.585 4.25187 5.25 3.91687 5.25 3.50187C5.25 3.08687 5.585 2.75187 6 2.75187C6.415 2.75187 6.75 3.08687 6.75 3.50187C6.75 3.91687 6.415 4.25187 6 4.25187Z"
            fill="#99A2BB"
          />
        </svg>

        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.94661 3.34552C5.01411 3.2781 5.10561 3.24023 5.20101 3.24023C5.29641 3.24023 5.38791 3.2781 5.45541 3.34552L7.85541 5.74552C7.92283 5.81302 7.96069 5.90452 7.96069 5.99992C7.96069 6.09532 7.92283 6.18682 7.85541 6.25432L5.45541 8.65432C5.42245 8.68969 5.38271 8.71806 5.33855 8.73773C5.29439 8.75741 5.24672 8.76799 5.19838 8.76884C5.15004 8.76969 5.10203 8.7608 5.0572 8.7427C5.01238 8.72459 4.97166 8.69764 4.93747 8.66346C4.90329 8.62927 4.87634 8.58855 4.85823 8.54373C4.84013 8.4989 4.83123 8.45088 4.83209 8.40255C4.83294 8.35421 4.84352 8.30654 4.8632 8.26238C4.88287 8.21822 4.91124 8.17848 4.94661 8.14552L7.09221 5.99992L4.94661 3.85432C4.8792 3.78682 4.84133 3.69532 4.84133 3.59992C4.84133 3.50452 4.8792 3.41302 4.94661 3.34552Z"
            fill="#99A2BB"
          />
        </svg>
        <div
          className="pointer"
          onClick={() => (window.location.href = "/justice/admin")}
        >
          Report & Analytics
        </div>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M4.94661 3.34552C5.01411 3.2781 5.10561 3.24023 5.20101 3.24023C5.29641 3.24023 5.38791 3.2781 5.45541 3.34552L7.85541 5.74552C7.92283 5.81302 7.96069 5.90452 7.96069 5.99992C7.96069 6.09532 7.92283 6.18682 7.85541 6.25432L5.45541 8.65432C5.42245 8.68969 5.38271 8.71806 5.33855 8.73773C5.29439 8.75741 5.24672 8.76799 5.19838 8.76884C5.15004 8.76969 5.10203 8.7608 5.0572 8.7427C5.01238 8.72459 4.97166 8.69764 4.93747 8.66346C4.90329 8.62927 4.87634 8.58855 4.85823 8.54373C4.84013 8.4989 4.83123 8.45088 4.83209 8.40255C4.83294 8.35421 4.84352 8.30654 4.8632 8.26238C4.88287 8.21822 4.91124 8.17848 4.94661 8.14552L7.09221 5.99992L4.94661 3.85432C4.8792 3.78682 4.84133 3.69532 4.84133 3.59992C4.84133 3.50452 4.8792 3.41302 4.94661 3.34552Z"
            fill="#99A2BB"
          />
        </svg>
        <div>Finance & Accounts</div>
      </div>

      <div className="reports__title">Report & Analytics</div>

      <ReportsTab />

      <div className="reports__inner">
        <div className="reports__inner__filter">
          <div className="reports__inner__filter__filter">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 8.5H12M2 4.5H14M6 12.5H10"
                stroke="#637381"
                stroke-width="1.33333"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div>Filter</div>
          </div>

          <select
            name=""
            id=""
            value={dropDown}
            onChange={(e) => setDropDown(e.target.value)}
          >
            <option value="MLA Foreign Jurisdiction">
              MLA Foreign Jurisdiction
            </option>
            <option value="MLA EFCC">MLA EFCC</option>
            <option value="EXTRADITION REQUEST">EXTRADITION REQUEST</option>
            <option value="CASES FROM EFCC TO COUNTER AGENCY">
              CASES FROM EFCC TO COUNTER AGENCY
            </option>
          </select>

          <div className="reports__inner__filter__date">
      <input type="date" name="" id="" value={from}  ref={dateInputRef1}
              onChange={(e) => {
                setFrom(e.target.value)
                dateInputRef2.current.showPicker();
                }} />
      <input type="date" name="" id="" value={to}  ref={dateInputRef2}
              onChange={(e) => setTo(e.target.value)} />
    </div>

          <button>Apply</button>
        </div>

        <div className="reports__inner__subtitle">
          <div>{dropDown}</div>

          <div>
            <button
              onClick={() =>
                setCurrentType(
                  currentType === "Analytics" ? "Table" : "Analytics"
                )
              }
            >
              {currentType}{" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.2104 15.89C20.5742 17.3945 19.5792 18.7202 18.3123 19.7513C17.0454 20.7824 15.5452 21.4874 13.9428 21.8048C12.3405 22.1221 10.6848 22.0421 9.12055 21.5718C7.55627 21.1014 6.13103 20.2551 4.96942 19.1067C3.80782 17.9582 2.94522 16.5428 2.45704 14.9839C1.96886 13.4251 1.86996 11.7705 2.169 10.1646C2.46804 8.55878 3.1559 7.05063 4.17245 5.77203C5.189 4.49343 6.50329 3.48332 8.0004 2.83M22.0004 12C22.0004 10.6868 21.7417 9.38642 21.2392 8.17317C20.7367 6.95991 20.0001 5.85752 19.0715 4.92893C18.1429 4.00035 17.0405 3.26375 15.8272 2.7612C14.614 2.25866 13.3136 2 12.0004 2V12H22.0004Z"
                  stroke="#009B07"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>

            <button>
              Print
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 9V2H18V9M6 18H4C3.46957 18 2.96086 17.7893 2.58579 17.4142C2.21071 17.0391 2 16.5304 2 16V11C2 10.4696 2.21071 9.96086 2.58579 9.58579C2.96086 9.21071 3.46957 9 4 9H20C20.5304 9 21.0391 9.21071 21.4142 9.58579C21.7893 9.96086 22 10.4696 22 11V16C22 16.5304 21.7893 17.0391 21.4142 17.4142C21.0391 17.7893 20.5304 18 20 18H18M6 14H18V22H6V14Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {currentType === "Analytics" && (
          <div className="reports__inner__table">
            <div className="reports__inner__table__header">
              <div className="reports__inner__table__xtra-large">PERIOD(mONTH/YEAR)</div>
              <div className="reports__inner__table__xtra-large">OFFENCE</div>
              <div className="reports__inner__table__xtra-large">date REQUESTED</div> {/* text transform uppercase */}
              <div className="reports__inner__table__xtra-large">date executed</div>
            </div>
            <div className="reports__inner__table__body">
              <div className="reports__inner__table__body__inner">
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">Terrorism</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
              </div>
              <div className="reports__inner__table__body__inner">
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">Terrorism</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
              </div>
              <div className="reports__inner__table__body__inner">
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">Terrorism</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
              </div>
              <div className="reports__inner__table__body__inner">
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">Terrorism</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
              </div>
              <div className="reports__inner__table__body__inner">
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">Terrorism</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
              </div>
              <div className="reports__inner__table__body__inner">
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">Terrorism</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
              </div>
              <div className="reports__inner__table__body__inner">
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">Terrorism</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
              </div>
              <div className="reports__inner__table__body__inner">
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">Terrorism</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
              </div>
              <div className="reports__inner__table__body__inner">
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">Terrorism</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
                <div className="reports__inner__table__xtra-large">JUN-21-2024</div>
              </div>
              
            </div>

            <div className="reports__inner__table__footer">
              <button>
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
                Previous
              </button>
              <button>
                Next
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
              </button>
            </div>
          </div>
        )}
        {currentType === "Table" && <div className="reports__inner__chart">
            <div className="reports__inner__chart__title">
            {dropDown}
            </div>
        <svg width="861" height="40" viewBox="0 0 861 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_20_267)">
<g opacity="0.5" filter="url(#filter0_f_20_267)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M29 35H1L0 33H29V35Z" fill="#3086F3"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30 36H2L1 33H30V36Z" fill="#07DBFA"/>
<path d="M33 35V34H233V35H33Z" fill="black" fill-opacity="0.25"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M223 34V35H225.267L230.115 30H232.697H654V29H232.697H229.892L225.043 34H223Z" fill="black" fill-opacity="0.25"/>
<defs>
<filter id="filter0_f_20_267" x="-5" y="28" width="39" height="12" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_20_267"/>
</filter>
<clipPath id="clip0_20_267">
<rect width="223" height="40" fill="white"/>
</clipPath>
</defs>
</svg>

          <canvas id="reportChart"></canvas>
        </div>}
      </div>
    </div>
  );
}
