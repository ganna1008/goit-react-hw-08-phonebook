import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Username, Wrapper } from './UserMenu.style';
import { Button } from '@mui/material';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Button
        variant="outlined"
        type="button"
        onClick={handleLogOut}
        color="inherit"
      >
        Logout
      </Button>
    </Wrapper>
  );
};
