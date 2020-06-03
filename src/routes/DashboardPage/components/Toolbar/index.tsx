import React, { useState } from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const ToolbarComponent = (props: any) => {
  const [tabValue, setTabValue] = useState(0);

  const handleChangeTab = (_: any, value: any) => {
    setTabValue(value);
  };

  return (
    <Tabs
      value={tabValue}
      onChange={handleChangeTab}
      indicatorColor="primary"
      textColor="primary"
      variant="scrollable"
      scrollButtons="off"
      className="w-full border-b-1 px-24"
      style={{ borderColor: "rgba(0, 0, 0, 0.12)" }}
    >
      <Tab className="text-14 font-600 normal-case" label="Dashboard" />
      <Tab className="text-14 font-600 normal-case" label="Team" />
      <Tab className="text-14 font-600 normal-case" label="About" />
    </Tabs>
  );
};

export default ToolbarComponent;
