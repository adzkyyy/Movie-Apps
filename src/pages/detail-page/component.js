import React, { useState } from "react";
import { Container, Typography, Grid, Box } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";

function Component(props) {
  const { classes } = props;
  const [liked, setLiked] = useState(true);
  const selectedFilm = JSON.parse(localStorage.getItem("selectedFilm"));
  const { Title, imdbRating, Poster, Plot } = selectedFilm;
  return (
    <React.Fragment>
      <Container maxWidth="xs" className={classes.Container}>
        <div
          style={{
            background: `url(${Poster})`,
            backgroundSize: "cover",
            maxHeight: 275,
            minHeight: 275,
            padding: "5%",
            backgroundPosition: "center",
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <Box
                style={{
                  maxWidth: 35,
                  borderRadius: 5,
                  padding: "2%",
                  background: "#191C22",
                  color: "#f6f6f6",
                  textAlign: "center",
                }}
              >
                <ArrowBackIosIcon
                  onClick={() => {
                    localStorage.removeItem("selectedFilm");
                    props.history.push("/");
                  }}
                />
              </Box>
            </Grid>
            <Grid align="right" item xs={6}>
              <Box
                style={{
                  maxWidth: 35,
                  borderRadius: 5,
                  padding: "2%",
                  background: "#191C22",
                  color: liked ? "#f6f6f6" : "#F11D45",
                  textAlign: "center",
                }}
              >
                <FavoriteIcon onClick={() => setLiked(!liked)} />
              </Box>
            </Grid>
          </Grid>
        </div>
        <Grid container spacing={0}>
          <Grid item xs={6} style={{ padding: "2%", paddingBottom: "1%" }}>
            <Typography variant="h6" style={{ color: "#f6f6f6" }}>
              {Title}
            </Typography>
          </Grid>
          <Grid
            item
            align="right"
            xs={6}
            style={{ padding: "2%", paddingBottom: "1%" }}
          >
            <StarIcon
              style={{
                width: 16,
                color: imdbRating < 2 ? "#c4c4c4" : "#F11D45",
              }}
            />
            <StarIcon
              style={{
                width: 16,
                color: imdbRating < 3 ? "#c4c4c4" : "#F11D45",
              }}
            />
            <StarIcon
              style={{
                width: 16,
                color: imdbRating < 6 ? "#c4c4c4" : "#F11D45",
              }}
            />
            <StarIcon
              style={{
                width: 16,
                color: imdbRating < 8 ? "#c4c4c4" : "#F11D45",
              }}
            />
            <StarIcon
              style={{
                width: 16,
                color: imdbRating === 10 ? "#c4c4c4" : "#f6f6f6",
              }}
            />
          </Grid>
          <hr style={{ color: "#f6f6f6", width: 445 }} />
          <Grid
            item
            xs={12}
            style={{ padding: "2%", paddingBottom: "1%", paddingTop: 0 }}
          >
            <p>
              <Typography variant="body1" style={{ color: "#f6f6f6" }}>
                {Plot}
              </Typography>
            </p>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Component;
