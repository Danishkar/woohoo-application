import { Routes, Route, Navigate } from 'react-router-dom';
// pages & components
import Home from './pages/Home';
import Accommodation from './pages/Accommodation';
import "./App.css"
import { useState } from 'react';
import Signup1 from './pages/Signup1';
import Login1 from './pages/Login1';
import Upload from './pages/Upload'
import Aboutus from './pages/Aboutus';
function App() {
  const [logged,setLogged] = useState(false);
  const [loading, setLoading] = useState(true);

  // state variables for the user
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  console.log(logged);
  console.log("user details "+userName+" , "+ userEmail);
  return (
    !loading && (
    <Routes>
      <Route path='/' element={<Home logged={logged} setLogged={setLogged}/>} />
      <Route
        path='/login'
        element={<Login1 setLogged={setLogged} setUserName={setUserName} setUserEmail={setUserEmail}/>}
      />
      <Route
        path='/signup'
        element={<Signup1 setLogged={setLogged} setUserName={setUserName} setUserEmail={setUserEmail}/>}
      />
      <Route path='/upload' element={logged ? <Upload logged={logged} setLogged={setLogged} /> : <Navigate to="/login" />} />
      
      <Route path='/about' element={<Aboutus logged={logged} setLogged={setLogged}/>}/>

      <Route 
        path="/accommodation" 
        element={logged ? <Accommodation logged={logged} setLogged={setLogged} userEmail={userEmail}/> : <Navigate to="/login" />} />
    </Routes>
    )
  );
}

export default App;