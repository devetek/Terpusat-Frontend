import React from "react";
import { Layout } from "antd";

export interface HeaderComponentProps {
  title: string;
}

const HeaderComponent = ({ title }: HeaderComponentProps) => {
  return <Layout.Header>{title}</Layout.Header>;
};

export default HeaderComponent;
