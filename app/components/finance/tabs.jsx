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
            pathname?.includes("payment-processing")
              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => window.location.href ="/justice/dashboard/finance/payment-processing"}
        >
          Payment Processing
        </div>
        <div
          className={
            pathname?.includes("expense-management")
              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => window.location.href ="/justice/dashboard/finance/expense-management"}
        >
          Expense Management
          {/* <div className="finance-tabs__item__badge">4</div> */}
        </div>
        <div
           className={
            pathname?.includes("financial-reporting")
              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => window.location.href ="/justice/dashboard/finance/financial-reporting"}
        >
          Financial Reporting
          {/* <div className="finance-tabs__item__badge">4</div> */}
        </div>
        <div
         className={
          pathname?.includes("budgeting-and-forecasting")
            ? "finance-tabs__item finance-tabs__active"
            : "finance-tabs__item"
        }
        onClick={() => window.location.href ="/justice/dashboard/finance/budgeting-and-forecasting"}
        >
          Budgeting and Forecasting
          {/* <div className="finance-tabs__item__badge">4</div> */}
        </div>
        <div
          className={
            pathname?.includes("accounts-receivable-and-payable")
              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => window.location.href ="/justice/dashboard/finance/accounts-receivable-and-payable"}
        >
          Accounts Receivable and Payable
          {/* <div className="finance-tabs__item__badge">4</div> */}
        </div>
        <div
          className={
            pathname?.includes("tax-management")
              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => window.location.href ="/justice/dashboard/finance/tax-management"}
        >
          Tax Management
          {/* <div className="finance-tabs__item__badge">4</div> */}
        </div>
        <div
          className={
            pathname?.includes("audit-and-compliance")
              ? "finance-tabs__item finance-tabs__active"
              : "finance-tabs__item"
          }
          onClick={() => window.location.href ="/justice/dashboard/finance/audit-and-compliance"}
        >
          Audit and Compliance
          {/* <div className="finance-tabs__item__badge">4</div> */}
        </div>
      </div>
    )
}