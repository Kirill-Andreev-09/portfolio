import { Box } from "@mantine/core";
import { FC, ReactNode } from "react";
import { ArrowLeftIcon } from "../../assets/icons";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { useStyles } from "./styles";

import { useLocation } from "react-router-dom";
import { ROUTES } from "src/config";

interface ICurrentTitle {
  [key: string]: string;
}

const currentTitle: ICurrentTitle = {
  [ROUTES.home.name]: "Мои проекты",
  [ROUTES.admin.name]: "Админка",
};

interface ILayoutProps {
  children: ReactNode;
  prevPage?: string;
  headerRightSection?: ReactNode;
  hideFooter?: boolean;
}

export const Layout: FC<ILayoutProps> = ({
  children,
  prevPage,
  headerRightSection,
  hideFooter,
}) => {
  const location = useLocation();
  const { classes } = useStyles();

  const getTitlePage = (pathname: string) => {
    if (pathname === ROUTES.home.path) {
      return currentTitle[ROUTES.home.name];
    } else if (pathname === ROUTES.admin.path) {
      return currentTitle[ROUTES.admin.name];
    } else {
      return "";
    }
  };

  return (
    <Box className={classes.root}>
      <Header
        title={getTitlePage(location.pathname)}
        prevPage={prevPage}
        iconLeft={<ArrowLeftIcon fill="white" />}
        iconRight={headerRightSection}
      />
      {children}
      {!hideFooter && <Footer />}
    </Box>
  );
};
