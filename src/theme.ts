import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    customYellow: Palette['primary'];
  }
  interface PaletteOptions {
    customYellow?: PaletteOptions['primary'];
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldPropsColorOverrides {
    customYellow: true;
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#FDD13A",
    },
    secondary: {
      main: "#edf2ff",
    },
    customYellow: {
      main: '#FDD13A',
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 12.3,
  },
});

export default theme;