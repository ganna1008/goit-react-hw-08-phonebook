import { Navigation } from '../Navigation/Navigation';
// import { Header } from './AppBar.styled';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppBar, Toolbar } from '@mui/material';

export const AppBarComponent = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Toolbar>
      </AppBar>
    </header>
  );
};
