import React from "react";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from '@material-ui/styles';
import { blue, green, red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },

    error: {
      main: "#f44336",
    },
    success: {
      main: "#4caf50",
    },
  },
});


export default function ButtonClick() {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <ThemeProvider theme={theme}>
      <Button
        onClick={handleClick}
        variant="contained"
        color={flag ? "default" : "error"}
        size="large"
      >
        친구
      </Button>
    </ThemeProvider>
  );
}