import React from "react";
import { Typography } from "@material-ui/core";

function Component(props) {
  const { classes, result } = props;
  return (
    <React.Fragment>
      <div className={classes.card}>
        <img src={result.Poster} alt="" className={classes.img} />
        <Typography
          variant="subtitle2"
          className={classes.text}
          style={{ color: props.dark ? "#333" : "#f6f6f6" }}
        >
          {" "}
          <b>{result.Title}</b>
        </Typography>
      </div>
    </React.Fragment>
  );
}

export default Component;
