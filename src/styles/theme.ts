import { extendTheme } from "@chakra-ui/react";

const colors = {
  ui: {
    teal: "#6EA5A5",
    lightteal: "#B2D2D2",
    white: "#FFFFFF",
    gray: "8F8F8F",
    lightgray: "#EEEEEE",
  },
  bg: {
    teal: "#6EA5A5",
    lightteal: "#B2D2D2",
    white: "#FFFFFF",
  },
  text: {
    black: "#2A2A2A",
  },
};

const theme = extendTheme({
  colors: colors,
});

export default theme;
