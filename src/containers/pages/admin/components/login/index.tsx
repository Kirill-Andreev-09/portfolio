import { useContext } from "react";
import { useForm } from "@mantine/form";
import {
  TextInput,
  PasswordInput,
  Paper,
  Stack,
  Group,
  Button,
} from "@mantine/core";

import { FirebaseContext } from "src/utils";

type Form = {
  login: string;
  password: string;
};

export const Login = () => {
  const { setIsAdmin } = useContext(FirebaseContext);

  const form = useForm({
    initialValues: {
      login: "",
      password: "",
    },
  });

  const handleSubmit = (values: Form) => {
    const { login, password } = values;

    if (
      login === process.env.REACT_APP_ADMIN_LOGIN &&
      password === process.env.REACT_APP_ADMIN_PASSWORD
    ) {
      localStorage.setItem("isAdmin", JSON.stringify(true));
      setIsAdmin(true);
    } else {
      form.setFieldError("password", "Вы ввели неправильный логин или пароль");
    }
  };

  return (
    <Paper radius="md" p="xl" withBorder>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            required
            label="Login"
            value={form.values.login}
            onChange={(event) =>
              form.setFieldValue("login", event.currentTarget.value)
            }
            radius="md"
          />

          <PasswordInput
            required
            label="Password"
            value={form.values.password}
            onChange={(event) =>
              form.setFieldValue("password", event.currentTarget.value)
            }
            error={form.errors.password}
            radius="md"
          />
        </Stack>

        <Group position="apart" mt="xl">
          <Button type="submit" radius="xl" color="cyan">
            Войти
          </Button>
        </Group>
      </form>
    </Paper>
  );
};
