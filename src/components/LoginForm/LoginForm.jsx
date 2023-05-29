import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
// import { Form, Label } from './LoginForm.styled';
import { Button, Paper, Stack, TextField } from '@mui/material';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: '500px',
        mt: '20px',
        padding: '50px 15px',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Stack
        onSubmit={handleSubmit}
        component="form"
        sx={{
          width: '350px',
        }}
        spacing={2}
        autoComplete="off"
      >
        <TextField
          required
          id="outlined-required"
          label="Email"
          name="email"
          type="email"
        />
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          name="password"
        />

        <Button variant="outlined" type="submit" sx={{ height: '50px' }}>
          Log In
        </Button>
      </Stack>
    </Paper>
  );
};
