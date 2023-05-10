import { useState } from "react";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

export const AdminButton = () => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    if (clickCount >= 10) {
      navigate("/admin");
    } else {
      setClickCount(clickCount + 1);
    }
  };

  return (
    <>
      {clickCount >= 10 ? (
        <Button onClick={handleClick}>Admin</Button>
      ) : (
        <Button
          onClick={handleClick}
          style={{ backgroundColor: "transparent" }}
        ></Button>
      )}
    </>
  );
};
