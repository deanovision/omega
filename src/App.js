import {useContext} from 'react'
import Login from './pages/login/Login.tsx';
import { MantineProvider, ColorSchemeProvider} from '@mantine/core';
import AuthorizedUserContext from './contexts/AuthorizedUserContext';
import {Routes, Route} from 'react-router-dom'
import { Footer } from './components/Footer.tsx'
import Home from './pages/home/Home';
import SignUp from './pages/signup/SignUp.tsx';
import Dashboard from './pages/dashboard/Dashboard';
import FindUsers from './pages/findusers/FindUsers'
import UserProfile from './pages/userprofile/UserProfile'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const {colorScheme, setColorScheme} = useContext(AuthorizedUserContext);
  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }
  const getColorScheme = (scheme) => {
    return scheme === 'dark'? {backgroundColor: "#424342"} :  {backgroundColor: "#eaeaec"}
  }
  let data = [{
    title: "string",
    links: [{ label: "string", link: "string" }]
  }]
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>      
      <MantineProvider theme={{ fontFamily: 'Open Sans', colorScheme: `${colorScheme}` }} withGlobalStyles withNormalizeCSS >
        <div style={getColorScheme(colorScheme)}>
          <Routes>
            <Route element={<Home />} path={"/"} />
            <Route element={<ProtectedRoute />} path="/auth">
              <Route element={<UserProfile />} path={"user"} />
              <Route element={<Dashboard />} path={"dashboard"} />
              <Route element={<FindUsers />} path={"search-users"} />
            </Route>
            <Route element={<Login />} path={"/login"} />
            <Route element={<SignUp />} path={"/signup"} />
          </Routes>
          <Footer data={data} />
        </div>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
