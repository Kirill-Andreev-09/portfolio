import {
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
} from "@mantine/core";
import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const goHomePage = () => {
    navigate("/");
  };

  return (
    <Container className={classes.root}>
      <SimpleGrid
        spacing={80}
        cols={2}
        breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
      >
        <Image
          src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"
          className={classes.mobileImage}
        />
        <div>
          <Title className={classes.title}>Something is not right...</Title>
          <Text color="dimmed" size="lg">
            Страница, которую вы пытаетесь открыть, не существует. Возможно, вы
            ошиблись при вводе адреса или страница была перемещена по другому
            URL-адресу.
          </Text>
          <Button
            variant="outline"
            size="md"
            mt="xl"
            className={classes.control}
            onClick={goHomePage}
          >
            Вернуться на главную страницу
          </Button>
        </div>
        <Image
          src="https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg"
          className={classes.desktopImage}
        />
      </SimpleGrid>
    </Container>
  );
};
