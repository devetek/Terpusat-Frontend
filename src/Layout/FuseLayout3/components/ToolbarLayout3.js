import FuseSearch from "@fuse/core/FuseSearch";
import AppBar from "@material-ui/core/AppBar";
import Hidden from "@material-ui/core/Hidden";
import { ThemeProvider } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "app/fuse-layouts/shared-components/Logo";
import NavbarMobileToggleButton from "app/fuse-layouts/shared-components/NavbarMobileToggleButton";
import QuickPanelToggleButton from "app/fuse-layouts/shared-components/quickPanel/QuickPanelToggleButton";
import UserMenu from "app/fuse-layouts/shared-components/UserMenu";
import clsx from "clsx";
import React from "react";
import { useSelector } from "react-redux";
import LanguageSwitcher from "app/fuse-layouts/shared-components/LanguageSwitcher";

const Sparator = () => {
  return (
    <div
      style={{
        width: "1px",
        height: "64px",
        backgroundColor: "rgba(0, 0, 0, 0.12)",
      }}
    />
  );
};

function ToolbarLayout3(props) {
  const config = useSelector(
    (data) => data.fuse.settings.current.layout.config
  );
  const toolbarTheme = useSelector((data) => data.fuse.settings.toolbarTheme);

  return (
    <ThemeProvider theme={toolbarTheme}>
      <AppBar
        id="fuse-toolbar"
        className="flex relative z-10"
        color="default"
        style={{ backgroundColor: toolbarTheme.palette.background.default }}
      >
        <Toolbar className="container p-0 lg:px-24">
          {config.navbar.display && (
            <Hidden lgUp>
              <NavbarMobileToggleButton className="w-64 h-64 p-0" />
              {Sparator()}
            </Hidden>
          )}

          <Hidden mdDown>
            <div className={clsx("flex flex-shrink-0 items-center")}>
              <Logo />
            </div>
          </Hidden>

          <div className="flex flex-1">
            <Hidden xsDown>
              <FuseSearch className="mx-16 lg:mx-24" variant="basic" />
            </Hidden>
          </div>

          <div className="flex">
            <Hidden smUp>
              <FuseSearch />
              {Sparator()}
            </Hidden>

            <UserMenu />

            {Sparator()}

            <LanguageSwitcher />

            {Sparator()}

            <QuickPanelToggleButton />

            <Hidden mdDown>{Sparator()}</Hidden>
          </div>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
}

export default React.memo(ToolbarLayout3);
