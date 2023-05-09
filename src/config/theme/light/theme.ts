import { breakpoints } from "../../constants/breakpoints";
import { GRAY, PRIMARY, SECONDARY } from "./colors";

export const lightTheme = {
  breakpoints: breakpoints,
  palette: {
    primary: {
      main: PRIMARY.default,
      dark: PRIMARY.dark,
      xDark: PRIMARY.xDark,
    },
    secondary: {
      main: SECONDARY.default,
      dark: SECONDARY.dark,
    },
    gray: {
      main: GRAY.default,
      dark: GRAY.dark,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&:hover": {
            backgroundColor: PRIMARY.light,
          },
        },
      },
    },
  },
};
