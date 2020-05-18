import React from "react";
import { Layout } from "antd";

export interface FooterComponentProps {
  copyright: string;
}

const FooterComponent = ({ copyright }: FooterComponentProps) => {
  return (
    <Layout.Footer
      style={{ textAlign: "center" }}
      dangerouslySetInnerHTML={{ __html: copyright }}
    />
  );
};

export default FooterComponent;
