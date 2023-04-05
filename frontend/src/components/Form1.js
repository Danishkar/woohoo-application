import * as React from 'react';
import { useState} from "react"
import { Link, useNavigate } from "react-router-dom";
import api from "../api/woohoo_axios";
import { CircularProgress } from '@mui/material';
import{message as messages} from 'antd';

export default function Form1({setLogged,setUserName,setUserEmail}){
    const [loading, setLoading] = useState(false);
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        setLoading(true)
        e.preventDefault();
        const body  = JSON.stringify({name,email,password})
        const headers = {
            "Content-Type": 'application/json'
        }
        try{
            const response = await api.post("api/user/signup", body, {headers} )
            const json = await response.data;
            if(response.statusText === 'OK'){
                setLogged(true);
                setLoading(false)
                navigate("/")
                setUserName(json.name);
                setUserEmail(json.email);
                messages.success({content:"Signed up successfully",style:{marginTop:'1vh'}})
                console.log("Signed up successfully")
            }
        }catch(err){
            console.log(err.response.data.error);
            messages.error({content:err.response.data.error,style:{marginTop:'1vh'}})
            setLoading(false)
        }
    }
    return(
        <div className='bg-white px-10 rounded-3xl border-3' style={{borderColor:'#f3f4f6'}}>
            <h1 className='text-5xl font-semibold pt-4'>Sign up</h1>
            <p className='font-medium text-lg mt-2' style={{color:'#6b7280'}}>welcome to WooHoo!!!</p>
            <form className='mt-2' onSubmit={handleSubmit}>
                <div>
                    <label className='text-lg font-medium'>Full Name</label>
                    <input 
                        type={'text'} 
                        className='Full Name w-full border-2 rounded-xl p-4 mt-1 bg-transparent ' 
                        style={{borderColor:'#f3f4f6'}} 
                        placeholder='Full Name'
                        onChange = {(e)=>setName(e.target.value)}
                        value= {name}
                    />
                </div>

                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input 
                        type={'email'} 
                        className='email w-full border-2 rounded-xl p-4 mt-1 bg-transparent ' 
                        style={{borderColor:'#f3f4f6'}} 
                        placeholder='samplemail@mail.com'
                        onChange = {(e)=>setEmail(e.target.value)}
                        value= {email}
                    />
                </div>
                <div>
                    <label className='text-lg font-medium'>Password</label>
                    <input 
                        type={'password'} 
                        className='password w-full border-2 rounded-xl p-4 mt-1 bg-transparent' 
                        style={{borderColor:'#f3f4f6'}} 
                        placeholder='password'
                        onChange = {(e)=>setPassword(e.target.value)}
                        value= {password}
                    />
                </div> 
                <div className='mt-4 flex justify-between items-center'>
                    <div>
                        <input type={'checkbox'} id='remember'/>
                        <label className='mt-2 font-medium text-base' htmlFor='remember'> I agree all statements </label>
                    </div>
                    <button className='font-medium text-base text text-orange'>Term & Policy</button>

                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    <button className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01]  ease-in-out transform py-4 bg-orange rounded-xl text-white font-bold text-lg'>{loading?<CircularProgress color="inherit" size="2rem"/>:"Sign up"}</button>
                </div>
            
            </form>
            <div className='mt-6 pb-2 flex justify-center items-center'>
                <p className='font-medium text-base'>Already have an account?</p>
                <Link to={'/login'}>
                    <button className='ml-2 font-medium text-base text-orange'>Login</button>
                </Link>
            </div>

        </div>
           

    )
           
}