const styles = () => ({
  Container: {
    padding: 0,
    minHeight: "100vh",
  },
  poptext: {
    marginLeft: "3%",
    marginTop: "3%",
  },
  poplist: {
    padding: "1% 3%",
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    "-webkit-overflow-scrolling": "touch",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
});
export default styles;
