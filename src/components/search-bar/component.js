import React, { useState } from "react";
import { AppBar, Grid, Typography, Toolbar } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

function Component(props) {
  const { classes } = props;
  const [srch, setSrch] = useState(false);
  return (
    <React.Fragment>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <Grid container spacing={0} style={{ alignItems: "center" }}>
            <Grid item xs={1}></Grid>
            {srch ? (
              <Grid item xs={8}>
                <input
                  type="text"
                  placeholder="Search Movie..."
                  className={classes.searchbox}
                />
              </Grid>
            ) : (
              <Grid item xs={8}>
                <Typography variant="h5">Movie Apps</Typography>
              </Grid>
            )}
            <Grid align="center" item xs={3}>
              <SearchIcon onClick={() => setSrch(!srch)} />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Component;
