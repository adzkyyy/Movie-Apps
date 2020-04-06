import React, { useState, useEffect } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import AppBar from "../../components/app-bar";
import Slider from "../../components/slider";
import PopularList from "../../components/popular-list";
import RecomendedFilm from "../../components/recomended-films";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import axios from "axios";

function Component(props) {
  const banner = [
    {
      img:
        "https://cinemags.co.id/wp-content/uploads/2019/03/avengersheader-696x467-696x400.jpg",
    },
    {
      img:
        "https://emariferha.files.wordpress.com/2015/08/mission-impossible-rogue-nation-banner.png?w=376&h=188",
    },
  ];

  const { classes } = props;
  const [dark, setDark] = useState(false);
  const [film, setFilm] = useState([]);
  const [film2, setFilm2] = useState([]);
  const getFilm = async () => {
    const response = await axios.get(
      "http://www.omdbapi.com/?apikey=2c11df7f&t=equalizer+2"
    );
    return response.data;
  };
  const getFilm2 = async () => {
    const response = await axios.get(
      "http://www.omdbapi.com/?apikey=2c11df7f&t=Avengers&y=2019"
    );
    return response.data;
  };
  useEffect(() => {
    const getData = async () => {
      const filmList = await getFilm();
      const filmList2 = await getFilm2();
      setFilm(filmList);
      setFilm2(filmList2);
    };
    getData();
  }, []);
  const handleClick = () => {
    localStorage.setItem("selectedFilm", JSON.stringify(film));
    props.history.push(`/detail/${film.Title}`);
  };
  const handleClick2 = () => {
    localStorage.setItem("selectedFilm", JSON.stringify(film2));
    props.history.push(`/detail/${film.Title}`);
  };
  return (
    <React.Fragment>
      <Container
        maxWidth="xs"
        className={classes.Container}
        style={{
          background: dark ? "#f6f6f6" : "#0C0F13",
          border: dark ? "solid 1px #000" : "solid 1px #0c0f13",
        }}
      >
        <AppBar />
        <Grid container spacing={0} style={{ paddingTop: "10%" }}>
          <Slider
            data={banner}
            showStatus={false}
            showArrows={false}
            showThumbs={false}
          />
        </Grid>
        <Grid container spacing={0}>
          <Grid item xs="12">
            <Typography
              variant="subtitle1"
              style={{ color: dark ? "#0C0F13" : "#f6f6f6" }}
              className={classes.poptext}
            >
              <b>Popular Films</b>
            </Typography>
          </Grid>
          <Grid item xs="12" className={classes.poplist}>
            <PopularList dark={dark} result={film} />
            <PopularList dark={dark} result={film2} />
            <PopularList dark={dark} result={film} />
            <PopularList dark={dark} result={film2} />
          </Grid>
        </Grid>
        <Grid container spacing={0} style={{ marginTop: "3%" }}>
          <Grid item xs="12">
            <Typography
              variant="subtitle1"
              style={{ color: dark ? "#0C0F13" : "#f6f6f6" }}
              className={classes.poptext}
            >
              <b>Recomended FIlms</b>
            </Typography>
          </Grid>
          <Grid item xs="12">
            <RecomendedFilm click={handleClick} result={film} />
            <RecomendedFilm click={handleClick2} result={film2} />
          </Grid>
        </Grid>
        <div
          style={{
            top: -1000,
            display: "flex",
            justifyContent: "flex-end",
            transformOrigin: "center center",
          }}
        >
          <ToggleButton
            selected={dark}
            onChange={() => {
              setDark(!dark);
            }}
          >
            {dark ? (
              <Brightness2Icon style={{ color: "0C0F13" }} />
            ) : (
              <Brightness5Icon style={{ color: "#f6f6f6" }} />
            )}
          </ToggleButton>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Component;
