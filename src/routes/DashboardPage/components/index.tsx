import React from "react";
import { RightSidebar } from "components/Container";
import Header from "./Header";
import Toolbar from "./Toolbar";
import Content from "./Content";
import { PopularWidget } from "./Sidebar";

function DashboardPage(props: any) {
  return (
    <RightSidebar
      showHeader
      headerContent={<Header />}
      showToolbar
      toolbarContent={<Toolbar />}
      showBody
      bodyContent={<Content />}
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
