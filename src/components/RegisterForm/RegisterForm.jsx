import { useDispatch } from 'react-redux';

import { Form, Label } from './RegisterForm.styled';
import { register } from 'redux/auth/operations';

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

    console.log('data', inputData);
    dispatch(register(inputData));
    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <input type="text" name="name" />
      </Label>
      <Label>
        Email
        <input type="email" name="email" />
      </Label>
      <Label>
        Password
        <input type="password" name="password" />
      </Label>
      <button type="submit">Register</button>
    </Form>
  );
};
