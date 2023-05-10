import { useContext, useState } from "react";
import { collection, addDoc, setDoc } from "firebase/firestore";
import {
  Box,
  Button,
  Text,
  MultiSelect,
  SimpleGrid,
  TextInput,
  Title,
} from "@mantine/core";
import { Project } from "../../types";
import { FirebaseContext } from "src/utils";
import { technologiesData } from "../../constants";
import { useForm } from "@mantine/form";
import { useStyles } from "./styles";
import { useDisclosure } from "@mantine/hooks";

const initialValue: Project = {
  title: "",
  description: "",
  githubRepoUrl: "",
  githubPagesUrl: "",
  technologies: [],
};

export const AddProjectForm = () => {
  const { classes } = useStyles();
  const { db } = useContext(FirebaseContext);
  const [isLoading, setLoading] = useState(false);

  const form = useForm({
    initialValues: initialValue,
  });

  const projectsCollectionRef = collection(db, "projects");

  const handleSubmit = async (values: Project) => {
    setLoading(true);
    try {
      // Создаем новый документ в коллекции
      const newProjectDocRef = await addDoc(projectsCollectionRef, values);

      // Устанавливаем значение документа
      await setDoc(newProjectDocRef, values);

      form.reset();
    } catch (error: any) {
      if (error.message && error.message.includes("Missing required fields")) {
        console.error(error.message);
      } else {
        console.error("Error adding project", error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleTechnologiesChange = (value: string[]) => {
    form.setFieldValue("technologies", value);
  };

  return (
    <Box>
      <form className={classes.form} onSubmit={form.onSubmit(handleSubmit)}>
        <Title order={3} mb={24} color="white">
          Добавление нового проекта
        </Title>
        <SimpleGrid
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: "md", cols: 3, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          <TextInput
            label={<Text color="white">Название</Text>}
            placeholder="Название"
            disabled={isLoading}
            {...form.getInputProps("title")}
          />

          <TextInput
            label={<Text color="white">Описание</Text>}
            placeholder="Описание"
            disabled={isLoading}
            {...form.getInputProps("description")}
          />

          <TextInput
            label={<Text color="white">Ссылка на Github Repo</Text>}
            placeholder="Ссылка на Github Repo"
            disabled={isLoading}
            {...form.getInputProps("githubRepoUrl")}
          />

          <TextInput
            label={<Text color="white">Ссылка на Github Pages</Text>}
            placeholder="Ссылка на Github Pages"
            disabled={isLoading}
            {...form.getInputProps("githubPagesUrl")}
          />

          <MultiSelect
            sx={{
              width: "255px",
            }}
            searchable
            id="technologies-select"
            label={<Text color="white">Используемые технологии</Text>}
            placeholder="Выберите технологии"
            data={technologiesData.map((tech) => ({
              value: tech,
              label: tech,
            }))}
            value={form?.values?.technologies ?? []}
            onChange={handleTechnologiesChange}
            disabled={isLoading}
          />
        </SimpleGrid>
        <Button type="submit" mt={24} loading={isLoading}>
          Добавить
        </Button>
      </form>
    </Box>
  );
};
