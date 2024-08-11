"use client"
export default function FinanceNav() {
    return (
        <div className="finance-nav">
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
          Financial Module
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
        <div>Overview</div>
      </div>
    )
}