import { Box, Button, Text } from '@mantine/core';
import React, { Component, ErrorInfo, FC, ReactNode } from 'react';
import { useStyles } from './styles';

interface IErrorBoundaryProps {
  componentTitle: string;
  hasError?: boolean;
  children: ReactNode;
  classes?: { [key: string]: string };
}

interface IErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
  errorInfo: string | null;
}

class ErrorBoundaryInner extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: props.hasError === undefined ? false : props.hasError,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`PageBlockRenderFail: ${this.props.componentTitle}`, error, {
      componentStack: errorInfo.componentStack,
      componentTitle: this.props.componentTitle
    });
    this.setState({ error, errorInfo: `${error.name}: ${error.message}` });
  }

  retry = () => {
    this.setState({
      hasError: false
    });
    location.reload();
  };

  render() {
    if (this.state.hasError || this.props.hasError) {
      return (
        <Box className={this.props.classes?.errorContainer}>
          <Box className={this.props.classes?.errorInfo}>
            <Text>Произошла ошибка, перезагрузите страницу или повторите попытку</Text>
            {process.env.NODE_ENV === 'development' ? (
              <>
                <Text>Ошибка:</Text>
                <Text className={this.props.classes?.textError}>{this.state.errorInfo}</Text>

                <Text>Компонент с ошибкой:{this.props.componentTitle}</Text>
              </>
            ) : (
              <></>
            )}

            <Button size="md" className={this.props.classes?.button} onClick={this.retry}>
              Обновить
            </Button>
          </Box>
          <br />
        </Box>
      );
    }

    return this.props.children;
  }
}

export const ErrorBoundary: FC<IErrorBoundaryProps> = (props) => {
  const { classes } = useStyles();
  return <ErrorBoundaryInner {...props} classes={classes} />;
};
