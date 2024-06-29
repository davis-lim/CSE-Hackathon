import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rego from './pages/Rego';
import Landing from './pages/LandingPage';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Hive from './pages/Hive';
import Camera from './pages/Camera';

function App() {


  return (
    <BrowserRouter>
        <Routes>
        <Route path='/' element={<Landing/>}/>
          <Route path='/rego' element={<Rego/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/hive' element={<Hive/>}/>
          <Route path='/camera' element={<Camera/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
