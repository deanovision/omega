import './App.css';
import Login from './pages/login/Login.tsx';
import SideBar from './components/SideBar.tsx'
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      Omega
      <Routes>
        <Route element={<Login />} path={"/"} />
      </Routes>
    </div>
  );
}

export default App;
