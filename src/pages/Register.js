import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Helmet } from 'react-helmet';
import { Box } from '@mui/material';

const Register = () => {
  return (
    <Box sx={{ marginLeft: '40px', display: 'inline-block' }}>
      <Helmet>
        <title>Registration</title>
      </Helmet>
      <RegisterForm />
    </Box>
  );
};

export default Register;
