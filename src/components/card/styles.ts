import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  deleteContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: "-26px",
  },

  card: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    borderRadius: "10px",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.12)",
    marginBottom: theme.spacing.sm,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
}));
