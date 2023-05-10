import { ErrorBoundary } from "src/components/error-boundary";
import { Layout } from "src/containers/layout";
import { Projects } from "./components/projects";
import { AdminButton } from "./components/admin-button";

export const Home = () => {
  return (
    <ErrorBoundary componentTitle="Home Page">
      <Layout hideFooter headerRightSection={<AdminButton />}>
        <Projects />
      </Layout>
    </ErrorBoundary>
  );
};
