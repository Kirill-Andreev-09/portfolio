import { useContext } from "react";
import { Layout } from "src/containers/layout";
import { ErrorBoundary } from "src/components/error-boundary";
import { FirebaseContext } from "src/utils";
import { AddProjectForm, Login } from "./components";

export const Admin = () => {
  const { db, isAdmin } = useContext(FirebaseContext);

  return (
    <ErrorBoundary componentTitle="Admin Page">
      <Layout hideFooter prevPage="/">
        {isAdmin ? <AddProjectForm /> : <Login />}
      </Layout>
    </ErrorBoundary>
  );
};
