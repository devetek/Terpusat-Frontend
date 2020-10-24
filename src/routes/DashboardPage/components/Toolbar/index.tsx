import React from "react";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

const ToolbarComponent = (props: any) => {
  const handleChangeTab = (_: any, value: any) => {
    props.setActiveContent(value);
  };

  return (
    <Tabs
      value={props.activeContent}
      onChange={handleChangeTab}
      indicatorColor="primary"
      textColor="primary"
      variant="scrollable"
      scrollButtons="off"
      className="w-full border-b-1 px-24"
      style={{ borderColor: "rgba(0, 0, 0, 0.12)" }}
    >
      <Tab className="text-14 font-600 normal-case" label="Layanan" />
      <Tab className="text-14 font-600 normal-case" label="Divisi" />
      <Tab className="text-14 font-600 normal-case" label="Tentang" />
    </Tabs>
  );
};

export default ToolbarComponent;
