import { extendTheme } from "@chakra-ui/react";
import COLORS from "./colors.pallete";

const theme = extendTheme({
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
  colors: {
    primary: COLORS.primary,
    secondary: {},
    gray: {
      50: COLORS.gray[50],
      100: COLORS.gray[100],
      900: COLORS.gray[900],
    },
  },
});

export default theme;
