import { Box, SimpleGrid } from "@mantine/core";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Card } from "src/components/card";
import { LoaderContainer } from "src/components/loader-container";
import { ScrollContainer } from "src/components/scroll-container";
import { Project } from "src/containers/pages/admin/types";
import { FirebaseContext } from "src/utils";
import { useFirebaseCollection } from "src/utils/hooks/useFirebaseCollection";
import { useStyles } from "./styles";
import useDeleteProject from "src/utils/hooks/useDeleteProject";

export const Projects = () => {
  const { classes } = useStyles();
  const { db, isAdmin } = useContext(FirebaseContext);
  const { data, loading } = useFirebaseCollection(db, "projects");
  const deleteProject = useDeleteProject(db, "projects");

  const handleDeleteClick = (id: string) => {
    deleteProject(id);
  };

  if (loading) {
    return <LoaderContainer />;
  }

  return (
    <ScrollContainer>
      <Box className={classes.container}>
        <SimpleGrid
          w="100%"
          cols={4}
          spacing="lg"
          breakpoints={[
            { maxWidth: "md", cols: 3, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          {data?.map((proj: Project) => {
            return (
              <Card
                key={proj.id}
                id={proj.id}
                title={proj.title}
                description={proj.description}
                githubRepoUrl={proj.githubRepoUrl}
                githubPagesUrl={proj.githubPagesUrl}
                technologies={proj.technologies}
                onDeleteProject={handleDeleteClick}
                isAdmin={isAdmin}
              />
            );
          })}
        </SimpleGrid>
      </Box>
    </ScrollContainer>
  );
};
