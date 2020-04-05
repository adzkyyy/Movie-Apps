import React, { useState, useRef } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import SearchBar from "../../components/search-bar";
import Slider from "../../components/slider";
import Avenger from "../../assets/avengersendgame.jpg";
import Equalizer from "../../assets/equalizer.jpg";

function Component(props) {
  const banner = [
    {
      img: Avenger,
    },
    {
      img: Equalizer,
    },
  ];
  const { classes } = props;
  return (
    <React.Fragment>
      <Container maxWidth="xs" className={classes.Container}>
        <SearchBar />
        <Grid container spacing={0} style={{ paddingTop: "10%" }}>
          <Slider
            data={banner}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
          />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Component;
