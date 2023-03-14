import Form from "../components/Form";
import main from '../assets/img/main.jpg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/woohoo_axios";

function Login1({setLogged}) {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [ error,setError] =  useState("")
  const navigate = useNavigate();
  const handleSubmit = async(e)=>{
      e.preventDefault();
      setError("")
      console.log(email, password);
      const body  = JSON.stringify({email,password})
      const headers = {
          "Content-Type": 'application/json'
      }
      try{
          const response = await api.post("api/user/login", body, {headers} )
          const json = await response.data;
          if(response.statusText === 'OK'){
              setLogged(true);
              navigate("/")
              console.log("logged in successfully")
          }
      }catch(err){
          console.log(err.response.data.error);
          setError(err.response.data.error);	
      }
  }

  return (
    <div className="flex w-full h-screen">
       <div className="w-full flex items-center justify-center lg:w-1/2" style={{backgroundColor:'#f9fafb'}}>
        <Form email={email} password={password} setEmail={setEmail} setPassword={setPassword} handleSubmit={handleSubmit} error={error}/>
        </div>
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center" style={{backgroundColor:'#e5e7b'}}>
          <div >
            <img src={main} width={520} height={520} alt=""></img>
           
          </div>

          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 ">

          </div>

        </div>
    </div>
  );
}

export default Login1;
