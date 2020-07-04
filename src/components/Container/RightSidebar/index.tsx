import React, { useRef } from "react";
import clsx from "clsx";
import Sidebar from "./Sidebar";
import useStyles from "./styles";

interface RightSidebarProps {
  showHeader?: boolean;
  headerContent?: JSX.Element;
  showToolbar?: boolean;
  toolbarContent?: JSX.Element;
  showBody?: boolean;
  bodyContent?: JSX.Element;
  showSidebar?: boolean;
  sidebarContent?: JSX.Element;
}

const RightSidebar: React.FunctionComponent<RightSidebarProps> = ({
  showHeader = false,
  headerContent,
  showToolbar = false,
  toolbarContent,
  showBody = false,
  bodyContent = null,
  showSidebar = false,
  sidebarContent = null,
}) => {
  const rightSidebarRef = useRef(null);
  const rootRef = useRef(null);
  const classes = useStyles();

  return (
    <div className={clsx(classes.root)} ref={rootRef}>
      {/* <div className={clsx(classes.header, classes.topBg, "min-h-160 h-160")} /> */}
      <div className="flex flex-auto flex-col container z-10 h-full">
        <div className={classes.wrapper}>
          <div className={classes.contentWrapper}>
            {showHeader && (
              <div className={clsx(classes.header, "min-h-160 h-160")}>
                {headerContent}
              </div>
            )}
            {showToolbar && (
              <div className={classes.toolbar}>{toolbarContent}</div>
            )}
            <div className={classes.content}>
              {showBody && <>{bodyContent}</>}
            </div>
          </div>
          {showSidebar && (
            <Sidebar
              rootRef={rootRef}
              ref={rightSidebarRef}
              variant="permanent"
              classess={classes}
              content={sidebarContent}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
