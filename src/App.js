import {useContext} from 'react'
import Login from './pages/login/Login.tsx';
import { MantineProvider, ColorSchemeProvider} from '@mantine/core';
import AuthorizedUserContext from './contexts/AuthorizedUserContext';
import NotificationContext from './contexts/NotificationContext';
import PageLinksContext from './contexts/PageLinksContext'
import {Routes, Route} from 'react-router-dom'
import SimpleFooter from './components/SimpleFooter.tsx';
import Home from './pages/home/Home';
import SignUp from './pages/signup/SignUp.tsx';
import ResetPassword from './pages/resetpassword/ResetPassword.tsx';
import Dashboard from './pages/dashboard/Dashboard';
import FindUsers from './pages/findusers/FindUsers'
import UserProfile from './pages/userprofile/UserProfile'
import ProtectedRoute from './components/ProtectedRoute';
import NavBarZeroMargin from './components/NavBarZeroMargin.tsx';
import SetupProfile from './pages/setupprofile/SetupProfile';
import SimpleNotification from './components/SimpleNotification';

function App() {
  const {colorScheme, setColorScheme, authUser} = useContext(AuthorizedUserContext)
  const {message} = useContext(NotificationContext)
  const { footerLinks} = useContext(PageLinksContext);
  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }
  const getColorScheme = (scheme) => {
    return scheme === 'dark'? {backgroundColor: "#424342"} :  {backgroundColor: "#eaeaec"}
  }

  const headerLinksInfo = [
    {label: 'Home', link: '/auth/dashboard'},
    {label: 'Profile', link: `/auth/users/${authUser.uid}`},
    {label: 'Find People', link: '/auth/search-users'}
    ]

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>      
      <MantineProvider theme={{ fontFamily: 'Open Sans', colorScheme: `${colorScheme}` }} withGlobalStyles withNormalizeCSS >
        <div style={getColorScheme(colorScheme)}>
          <NavBarZeroMargin authUser={authUser} links={headerLinksInfo} />
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<ProtectedRoute />} path="/auth">
              <Route element={<UserProfile />} path="users/:uid" />
              <Route element={<UserProfile />} path="users" />
              <Route element={<Dashboard />} path="dashboard" />
              <Route element={<FindUsers />} path="search-users" />
              <Route element={<SetupProfile />} path="setup-profile" />
            </Route>
            <Route element={<Login />} path="/login" />
            <Route element={<SignUp />} path="/signup" />
            <Route element={<ResetPassword />} path="/reset-password" />
          </Routes>
          <SimpleNotification body={message} />
          <SimpleFooter links={footerLinks} />
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
