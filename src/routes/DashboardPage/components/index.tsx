import React from "react";
import { RightSidebar } from "components/Container";
import Content from "./Content";
import { PopularWidget } from "./Sidebar";

function DashboardPage() {
  return (
    <RightSidebar
      showBody
      bodyContent={<Content activeContent={0} />}
      showSidebar
      sidebarContent={
        <>
          <PopularWidget />
        </>
      }
    />
  );
}

export default DashboardPage;
