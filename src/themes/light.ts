import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: "Arial, sans-serif",
    body: "Arial, sans-serif",
  },
  colors: {
    primary: {
      50: "#e5eff5",
      100: "#bfd4e2",
      200: "#99b9cf",
      300: "#739fbc",
      400: "#4d84a9",
      500: "#002D4B",
      600: "#00263f",
      700: "#001f33",
      800: "#001827",
      900: "#00101a",
    },
    secondary: {},
    gray: {
      50: "#f9f9f9",
      100: "#e0e0e0",
      900: "#1a202c",
    },
  },
});

export default theme;
