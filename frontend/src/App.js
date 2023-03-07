import { Routes, Route } from 'react-router-dom';
// pages & components
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import "./App.css"
import { useState } from 'react';
function App() {
  const [logged,setLogged] = useState(false);
  return (
    <Routes>
      {!logged ? <Route path='/' element={<Home/>} /> : null }
      <Route
        path='/login'
        element={<Login setLogged={setLogged}/>}
      />
      <Route
        path='/signup'
        element={<Signup setLogged={setLogged} />}
      />
    </Routes>
  );
}

export default App;