import { ThemeProvider } from "@material-ui/core/styles";
import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";

function SidebarContent(props: any) {
  const mainThemeDark = useSelector(
    (data: any) => data.fuse.settings.mainThemeDark
  );

  const { classes } = props;

  return (
    <>
      {props.content && (
        <div className={classes.sidebarContent}>
          <div className="w-full">
            <div className="widget w-full p-12">{props.content}</div>
          </div>
        </div>
      )}
    </>
  );
}

export default SidebarContent;
