import { useCallback, SyntheticEvent } from "react";
import { Box, Button } from "@mantine/core";
import { useStyles } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

import { ADMINS, ROUTES, USER_ID } from "src/config";

const tabs = [
  {
    id: 1,
    icon: null,
    path: ROUTES.home.path,
  },
];

const Footer = () => {
  const { classes, cx } = useStyles();
  const location = useLocation();
  const navigate = useNavigate();

  const userTabs = tabs.filter((item) => item.id !== 5);
  const filterTabs = ADMINS.includes(USER_ID) ? tabs : userTabs;

  const handleClick = useCallback(
    (event: SyntheticEvent<HTMLButtonElement>) => {
      const path = event.currentTarget.dataset.name ?? "";

      navigate(path);
    },
    []
  );

  return (
    <Box className={classes.root}>
      {filterTabs?.map((item) => {
        return (
          <Button
            data-name={item.path}
            className={cx(classes.button, {
              [classes.buttonActive]: item.path === location.pathname,
            })}
            onClick={handleClick}
            key={item.id}
            sx={{ fontWeight: 500 }}
          >
            {item.icon}
          </Button>
        );
      })}
    </Box>
  );
};

export { Footer };
