"use client";

import { getCaseSummary } from "@/app/apis/case";
import DashboardHeader from "@/app/components/dashboardHeader";
import DashboardSideBar from "@/app/components/dashboardSideBar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const auth = useSelector((state) => state.auth);
  const [activeChat, setActiveChat] = useState(null);
  const [totalCases, setTotalCases] = useState(0);
  const [unassignedCases, setUnassignedCases] = useState(0);
  const [newCases, setNewCases] = useState(0);

  console.log("auth", auth);

  const loadSummary = async () => {
    const response = await getCaseSummary(auth?.token);

    let star1 = 0;
    const interval1 = setInterval(() => {
      if (star1 < response?.data?.data?.totalCases) {
        setTotalCases((prev) => prev + 1);
        star1++;
      } else {
        clearInterval(interval1);
      }
    }, 500);
    let star2 = 0;
    const interval2 = setInterval(() => {
      if (star2 < parseInt(response?.data?.data?.unassignedCases)) {
        setUnassignedCases((prev) => prev + 1);
        star2++;
      } else {
        clearInterval(interval2);
      }
    }, 500);
    let star3 = 0;
    const interval3 = setInterval(() => {
      if (star3 < parseInt(response?.data?.data?.newCases)) {
        setNewCases((prev) => prev + 1);
        star3++;
      } else {
        clearInterval(interval3);
      }
    }, 500);
  };

  useEffect(() => {
    loadSummary();
  }, []);

  return (
    <div className="dashboard-home">
      <div className="dashboard-home__card1">
        <div className="dashboard-home__card1__title-group">
          <h2 className="dashboard-home__card1__title-group__title">
            Hi, Aisha
          </h2>
          {/* <button className="dashboard-home__card1__title-group__button"
              onClick={() => window.location.href = "/justice/dashboard/create-case"}
              >
                Create New Case file
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 10H1C0.453333 10 0 9.54667 0 9C0 8.45333 0.453333 8 1 8H17C17.5467 8 18 8.45333 18 9C18 9.54667 17.5467 10 17 10Z"
                    fill="#ECECFE"
                  />
                  <path
                    d="M9 18C8.45333 18 8 17.5467 8 17V1C8 0.453333 8.45333 0 9 0C9.54667 0 10 0.453333 10 1V17C10 17.5467 9.54667 18 9 18Z"
                    fill="#ECECFE"
                  />
                </svg>
              </button> */}
        </div>
        <h2 className="dashboard-home__card1__subtitle">
          Dashboard: <span>Cases</span>
        </h2>
        <div className="dashboard-home__card1__stats">
          <div
            className="dashboard-home__card1__stats__card"
            onClick={() => (window.location.href = "/justice/dashboard/cases")}
          >
            <h3 className="dashboard-home__card1__stats__card__title">
              All Cases
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>{totalCases}</h4>
              <h4>
                +10.38%
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.635 6.6967L17.1335 4.8125L15.5161 11.3825L13.4982 9.44539L10.2434 12.8359C10.1329 12.951 9.98024 13.016 9.82068 13.016C9.66112 13.016 9.50847 12.951 9.39797 12.8359L7.00804 10.3464L3.49305 14.0078C3.26893 14.2413 2.898 14.2488 2.66454 14.0247C2.43109 13.8006 2.42352 13.4297 2.64763 13.1962L6.58533 9.09443C6.69583 8.97933 6.84848 8.91427 7.00804 8.91427C7.1676 8.91427 7.32025 8.97933 7.43075 9.09443L9.82068 11.5839L12.6528 8.63379L10.635 6.6967Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div
            className="dashboard-home__card1__stats__card"
            onClick={() => (window.location.href = "/justice/dashboard/cases")}
          >
            <h3 className="dashboard-home__card1__stats__card__title">
              New Cases
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>{newCases}</h4>
              <h4>
                +10.38%
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.635 6.6967L17.1335 4.8125L15.5161 11.3825L13.4982 9.44539L10.2434 12.8359C10.1329 12.951 9.98024 13.016 9.82068 13.016C9.66112 13.016 9.50847 12.951 9.39797 12.8359L7.00804 10.3464L3.49305 14.0078C3.26893 14.2413 2.898 14.2488 2.66454 14.0247C2.43109 13.8006 2.42352 13.4297 2.64763 13.1962L6.58533 9.09443C6.69583 8.97933 6.84848 8.91427 7.00804 8.91427C7.1676 8.91427 7.32025 8.97933 7.43075 9.09443L9.82068 11.5839L12.6528 8.63379L10.635 6.6967Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div
            className="dashboard-home__card1__stats__card dashboard-home__card1__stats__card-unassigned"
            onClick={() =>
              (window.location.href = "/justice/dashboard/unassigned-cases")
            }
          >
            <h3 className="dashboard-home__card1__stats__card__title">
              Unassigned Cases
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>{unassignedCases}</h4>
              <h4>
                +10.38%
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.6575 7.2924L17.156 5.4082L15.5385 11.9782L13.5207 10.0411L10.2659 13.4316C10.1554 13.5467 10.0027 13.6117 9.84314 13.6117C9.68359 13.6117 9.53093 13.5467 9.42043 13.4316L7.0305 10.9421L3.51551 14.6035C3.2914 14.837 2.92046 14.8445 2.687 14.6204C2.45355 14.3963 2.44598 14.0254 2.67009 13.7919L6.60779 9.69014C6.71829 9.57504 6.87094 9.50997 7.0305 9.50997C7.19006 9.50997 7.34271 9.57504 7.45321 9.69014L9.84314 12.1796L12.6753 9.22949L10.6575 7.2924Z"
                    fill="#BA0000"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div
            className="dashboard-home__card1__stats__card"
            onClick={() => (window.location.href = "/justice/dashboard/cases")}
          >
            <h3 className="dashboard-home__card1__stats__card__title">
              Cases in review
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>189</h4>
              <h4>
                +10.38%
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.635 6.6967L17.1335 4.8125L15.5161 11.3825L13.4982 9.44539L10.2434 12.8359C10.1329 12.951 9.98024 13.016 9.82068 13.016C9.66112 13.016 9.50847 12.951 9.39797 12.8359L7.00804 10.3464L3.49305 14.0078C3.26893 14.2413 2.898 14.2488 2.66454 14.0247C2.43109 13.8006 2.42352 13.4297 2.64763 13.1962L6.58533 9.09443C6.69583 8.97933 6.84848 8.91427 7.00804 8.91427C7.1676 8.91427 7.32025 8.97933 7.43075 9.09443L9.82068 11.5839L12.6528 8.63379L10.635 6.6967Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div
            className="dashboard-home__card1__stats__card"
            onClick={() => (window.location.href = "/justice/dashboard/cases")}
          >
            <h3 className="dashboard-home__card1__stats__card__title">
              Cases Filed in Court
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>1,500</h4>
              <h4>
                +10.38%
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.635 6.6967L17.1335 4.8125L15.5161 11.3825L13.4982 9.44539L10.2434 12.8359C10.1329 12.951 9.98024 13.016 9.82068 13.016C9.66112 13.016 9.50847 12.951 9.39797 12.8359L7.00804 10.3464L3.49305 14.0078C3.26893 14.2413 2.898 14.2488 2.66454 14.0247C2.43109 13.8006 2.42352 13.4297 2.64763 13.1962L6.58533 9.09443C6.69583 8.97933 6.84848 8.91427 7.00804 8.91427C7.1676 8.91427 7.32025 8.97933 7.43075 9.09443L9.82068 11.5839L12.6528 8.63379L10.635 6.6967Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div
            className="dashboard-home__card1__stats__card"
            onClick={() => (window.location.href = "/justice/dashboard/cases")}
          >
            <h3 className="dashboard-home__card1__stats__card__title">
              Closed Cases
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>800</h4>
              <h4>
                +10.38%
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.635 6.6967L17.1335 4.8125L15.5161 11.3825L13.4982 9.44539L10.2434 12.8359C10.1329 12.951 9.98024 13.016 9.82068 13.016C9.66112 13.016 9.50847 12.951 9.39797 12.8359L7.00804 10.3464L3.49305 14.0078C3.26893 14.2413 2.898 14.2488 2.66454 14.0247C2.43109 13.8006 2.42352 13.4297 2.64763 13.1962L6.58533 9.09443C6.69583 8.97933 6.84848 8.91427 7.00804 8.91427C7.1676 8.91427 7.32025 8.97933 7.43075 9.09443L9.82068 11.5839L12.6528 8.63379L10.635 6.6967Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div
            className="dashboard-home__card1__stats__card"
            onClick={() => (window.location.href = "/justice/dashboard/cases")}
          >
            <h3 className="dashboard-home__card1__stats__card__title">
              Reopened Cases
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>300</h4>
              <h4>
                +10.38%
                <svg
                  width="20"
                  height="19"
                  viewBox="0 0 20 19"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.635 6.6967L17.1335 4.8125L15.5161 11.3825L13.4982 9.44539L10.2434 12.8359C10.1329 12.951 9.98024 13.016 9.82068 13.016C9.66112 13.016 9.50847 12.951 9.39797 12.8359L7.00804 10.3464L3.49305 14.0078C3.26893 14.2413 2.898 14.2488 2.66454 14.0247C2.43109 13.8006 2.42352 13.4297 2.64763 13.1962L6.58533 9.09443C6.69583 8.97933 6.84848 8.91427 7.00804 8.91427C7.1676 8.91427 7.32025 8.97933 7.43075 9.09443L9.82068 11.5839L12.6528 8.63379L10.635 6.6967Z"
                    fill="#1C1C1C"
                  />
                </svg>
              </h4>
            </div>
          </div>
          <div
            className="dashboard-home__card1__stats__card dashboard-home__card1__stats__card-last"
            onClick={() => (window.location.href = "/justice/dashboard/cases")}
          >
            <h3 className="dashboard-home__card1__stats__card__title">
              High Priority Cases
            </h3>

            <div className="dashboard-home__card1__stats__card__subtitle-group">
              <h4>140</h4>
              <h4></h4>
            </div>
          </div>
        </div>
        <h2 className="dashboard-home__card1__subtitle">Agencies</h2>
        <div className="dashboard-home__card1__agency-stats">
          <div className="dashboard-home__card1__agency-stats__card">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <Image
                alt=""
                src="/assets/police.png"
                width={28}
                height={28}
                style={{ borderRadius: "50%" }}
                className="agencies-img"
              />
              <h3>POLICE FORCE</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              1,071
            </h4>
          </div>
          <div className="dashboard-home__card1__agency-stats__card">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <Image
                alt=""
                src="/assets/efcc.png"
                width={28}
                height={28}
                style={{ borderRadius: "50%" }}
                className="agencies-img"
              />
              <h3>EFCC</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              820
            </h4>
          </div>
          <div className="dashboard-home__card1__agency-stats__card">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <Image
                alt=""
                src="/assets/icpc.png"
                width={28}
                height={28}
                style={{ borderRadius: "50%" }}
                className="agencies-img"
              />
              <h3>ICPC</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              573
            </h4>
          </div>
          <div className="dashboard-home__card1__agency-stats__card">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <Image
                alt=""
                src="/assets/dss.png"
                width={28}
                height={28}
                style={{ borderRadius: "50%" }}
                className="agencies-img"
              />
              <h3>DSS</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              220
            </h4>
          </div>

          <div className="dashboard-home__card1__agency-stats__card dashboard-home__card1__agency-stats__card-max">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <Image
                alt=""
                src="/assets/immigration.png"
                width={28}
                height={28}
                style={{ borderRadius: "50%" }}
                className="agencies-img"
              />
              <h3>IMMIGRATION</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              662
            </h4>
          </div>
          <div className="dashboard-home__card1__agency-stats__card dashboard-home__card1__agency-stats__card-max">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <Image
                alt=""
                src="/assets/civil defence.png"
                width={28}
                height={28}
                style={{ borderRadius: "50%" }}
                className="agencies-img"
              />
              <h3>CIVIL DEFENCE</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              541
            </h4>
          </div>
          <div className="dashboard-home__card1__agency-stats__card dashboard-home__card1__agency-stats__card-max">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <Image
                alt=""
                src="/assets/customs.png"
                width={28}
                height={28}
                style={{ borderRadius: "50%" }}
                className="agencies-img"
              />
              <h3>CUSTOMS</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              697
            </h4>
          </div>
          <div className="dashboard-home__card1__agency-stats__card dashboard-home__card1__agency-stats__card-max">
            <div className="dashboard-home__card1__agency-stats__card__title-group">
              <Image
                alt=""
                src="/assets/customs.png"
                width={28}
                height={28}
                style={{ borderRadius: "50%" }}
                className="agencies-img"
              />
              <h3>INTERNATIONAL AGENCY</h3>
            </div>
            <h4 className="dashboard-home__card1__agency-stats__card__subtitle">
              697
            </h4>
          </div>
        </div>
      </div>

      <div className="dashboard-home__card2">
        <div className="dashboard-home__card2__chat">
          <div className="dashboard-home__card2__chat__title-group">
            <h2>Secured Chat</h2>
            <h3
              className="pointer"
              onClick={() => (window.location.href = "/justice/dashboard/chat")}
            >
              View All
            </h3>
          </div>

          <div
            className={
              activeChat === 0
                ? "dashboard-home__card2__chat__user-card dashboard-home__card2__chat__user-card-active"
                : "dashboard-home__card2__chat__user-card"
            }
            onClick={() => setActiveChat(0)}
          >
            <div className="dashboard-home__card2__chat__user-card__inner">
              <Image
                className="dashboard-home__card2__chat__user-card__inner__img"
                alt=""
                src="/assets/Frame 10.png"
                width={48}
                height={48}
              />

              <div className="dashboard-home__card2__chat__user-card__inner__title-group">
                <h4>
                  Okoro <span>Linda</span>
                </h4>
                <h4>Hey, I just finished the interview with the witness</h4>
              </div>
              <div className="dashboard-home__card2__chat__user-card__inner__timestamp">
                48m
              </div>
            </div>
            <div className="dashboard-home__card2__chat__user-card__chats">
              <div className="dashboard-home__card2__chat__user-card__chats__received">
                <div className="dashboard-home__card2__chat__user-card__chats__received__inner">
                  I have a question about the case file PF345024.
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__received__timestamp">
                  Just Now
                </div>
              </div>
              <div className="dashboard-home__card2__chat__user-card__chats__sent">
                <div className="dashboard-home__card2__chat__user-card__chats__sent__inner">
                  I have a question about the case file PF345024.
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__sent__timestamp">
                  Just Now
                </div>
              </div>
            </div>

            <div className="dashboard-home__card2__chat__user-card__form">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                  stroke="#0D082C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 14C8.5 14 10 16 12.5 16C15 16 16.5 14 16.5 14"
                  stroke="#0D082C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 9H9.51"
                  stroke="#0D082C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5 9H15.51"
                  stroke="#0D082C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input type="text" placeholder="Reply ..." />

              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M19.5 3H5.5C4.39543 3 3.5 3.89543 3.5 5V19C3.5 20.1046 4.39543 21 5.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V5C21.5 3.89543 20.6046 3 19.5 3Z"
                    stroke="#9CA0FA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.5 11C10.6046 11 11.5 10.1046 11.5 9C11.5 7.89543 10.6046 7 9.5 7C8.39543 7 7.5 7.89543 7.5 9C7.5 10.1046 8.39543 11 9.5 11Z"
                    stroke="#9CA0FA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.5 14.9997L18.414 11.9137C18.0389 11.5388 17.5303 11.3281 17 11.3281C16.4697 11.3281 15.9611 11.5388 15.586 11.9137L6.5 20.9997"
                    stroke="#9CA0FA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>

              <div className="dashboard-home__card2__chat__user-card__form__send">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 18L15.5 12L9.5 6"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className={
              activeChat === 1
                ? "dashboard-home__card2__chat__user-card dashboard-home__card2__chat__user-card-active"
                : "dashboard-home__card2__chat__user-card"
            }
            onClick={() => setActiveChat(1)}
          >
            <div className="dashboard-home__card2__chat__user-card__inner">
              <Image
                className="dashboard-home__card2__chat__user-card__inner__img"
                alt=""
                src="/assets/Frame 10.png"
                width={48}
                height={48}
              />

              <div className="dashboard-home__card2__chat__user-card__inner__title-group">
                <h4>
                  Okoro <span>Linda</span>
                </h4>
                <h4>Hey, I just finished the interview with the witness</h4>
              </div>
              <div className="dashboard-home__card2__chat__user-card__inner__timestamp">
                48m
              </div>
            </div>
            <div className="dashboard-home__card2__chat__user-card__chats">
              <div className="dashboard-home__card2__chat__user-card__chats__received">
                <div className="dashboard-home__card2__chat__user-card__chats__received__inner">
                  I have a question about the case file PF345024.
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__received__timestamp">
                  Just Now
                </div>
              </div>
              <div className="dashboard-home__card2__chat__user-card__chats__sent">
                <div className="dashboard-home__card2__chat__user-card__chats__sent__inner">
                  I have a question about the case file PF345024.
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__sent__timestamp">
                  Just Now
                </div>
              </div>
            </div>

            <div className="dashboard-home__card2__chat__user-card__form">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                  stroke="#0D082C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 14C8.5 14 10 16 12.5 16C15 16 16.5 14 16.5 14"
                  stroke="#0D082C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 9H9.51"
                  stroke="#0D082C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5 9H15.51"
                  stroke="#0D082C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input type="text" placeholder="Reply ..." />

              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M19.5 3H5.5C4.39543 3 3.5 3.89543 3.5 5V19C3.5 20.1046 4.39543 21 5.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V5C21.5 3.89543 20.6046 3 19.5 3Z"
                    stroke="#9CA0FA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.5 11C10.6046 11 11.5 10.1046 11.5 9C11.5 7.89543 10.6046 7 9.5 7C8.39543 7 7.5 7.89543 7.5 9C7.5 10.1046 8.39543 11 9.5 11Z"
                    stroke="#9CA0FA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.5 14.9997L18.414 11.9137C18.0389 11.5388 17.5303 11.3281 17 11.3281C16.4697 11.3281 15.9611 11.5388 15.586 11.9137L6.5 20.9997"
                    stroke="#9CA0FA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>

              <div className="dashboard-home__card2__chat__user-card__form__send">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 18L15.5 12L9.5 6"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div
            className={
              activeChat === 2
                ? "dashboard-home__card2__chat__user-card dashboard-home__card2__chat__user-card-active"
                : "dashboard-home__card2__chat__user-card"
            }
            onClick={() => setActiveChat(2)}
          >
            <div className="dashboard-home__card2__chat__user-card__inner">
              <Image
                className="dashboard-home__card2__chat__user-card__inner__img"
                alt=""
                src="/assets/Frame 10.png"
                width={48}
                height={48}
              />

              <div className="dashboard-home__card2__chat__user-card__inner__title-group">
                <h4>
                  Okoro <span>Linda</span>
                </h4>
                <h4>Hey, I just finished the interview with the witness</h4>
              </div>
              <div className="dashboard-home__card2__chat__user-card__inner__timestamp">
                48m
              </div>
            </div>
            <div className="dashboard-home__card2__chat__user-card__chats">
              <div className="dashboard-home__card2__chat__user-card__chats__received">
                <div className="dashboard-home__card2__chat__user-card__chats__received__inner">
                  I have a question about the case file PF345024.
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__received__timestamp">
                  Just Now
                </div>
              </div>
              <div className="dashboard-home__card2__chat__user-card__chats__sent">
                <div className="dashboard-home__card2__chat__user-card__chats__sent__inner">
                  I have a question about the case file PF345024.
                </div>

                <div className="dashboard-home__card2__chat__user-card__chats__sent__timestamp">
                  Just Now
                </div>
              </div>
            </div>

            <div className="dashboard-home__card2__chat__user-card__form">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 22C18.0228 22 22.5 17.5228 22.5 12C22.5 6.47715 18.0228 2 12.5 2C6.97715 2 2.5 6.47715 2.5 12C2.5 17.5228 6.97715 22 12.5 22Z"
                  stroke="#0D082C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.5 14C8.5 14 10 16 12.5 16C15 16 16.5 14 16.5 14"
                  stroke="#0D082C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.5 9H9.51"
                  stroke="#0D082C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M15.5 9H15.51"
                  stroke="#0D082C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <input type="text" placeholder="Reply ..." />

              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g opacity="0.4">
                  <path
                    d="M19.5 3H5.5C4.39543 3 3.5 3.89543 3.5 5V19C3.5 20.1046 4.39543 21 5.5 21H19.5C20.6046 21 21.5 20.1046 21.5 19V5C21.5 3.89543 20.6046 3 19.5 3Z"
                    stroke="#9CA0FA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M9.5 11C10.6046 11 11.5 10.1046 11.5 9C11.5 7.89543 10.6046 7 9.5 7C8.39543 7 7.5 7.89543 7.5 9C7.5 10.1046 8.39543 11 9.5 11Z"
                    stroke="#9CA0FA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M21.5 14.9997L18.414 11.9137C18.0389 11.5388 17.5303 11.3281 17 11.3281C16.4697 11.3281 15.9611 11.5388 15.586 11.9137L6.5 20.9997"
                    stroke="#9CA0FA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>

              <div className="dashboard-home__card2__chat__user-card__form__send">
                <svg
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 18L15.5 12L9.5 6"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-home__card2__task">
          <div className="dashboard-home__card2__task__title-group">
            <h2>Tasks To Do</h2>
            <h3>View All</h3>
          </div>

          <div className="dashboard-home__card2__task__card">
            22 May 2024
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9318 4.60134L10.4905 2.03669C9.76517 1.61798 8.86792 1.61798 8.13517 2.03669L3.70125 4.60134C2.97597 5.02006 2.52734 5.79767 2.52734 6.64259V11.7569C2.52734 12.5944 2.97597 13.372 3.70125 13.7982L8.14264 16.3628C8.86792 16.7815 9.76517 16.7815 10.4979 16.3628L14.9393 13.7982C15.6646 13.3794 16.1132 12.6018 16.1132 11.7569V6.64259C16.1058 5.79767 15.6571 5.02753 14.9318 4.60134ZM8.75576 6.02199C8.75576 5.71543 9.00999 5.4612 9.31655 5.4612C9.62311 5.4612 9.87733 5.71543 9.87733 6.02199V9.94746C9.87733 10.254 9.62311 10.5082 9.31655 10.5082C9.00999 10.5082 8.75576 10.254 8.75576 9.94746V6.02199ZM10.0044 12.6616C9.96705 12.7514 9.91471 12.8336 9.84742 12.9084C9.70536 13.0505 9.51843 13.1252 9.31655 13.1252C9.21935 13.1252 9.12214 13.1028 9.03242 13.0654C8.93521 13.028 8.86044 12.9757 8.78567 12.9084C8.71838 12.8336 8.66604 12.7514 8.62118 12.6616C8.58379 12.5719 8.56884 12.4747 8.56884 12.3775C8.56884 12.1831 8.64361 11.9887 8.78567 11.8466C8.86044 11.7794 8.93521 11.727 9.03242 11.6896C9.30907 11.57 9.63806 11.6373 9.84742 11.8466C9.91471 11.9214 9.96705 11.9962 10.0044 12.0934C10.0418 12.1831 10.0643 12.2803 10.0643 12.3775C10.0643 12.4747 10.0418 12.5719 10.0044 12.6616Z"
                fill="#FE8084"
              />
            </svg>
            <span>Interview with witness</span>
          </div>
          <div className="dashboard-home__card2__task__card">
            24 May 2024
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.9318 4.60134L10.4905 2.03669C9.76517 1.61798 8.86792 1.61798 8.13517 2.03669L3.70125 4.60134C2.97597 5.02006 2.52734 5.79767 2.52734 6.64259V11.7569C2.52734 12.5944 2.97597 13.372 3.70125 13.7982L8.14264 16.3628C8.86792 16.7815 9.76517 16.7815 10.4979 16.3628L14.9393 13.7982C15.6646 13.3794 16.1132 12.6018 16.1132 11.7569V6.64259C16.1058 5.79767 15.6571 5.02753 14.9318 4.60134ZM8.75576 6.02199C8.75576 5.71543 9.00999 5.4612 9.31655 5.4612C9.62311 5.4612 9.87733 5.71543 9.87733 6.02199V9.94746C9.87733 10.254 9.62311 10.5082 9.31655 10.5082C9.00999 10.5082 8.75576 10.254 8.75576 9.94746V6.02199ZM10.0044 12.6616C9.96705 12.7514 9.91471 12.8336 9.84742 12.9084C9.70536 13.0505 9.51843 13.1252 9.31655 13.1252C9.21935 13.1252 9.12214 13.1028 9.03242 13.0654C8.93521 13.028 8.86044 12.9757 8.78567 12.9084C8.71838 12.8336 8.66604 12.7514 8.62118 12.6616C8.58379 12.5719 8.56884 12.4747 8.56884 12.3775C8.56884 12.1831 8.64361 11.9887 8.78567 11.8466C8.86044 11.7794 8.93521 11.727 9.03242 11.6896C9.30907 11.57 9.63806 11.6373 9.84742 11.8466C9.91471 11.9214 9.96705 11.9962 10.0044 12.0934C10.0418 12.1831 10.0643 12.2803 10.0643 12.3775C10.0643 12.4747 10.0418 12.5719 10.0044 12.6616Z"
                fill="#FE8084"
              />
            </svg>
            <span>Court appearance</span>
          </div>
          <div className="dashboard-home__card2__task__add">
            <h4>Add new task</h4>
            <svg
              width="22"
              height="16"
              viewBox="0 0 22 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.0842 15.5727C13.8712 15.5727 13.6581 15.4942 13.4898 15.3259C13.1646 15.0007 13.1646 14.4623 13.4898 14.1371L19.7033 7.92361L13.4898 1.71014C13.1646 1.38489 13.1646 0.846538 13.4898 0.521284C13.8151 0.19603 14.3534 0.19603 14.6787 0.521284L21.4866 7.32918C21.8118 7.65443 21.8118 8.19278 21.4866 8.51804L14.6787 15.3259C14.5104 15.4942 14.2973 15.5727 14.0842 15.5727Z"
                fill="#514EF3"
              />
              <path
                d="M20.7015 8.76478H1.82555C1.36571 8.76478 0.984375 8.38345 0.984375 7.92361C0.984375 7.46377 1.36571 7.08244 1.82555 7.08244H20.7015C21.1613 7.08244 21.5427 7.46377 21.5427 7.92361C21.5427 8.38345 21.1613 8.76478 20.7015 8.76478Z"
                fill="#514EF3"
              />
            </svg>
          </div>
        </div>
      </div>


    </div>
  );
}
