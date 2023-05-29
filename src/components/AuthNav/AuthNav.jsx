// import { NavLinkStyled } from './AuthNav.styled';
import { NavLink } from 'react-router-dom';
import { Typography, Box } from '@mui/material';

export const AuthNav = () => {
  return (
    <Box sx={{ ml: 'auto' }}>
      <NavLink to="/register">
        <Typography
          component="span"
          variant="body1"
          color="white"
          sx={{ fontWeight: '700', mr: '30px' }}
        >
          Register
        </Typography>
      </NavLink>
      <NavLink to="/login">
        <Typography
          component="span"
          variant="body1"
          color="white"
          sx={{ fontWeight: '700', mr: '30px' }}
        >
          Log In
        </Typography>
      </NavLink>
    </Box>
  );
};
