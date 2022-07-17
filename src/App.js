import {useState} from 'react'
import Login from './pages/login/Login.tsx';
import { MantineProvider, ColorSchemeProvider} from '@mantine/core';
import {Routes, Route} from 'react-router-dom'
import { Footer } from './components/Footer.tsx'
import Home from './pages/home/Home';
import SignUp from './pages/signup/SignUp.tsx';
import Dashboard from './pages/dashboard/Dashboard';
import FindUsers from './pages/findusers/FindUsers'
import UserProfile from './pages/userprofile/UserProfile'
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  let data = [{
    title: "string",
    links: [{ label: "string", link: "string" }]
  }]
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>      
    <MantineProvider theme={{ fontFamily: 'Open Sans', colorScheme: `${colorScheme}` }} withGlobalStyles withNormalizeCSS >
      <div className="App">
        <Routes>
          <Route element={<Home />} path={"/"} />
          <Route element={<ProtectedRoute />} path="/auth">
            <Route element={<UserProfile />} path={"user"} />
            <Route element={<Dashboard />} path={"dashboard"} />
            <Route element={<FindUsers />} path={"search-users"} />
          </Route>
          <Route element={<Login />} path={"/auth/login"} />
          <Route element={<SignUp />} path={"/auth/signup"} />
        </Routes>
        <Footer data={data} />
      </div>
    </MantineProvider>
  </ColorSchemeProvider>
  );
}

export default App;
