import React, { useState } from "react";
import { RightSidebar } from "components/Container";
import Header from "./Header";
import Toolbar from "./Toolbar";
import Content from "./Content";
import { PopularWidget } from "./Sidebar";

function DashboardPage() {
  const [activeContent, setActiveContent] = useState(0);

  return (
    <RightSidebar
      showHeader
      headerContent={<Header />}
      showToolbar
      toolbarContent={<Toolbar activeContent={activeContent} setActiveContent={setActiveContent} />}
      showBody
      bodyContent={<Content activeContent={activeContent} />}
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
