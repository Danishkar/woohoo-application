import { useState} from "react"
import { useNavigate } from "react-router-dom";
import api from "../api/woohoo_axios";

const Login = ({setLogged}) => {
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
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log in</h3>
            <label>Email:</label>
            <input 
                type="email"
                onChange = {(e)=>setEmail(e.target.value)}
                value= {email}
            />
            <label>Password:</label>
            <input 
                type="password"
                onChange = {(e)=>setPassword(e.target.value)}
                value= {password}
            />
            <button>Log in</button>
            {error ? <h1>{error}</h1> : null}
            
        </form> 
    );
}
 
export default Login; 