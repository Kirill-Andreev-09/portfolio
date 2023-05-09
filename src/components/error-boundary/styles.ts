import { createStyles } from '@mantine/core';

export const useStyles = createStyles((theme) => ({
  errorContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    color: 'white',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },

  errorInfo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    height: '100%'
  },

  button: {
    marginTop: theme.spacing.md
  },

  textError: {
    color: theme.colors.red
  }
}));
