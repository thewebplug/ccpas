import FinanceNav from "@/app/components/finance/nav";
import FinanceTabs from "@/app/components/finance/tabs";
import React from "react";

const AdminLayout = ({ children }) => {
  return (
    <main className="finance-layout">
      <FinanceNav />
      <FinanceTabs />
      {children}
    </main>
  );
};

export default AdminLayout;
