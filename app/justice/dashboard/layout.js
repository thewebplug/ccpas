"use client"
import DashboardHeader from "@/app/components/dashboardHeader";
import DashboardSideBar from "@/app/components/dashboardSideBar";
import Image from "next/image";

import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <main className="dashboard">
      <DashboardHeader />
      <div className="dashboard__inner">
        <Image
            className="dashboard__inner__img"
            alt=""
            src="/assets/bglogo.png"
            width={520}
            height={520}
            style={{ borderRadius: "50%" }}
          />
        <DashboardSideBar />
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
