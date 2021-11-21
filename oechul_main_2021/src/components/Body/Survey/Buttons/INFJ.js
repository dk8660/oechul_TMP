import React from "react";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';




export default function ButtonClick() {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };

  return (

    <Button
      onClick={handleClick}
      variant="contained"
      color={flag ? "default" : "primary"}
      size="large"
    >
      INFJ
    </Button>

  );
}