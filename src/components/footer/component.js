import React from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
function Component(props) {
  return (
    <React.Fragment>
      <Container maxWidth="xs" style={{ padding: 0 }}>
        <Grid
          container
          spacing={0}
          style={{ justifyConent: "center", background: "#11141C",padding:"5%" }}
        >
          <Grid
            align="center"
            item
            xs={12}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Typography variant="subtitle1" style={{ color: "#f6f6f6" }}>
              <b>Made With</b>
            </Typography>
            <FavoriteIcon style={{ color: "#F11D45" }} />
            <a
              href="http://rm28.now.sh"
              style={{ color: "#f6f6f6", textDecoration: "none" }}
            >
              @RM_28
            </a>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Component;
