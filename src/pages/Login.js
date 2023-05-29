import { Helmet } from 'react-helmet';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Box } from '@mui/material';

const Login = () => {
  return (
    <Box sx={{ marginLeft: '40px', display: 'inline-block' }}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm />
    </Box>
  );
};

export default Login;
