import React from "react";
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";
import Latest from "./Latest";

export interface ContentComponentProps {
  activeContent: number;
  className?: any;
}

const ContentComponent = (props: ContentComponentProps) => {
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <div className="widget flex w-full p-12">
            {/* <Other /> */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
                <Typography variant="h6">Terbaru</Typography>
              </Grid>
              <Grid item xs={6} sm={2} lg={2}>
                <Latest />
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ContentComponent;
