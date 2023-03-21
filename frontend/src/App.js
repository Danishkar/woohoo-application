import { Routes, Route } from 'react-router-dom';
// pages & components
import Signup from './pages/Signup';
import Home from './pages/Home';
import "./App.css"
import { useState } from 'react';
import Signup1 from './pages/Signup1';
import Login1 from './pages/Login1';
import Aboutus from './pages/Aboutus';
function App() {
  const [logged,setLogged] = useState(false);
  return (
    <Routes>
      {!logged ? <Route path='/' element={<Home/>} /> : null }
      <Route
        path='/login'
        element={<Login1 setLogged={setLogged}/>}
      />
      <Route
        path='/signup'
        element={<Signup1 setLogged={setLogged} />}
      />
      <Route
      path='/about'
      element={<Aboutus/>}/>
    </Routes>
  );
}

export default App;