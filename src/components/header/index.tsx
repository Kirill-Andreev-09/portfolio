import { FC, ReactNode, SyntheticEvent, useCallback } from "react";
import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { Box } from "@mantine/core";

interface IHeader {
  title: string;
  prevPage?: string;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const Header: FC<IHeader> = ({ title, prevPage = "", iconLeft, iconRight }) => {
  const navigate = useNavigate();
  const { classes } = useStyles();

  const handleClick = useCallback((event: SyntheticEvent<HTMLDivElement>) => {
    const name = event.currentTarget.dataset.name ?? "";

    navigate(name);
  }, []);

  return (
    <Box className={classes.header}>
      <Box data-name={prevPage} className={classes.icon} onClick={handleClick}>
        {prevPage !== "" && iconLeft}
      </Box>

      <Box className={classes.title}> {title}</Box>
      <Box className={classes.icon}> {iconRight}</Box>
    </Box>
  );
};

export { Header };
