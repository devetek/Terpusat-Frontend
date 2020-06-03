import React from "react";
import { RightSidebar } from "components/Container";
import Header from "./Header";
import Toolbar from "./Toolbar";

function DashboardPage(props: any) {
  return (
    <RightSidebar
      showHeader
      headerContent={<Header />}
      showToolbar
      toolbarContent={<Toolbar />}
    />
  );
}

export default DashboardPage;
