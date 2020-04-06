import React from "react";
import { Card, Typography, Grid, Button } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

function Component(props) {
  const { classes, result } = props;
  // const [rate, setRate] = React.useState(0);

  // React.useEffect(() => {
  //   const Rating = () => {
  //     if (result.imdbRating < 2) {
  //       setRate(1);
  //     } else if (result.imdbRating < 4) {
  //       setRate(2);
  //     } else if (result.imdbRating < 6) {
  //       setRate(3);
  //     } else if (result.imdbRating < 8) {
  //       setRate(4);
  //     } else if ((result.imdbRating = 10)) {
  //       setRate(5);
  //     }
  //   };
  //   Rating();
  // }, []);
  return (
    <React.Fragment>
      <div className={classes.divCard}>
        <Card className={classes.Card}>
          <Grid container spacing={0}>
            <Grid item xs={4}>
              <img
                src={result.Poster}
                alt=""
                style={{
                  minWidth: 100,
                  minHeight: 100,
                  maxHeight: 150,
                  maxWidth: 150,
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                }}
              />
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid
              item
              xs={7}
              style={{ display: "flex", flexDirection: "column" }}
            >
              <Typography variant="body2">
                <b>{result.Title}</b>
              </Typography>
              <Typography variant="caption">{result.Year}</Typography>
              <div style={{ display: "flex" }}>
                <StarIcon
                  style={{
                    width: 16,
                    color: result.imdbRating > 2 ? "#c4c4c4" : "#F11D45",
                  }}
                />
                <StarIcon
                  style={{
                    width: 16,
                    color: result.imdbRating > 4 ? "#c4c4c4" : "#F11D45",
                  }}
                />
                <StarIcon
                  style={{
                    width: 16,
                    color: result.imdbRating > 6 ? "#c4c4c4" : "#F11D45",
                  }}
                />
                <StarIcon
                  style={{
                    width: 16,
                    color: result.imdbRating > 8 ? "#c4c4c4" : "#F11D45",
                  }}
                />
                <StarIcon
                  style={{
                    width: 16,
                    color: result.imdbRating === 10 ? "#c4c4c4" : "#F11D45",
                  }}
                />
              </div>
              <Button
                onClick={() => props.click(result.imdbID)}
                style={{
                  maxWidth: 75,
                  marginTop: "2%",
                  color: "#f6f6f6",
                  background: "#F11D45",
                }}
              >
                Detail
              </Button>
            </Grid>
          </Grid>
        </Card>
      </div>
    </React.Fragment>
  );
}

export default Component;
