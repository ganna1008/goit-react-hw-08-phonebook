import { useDispatch } from 'react-redux';

// import { Form, Label } from './RegisterForm.styled';
import { register } from 'redux/auth/operations';
import { Paper, TextField, Button, Stack } from '@mui/material';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const inputData = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.password.value,
    };

    dispatch(register(inputData));
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
          label="Username"
          type="text"
          name="name"
        />
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
          Register
        </Button>
      </Stack>
    </Paper>
  );
};
