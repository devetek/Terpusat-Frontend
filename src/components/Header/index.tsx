import React from "react";
import { Layout, Menu } from "antd";

import "./styles.less";

export interface HeaderComponentProps {
  title: string;
}

const HeaderComponent = ({ title }: HeaderComponentProps) => {
  return (
    <Layout.Header
      style={{ background: "none", padding: "0 2px", width: "100%" }}
    >
      <div className="logo" />
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["2"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Tentang</Menu.Item>
        <Menu.Item key="3">Kontak</Menu.Item>
      </Menu>
    </Layout.Header>
  );
};

export default HeaderComponent;
