"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function ReportsTab() {
  const pathname = usePathname();
  const [active, setActive] = useState("Executive Chairman Office");

  return (
    <div className="reports__tabs">
      <div
        className={
          pathname?.includes("report-and-analytics") &&
          pathname.split("/")?.length < 5
            ? "reports__tabs__active"
            : ""
        }
        onClick={() => window.location.href = "/justice/dashboard/report-and-analytics"}
      >
        Executive Chairman Office
      </div>
      <div
        className={
          pathname?.includes("investigation") && "reports__tabs__active"
        }
        onClick={() => window.location.href =
          "/justice/dashboard/report-and-analytics/investigation"}
      >
        Investigation
      </div>
      <div
        className={
          pathname?.includes("legal-and-prosecution") && "reports__tabs__active"
        }
        onClick={() =>
          (window.location.href =
            "/justice/dashboard/report-and-analytics/legal-and-prosecution")
        }
      >
        Legal & Prosecution
      </div>
      <div
        className={pathname?.includes("proceed-of-crime") && "reports__tabs__active"}
        onClick={() => window.location.href =
          "/justice/dashboard/report-and-analytics/proceed-of-crime"}
      >
        Proceed of Crime <span>4</span>
      </div>
      <div
        className={pathname?.includes("finance-and-accounts") && "reports__tabs__active"}
        onClick={() => window.location.href =
          "justice/dashboard/report-and-analytics/finance-and-accounts"}
      >
        Finance & Accounts
      </div>
    </div>
  );
}
