import * as React from "react";
import { red } from "@mui/material/colors";
import {
  ThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
import { Button } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: red[500],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>With Mui</h1>
      <Button variant="contained" color="primary">
        Mui Button
      </Button>
    </ThemeProvider>
  );
}

export default App;
