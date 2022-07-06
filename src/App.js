import './App.css';
import Login from './pages/login/Login.tsx';
import {Routes, Route} from 'react-router-dom'
import { Footer } from './components/Footer.tsx'
import Home from './pages/home/Home';

function App() {
  let data = [{
    title: "string",
    links: [{ label: "string", link: "string" }]
  }]
  return (
    <div className="App">
      <Routes>
        <Route element={<Home />} path={"/"} />
        <Route element={<Login />} path={"/auth/login"} />
      </Routes>
    <Footer data={data} />
    </div>
  );
}

export default App;
