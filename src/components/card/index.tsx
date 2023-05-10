import {
  Card as DefaultCard,
  Text,
  Badge,
  Button,
  Group,
  Indicator,
  ActionIcon,
  Box,
} from "@mantine/core";
import { memo } from "react";
import { DeleteIcon } from "src/assets/icons";
import { Project } from "src/containers/pages/admin/types";
import { useStyles } from "./styles";

type Props = Project & {
  onDeleteProject: (id: string) => void;
  isAdmin: boolean;
};

const CustomCard = ({
  id,
  title,
  description,
  githubRepoUrl,
  githubPagesUrl,
  technologies,
  onDeleteProject,
  isAdmin,
}: Props) => {
  const { classes } = useStyles();

  return (
    <DefaultCard className={classes.card} shadow="sm" padding="lg" radius="md">
      <Box>
        {isAdmin && (
          <Box className={classes.deleteContainer}>
            <ActionIcon
              variant="transparent"
              onClick={() => onDeleteProject(id!)}
            >
              <DeleteIcon />
            </ActionIcon>
          </Box>
        )}

        <Group position="apart" mb="xs">
          <Text weight={500} color="white">
            {title}
          </Text>
        </Group>

        {technologies?.map((item) => {
          return (
            <Badge key={item} color="cyan" variant="filled" mr={4}>
              {item}
            </Badge>
          );
        })}

        <Group position="apart" mt="xs">
          <Text size="sm" color="white">
            {description}
          </Text>
        </Group>
      </Box>

      <Box>
        <Button
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={githubRepoUrl}
          variant="filled"
          color="cyan"
          fullWidth
          mt="md"
          radius="md"
        >
          Github Repo
        </Button>
        <Button
          component="a"
          target="_blank"
          rel="noopener noreferrer"
          href={githubPagesUrl}
          variant="filled"
          color="cyan"
          fullWidth
          mt="md"
          radius="md"
        >
          Github Page
        </Button>
      </Box>
    </DefaultCard>
  );
};

export const Card = memo(CustomCard);
