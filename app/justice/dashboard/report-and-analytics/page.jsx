"use client";

import { useEffect, useRef, useState } from "react";
import ReportsTab from "./components/tab";
import Chart from "chart.js/auto";
import Image from "next/image";
import ReportHomeTabs from "./components/home-tabs";

export default function CreateCase() {
  useEffect(() => {
    const ctx = document.getElementById("myChart");

    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [2017, 2018, 2019, 2020, 2021, 2022, 2023],
        datasets: [
          {
            label: "",
            data: [0, 11, 19, 38, 54, 80, 90],
            borderWidth: 1,
            backgroundColor: "rgba(31, 33, 255, 1)",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          tooltip: {
            callbacks: {
              label: function (tooltipItem) {
                return `${tooltipItem?.label}`;
              },
              label: function (tooltipItem) {
                return `${tooltipItem?.formattedValue}tCO2`;
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
  }, []);

  useEffect(() => {
    const doughnut = document.getElementById("doughnutChart");

    const doughnutChart = new Chart(doughnut, {
      type: "doughnut",
      data: {
        labels: [
          "Government Official",
          "Videos",
          "Photos",
          "Music",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
        datasets: [
          {
            data: [90, 56, 100, 78],
            borderWidth: 1,
            backgroundColor: [
              "rgba(58, 12, 163, 1)",
              "rgba(181, 23, 158, 1)",
              "rgba(255, 195, 0, 1)",
              "rgba(247, 37, 133, 1)",
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || "";
                const value = context.formattedValue;
                return `${label}: ${value}`;
              },
            },
          },
        },
      },
    });

    return () => doughnutChart.destroy();
  }, []);
  useEffect(() => {
    const doughnut2 = document.getElementById("doughnutChart2");

    const doughnutChart2 = new Chart(doughnut2, {
      type: "doughnut",
      data: {
        labels: [
          "Compliance Rate",
          "All"
        ],
        datasets: [
          {
            data: [70, 30],
            borderWidth: 1,
            backgroundColor: [
              "rgba(0, 155, 7, 1)",
              "rgba(242, 242, 242, 1)"
            ],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false, // Hide the legend
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const label = context.label || "";
                const value = context.formattedValue;
                return `${label}: ${value}`;
              },
            },
          },
        },
      },
    });

    return () => doughnutChart2.destroy();
  }, []);

  return (
    <div className="reports-home">
      <div className="reports-home__nav">
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

      <div className="reports-home__title">Reporting & Documentation</div>
      <ReportHomeTabs />
      <div className="reports-home__subtitle">Performance Reporting</div>

      <div className="reports-home__cards">
        <div className="reports-home__cards__card">
          <div className="reports-home__cards__card__title">
            Case Resolution Rate:
            <div className="reports-home__cards__card__dropdown">
              <div>In last year</div>
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.96 0.0899963H3.845H1.04C0.559996 0.0899963 0.319996 0.669997 0.659996 1.01L3.25 3.6C3.665 4.015 4.34 4.015 4.755 3.6L5.74 2.615L7.345 1.01C7.68 0.669997 7.44 0.0899963 6.96 0.0899963Z"
                  fill="#292D32"
                />
              </svg>{" "}
            </div>
          </div>
          <div className="reports-home__cards__card__stats">60%</div>
          <div className="reports-home__cards__card__trend">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                opacity="0.1"
                cx="9.45736"
                cy="10"
                rx="9.45736"
                ry="10"
                fill="#9664FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.24873 6.86575C9.28769 6.71208 9.38279 6.58106 9.51309 6.50151C9.6434 6.42196 9.79825 6.4004 9.94359 6.44155L13.0442 7.32001C13.1895 7.36121 13.3134 7.46176 13.3886 7.59954C13.4639 7.73733 13.4843 7.90106 13.4453 8.05475L12.6145 11.3332C12.5735 11.4844 12.478 11.6126 12.3485 11.6901C12.219 11.7675 12.0659 11.7881 11.9222 11.7474C11.7785 11.7067 11.6556 11.6079 11.5801 11.4724C11.5046 11.3368 11.4825 11.1753 11.5185 11.0227L11.9947 9.14329L6.30117 12.6191C6.17083 12.6987 6.01595 12.7202 5.87058 12.679C5.72521 12.6378 5.60127 12.5373 5.52603 12.3995C5.45078 12.2617 5.43039 12.0979 5.46934 11.9442C5.50829 11.7905 5.60339 11.6594 5.73373 11.5799L11.4273 8.10406L9.64991 7.60049C9.50458 7.55928 9.38067 7.45874 9.30544 7.32095C9.23021 7.18317 9.20981 7.01943 9.24873 6.86575Z"
                fill="#9664FF"
              />
            </svg>

            <div>12%</div>
          </div>

          <svg
            className="reports-home__cards__card__svg"
            width="5"
            height="53"
            viewBox="0 0 5 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0C2.76142 0 5 2.23858 5 5V48C5 50.7614 2.76142 53 0 53V0Z"
              fill="#9664FF"
            />
          </svg>
        </div>

        <div className="reports-home__cards__card">
          <div className="reports-home__cards__card__title">
            Asset Recovery Value:
            <div className="reports-home__cards__card__dropdown">
              <div>In last year</div>
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.96 0.0899963H3.845H1.04C0.559996 0.0899963 0.319996 0.669997 0.659996 1.01L3.25 3.6C3.665 4.015 4.34 4.015 4.755 3.6L5.74 2.615L7.345 1.01C7.68 0.669997 7.44 0.0899963 6.96 0.0899963Z"
                  fill="#292D32"
                />
              </svg>
            </div>
          </div>

          <div className="reports-home__cards__card__stats reports-home__cards__card__stats-green">
            6,000,000,000 <span>NGN</span>
          </div>
          <div className="reports-home__cards__card__subtitle">
            6 Billion Naira only
          </div>
          <div className="reports-home__cards__card__trend">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                opacity="0.1"
                cx="9.45736"
                cy="10"
                rx="9.45736"
                ry="10"
                fill="#9664FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.24873 6.86575C9.28769 6.71208 9.38279 6.58106 9.51309 6.50151C9.6434 6.42196 9.79825 6.4004 9.94359 6.44155L13.0442 7.32001C13.1895 7.36121 13.3134 7.46176 13.3886 7.59954C13.4639 7.73733 13.4843 7.90106 13.4453 8.05475L12.6145 11.3332C12.5735 11.4844 12.478 11.6126 12.3485 11.6901C12.219 11.7675 12.0659 11.7881 11.9222 11.7474C11.7785 11.7067 11.6556 11.6079 11.5801 11.4724C11.5046 11.3368 11.4825 11.1753 11.5185 11.0227L11.9947 9.14329L6.30117 12.6191C6.17083 12.6987 6.01595 12.7202 5.87058 12.679C5.72521 12.6378 5.60127 12.5373 5.52603 12.3995C5.45078 12.2617 5.43039 12.0979 5.46934 11.9442C5.50829 11.7905 5.60339 11.6594 5.73373 11.5799L11.4273 8.10406L9.64991 7.60049C9.50458 7.55928 9.38067 7.45874 9.30544 7.32095C9.23021 7.18317 9.20981 7.01943 9.24873 6.86575Z"
                fill="#9664FF"
              />
            </svg>

            <div>12%</div>
          </div>

          <svg
            className="reports-home__cards__card__svg"
            width="5"
            height="53"
            viewBox="0 0 5 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0C2.76142 0 5 2.23858 5 5V48C5 50.7614 2.76142 53 0 53V0Z"
              fill="#009B07"
            />
          </svg>
        </div>

        <div className="reports-home__cards__card">
          <div className="reports-home__cards__card__title">
            Prosecution Success Rate:
            <div className="reports-home__cards__card__dropdown">
              <div>In last year</div>
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.96 0.0899963H3.845H1.04C0.559996 0.0899963 0.319996 0.669997 0.659996 1.01L3.25 3.6C3.665 4.015 4.34 4.015 4.755 3.6L5.74 2.615L7.345 1.01C7.68 0.669997 7.44 0.0899963 6.96 0.0899963Z"
                  fill="#292D32"
                />
              </svg>{" "}
            </div>
          </div>
          <div className="reports-home__cards__card__stats">47%</div>
          <div className="reports-home__cards__card__trend">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                opacity="0.1"
                cx="9.45736"
                cy="10"
                rx="9.45736"
                ry="10"
                fill="#9664FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.24873 6.86575C9.28769 6.71208 9.38279 6.58106 9.51309 6.50151C9.6434 6.42196 9.79825 6.4004 9.94359 6.44155L13.0442 7.32001C13.1895 7.36121 13.3134 7.46176 13.3886 7.59954C13.4639 7.73733 13.4843 7.90106 13.4453 8.05475L12.6145 11.3332C12.5735 11.4844 12.478 11.6126 12.3485 11.6901C12.219 11.7675 12.0659 11.7881 11.9222 11.7474C11.7785 11.7067 11.6556 11.6079 11.5801 11.4724C11.5046 11.3368 11.4825 11.1753 11.5185 11.0227L11.9947 9.14329L6.30117 12.6191C6.17083 12.6987 6.01595 12.7202 5.87058 12.679C5.72521 12.6378 5.60127 12.5373 5.52603 12.3995C5.45078 12.2617 5.43039 12.0979 5.46934 11.9442C5.50829 11.7905 5.60339 11.6594 5.73373 11.5799L11.4273 8.10406L9.64991 7.60049C9.50458 7.55928 9.38067 7.45874 9.30544 7.32095C9.23021 7.18317 9.20981 7.01943 9.24873 6.86575Z"
                fill="#9664FF"
              />
            </svg>

            <div>12%</div>
          </div>

          <svg
            className="reports-home__cards__card__svg"
            width="5"
            height="53"
            viewBox="0 0 5 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0C2.76142 0 5 2.23858 5 5V48C5 50.7614 2.76142 53 0 53V0Z"
              fill="#9664FF"
            />
          </svg>
        </div>
        <div className="reports-home__cards__card">
          <div className="reports-home__cards__card__title">
            Compliance Rate:
            <div className="reports-home__cards__card__dropdown">
              <div>In last year</div>
              <svg
                width="8"
                height="4"
                viewBox="0 0 8 4"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.96 0.0899963H3.845H1.04C0.559996 0.0899963 0.319996 0.669997 0.659996 1.01L3.25 3.6C3.665 4.015 4.34 4.015 4.755 3.6L5.74 2.615L7.345 1.01C7.68 0.669997 7.44 0.0899963 6.96 0.0899963Z"
                  fill="#292D32"
                />
              </svg>{" "}
            </div>
          </div>
          <div className="reports-home__cards__card__stats">47%</div>
          <div className="reports-home__cards__card__trend">
            <svg
              width="19"
              height="20"
              viewBox="0 0 19 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                opacity="0.1"
                cx="9.45736"
                cy="10"
                rx="9.45736"
                ry="10"
                fill="#9664FF"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.24873 6.86575C9.28769 6.71208 9.38279 6.58106 9.51309 6.50151C9.6434 6.42196 9.79825 6.4004 9.94359 6.44155L13.0442 7.32001C13.1895 7.36121 13.3134 7.46176 13.3886 7.59954C13.4639 7.73733 13.4843 7.90106 13.4453 8.05475L12.6145 11.3332C12.5735 11.4844 12.478 11.6126 12.3485 11.6901C12.219 11.7675 12.0659 11.7881 11.9222 11.7474C11.7785 11.7067 11.6556 11.6079 11.5801 11.4724C11.5046 11.3368 11.4825 11.1753 11.5185 11.0227L11.9947 9.14329L6.30117 12.6191C6.17083 12.6987 6.01595 12.7202 5.87058 12.679C5.72521 12.6378 5.60127 12.5373 5.52603 12.3995C5.45078 12.2617 5.43039 12.0979 5.46934 11.9442C5.50829 11.7905 5.60339 11.6594 5.73373 11.5799L11.4273 8.10406L9.64991 7.60049C9.50458 7.55928 9.38067 7.45874 9.30544 7.32095C9.23021 7.18317 9.20981 7.01943 9.24873 6.86575Z"
                fill="#9664FF"
              />
            </svg>

            <div>12%</div>
          </div>

          <svg
            className="reports-home__cards__card__svg"
            width="5"
            height="53"
            viewBox="0 0 5 53"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0C2.76142 0 5 2.23858 5 5V48C5 50.7614 2.76142 53 0 53V0Z"
              fill="#9664FF"
            />
          </svg>
        </div>
      </div>

      <div className="reports-home__tabs">
        <div className="reports-home__tabs__active">Case Management</div>
        <div>Financial KPIs</div>
        <div>Operational Efficiency</div>
        <div>Detention Management</div>
      </div>

      <div className="reports-home__charts">
        <div className="reports-home__charts__chart">
          <div
            className="reports-home__charts__chart__title
      "
          >
            Case Resolution Rate
          </div>
          <div
            className="reports-home__charts__chart__subtitle
      "
          >
            Resolution rate
          </div>

          <canvas id="myChart"></canvas>
        </div>
        <div className="reports-home__charts__chart">
          <div
            className="reports-home__charts__chart__title
      "
          >
            Average Investigation Duration
          </div>
          <div
            className="reports-home__charts__chart__subtitle
      "
          >
            Resolution rate
          </div>

          <div className="reports-home__charts__chart__pie">
            <div>
            <canvas id="doughnutChart"></canvas>
            </div>

           <div>
           <div className="reports-home__charts__chart__pie__group">
           <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="11" height="11" rx="2" fill="#3A0CA3"/>
</svg>

<div>Government Official</div>
              </div>
           <div className="reports-home__charts__chart__pie__group">
           <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="11" height="11" rx="2" fill="#B5179E"/>
</svg>


<div>Videos</div>
              </div>
           <div className="reports-home__charts__chart__pie__group">
           <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="11" height="11" rx="2" fill="#FFC300"/>
</svg>



<div>Photos</div>
              </div>
           <div className="reports-home__charts__chart__pie__group">
           <svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="0.5" width="11" height="11" rx="2" fill="#F72585"/>
</svg>



<div>Music</div>
              </div>
           </div>
          </div>
          <div className="reports-home__charts__chart__pie-title">
            Total Amout S
          </div>
          <div className="reports-home__charts__chart__pie-subtitle">
          Total Amount Siezed
          </div>
          <div className="reports-home__charts__chart__pie-preview">
          <div>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.5" cy="11.5" r="11.5" fill="#3A0CA3"/>
</svg>
<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.5" cy="11.5" r="11.5" fill="#FFC300"/>
</svg>
<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.5" cy="11.5" r="11.5" fill="#B5179E"/>
</svg>
<svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="11.5" cy="11.5" r="11.5" fill="#F72585"/>
</svg>

          </div>

          <div>137B NGN</div>

          
          </div>
        </div>
        <div className="reports-home__charts__chart">
          <div
            className="reports-home__charts__chart__title
      "
          >
            Prosecution Success Rate
          </div>
          <div
            className="reports-home__charts__chart__subtitle
      "
          >
            Success rate
          </div>

          <div>
          <canvas id="doughnutChart2"></canvas>

          </div>

          <div className="reports-home__charts__chart__alt-group">
            <div className="reports-home__charts__chart__alt-group__group">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" rx="4" fill="#009B07"/>
</svg>

              <div>Compliance Rate</div>
            </div>
            <div className="reports-home__charts__chart__alt-group__group">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" rx="4" fill="#F2F2F2"/>
</svg>

              <div>All</div>
            </div>
          </div>
        </div>

        <div className="reports-home__charts__cases">
          <div className="reports-home__charts__cases__group">

        <div className="reports-home__charts__cases__flex">
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="37" height="37" rx="13.875" fill="#FFE1E9"/>
<g clip-path="url(#clip0_1811_105499)">
<path d="M9.66732 27.332L18.834 18.1654M9.66732 27.332L15.5007 10.6654L18.834 18.1654M9.66732 27.332L26.334 21.4987L18.834 18.1654" stroke="#FF0000" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1811_105499">
<rect width="20" height="20" fill="white" transform="matrix(-1 0 0 -1 28 29)"/>
</clipPath>
</defs>
</svg>

        <div><div className="reports-home__charts__cases__title">
        Total no cases 
          </div>
        <div className="reports-home__charts__cases__subtitle">
        <span>130</span> Cases
          </div></div>

</div>

<select name="" id="">
  <option value="In last year">In last year</option>
</select>
          </div>
    <div className="reports-home__charts__cases__table">
          <div className="reports-home__charts__cases__table__header">
            <div>Officer</div>
            <div>No  Cases</div>
            <div>Cases Closed</div>
            <div>Closure rate</div>
          </div>
          <div className="reports-home__charts__cases__table__body">
            <div className="reports-home__charts__cases__table__body__group">
              <Image
              className="reports-home__charts__cases__table__body__image"
              src="/assets/reports.png"
              width={40}
              height={40}
              style={{borderRadius: "50%"}}
              />
              <div>Adewumi Oloye</div>
            </div>
            <div>17</div>
            <div>14</div>
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1816_105684)">
<path d="M49.1401 26.7136C49.1401 39.2148 39.0058 49.349 26.5046 49.349C14.0034 49.349 3.86914 39.2148 3.86914 26.7136C3.86914 14.2124 14.0034 4.07812 26.5046 4.07812C39.0058 4.07812 49.1401 14.2124 49.1401 26.7136ZM10.6598 26.7136C10.6598 35.4644 17.7537 42.5584 26.5046 42.5584C35.2554 42.5584 42.3494 35.4644 42.3494 26.7136C42.3494 17.9627 35.2554 10.8688 26.5046 10.8688C17.7537 10.8688 10.6598 17.9627 10.6598 26.7136Z" fill="#EEEEEE"/>
</g>
<path d="M24.8887 7.82267C24.7312 5.95412 26.1244 4.285 27.9955 4.40852C31.0454 4.60986 34.0351 5.42771 36.7795 6.82577C40.5366 8.7398 43.6845 11.6652 45.8682 15.2724C48.0519 18.8795 49.1846 23.0248 49.1387 27.2412C49.0928 31.4575 47.8701 35.5773 45.6084 39.136C43.3467 42.6947 40.136 45.5509 36.338 47.3828C32.5401 49.2146 28.306 49.9491 24.113 49.5036C19.92 49.0581 15.9348 47.4502 12.6066 44.8612C10.1756 42.9702 8.16566 40.6106 6.68841 37.9348C5.78211 36.2932 6.70171 34.323 8.46034 33.6722C10.219 33.0214 12.144 33.9481 13.1539 35.5281C14.1217 37.0423 15.3445 38.3878 16.776 39.5013C19.1057 41.3136 21.8954 42.4391 24.8305 42.751C27.7656 43.0628 30.7295 42.5486 33.388 41.2664C36.0466 39.9841 38.2941 37.9847 39.8773 35.4936C41.4605 33.0025 42.3164 30.1187 42.3485 27.1673C42.3806 24.2158 41.5877 21.3141 40.0591 18.7891C38.5305 16.2641 36.327 14.2163 33.697 12.8765C32.0811 12.0533 30.3436 11.5174 28.5618 11.2841C26.7025 11.0407 25.0461 9.69123 24.8887 7.82267Z" fill="#009B07"/>
<path d="M22.9972 24.3213C22.5864 24.6798 22.2205 25.1205 21.8993 25.6433C21.5856 26.1661 21.3205 26.7226 21.1039 27.3126C20.8947 27.9027 20.7304 28.5002 20.6109 29.1052C20.4989 29.7101 20.4391 30.274 20.4317 30.7969H18.7287C18.8184 29.6243 19.091 28.4964 19.5466 27.4134C20.0097 26.3304 20.6146 25.3371 21.3615 24.4333H17.642V22.9545H22.9972V24.3213ZM25.2566 26.8421C25.2566 27.0661 25.264 27.3388 25.279 27.6599C25.2939 27.9736 25.3387 28.2798 25.4134 28.5786C25.4956 28.8699 25.6225 29.1201 25.7943 29.3292C25.9661 29.5384 26.2126 29.6429 26.5338 29.6429C26.8624 29.6429 27.1126 29.5384 27.2844 29.3292C27.4636 29.1201 27.5906 28.8699 27.6653 28.5786C27.7475 28.2798 27.796 27.9736 27.8109 27.6599C27.8259 27.3388 27.8333 27.0661 27.8333 26.8421C27.8333 26.7076 27.8296 26.547 27.8221 26.3603C27.8221 26.1661 27.8072 25.9682 27.7773 25.7665C27.7549 25.5649 27.7176 25.367 27.6653 25.1728C27.6205 24.9711 27.5495 24.7918 27.4524 24.635C27.3553 24.4782 27.2321 24.3512 27.0827 24.2541C26.9333 24.157 26.7504 24.1084 26.5338 24.1084C26.3172 24.1084 26.1342 24.157 25.9848 24.2541C25.8429 24.3512 25.7234 24.4782 25.6263 24.635C25.5366 24.7918 25.4657 24.9711 25.4134 25.1728C25.3611 25.367 25.3238 25.5649 25.3014 25.7665C25.279 25.9682 25.264 26.1661 25.2566 26.3603C25.2566 26.547 25.2566 26.7076 25.2566 26.8421ZM23.6657 26.8421C23.6657 26.0802 23.7404 25.4416 23.8897 24.9263C24.0466 24.4035 24.2557 23.9852 24.5171 23.6715C24.7786 23.3578 25.081 23.1337 25.4246 22.9993C25.7757 22.8649 26.1454 22.7976 26.5338 22.7976C26.9296 22.7976 27.2993 22.8649 27.6429 22.9993C27.9939 23.1337 28.3002 23.3578 28.5616 23.6715C28.8305 23.9852 29.0396 24.4035 29.189 24.9263C29.3458 25.4416 29.4242 26.0802 29.4242 26.8421C29.4242 27.6263 29.3458 28.2836 29.189 28.8139C29.0396 29.3367 28.8305 29.755 28.5616 30.0687C28.3002 30.3823 27.9939 30.6064 27.6429 30.7409C27.2993 30.8753 26.9296 30.9425 26.5338 30.9425C26.1454 30.9425 25.7757 30.8753 25.4246 30.7409C25.081 30.6064 24.7786 30.3823 24.5171 30.0687C24.2557 29.755 24.0466 29.3367 23.8897 28.8139C23.7404 28.2836 23.6657 27.6263 23.6657 26.8421ZM37.4197 28.7579C37.4197 28.8774 37.4234 29.0155 37.4309 29.1724C37.4384 29.3292 37.4645 29.4786 37.5093 29.6205C37.5541 29.755 37.6251 29.8707 37.7222 29.9678C37.8193 30.0649 37.9575 30.1135 38.1367 30.1135C38.3085 30.1135 38.4429 30.0649 38.54 29.9678C38.6446 29.8707 38.7193 29.755 38.7641 29.6205C38.8164 29.4786 38.8463 29.333 38.8537 29.1836C38.8687 29.0267 38.8761 28.8886 38.8761 28.7691C38.8761 28.657 38.8687 28.5263 38.8537 28.3769C38.8463 28.2201 38.8201 28.0744 38.7753 27.94C38.7305 27.7981 38.6595 27.6786 38.5624 27.5815C38.4728 27.4769 38.3458 27.4246 38.1815 27.4246C38.0023 27.4246 37.8604 27.4695 37.7558 27.5591C37.6587 27.6487 37.584 27.7608 37.5317 27.8952C37.4795 28.0296 37.4458 28.1753 37.4309 28.3321C37.4234 28.489 37.4197 28.6309 37.4197 28.7579ZM36.277 28.7467C36.277 28.4404 36.3143 28.1566 36.389 27.8952C36.4637 27.6338 36.5794 27.406 36.7363 27.2118C36.8931 27.0176 37.0911 26.8645 37.3301 26.7524C37.5691 26.6404 37.8529 26.5844 38.1815 26.5844C38.5326 26.5844 38.8239 26.6441 39.0554 26.7636C39.2869 26.8757 39.4737 27.0325 39.6156 27.2342C39.7649 27.4284 39.8695 27.6599 39.9293 27.9288C39.989 28.1977 40.0189 28.4852 40.0189 28.7915C40.0189 29.0977 39.9815 29.3815 39.9069 29.6429C39.8322 29.9043 39.7164 30.1321 39.5596 30.3263C39.4102 30.5205 39.216 30.6736 38.977 30.7857C38.738 30.8902 38.4541 30.9425 38.1255 30.9425C37.7819 30.9425 37.4907 30.8865 37.2517 30.7745C37.0201 30.6624 36.8297 30.5093 36.6803 30.3151C36.5384 30.1135 36.4338 29.8782 36.3666 29.6093C36.3068 29.3404 36.277 29.0529 36.277 28.7467ZM37.1396 22.708H38.0919L33.4761 31.0321H32.5014L37.1396 22.708ZM31.6387 25.0383C31.6387 25.1578 31.6425 25.2923 31.6499 25.4416C31.6574 25.591 31.6836 25.7329 31.7284 25.8674C31.7732 25.9943 31.8441 26.1026 31.9412 26.1923C32.0383 26.2819 32.1765 26.3267 32.3558 26.3267C32.5275 26.3267 32.662 26.2819 32.7591 26.1923C32.8636 26.1026 32.9383 25.9943 32.9832 25.8674C33.0354 25.7329 33.0653 25.5948 33.0728 25.4528C33.0877 25.3035 33.0952 25.169 33.0952 25.0495C33.0952 24.9375 33.0877 24.8031 33.0728 24.6462C33.0653 24.4819 33.0392 24.325 32.9944 24.1757C32.9495 24.0263 32.8786 23.8993 32.7815 23.7947C32.6919 23.6902 32.5649 23.6379 32.4006 23.6379C32.2213 23.6379 32.0794 23.6864 31.9748 23.7835C31.8777 23.8806 31.8031 24.0001 31.7508 24.1421C31.6985 24.284 31.6649 24.4371 31.6499 24.6014C31.6425 24.7657 31.6387 24.9114 31.6387 25.0383ZM30.496 25.0159C30.496 24.7097 30.5333 24.4221 30.608 24.1533C30.6827 23.8844 30.7985 23.6491 30.9553 23.4474C31.1122 23.2458 31.3101 23.0889 31.5491 22.9769C31.7881 22.8574 32.0719 22.7976 32.4006 22.7976C32.7516 22.7976 33.0429 22.8574 33.2744 22.9769C33.506 23.0964 33.6927 23.2607 33.8346 23.4698C33.984 23.6715 34.0886 23.9105 34.1483 24.1869C34.2081 24.4632 34.2379 24.7545 34.2379 25.0607C34.2379 25.367 34.2006 25.6508 34.1259 25.9122C34.0512 26.1661 33.9354 26.3865 33.7786 26.5732C33.6292 26.7599 33.435 26.9056 33.196 27.0101C32.957 27.1147 32.6732 27.167 32.3446 27.167C32.001 27.167 31.7097 27.1147 31.4707 27.0101C31.2392 26.8981 31.0487 26.7487 30.8993 26.562C30.7574 26.3678 30.6528 26.14 30.5856 25.8786C30.5259 25.6097 30.496 25.3221 30.496 25.0159Z" fill="black"/>
<defs>
<filter id="filter0_d_1816_105684" x="0.51574" y="0.724724" width="51.9783" height="51.9763" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.3534" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1816_105684"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_105684"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_105684" result="shape"/>
</filter>
</defs>
</svg>

          </div>
          <div className="reports-home__charts__cases__table__body">
            <div className="reports-home__charts__cases__table__body__group">
              <Image
              className="reports-home__charts__cases__table__body__image"
              src="/assets/reports.png"
              width={40}
              height={40}
              style={{borderRadius: "50%"}}
              />
              <div>Emeka Ani</div>
            </div>
            <div>17</div>
            <div>14</div>
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1816_105699)">
<path d="M49.1401 26.7136C49.1401 39.2148 39.0058 49.349 26.5046 49.349C14.0034 49.349 3.86914 39.2148 3.86914 26.7136C3.86914 14.2124 14.0034 4.07812 26.5046 4.07812C39.0058 4.07812 49.1401 14.2124 49.1401 26.7136ZM10.6598 26.7136C10.6598 35.4644 17.7537 42.5584 26.5046 42.5584C35.2554 42.5584 42.3494 35.4644 42.3494 26.7136C42.3494 17.9627 35.2554 10.8688 26.5046 10.8688C17.7537 10.8688 10.6598 17.9627 10.6598 26.7136Z" fill="#EEEEEE"/>
</g>
<path d="M24.353 7.87538C24.1433 6.01196 25.4894 4.30447 27.3632 4.37559C31.9507 4.54971 36.4066 6.11704 40.1171 8.90993C44.7376 12.3878 47.8517 17.5023 48.8203 23.2037C49.7889 28.9052 48.5385 34.7611 45.3257 39.5698C42.7457 43.4313 39.0574 46.3822 34.7848 48.0615C33.0396 48.7475 31.2051 47.5803 30.7877 45.7522C30.3702 43.9241 31.5386 42.1354 33.2361 41.3387C35.8293 40.1217 38.0645 38.2143 39.6794 35.7973C41.9283 32.4312 42.8036 28.3321 42.1256 24.3411C41.4476 20.35 39.2677 16.7699 36.0334 14.3354C33.7109 12.5873 30.9712 11.5251 28.1215 11.2327C26.2561 11.0413 24.5627 9.7388 24.353 7.87538Z" fill="#FFC148"/>
<path d="M20.7005 24.9487H20.6669L18.6391 27.6711H20.7005V24.9487ZM20.7005 28.9819H17.3843V27.5255L20.7902 22.9545H22.213V27.6711H23.2549V28.9819H22.213V30.7969H20.7005V28.9819ZM29.2226 24.3213C28.8118 24.6798 28.4458 25.1205 28.1246 25.6433C27.8109 26.1661 27.5458 26.7226 27.3292 27.3126C27.1201 27.9027 26.9557 28.5002 26.8362 29.1052C26.7242 29.7101 26.6645 30.274 26.657 30.7969H24.9541C25.0437 29.6243 25.3163 28.4964 25.7719 27.4134C26.235 26.3304 26.84 25.3371 27.5869 24.4333H23.8673V22.9545H29.2226V24.3213ZM37.4197 28.7579C37.4197 28.8774 37.4234 29.0155 37.4309 29.1724C37.4384 29.3292 37.4645 29.4786 37.5093 29.6205C37.5541 29.755 37.6251 29.8707 37.7222 29.9678C37.8193 30.0649 37.9575 30.1135 38.1367 30.1135C38.3085 30.1135 38.4429 30.0649 38.54 29.9678C38.6446 29.8707 38.7193 29.755 38.7641 29.6205C38.8164 29.4786 38.8463 29.333 38.8537 29.1836C38.8687 29.0267 38.8761 28.8886 38.8761 28.7691C38.8761 28.657 38.8687 28.5263 38.8537 28.3769C38.8463 28.2201 38.8201 28.0744 38.7753 27.94C38.7305 27.7981 38.6595 27.6786 38.5624 27.5815C38.4728 27.4769 38.3458 27.4246 38.1815 27.4246C38.0023 27.4246 37.8604 27.4695 37.7558 27.5591C37.6587 27.6487 37.584 27.7608 37.5317 27.8952C37.4795 28.0296 37.4458 28.1753 37.4309 28.3321C37.4234 28.489 37.4197 28.6309 37.4197 28.7579ZM36.277 28.7467C36.277 28.4404 36.3143 28.1566 36.389 27.8952C36.4637 27.6338 36.5794 27.406 36.7363 27.2118C36.8931 27.0176 37.0911 26.8645 37.3301 26.7524C37.5691 26.6404 37.8529 26.5844 38.1815 26.5844C38.5326 26.5844 38.8239 26.6441 39.0554 26.7636C39.2869 26.8757 39.4737 27.0325 39.6156 27.2342C39.7649 27.4284 39.8695 27.6599 39.9293 27.9288C39.989 28.1977 40.0189 28.4852 40.0189 28.7915C40.0189 29.0977 39.9815 29.3815 39.9069 29.6429C39.8322 29.9043 39.7164 30.1321 39.5596 30.3263C39.4102 30.5205 39.216 30.6736 38.977 30.7857C38.738 30.8902 38.4541 30.9425 38.1255 30.9425C37.7819 30.9425 37.4907 30.8865 37.2517 30.7745C37.0201 30.6624 36.8297 30.5093 36.6803 30.3151C36.5384 30.1135 36.4338 29.8782 36.3666 29.6093C36.3068 29.3404 36.277 29.0529 36.277 28.7467ZM37.1396 22.708H38.0919L33.4761 31.0321H32.5014L37.1396 22.708ZM31.6387 25.0383C31.6387 25.1578 31.6425 25.2923 31.6499 25.4416C31.6574 25.591 31.6836 25.7329 31.7284 25.8674C31.7732 25.9943 31.8441 26.1026 31.9412 26.1923C32.0383 26.2819 32.1765 26.3267 32.3558 26.3267C32.5275 26.3267 32.662 26.2819 32.7591 26.1923C32.8636 26.1026 32.9383 25.9943 32.9832 25.8674C33.0354 25.7329 33.0653 25.5948 33.0728 25.4528C33.0877 25.3035 33.0952 25.169 33.0952 25.0495C33.0952 24.9375 33.0877 24.8031 33.0728 24.6462C33.0653 24.4819 33.0392 24.325 32.9944 24.1757C32.9495 24.0263 32.8786 23.8993 32.7815 23.7947C32.6919 23.6902 32.5649 23.6379 32.4006 23.6379C32.2213 23.6379 32.0794 23.6864 31.9748 23.7835C31.8777 23.8806 31.8031 24.0001 31.7508 24.1421C31.6985 24.284 31.6649 24.4371 31.6499 24.6014C31.6425 24.7657 31.6387 24.9114 31.6387 25.0383ZM30.496 25.0159C30.496 24.7097 30.5333 24.4221 30.608 24.1533C30.6827 23.8844 30.7985 23.6491 30.9553 23.4474C31.1122 23.2458 31.3101 23.0889 31.5491 22.9769C31.7881 22.8574 32.0719 22.7976 32.4006 22.7976C32.7516 22.7976 33.0429 22.8574 33.2744 22.9769C33.506 23.0964 33.6927 23.2607 33.8346 23.4698C33.984 23.6715 34.0886 23.9105 34.1483 24.1869C34.2081 24.4632 34.2379 24.7545 34.2379 25.0607C34.2379 25.367 34.2006 25.6508 34.1259 25.9122C34.0512 26.1661 33.9354 26.3865 33.7786 26.5732C33.6292 26.7599 33.435 26.9056 33.196 27.0101C32.957 27.1147 32.6732 27.167 32.3446 27.167C32.001 27.167 31.7097 27.1147 31.4707 27.0101C31.2392 26.8981 31.0487 26.7487 30.8993 26.562C30.7574 26.3678 30.6528 26.14 30.5856 25.8786C30.5259 25.6097 30.496 25.3221 30.496 25.0159Z" fill="black"/>
<defs>
<filter id="filter0_d_1816_105699" x="0.51574" y="0.724724" width="51.9783" height="51.9763" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.3534" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1816_105699"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_105699"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_105699" result="shape"/>
</filter>
</defs>
</svg>

          </div>
          <div className="reports-home__charts__cases__table__body">
            <div className="reports-home__charts__cases__table__body__group">
              <Image
              className="reports-home__charts__cases__table__body__image"
              src="/assets/reports.png"
              width={40}
              height={40}
              style={{borderRadius: "50%"}}
              />
              <div>Ahmed Wale</div>
            </div>
            <div>17</div>
            <div>14</div>
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1816_105694)">
<path d="M49.1401 26.7136C49.1401 39.2148 39.0058 49.349 26.5046 49.349C14.0034 49.349 3.86914 39.2148 3.86914 26.7136C3.86914 14.2124 14.0034 4.07812 26.5046 4.07812C39.0058 4.07812 49.1401 14.2124 49.1401 26.7136ZM10.6598 26.7136C10.6598 35.4644 17.7537 42.5584 26.5046 42.5584C35.2554 42.5584 42.3494 35.4644 42.3494 26.7136C42.3494 17.9627 35.2554 10.8688 26.5046 10.8688C17.7537 10.8688 10.6598 17.9627 10.6598 26.7136Z" fill="#EEEEEE"/>
</g>
<path d="M26.5046 7.75469C26.5046 5.87951 28.0331 4.33332 29.8872 4.61355C32.3454 4.98507 34.7333 5.7602 36.9524 6.91481C40.1791 8.59369 42.9537 11.0254 45.0412 14.0041C47.1287 16.9828 48.4676 20.4207 48.9446 24.0266C49.2726 26.5065 49.1863 29.0157 48.6967 31.453C48.3274 33.2915 46.3524 34.2006 44.5898 33.5606C42.8271 32.9207 41.957 30.9695 42.2074 29.1111C42.3943 27.7244 42.3974 26.3141 42.2126 24.9171C41.8787 22.3929 40.9415 19.9864 39.4802 17.9013C38.019 15.8163 36.0768 14.114 33.8181 12.9388C32.5679 12.2884 31.2413 11.81 29.874 11.5124C28.0417 11.1137 26.5046 9.62988 26.5046 7.75469Z" fill="#E70000"/>
<path d="M17.5544 26.1251C17.7262 26.14 17.9092 26.14 18.1033 26.1251C18.2975 26.1101 18.4768 26.069 18.6411 26.0018C18.8129 25.9271 18.9511 25.8226 19.0556 25.6881C19.1677 25.5537 19.2237 25.3744 19.2237 25.1504C19.2237 24.8143 19.1117 24.5566 18.8876 24.3773C18.6635 24.1981 18.4058 24.1084 18.1145 24.1084C17.7112 24.1084 17.405 24.2429 17.1959 24.5118C16.9942 24.7732 16.8971 25.1055 16.9046 25.5089H15.3921C15.4071 25.1055 15.478 24.7396 15.605 24.4109C15.7394 24.0748 15.9224 23.7873 16.154 23.5483C16.393 23.3093 16.6768 23.1263 17.0054 22.9993C17.334 22.8649 17.7 22.7976 18.1033 22.7976C18.417 22.7976 18.7307 22.8462 19.0444 22.9433C19.3581 23.0329 19.6382 23.1711 19.8847 23.3578C20.1386 23.5445 20.344 23.7723 20.5009 24.0412C20.6577 24.3101 20.7361 24.6201 20.7361 24.9711C20.7361 25.352 20.6428 25.6881 20.4561 25.9794C20.2768 26.2707 20.0042 26.4686 19.6382 26.5732V26.5956C20.0714 26.6927 20.4112 26.9018 20.6577 27.223C20.9042 27.5442 21.0274 27.9288 21.0274 28.3769C21.0274 28.7877 20.9453 29.1537 20.781 29.4749C20.6241 29.796 20.4112 30.0649 20.1424 30.2815C19.8735 30.4981 19.5635 30.6624 19.2125 30.7745C18.8614 30.8865 18.4955 30.9425 18.1145 30.9425C17.6739 30.9425 17.2706 30.879 16.9046 30.7521C16.5461 30.6251 16.2398 30.4421 15.9859 30.2031C15.732 29.9566 15.534 29.6579 15.3921 29.3068C15.2577 28.9558 15.1942 28.5525 15.2017 28.0969H16.7141C16.7216 28.306 16.7552 28.5076 16.815 28.7018C16.8747 28.8886 16.9606 29.0529 17.0726 29.1948C17.1847 29.3292 17.3228 29.4375 17.4872 29.5197C17.6589 29.6018 17.8606 29.6429 18.0921 29.6429C18.4506 29.6429 18.7531 29.5346 18.9996 29.318C19.2461 29.094 19.3693 28.7915 19.3693 28.4105C19.3693 28.1118 19.3096 27.884 19.1901 27.7271C19.078 27.5703 18.9324 27.4583 18.7531 27.391C18.5739 27.3163 18.376 27.2753 18.1594 27.2678C17.9502 27.2529 17.7486 27.2454 17.5544 27.2454V26.1251ZM24.7208 24.9487H24.6872L22.6594 27.6711H24.7208V24.9487ZM24.7208 28.9819H21.4046V27.5255L24.8104 22.9545H26.2333V27.6711H27.2752V28.9819H26.2333V30.7969H24.7208V28.9819ZM35.2146 28.7579C35.2146 28.8774 35.2184 29.0155 35.2258 29.1724C35.2333 29.3292 35.2594 29.4786 35.3043 29.6205C35.3491 29.755 35.42 29.8707 35.5171 29.9678C35.6142 30.0649 35.7524 30.1135 35.9316 30.1135C36.1034 30.1135 36.2379 30.0649 36.335 29.9678C36.4395 29.8707 36.5142 29.755 36.559 29.6205C36.6113 29.4786 36.6412 29.333 36.6487 29.1836C36.6636 29.0267 36.6711 28.8886 36.6711 28.7691C36.6711 28.657 36.6636 28.5263 36.6487 28.3769C36.6412 28.2201 36.615 28.0744 36.5702 27.94C36.5254 27.7981 36.4545 27.6786 36.3574 27.5815C36.2677 27.4769 36.1408 27.4246 35.9765 27.4246C35.7972 27.4246 35.6553 27.4695 35.5507 27.5591C35.4536 27.6487 35.3789 27.7608 35.3267 27.8952C35.2744 28.0296 35.2408 28.1753 35.2258 28.3321C35.2184 28.489 35.2146 28.6309 35.2146 28.7579ZM34.0719 28.7467C34.0719 28.4404 34.1092 28.1566 34.1839 27.8952C34.2586 27.6338 34.3744 27.406 34.5312 27.2118C34.6881 27.0176 34.886 26.8645 35.125 26.7524C35.364 26.6404 35.6478 26.5844 35.9765 26.5844C36.3275 26.5844 36.6188 26.6441 36.8503 26.7636C37.0819 26.8757 37.2686 27.0325 37.4105 27.2342C37.5599 27.4284 37.6644 27.6599 37.7242 27.9288C37.7839 28.1977 37.8138 28.4852 37.8138 28.7915C37.8138 29.0977 37.7765 29.3815 37.7018 29.6429C37.6271 29.9043 37.5113 30.1321 37.3545 30.3263C37.2051 30.5205 37.0109 30.6736 36.7719 30.7857C36.5329 30.8902 36.2491 30.9425 35.9204 30.9425C35.5769 30.9425 35.2856 30.8865 35.0466 30.7745C34.815 30.6624 34.6246 30.5093 34.4752 30.3151C34.3333 30.1135 34.2287 29.8782 34.1615 29.6093C34.1018 29.3404 34.0719 29.0529 34.0719 28.7467ZM34.9345 22.708H35.8868L31.271 31.0321H30.2963L34.9345 22.708ZM29.4337 25.0383C29.4337 25.1578 29.4374 25.2923 29.4449 25.4416C29.4523 25.591 29.4785 25.7329 29.5233 25.8674C29.5681 25.9943 29.6391 26.1026 29.7362 26.1923C29.8333 26.2819 29.9714 26.3267 30.1507 26.3267C30.3225 26.3267 30.4569 26.2819 30.554 26.1923C30.6586 26.1026 30.7333 25.9943 30.7781 25.8674C30.8304 25.7329 30.8602 25.5948 30.8677 25.4528C30.8826 25.3035 30.8901 25.169 30.8901 25.0495C30.8901 24.9375 30.8826 24.8031 30.8677 24.6462C30.8602 24.4819 30.8341 24.325 30.7893 24.1757C30.7445 24.0263 30.6735 23.8993 30.5764 23.7947C30.4868 23.6902 30.3598 23.6379 30.1955 23.6379C30.0162 23.6379 29.8743 23.6864 29.7698 23.7835C29.6727 23.8806 29.598 24.0001 29.5457 24.1421C29.4934 24.284 29.4598 24.4371 29.4449 24.6014C29.4374 24.7657 29.4337 24.9114 29.4337 25.0383ZM28.2909 25.0159C28.2909 24.7097 28.3283 24.4221 28.403 24.1533C28.4776 23.8844 28.5934 23.6491 28.7503 23.4474C28.9071 23.2458 29.105 23.0889 29.344 22.9769C29.583 22.8574 29.8669 22.7976 30.1955 22.7976C30.5465 22.7976 30.8378 22.8574 31.0694 22.9769C31.3009 23.0964 31.4876 23.2607 31.6295 23.4698C31.7789 23.6715 31.8835 23.9105 31.9432 24.1869C32.003 24.4632 32.0329 24.7545 32.0329 25.0607C32.0329 25.367 31.9955 25.6508 31.9208 25.9122C31.8461 26.1661 31.7304 26.3865 31.5735 26.5732C31.4241 26.7599 31.2299 26.9056 30.9909 27.0101C30.7519 27.1147 30.4681 27.167 30.1395 27.167C29.7959 27.167 29.5046 27.1147 29.2656 27.0101C29.0341 26.8981 28.8436 26.7487 28.6942 26.562C28.5523 26.3678 28.4478 26.14 28.3805 25.8786C28.3208 25.6097 28.2909 25.3221 28.2909 25.0159Z" fill="black"/>
<defs>
<filter id="filter0_d_1816_105694" x="0.51574" y="0.724724" width="51.9783" height="51.9763" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.3534" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1816_105694"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_105694"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_105694" result="shape"/>
</filter>
</defs>
</svg>


          </div>
          <div className="reports-home__charts__cases__table__body">
            <div className="reports-home__charts__cases__table__body__group">
              <Image
              className="reports-home__charts__cases__table__body__image"
              src="/assets/reports.png"
              width={40}
              height={40}
              style={{borderRadius: "50%"}}
              />
              <div>Adewumi Oloye</div>
            </div>
            <div>17</div>
            <div>14</div>
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1816_105684)">
<path d="M49.1401 26.7136C49.1401 39.2148 39.0058 49.349 26.5046 49.349C14.0034 49.349 3.86914 39.2148 3.86914 26.7136C3.86914 14.2124 14.0034 4.07812 26.5046 4.07812C39.0058 4.07812 49.1401 14.2124 49.1401 26.7136ZM10.6598 26.7136C10.6598 35.4644 17.7537 42.5584 26.5046 42.5584C35.2554 42.5584 42.3494 35.4644 42.3494 26.7136C42.3494 17.9627 35.2554 10.8688 26.5046 10.8688C17.7537 10.8688 10.6598 17.9627 10.6598 26.7136Z" fill="#EEEEEE"/>
</g>
<path d="M24.8887 7.82267C24.7312 5.95412 26.1244 4.285 27.9955 4.40852C31.0454 4.60986 34.0351 5.42771 36.7795 6.82577C40.5366 8.7398 43.6845 11.6652 45.8682 15.2724C48.0519 18.8795 49.1846 23.0248 49.1387 27.2412C49.0928 31.4575 47.8701 35.5773 45.6084 39.136C43.3467 42.6947 40.136 45.5509 36.338 47.3828C32.5401 49.2146 28.306 49.9491 24.113 49.5036C19.92 49.0581 15.9348 47.4502 12.6066 44.8612C10.1756 42.9702 8.16566 40.6106 6.68841 37.9348C5.78211 36.2932 6.70171 34.323 8.46034 33.6722C10.219 33.0214 12.144 33.9481 13.1539 35.5281C14.1217 37.0423 15.3445 38.3878 16.776 39.5013C19.1057 41.3136 21.8954 42.4391 24.8305 42.751C27.7656 43.0628 30.7295 42.5486 33.388 41.2664C36.0466 39.9841 38.2941 37.9847 39.8773 35.4936C41.4605 33.0025 42.3164 30.1187 42.3485 27.1673C42.3806 24.2158 41.5877 21.3141 40.0591 18.7891C38.5305 16.2641 36.327 14.2163 33.697 12.8765C32.0811 12.0533 30.3436 11.5174 28.5618 11.2841C26.7025 11.0407 25.0461 9.69123 24.8887 7.82267Z" fill="#009B07"/>
<path d="M22.9972 24.3213C22.5864 24.6798 22.2205 25.1205 21.8993 25.6433C21.5856 26.1661 21.3205 26.7226 21.1039 27.3126C20.8947 27.9027 20.7304 28.5002 20.6109 29.1052C20.4989 29.7101 20.4391 30.274 20.4317 30.7969H18.7287C18.8184 29.6243 19.091 28.4964 19.5466 27.4134C20.0097 26.3304 20.6146 25.3371 21.3615 24.4333H17.642V22.9545H22.9972V24.3213ZM25.2566 26.8421C25.2566 27.0661 25.264 27.3388 25.279 27.6599C25.2939 27.9736 25.3387 28.2798 25.4134 28.5786C25.4956 28.8699 25.6225 29.1201 25.7943 29.3292C25.9661 29.5384 26.2126 29.6429 26.5338 29.6429C26.8624 29.6429 27.1126 29.5384 27.2844 29.3292C27.4636 29.1201 27.5906 28.8699 27.6653 28.5786C27.7475 28.2798 27.796 27.9736 27.8109 27.6599C27.8259 27.3388 27.8333 27.0661 27.8333 26.8421C27.8333 26.7076 27.8296 26.547 27.8221 26.3603C27.8221 26.1661 27.8072 25.9682 27.7773 25.7665C27.7549 25.5649 27.7176 25.367 27.6653 25.1728C27.6205 24.9711 27.5495 24.7918 27.4524 24.635C27.3553 24.4782 27.2321 24.3512 27.0827 24.2541C26.9333 24.157 26.7504 24.1084 26.5338 24.1084C26.3172 24.1084 26.1342 24.157 25.9848 24.2541C25.8429 24.3512 25.7234 24.4782 25.6263 24.635C25.5366 24.7918 25.4657 24.9711 25.4134 25.1728C25.3611 25.367 25.3238 25.5649 25.3014 25.7665C25.279 25.9682 25.264 26.1661 25.2566 26.3603C25.2566 26.547 25.2566 26.7076 25.2566 26.8421ZM23.6657 26.8421C23.6657 26.0802 23.7404 25.4416 23.8897 24.9263C24.0466 24.4035 24.2557 23.9852 24.5171 23.6715C24.7786 23.3578 25.081 23.1337 25.4246 22.9993C25.7757 22.8649 26.1454 22.7976 26.5338 22.7976C26.9296 22.7976 27.2993 22.8649 27.6429 22.9993C27.9939 23.1337 28.3002 23.3578 28.5616 23.6715C28.8305 23.9852 29.0396 24.4035 29.189 24.9263C29.3458 25.4416 29.4242 26.0802 29.4242 26.8421C29.4242 27.6263 29.3458 28.2836 29.189 28.8139C29.0396 29.3367 28.8305 29.755 28.5616 30.0687C28.3002 30.3823 27.9939 30.6064 27.6429 30.7409C27.2993 30.8753 26.9296 30.9425 26.5338 30.9425C26.1454 30.9425 25.7757 30.8753 25.4246 30.7409C25.081 30.6064 24.7786 30.3823 24.5171 30.0687C24.2557 29.755 24.0466 29.3367 23.8897 28.8139C23.7404 28.2836 23.6657 27.6263 23.6657 26.8421ZM37.4197 28.7579C37.4197 28.8774 37.4234 29.0155 37.4309 29.1724C37.4384 29.3292 37.4645 29.4786 37.5093 29.6205C37.5541 29.755 37.6251 29.8707 37.7222 29.9678C37.8193 30.0649 37.9575 30.1135 38.1367 30.1135C38.3085 30.1135 38.4429 30.0649 38.54 29.9678C38.6446 29.8707 38.7193 29.755 38.7641 29.6205C38.8164 29.4786 38.8463 29.333 38.8537 29.1836C38.8687 29.0267 38.8761 28.8886 38.8761 28.7691C38.8761 28.657 38.8687 28.5263 38.8537 28.3769C38.8463 28.2201 38.8201 28.0744 38.7753 27.94C38.7305 27.7981 38.6595 27.6786 38.5624 27.5815C38.4728 27.4769 38.3458 27.4246 38.1815 27.4246C38.0023 27.4246 37.8604 27.4695 37.7558 27.5591C37.6587 27.6487 37.584 27.7608 37.5317 27.8952C37.4795 28.0296 37.4458 28.1753 37.4309 28.3321C37.4234 28.489 37.4197 28.6309 37.4197 28.7579ZM36.277 28.7467C36.277 28.4404 36.3143 28.1566 36.389 27.8952C36.4637 27.6338 36.5794 27.406 36.7363 27.2118C36.8931 27.0176 37.0911 26.8645 37.3301 26.7524C37.5691 26.6404 37.8529 26.5844 38.1815 26.5844C38.5326 26.5844 38.8239 26.6441 39.0554 26.7636C39.2869 26.8757 39.4737 27.0325 39.6156 27.2342C39.7649 27.4284 39.8695 27.6599 39.9293 27.9288C39.989 28.1977 40.0189 28.4852 40.0189 28.7915C40.0189 29.0977 39.9815 29.3815 39.9069 29.6429C39.8322 29.9043 39.7164 30.1321 39.5596 30.3263C39.4102 30.5205 39.216 30.6736 38.977 30.7857C38.738 30.8902 38.4541 30.9425 38.1255 30.9425C37.7819 30.9425 37.4907 30.8865 37.2517 30.7745C37.0201 30.6624 36.8297 30.5093 36.6803 30.3151C36.5384 30.1135 36.4338 29.8782 36.3666 29.6093C36.3068 29.3404 36.277 29.0529 36.277 28.7467ZM37.1396 22.708H38.0919L33.4761 31.0321H32.5014L37.1396 22.708ZM31.6387 25.0383C31.6387 25.1578 31.6425 25.2923 31.6499 25.4416C31.6574 25.591 31.6836 25.7329 31.7284 25.8674C31.7732 25.9943 31.8441 26.1026 31.9412 26.1923C32.0383 26.2819 32.1765 26.3267 32.3558 26.3267C32.5275 26.3267 32.662 26.2819 32.7591 26.1923C32.8636 26.1026 32.9383 25.9943 32.9832 25.8674C33.0354 25.7329 33.0653 25.5948 33.0728 25.4528C33.0877 25.3035 33.0952 25.169 33.0952 25.0495C33.0952 24.9375 33.0877 24.8031 33.0728 24.6462C33.0653 24.4819 33.0392 24.325 32.9944 24.1757C32.9495 24.0263 32.8786 23.8993 32.7815 23.7947C32.6919 23.6902 32.5649 23.6379 32.4006 23.6379C32.2213 23.6379 32.0794 23.6864 31.9748 23.7835C31.8777 23.8806 31.8031 24.0001 31.7508 24.1421C31.6985 24.284 31.6649 24.4371 31.6499 24.6014C31.6425 24.7657 31.6387 24.9114 31.6387 25.0383ZM30.496 25.0159C30.496 24.7097 30.5333 24.4221 30.608 24.1533C30.6827 23.8844 30.7985 23.6491 30.9553 23.4474C31.1122 23.2458 31.3101 23.0889 31.5491 22.9769C31.7881 22.8574 32.0719 22.7976 32.4006 22.7976C32.7516 22.7976 33.0429 22.8574 33.2744 22.9769C33.506 23.0964 33.6927 23.2607 33.8346 23.4698C33.984 23.6715 34.0886 23.9105 34.1483 24.1869C34.2081 24.4632 34.2379 24.7545 34.2379 25.0607C34.2379 25.367 34.2006 25.6508 34.1259 25.9122C34.0512 26.1661 33.9354 26.3865 33.7786 26.5732C33.6292 26.7599 33.435 26.9056 33.196 27.0101C32.957 27.1147 32.6732 27.167 32.3446 27.167C32.001 27.167 31.7097 27.1147 31.4707 27.0101C31.2392 26.8981 31.0487 26.7487 30.8993 26.562C30.7574 26.3678 30.6528 26.14 30.5856 25.8786C30.5259 25.6097 30.496 25.3221 30.496 25.0159Z" fill="black"/>
<defs>
<filter id="filter0_d_1816_105684" x="0.51574" y="0.724724" width="51.9783" height="51.9763" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.3534" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1816_105684"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_105684"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_105684" result="shape"/>
</filter>
</defs>
</svg>

          </div>
          <div className="reports-home__charts__cases__table__body">
            <div className="reports-home__charts__cases__table__body__group">
              <Image
              className="reports-home__charts__cases__table__body__image"
              src="/assets/reports.png"
              width={40}
              height={40}
              style={{borderRadius: "50%"}}
              />
              <div>Adewumi Oloye</div>
            </div>
            <div>17</div>
            <div>14</div>
            <svg width="53" height="53" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_1816_105684)">
<path d="M49.1401 26.7136C49.1401 39.2148 39.0058 49.349 26.5046 49.349C14.0034 49.349 3.86914 39.2148 3.86914 26.7136C3.86914 14.2124 14.0034 4.07812 26.5046 4.07812C39.0058 4.07812 49.1401 14.2124 49.1401 26.7136ZM10.6598 26.7136C10.6598 35.4644 17.7537 42.5584 26.5046 42.5584C35.2554 42.5584 42.3494 35.4644 42.3494 26.7136C42.3494 17.9627 35.2554 10.8688 26.5046 10.8688C17.7537 10.8688 10.6598 17.9627 10.6598 26.7136Z" fill="#EEEEEE"/>
</g>
<path d="M24.8887 7.82267C24.7312 5.95412 26.1244 4.285 27.9955 4.40852C31.0454 4.60986 34.0351 5.42771 36.7795 6.82577C40.5366 8.7398 43.6845 11.6652 45.8682 15.2724C48.0519 18.8795 49.1846 23.0248 49.1387 27.2412C49.0928 31.4575 47.8701 35.5773 45.6084 39.136C43.3467 42.6947 40.136 45.5509 36.338 47.3828C32.5401 49.2146 28.306 49.9491 24.113 49.5036C19.92 49.0581 15.9348 47.4502 12.6066 44.8612C10.1756 42.9702 8.16566 40.6106 6.68841 37.9348C5.78211 36.2932 6.70171 34.323 8.46034 33.6722C10.219 33.0214 12.144 33.9481 13.1539 35.5281C14.1217 37.0423 15.3445 38.3878 16.776 39.5013C19.1057 41.3136 21.8954 42.4391 24.8305 42.751C27.7656 43.0628 30.7295 42.5486 33.388 41.2664C36.0466 39.9841 38.2941 37.9847 39.8773 35.4936C41.4605 33.0025 42.3164 30.1187 42.3485 27.1673C42.3806 24.2158 41.5877 21.3141 40.0591 18.7891C38.5305 16.2641 36.327 14.2163 33.697 12.8765C32.0811 12.0533 30.3436 11.5174 28.5618 11.2841C26.7025 11.0407 25.0461 9.69123 24.8887 7.82267Z" fill="#009B07"/>
<path d="M22.9972 24.3213C22.5864 24.6798 22.2205 25.1205 21.8993 25.6433C21.5856 26.1661 21.3205 26.7226 21.1039 27.3126C20.8947 27.9027 20.7304 28.5002 20.6109 29.1052C20.4989 29.7101 20.4391 30.274 20.4317 30.7969H18.7287C18.8184 29.6243 19.091 28.4964 19.5466 27.4134C20.0097 26.3304 20.6146 25.3371 21.3615 24.4333H17.642V22.9545H22.9972V24.3213ZM25.2566 26.8421C25.2566 27.0661 25.264 27.3388 25.279 27.6599C25.2939 27.9736 25.3387 28.2798 25.4134 28.5786C25.4956 28.8699 25.6225 29.1201 25.7943 29.3292C25.9661 29.5384 26.2126 29.6429 26.5338 29.6429C26.8624 29.6429 27.1126 29.5384 27.2844 29.3292C27.4636 29.1201 27.5906 28.8699 27.6653 28.5786C27.7475 28.2798 27.796 27.9736 27.8109 27.6599C27.8259 27.3388 27.8333 27.0661 27.8333 26.8421C27.8333 26.7076 27.8296 26.547 27.8221 26.3603C27.8221 26.1661 27.8072 25.9682 27.7773 25.7665C27.7549 25.5649 27.7176 25.367 27.6653 25.1728C27.6205 24.9711 27.5495 24.7918 27.4524 24.635C27.3553 24.4782 27.2321 24.3512 27.0827 24.2541C26.9333 24.157 26.7504 24.1084 26.5338 24.1084C26.3172 24.1084 26.1342 24.157 25.9848 24.2541C25.8429 24.3512 25.7234 24.4782 25.6263 24.635C25.5366 24.7918 25.4657 24.9711 25.4134 25.1728C25.3611 25.367 25.3238 25.5649 25.3014 25.7665C25.279 25.9682 25.264 26.1661 25.2566 26.3603C25.2566 26.547 25.2566 26.7076 25.2566 26.8421ZM23.6657 26.8421C23.6657 26.0802 23.7404 25.4416 23.8897 24.9263C24.0466 24.4035 24.2557 23.9852 24.5171 23.6715C24.7786 23.3578 25.081 23.1337 25.4246 22.9993C25.7757 22.8649 26.1454 22.7976 26.5338 22.7976C26.9296 22.7976 27.2993 22.8649 27.6429 22.9993C27.9939 23.1337 28.3002 23.3578 28.5616 23.6715C28.8305 23.9852 29.0396 24.4035 29.189 24.9263C29.3458 25.4416 29.4242 26.0802 29.4242 26.8421C29.4242 27.6263 29.3458 28.2836 29.189 28.8139C29.0396 29.3367 28.8305 29.755 28.5616 30.0687C28.3002 30.3823 27.9939 30.6064 27.6429 30.7409C27.2993 30.8753 26.9296 30.9425 26.5338 30.9425C26.1454 30.9425 25.7757 30.8753 25.4246 30.7409C25.081 30.6064 24.7786 30.3823 24.5171 30.0687C24.2557 29.755 24.0466 29.3367 23.8897 28.8139C23.7404 28.2836 23.6657 27.6263 23.6657 26.8421ZM37.4197 28.7579C37.4197 28.8774 37.4234 29.0155 37.4309 29.1724C37.4384 29.3292 37.4645 29.4786 37.5093 29.6205C37.5541 29.755 37.6251 29.8707 37.7222 29.9678C37.8193 30.0649 37.9575 30.1135 38.1367 30.1135C38.3085 30.1135 38.4429 30.0649 38.54 29.9678C38.6446 29.8707 38.7193 29.755 38.7641 29.6205C38.8164 29.4786 38.8463 29.333 38.8537 29.1836C38.8687 29.0267 38.8761 28.8886 38.8761 28.7691C38.8761 28.657 38.8687 28.5263 38.8537 28.3769C38.8463 28.2201 38.8201 28.0744 38.7753 27.94C38.7305 27.7981 38.6595 27.6786 38.5624 27.5815C38.4728 27.4769 38.3458 27.4246 38.1815 27.4246C38.0023 27.4246 37.8604 27.4695 37.7558 27.5591C37.6587 27.6487 37.584 27.7608 37.5317 27.8952C37.4795 28.0296 37.4458 28.1753 37.4309 28.3321C37.4234 28.489 37.4197 28.6309 37.4197 28.7579ZM36.277 28.7467C36.277 28.4404 36.3143 28.1566 36.389 27.8952C36.4637 27.6338 36.5794 27.406 36.7363 27.2118C36.8931 27.0176 37.0911 26.8645 37.3301 26.7524C37.5691 26.6404 37.8529 26.5844 38.1815 26.5844C38.5326 26.5844 38.8239 26.6441 39.0554 26.7636C39.2869 26.8757 39.4737 27.0325 39.6156 27.2342C39.7649 27.4284 39.8695 27.6599 39.9293 27.9288C39.989 28.1977 40.0189 28.4852 40.0189 28.7915C40.0189 29.0977 39.9815 29.3815 39.9069 29.6429C39.8322 29.9043 39.7164 30.1321 39.5596 30.3263C39.4102 30.5205 39.216 30.6736 38.977 30.7857C38.738 30.8902 38.4541 30.9425 38.1255 30.9425C37.7819 30.9425 37.4907 30.8865 37.2517 30.7745C37.0201 30.6624 36.8297 30.5093 36.6803 30.3151C36.5384 30.1135 36.4338 29.8782 36.3666 29.6093C36.3068 29.3404 36.277 29.0529 36.277 28.7467ZM37.1396 22.708H38.0919L33.4761 31.0321H32.5014L37.1396 22.708ZM31.6387 25.0383C31.6387 25.1578 31.6425 25.2923 31.6499 25.4416C31.6574 25.591 31.6836 25.7329 31.7284 25.8674C31.7732 25.9943 31.8441 26.1026 31.9412 26.1923C32.0383 26.2819 32.1765 26.3267 32.3558 26.3267C32.5275 26.3267 32.662 26.2819 32.7591 26.1923C32.8636 26.1026 32.9383 25.9943 32.9832 25.8674C33.0354 25.7329 33.0653 25.5948 33.0728 25.4528C33.0877 25.3035 33.0952 25.169 33.0952 25.0495C33.0952 24.9375 33.0877 24.8031 33.0728 24.6462C33.0653 24.4819 33.0392 24.325 32.9944 24.1757C32.9495 24.0263 32.8786 23.8993 32.7815 23.7947C32.6919 23.6902 32.5649 23.6379 32.4006 23.6379C32.2213 23.6379 32.0794 23.6864 31.9748 23.7835C31.8777 23.8806 31.8031 24.0001 31.7508 24.1421C31.6985 24.284 31.6649 24.4371 31.6499 24.6014C31.6425 24.7657 31.6387 24.9114 31.6387 25.0383ZM30.496 25.0159C30.496 24.7097 30.5333 24.4221 30.608 24.1533C30.6827 23.8844 30.7985 23.6491 30.9553 23.4474C31.1122 23.2458 31.3101 23.0889 31.5491 22.9769C31.7881 22.8574 32.0719 22.7976 32.4006 22.7976C32.7516 22.7976 33.0429 22.8574 33.2744 22.9769C33.506 23.0964 33.6927 23.2607 33.8346 23.4698C33.984 23.6715 34.0886 23.9105 34.1483 24.1869C34.2081 24.4632 34.2379 24.7545 34.2379 25.0607C34.2379 25.367 34.2006 25.6508 34.1259 25.9122C34.0512 26.1661 33.9354 26.3865 33.7786 26.5732C33.6292 26.7599 33.435 26.9056 33.196 27.0101C32.957 27.1147 32.6732 27.167 32.3446 27.167C32.001 27.167 31.7097 27.1147 31.4707 27.0101C31.2392 26.8981 31.0487 26.7487 30.8993 26.562C30.7574 26.3678 30.6528 26.14 30.5856 25.8786C30.5259 25.6097 30.496 25.3221 30.496 25.0159Z" fill="black"/>
<defs>
<filter id="filter0_d_1816_105684" x="0.51574" y="0.724724" width="51.9783" height="51.9763" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3.3534" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_1816_105684"/>
<feOffset/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.02 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1816_105684"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1816_105684" result="shape"/>
</filter>
</defs>
</svg>

          </div>
    </div>

<button className="reports-home__charts__cases__button">
View All
  </button> 

  <svg className="reports-home__charts__cases__svg" width="4" height="42" viewBox="0 0 4 42" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H1C2.65685 0 4 1.34315 4 3V39C4 40.6569 2.65685 42 1 42H0V0Z" fill="#FF0000"/>
</svg>
   
        </div>
      </div>
    </div>
  );
}
