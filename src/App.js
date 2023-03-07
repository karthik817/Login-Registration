
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Register from './components/register/Register';

function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/register" element = {<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
