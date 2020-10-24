import React from "react";

function SidebarContent(props: any) {

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
