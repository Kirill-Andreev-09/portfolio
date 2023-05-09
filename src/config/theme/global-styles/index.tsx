import { Global } from "@mantine/core";

export const GlobalStyles = () => {
  return (
    <Global
      styles={(theme) => ({
        "*, *::before, *::after": {
          boxSizing: "border-box",
        },

        body: {
          ...theme.fn.fontStyles(),
          margin: 0,
          padding: 0,
        },
      })}
    />
  );
};
