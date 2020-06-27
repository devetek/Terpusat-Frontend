import React from "react";
import FuseDialog from "@fuse/core/FuseDialog";
import FuseMessage from "@fuse/core/FuseMessage";
import clsx from "clsx";
import { create } from "jss";
import rtl from "jss-rtl";
import jssExtend from "jss-plugin-extend";
import FooterLayout3 from "./components/FooterLayout3";
// import LeftSideLayout3 from "./components/LeftSideLayout3";
import NavbarWrapperLayout3 from "./components/NavbarWrapperLayout3";
import RightSideLayout3 from "./components/RightSideLayout3";
import ToolbarLayout3 from "./components/ToolbarLayout3";
import FuseTheme from "@fuse/core/FuseTheme";
import { useSelector } from "react-redux";
import {
  createGenerateClassName,
  jssPreset,
  StylesProvider,
} from "@material-ui/core/styles";
import useStyles from "./styles";

const jss = create({
  ...jssPreset(),
  plugins: [...jssPreset().plugins, jssExtend(), rtl()],
  insertionPoint: document.getElementById("jss-insertion-point") || undefined,
});

const generateClassName = createGenerateClassName();

const FuseLayout3Component: React.FunctionComponent<any> = (props) => {
  const classes = useStyles();
  const config = useSelector(
    (data: any) => data?.fuse?.settings?.current?.layout?.config ?? null
  );

  return (
    <StylesProvider jss={jss} generateClassName={generateClassName}>
      <FuseTheme>
        <div id="fuse-layout" className={clsx(classes.root, config.mode)}>
          {/* <LeftSideLayout3 /> */}

          <div className="flex flex-1 flex-col overflow-hidden relative">
            <ToolbarLayout3 />
            <NavbarWrapperLayout3 />

            <div className={classes.content}>
              <FuseDialog />
              <div className="flex flex-auto flex-col relative h-full">
                {props.children}
                <FooterLayout3 />
              </div>
            </div>
          </div>
          <RightSideLayout3 />

          <FuseMessage />
        </div>
      </FuseTheme>
    </StylesProvider>
  );
};

export default React.memo(FuseLayout3Component);
