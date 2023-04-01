import { Routes, Route } from 'react-router-dom';
// pages & components
import Home from './pages/Home';
import "./App.css"
import { useState } from 'react';
import Signup1 from './pages/Signup1';
import Login1 from './pages/Login1';
import Upload from './pages/Upload'
import Aboutus from './pages/Aboutus';
// import Profile from './pages/Profile';
function App() {
  const [logged,setLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  console.log(logged);
  return (
    !loading && (
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* { !logged ? <Route path='/profile' element={<Profile />} /> : null } */}
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
    )
  );
}

export default App;