import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Username, Wrapper } from './UserMenu.style';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <button type="button" onClick={handleLogOut}>
        Logout
      </button>
    </Wrapper>
  );
};
