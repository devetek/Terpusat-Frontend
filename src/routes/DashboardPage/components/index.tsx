import React from "react";
import { RightSidebar } from "components/Container";
import Header from "./Header";
import Toolbar from "./Toolbar";
import { DateWidget } from "./Sidebar";

function DashboardPage(props: any) {
  return (
    <RightSidebar
      showHeader
      headerContent={<Header />}
      showToolbar
      toolbarContent={<Toolbar />}
      showSidebar
      sidebarContent={
        <>
          <div className="widget w-full p-12">
            <DateWidget />
          </div>
        </>
      }
    />
  );
}

export default DashboardPage;
