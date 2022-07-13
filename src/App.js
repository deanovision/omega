import './App.css';
import Login from './pages/login/Login.tsx';
import {Routes, Route} from 'react-router-dom'
import { Footer } from './components/Footer.tsx'
import Home from './pages/home/Home';
import SignUp from './pages/signup/SignUp.tsx';
import Dashboard from './pages/dashboard/Dashboard';
import FindUsers from './pages/findusers/FindUsers'

function App() {
  let data = [{
    title: "string",
    links: [{ label: "string", link: "string" }]
  }]
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Dashboard />} path={"/dashboard"} />
        <Route element={<FindUsers />} path={"/search-users"} />
        <Route element={<Login />} path={"/auth/login"} />
        <Route element={<SignUp />} path={"/auth/signup"} />
      </Routes>
    <Footer data={data} />
    </div>
  );
}

export default App;
