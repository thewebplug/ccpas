"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";
export default function FinanceTabs() {
  const pathname = usePathname();

    const [tab, setTab] = useState("Overview");

    return (
        <div className="finance-tabs">
        <div
          className={
            pathname?.includes("overview")

              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => window.location.href ="/justice/dashboard/finance/overview"}
        >
          Overview
        </div>
        <div
          className={
            pathname?.includes("invoicing-and-billing")
              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => window.location.href ="/justice/dashboard/finance/invoicing-and-billing"}
          >
          Invoicing and Billing
        </div>
        <div
          className={
            tab === "Payment Processing"
              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => setTab("Payment Processing")}
        >
          Payment Processing
        </div>
        <div
          className={
            tab === "Expense Management"
              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => setTab("Expense Management")}
        >
          Expense Management
          {/* <div className="finance-tabs__item__badge">4</div> */}
        </div>
        <div
          className={
            tab === "Financial Reporting"
              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => setTab("Financial Reporting")}
        >
          Financial Reporting
          {/* <div className="finance-tabs__item__badge">4</div> */}
        </div>
        <div
          className={
            tab === "Budgeting and Forecasting"
              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => setTab("Budgeting and Forecasting")}
        >
          Budgeting and Forecasting
          {/* <div className="finance-tabs__item__badge">4</div> */}
        </div>
        <div
          className={
            tab === "Accounts Receivable and Payable"
              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => setTab("Accounts Receivable and Payable")}
        >
          Accounts Receivable and Payable
          {/* <div className="finance-tabs__item__badge">4</div> */}
        </div>
        <div
          className={
            tab === "Tax Management"
              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => setTab("Tax Management")}
        >
          Tax Management
          {/* <div className="finance-tabs__item__badge">4</div> */}
        </div>
        <div
          className={
            tab === "Audit and Compliance"
              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => setTab("Audit and Compliance")}
        >
          Audit and Compliance
          {/* <div className="finance-tabs__item__badge">4</div> */}
        </div>
      </div>
    )
}