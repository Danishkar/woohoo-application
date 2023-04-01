import DogImg from '../assets/img/dogs/dog-contact.png';
import { useState } from "react";

const ContactUs = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = async(e)=>{
    e.preventDefault();
    
    console.log(name, email, message);
    if(name === "" ){
      setError("Please enter a name")
    }
    else if(email ===""){
      setError("Please enter the email address");
    }
    else if(message === "" ){
      setError("Please enter a message");
    }
    else{
      setError("Your message was Successful")
      setSuccess(true)
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(()=>{
        setSuccess(false)
        setError("")
      }, 4000)

    }
    
  }
  return ( 
    <section name='contact' className='py-12 lg:pb-12 lg:mt-32 relative min-h-[584px]' onSubmit={handleSubmit}>
      <div className='container mx-auto'>
        <div className='lg:absolute lg:-top-40 lg:left-0 lg:right-0'>
          {/* image */}
          <div className='hidden w-full max-w-[790px] mx-auto lg:flex justify-center'>
            <img src={DogImg} alt='' />
          </div>
          {/* form */}
          <form className='bg-yellow w-full max-w-[790px] h-[500px] mx-auto lg:-mt-5 rounded-[60px] 
          py-8 px-6 text-center flex flex-col justify-start items-center gap-y-4'>
            <h2 className='h2 my-4'>Contact Us</h2>
            <input
              className='input-control'
              type='text'
              placeholder='Full name'
              onChange = {(e)=>setName(e.target.value)}
              value= {name}
            />
            <input
              className='input-control'
              type='email'
              placeholder='Email address'
              onChange = {(e)=>setEmail(e.target.value)}
              value= {email}
            />
            <textarea 
              className='input-control py-4' 
              placeholder="Your message" 
              cols="30" 
              rows="10"
              onChange = {(e)=>setMessage(e.target.value)}
              value= {message}
            >
            </textarea>
            <button className='btn w-full max-w-[514px]'>Send</button>.
            <h2 className={`${success? "text-[#ffffff]" :"text-[#FF0000]"} font-bold text-2xl`}>{error && error}</h2>
          </form>
        </div>
      </div>
    </section> 
  );
}
 
export default ContactUs;