import React from "react";
import { AppBar, Grid, Toolbar } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { withRouter } from "react-router-dom";

function Component(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <AppBar position="static" className={classes.AppBar}>
        <Toolbar>
          <Grid container spacing={0} style={{ alignItems: "center" }}>
            <Grid item xs={2}>
              <ArrowBackIosIcon
                onClick={() => props.history.push("/")}
                style={{ color: "#f6f6f6" }}
              />
            </Grid>

            <Grid item xs={8}>
              <input
                type="text"
                placeholder="Search Movie..."
                className={classes.searchbox}
                onChange={props.handleInput}
                onKeyPress={props.search}
              />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default withRouter(Component);
