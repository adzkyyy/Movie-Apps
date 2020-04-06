import React, { useState } from "react";
import { Container, Typography, Grid } from "@material-ui/core";
import SearchBar from "../../components/search-bar";
import SearchList from "../../components/search-list";
import ToggleButton from "@material-ui/lab/ToggleButton";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness5Icon from "@material-ui/icons/Brightness5";
import axios from "axios";

function Results(props) {
  const { results, click } = props;
  return (
    <div>
      {results.map((result) => (
        <SearchList key={result.imdbID} result={result} click={click} />
      ))}
    </div>
  );
}

function Component(props) {
  const apiUrl = "http://www.omdbapi.com/?apikey=2c11df7f";
  const { classes } = props;
  const [dark, setDark] = useState(false);
  const [type, setType] = useState({
    s: "",
    results: [],
    selected: {},
  });

  const search = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&s=" + type.s).then(({ data }) => {
        let results = data.Search;
        setType(({ prevType }) => {
          return { ...prevType, results: results };
        });
      });
    }
  };
  const handleInput = (e) => {
    let s = e.target.value;
    setType((prevType) => {
      return { ...prevType, s: s };
    });
    console.log(type.s);
  };
  const select = (id) => {
    axios(apiUrl + "&i=" + id).then(({ data }) => {
      let result = data;
      console.log(result);
      localStorage.setItem("selectedFilm", JSON.stringify(result));
      props.history.push(`/detail/${result.Title}`);
      setType((prevType) => {
        return { ...prevType, selected: result };
      });
    });
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
        <SearchBar handleInput={handleInput} search={search} />

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
            <Results results={type.results} click={select} />
          </Grid>
        </Grid>
        <div
          style={{
            position: "fixed",
            bottom: 0,
            top: 0,
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
