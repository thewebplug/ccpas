import AdminHeader from "@/app/components/admin/adminDashboardHeader";
import AdminTabs from "@/app/components/admin/tabs";
import Sidebar from "@/app/components/dashboardSideBar";
import React from "react";

const AdminLayout = ({ children }) => {
  
  return (
    <main className="admin">
      <AdminHeader />
      <div className="admin__inner">
        <Sidebar />
        <div className="admin__inner__main">
         
          <AdminTabs />
          {children}
        </div>
      </div>
    </main>
  );
};

export default AdminLayout;
