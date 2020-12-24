import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import React from "react";

function Popular() {
  return (
    <Paper className="w-full rounded-8 shadow-none border-0">
      <div className="flex items-center justify-between px-4 pt-4">
        <Typography className="text-16 px-12">Terpopuler</Typography>
        <IconButton aria-label="more">
          <Icon>more_vert</Icon>
        </IconButton>
      </div>
      <div className="text-center px-12 py-12">
        <List>
          <ListItem>
            <ListItemText>
              <Typography
                className="text-14 leading-tight"
                color="textSecondary"
              >
                <a
                  rel="noopener noreferrer"
                  href="https://www.tokopedia.com/terpusat/pollard-gandum-cap-angsa-per-20kg"
                  target="_blank"
                >
                  Pollard Gandum Cap Angsa
                </a>
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography
                className="text-14 leading-tight"
                color="textSecondary"
              >
                <a
                  rel="noopener noreferrer"
                  href="https://www.tokopedia.com/terpusat/pollard-gandum-cap-kepala-kuda-per-10kg"
                  target="_blank"
                >
                  Pollard Gandum Kepala Kuda
                </a>
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography
                className="text-14 leading-tight"
                color="textSecondary"
              >
                <a
                  rel="noopener noreferrer"
                  href="https://www.tokopedia.com/terpusat/pelet-pakan-ikan-lele-781-2-per-20-kg-instant-courier"
                  target="_blank"
                >
                  Pelet Pakan Ikan Lele 781-2
                </a>
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography
                className="text-14 leading-tight"
                color="textSecondary"
              >
                <a
                  rel="noopener noreferrer"
                  href="https://www.tokopedia.com/terpusat/pelet-ikan-pf-1000-per-sak-10kg"
                  target="_blank"
                >
                  Pelet Ikan PF 1000 Prima Feed
                </a>
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
        {/* <Typography className="text-72 leading-tight" color="textSecondary">
					{time.format('D')}
				</Typography>
				<Typography className="text-24 leading-tight" color="textSecondary">
					{time.format('Y')}
				</Typography> */}
      </div>
    </Paper>
  );
}

export default React.memo(Popular);
