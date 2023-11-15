import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@emotion/react";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function Root(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      sdsasdasd
      <Button>dasd</Button>
    </ThemeProvider>
  );
}
