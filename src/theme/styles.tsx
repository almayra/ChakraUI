import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/button";
import { InputStyles as Input } from "./components/input";

export const theme = extendTheme({
  colors:{
    primary: {
      900: "#FB7E0C",
      800: "#FEA81C",
      700: "#FFC124",
      600: "#FFD92C",
      500: "#FBE629",
      400: "#FEEB4E",
      300: "#FFF071",
      200: "#FFF59A",
      100: "#FFF9C3",
      50: "#FFFDE7",
    },
    secondary: {
      900: "#0000C0",
      800: "#001CD9",
      700: "#002AE3",
      600: "#0036F0",
      500: "#003FFC",
      400: "#245EFF",
      300: "#607DFF",
      200: "#95A2FE",
      100: "#C2C6FE",
      50: "#E7E9FF",
    },
    gray: {
      10: "#FFFFFF",
      25: "#FAFAFA",
      50: "#F5F5F5",
      75: "#F0F0F0",
      100: "#D9D9D9",
      200: "#BFBFBF",
      300: "#8C8C8C",
      400: "#595959",
      500: "#434343",
      600: "#262626",
      700: "#1F1F1F",
      800: "#141414",
      900: "#000000",
    },
    danger: {
      500: "#870C18",
      400: "#B41020",
      300: "#E11428",
      200: "#E74353",
      100: "#F3A1A9",
    },
    safe: {
      500: "#107928",
      400: "#16A136",
      300: "#1BC943",
      200: "#49D469",
      100: "#76DF8E",
    },
    warning: {
      500: "#978525",
      400: "#C9B131",
      300: "#FBDD3D",
      200: "#FCE464",
      100: "#FDEB8B",
    },
    link: {
      400: "#00396B",
      300: "#16325C",
      200: "#005FB2",
      100: "#006DCC"
    }
  },
  fonts: {
    body: "Noto Sans, sans-serif",
    heading: "Poppins, sans-serif"
  },
  fontSizes: {
    10: "0.625rem",
    12: "0.75rem",
    13: "0.8125rem",
    14: "0.875rem",
    16: "1rem",
    18: "1.125rem",
    20: "1.25rem",
    24: "1.5rem",
    28: "1.75rem",
    32: "2rem",
    42: "2.625rem",
  },
  components: {
    Button,
    Input
  }
})

export default theme