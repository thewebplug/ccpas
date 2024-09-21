import { usePathname } from "next/navigation";

export default function ReportHomeTabs() {
    const pathname = usePathname();

    console.log('reports pathname', pathname.split("/").length);
    

    return (
        <div className="reports-home__tabs">
        <div 
        className={pathname.includes("custom-reports") ? "reports-home__tabs__active" : ""}
        onClick={() => window.location.href = "/justice/dashboard/report-and-analytics/custom-reports"}
        >Custom Reports</div>
        <div>Legal and Policy Recommendations</div>
        <div>Historical Data</div>
        <div>Documentation Management</div>
        <div>Compliance & Audit Reporting</div>
        <div 
        className={pathname.includes("report-and-analytics") && pathname.split("/").length < 5 ? "reports-home__tabs__active" : ""}
        onClick={() => window.location.href = "/justice/dashboard/report-and-analytics"}
        >Performance Reporting</div>
        <div>Case Documentation</div>
      </div>
    )
}