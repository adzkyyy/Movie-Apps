import React from "react";
import { AppBar, Grid, Typography, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { withRouter } from "react-router-dom";

function Component(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <Grid container spacing={0} style={{ alignItems: "center" }}>
            <Grid item xs={1}></Grid>
            <Grid item xs={8}>
              <Typography variant="h5" style={{ color: "#f6f6f6" }}>
                Movie Apps
              </Typography>
            </Grid>

            <Grid align="right" item xs={3}>
              <SearchIcon
                style={{ color: "#f6f6f6" }}
                onClick={() => props.history.push("/search")}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default withRouter(Component);
