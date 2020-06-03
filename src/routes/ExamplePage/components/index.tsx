// import DemoContent from "@fuse/core/DemoContent";
// import FusePageSimple from "@fuse/core/FusePageSimple";
import clsx from "clsx";
import React from "react";
import DemoContent from "@fuse/core/DemoContent";
import useStyles from "./styles";

function ExamplePage(props: any) {
  const classes = useStyles(props);

  return (
    <div className={clsx(classes.root)}>
      <div className={clsx(classes.header, classes.topBg)} />
      <div className="flex flex-auto flex-col container z-10 h-full">
        <div className={classes.header}>
          <div className="p-24">
            <h4>TITLE</h4>
          </div>
        </div>
        <div className={classes.wrapper}>
          <div className={classes.contentWrapper}>
            {/* <div className={classes.toolbar}>
              <div className="px-24">
                <h4>Content Toolbar</h4>
              </div>
            </div> */}
            <div className={classes.content}>
              <div className="p-24">
                <h4>Content</h4>
                <br />
                <DemoContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExamplePage;
