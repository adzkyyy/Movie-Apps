import React, { useState, useRef } from "react";
import { Swipeable } from "react-swipeable";
import { Grid, Box, Typography } from "@material-ui/core";

function Component(props) {
  const numItems = props.data.length;

  const [order, setOrder] = useState(1);

  let timeoutID = useRef(false);

  const config = {
    onSwipedLeft: nextSlide,
    onSwipedRight: previousSlide,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  };

  function getTransform() {
    const shiftDist = order * 100;
    return "translateX(-" + shiftDist + "%)";
  }

  function nextSlide() {
    let newOrder = 0;
    if (order !== numItems - 1) {
      newOrder = order + 1;
    }
    clearTimeout(timeoutID.current);
    setOrder(newOrder);
  }

  function previousSlide() {
    let newOrder = numItems - 1;
    if (order !== 0) {
      newOrder = order - 1;
    }
    clearTimeout(timeoutID.current);
    setOrder(newOrder);
  }

  timeoutID.current = setTimeout(() => {
    setOrder((order + 1) % numItems);
  }, 2000);

  return (
    <React.Fragment>
      <Grid item xs={12} style={{ marginTop: 16, overflow: "hidden" }}>
        <Swipeable {...config}>
          <Box
            style={{
              display: "flex",
              transition: "transform 200ms ease-in-out",
              transform: getTransform(),
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
            }}
          >
            {props.data.map((data, index) => (
              <Box
                style={{
                  width: "100%",
                  heigth: 0,
                  flex: "1 0 100%",
                  flexBasis: "100%",
                  order: index,
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",

                    top: 0,
                    left: 0,
                    borderRadius: 10,
                  }}
                  src={data.img}
                  alt=""
                />
              </Box>
            ))}
          </Box>
        </Swipeable>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            marginTop: "-5%",
            marginBottom: "5%",
            position: "relative",
          }}
        >
          {props.data.map((_, index) => (
            <Box
              style={{
                width: index === order ? 30 : 8,
                borderRadius: 50,
                backgroundColor: index === order ? "#F11D45" : "#e5e7e9",
                height: 8,
                margin: "0px 4px",
                transition: "width background-color 300ms ease",
              }}
            ></Box>
          ))}
        </Box>
      </Grid>
    </React.Fragment>
  );
}

export default Component;
