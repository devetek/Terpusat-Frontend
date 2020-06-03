import clsx from "clsx";
import React from "react";
import useStyles from "../styles";

interface FullWidthProps {
  showHeader?: boolean;
  headerContent?: JSX.Element;
  showToolbar?: boolean;
  toolbarContent?: JSX.Element;
  showBody?: boolean;
  bodyContent?: JSX.Element;
}

const FullWidth: React.FunctionComponent<FullWidthProps> = ({
  showHeader = false,
  headerContent,
  showToolbar = false,
  toolbarContent,
  showBody = false,
  bodyContent = null,
}) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root)}>
      <div className={clsx(classes.header, classes.topBg)} />
      <div className="flex flex-auto flex-col container z-10 h-full">
        {showHeader && (
          <div className={clsx(classes.header, "min-h-160 h-160")}>
            {headerContent}
          </div>
        )}
        <div className={classes.wrapper}>
          <div className={classes.contentWrapper}>
            {showToolbar && (
              <div className={classes.toolbar}>{toolbarContent}</div>
            )}
            <div className={classes.content}>
              {showBody && <>{bodyContent}</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullWidth;
