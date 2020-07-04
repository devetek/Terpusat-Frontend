import React, { useRef, useState } from "react";
import Hidden from "@material-ui/core/Hidden";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import _ from "@lodash";
import useStyles from "../styles";

const HeaderComponent = (props: any) => {
  const classes = useStyles(props);
  const pageLayout = useRef(null);
  const [selectedProject, setSelectedProject] = useState({
    id: 1,
    menuEl: null,
  });

  // const projects = [
  //   { id: 1, name: "Store" },
  //   { id: 2, name: "Devetek" },
  //   { id: 3, name: "ulook_id" },
  //   { id: 4, name: "Investa" },
  //   { id: 5, name: "Masakan Nusantara" },
  // ];

  const handleChangeProject = (id: any) => {
    setSelectedProject({
      id,
      menuEl: null,
    });
  };

  const handleOpenProjectMenu = (event: any) => {
    setSelectedProject({
      id: selectedProject.id,
      menuEl: event.currentTarget,
    });
  };

  const handleCloseProjectMenu = () => {
    setSelectedProject({
      id: selectedProject.id,
      menuEl: null,
    });
  };

  return (
    <div className="flex flex-col justify-between flex-1 px-24 pt-24">
      <div className="flex justify-between items-start">
        <Typography className="py-0 sm:py-24" variant="h6">
          Pusat belanja, investasi, layanan, informasi di Indonesia. 
        </Typography>
        <Hidden lgUp>
          <IconButton
            onClick={(ev) => console.log(ev)}
            aria-label="open left sidebar"
          >
            <Icon>menu</Icon>
          </IconButton>
        </Hidden>
      </div>
      {/* <div className="flex items-end">
        <div className="flex items-center">
          <div
            className={clsx(
              classes.selectedProject,
              "flex items-center h-40 px-16 text-16"
            )}
          >
            {_.find(projects, ["id", selectedProject.id]).name}
          </div>
          <IconButton
            className={clsx(classes.projectMenuButton, "h-40 w-40 p-0")}
            aria-owns={selectedProject.menuEl ? "project-menu" : undefined}
            aria-haspopup="true"
            onClick={handleOpenProjectMenu}
          >
            <Icon>more_horiz</Icon>
          </IconButton>
          <Menu
            id="project-menu"
            anchorEl={selectedProject.menuEl}
            open={Boolean(selectedProject.menuEl)}
            onClose={handleCloseProjectMenu}
          >
            {projects &&
              projects.map((project) => (
                <MenuItem
                  key={project.id}
                  onClick={(ev) => {
                    // handleChangeProject(project.id);
                  }}
                >
                  {project.name}
                </MenuItem>
              ))}
          </Menu>
        </div>
      </div> */}
    </div>
  );
};

export default HeaderComponent;
