import React from "react";
import Button from "@material-ui/core/Button";

export default function ButtonClick() {
  const [flag, setFlag] = React.useState(true);

  const handleClick = () => {
    setFlag(!flag);
  };

  return (
    <Button
      onClick={handleClick}
      variant="contained"
      color={flag ? "default" : "secondary"}
      size="large"
    >
      연애
    </Button>
  );
}