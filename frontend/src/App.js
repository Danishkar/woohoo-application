import { Routes, Route } from 'react-router-dom';
// pages & components
import Signup from './pages/Signup';
import Home from './pages/Home';
import "./App.css"
import { useState } from 'react';
import Signup1 from './pages/Signup1';
import Login1 from './pages/Login1';
import Upload from './pages/Upload'
import Aboutus from './pages/Aboutus';
import Profile from './pages/Profile';
function App() {
  const [logged,setLogged] = useState(false);
  console.log(logged);
  return (
    <Routes>
      { logged ? <Route path='/' element={<Home/>} /> : null }
      { logged ? <Route path='/profile' element={<Profile />} /> : null }
      <Route
        path='/login'
        element={<Login1 setLogged={setLogged}/>}
      />
      <Route
        path='/signup'
        element={<Signup1 setLogged={setLogged} />}
      />
      <Route
        path='/upload'
        element={<Upload />}
      />
      <Route
      path='/about'
      element={<Aboutus/>}/>
      <Route
        path='/upload'
        element={<Upload />}
      />
    </Routes>
  );
}

export default App;