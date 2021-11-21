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
      color={flag ? "default" : "primary"}
      size="large"
    >
      운동
    </Button>
  );
}