import AdminHeader from "@/app/components/adminHeader";
import AdminSidebar from "@/app/components/adminSideBar";

import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <main className="admin">
      <AdminHeader />
      <div className="admin__inner">
      
        <AdminSidebar />
        {children}
      </div>
    </main>
  );
};

export default AdminLayout;