"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  // const [activeNav, setActiveNav] = useState("");

  return (
    <header className="header">
      <div className="header__logo">LOGO</div>
      <nav className="header__nav">
        <div>
          <div>Home</div>
        </div>
        <div>
          <div>Events</div>
        </div>
        <div>
          <div>Features</div>
        </div>
        <div>
          <div>About Us</div>
        </div>
        <div>
          <div>FAQs</div>
        </div>
      </nav>
      <div className="header__profile">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0232 3.39502C10.1615 3.39502 7.02319 6.53335 7.02319 10.395V13.7667C7.02319 14.4784 6.71986 15.5634 6.35819 16.17L5.01653 18.3984C4.18819 19.775 4.75986 21.3034 6.27653 21.8167C11.3049 23.4967 16.7299 23.4967 21.7582 21.8167C23.1699 21.35 23.7882 19.6817 23.0182 18.3984L21.6765 16.17C21.3265 15.5634 21.0232 14.4784 21.0232 13.7667V10.395C21.0232 6.54502 17.8732 3.39502 14.0232 3.39502Z"
            stroke="#242323"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
          />
          <path
            d="M16.1819 3.73343C15.8202 3.62843 15.4469 3.54676 15.0619 3.50009C13.9419 3.36009 12.8686 3.44176 11.8652 3.73343C12.2036 2.87009 13.0436 2.26343 14.0236 2.26343C15.0036 2.26343 15.8436 2.87009 16.1819 3.73343Z"
            stroke="#242323"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5234 22.2366C17.5234 24.1616 15.9484 25.7366 14.0234 25.7366C13.0668 25.7366 12.1801 25.3399 11.5501 24.7099C10.9201 24.0799 10.5234 23.1932 10.5234 22.2366"
            stroke="#242323"
            stroke-width="1.5"
            stroke-miterlimit="10"
          />
        </svg>
        <Image alt="" src="/assets/Rectangle.png" width={28} height={28} />
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8332 7.08325L9.99984 12.9166L4.1665 7.08325"
            stroke="#242323"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </header>
  );
}
