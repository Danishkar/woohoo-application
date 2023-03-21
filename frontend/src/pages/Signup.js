import { useState} from "react"
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import api from "../api/woohoo_axios";

const Signup = ({setLogged}) => {
    const [Full_Name,setFullName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [ error,setError] =  useState("")
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError("")
        console.log(Full_Name,email, password);
        const body  = JSON.stringify({Full_Name,email,password})
        const headers = {
            "Content-Type": 'application/json'
        }
        try{
            const response = await api.post("api/user/signup", body, {headers} )
            const json = await response.data;
            if(response.statusText === 'OK'){
                setLogged(true);
                navigate("/")
                console.log("Sign up in successfully")
            }
        }catch(err){
            console.log(err.response.data.error);
            setError(err.response.data.error);	
        }
    }
    return (  
        <form className="Signup" onSubmit={handleSubmit}>
            <h3>Signup</h3>
            <label>Full Name</label>
            <input 
                type="Full Name"
                onChange = {(e)=>setFullName(e.target.value)}
                value= {Full_Name }
                />
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
 
export default Signup; 