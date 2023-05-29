import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
// import { NavLinkStyled } from './Navigation.styled';
import { Typography } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <NavLink to="/">
        <Typography
          component="span"
          variant="body1"
          color="white"
          sx={{ fontWeight: '700', mr: '30px' }}
        >
          Home
        </Typography>
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts">
          <Typography
            component="span"
            variant="body1"
            color="white"
            sx={{ fontWeight: '700' }}
          >
            Contacts
          </Typography>
        </NavLink>
      )}
    </nav>
  );
};
