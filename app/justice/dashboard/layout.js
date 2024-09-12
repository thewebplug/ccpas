import DashboardHeader from "@/app/components/dashboardHeader";
import DashboardSideBar from "@/app/components/dashboardSideBar";
import Image from "next/image";

import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <main className="dashboard">
      <DashboardHeader />
      <div className="dashboard__inner">
        <div className="dashboard__inner__img">
        <Image
            
            alt=""
            src="/assets/bglogo.png"
            objectFit="cover"
            layout="fill"
            style={{ borderRadius: "50%" }}
          />
        </div>
        
        <DashboardSideBar />
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;
