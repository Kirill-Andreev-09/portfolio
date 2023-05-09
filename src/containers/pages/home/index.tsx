import { ErrorBoundary } from "src/components/error-boundary";
import { Layout } from "src/containers/layout";
import { Projects } from "./components/projects";

export const Home = () => {
  return (
    <ErrorBoundary componentTitle="Home Page">
      <Layout hideFooter>
        <Projects />
      </Layout>
    </ErrorBoundary>
  );
};
