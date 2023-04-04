import DogImg from '../assets/img/dogs/dog-contact.png';
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import{message as messages} from 'antd';

const ContactUs = () => {
  const form = useRef();
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const handleSubmit = async(e)=>{
    e.preventDefault();
    
    console.log(name, email, message);
    if(name === "" ){
      messages.error({"content":"Please enter the full name", "style":{marginTop: '10vh'}})
    }
    else if(email ===""){
      messages.error({"content":"Please enter the email address", "style":{marginTop: '10vh'}})
    }
    else if(message === "" ){
      messages.error({"content":"Please enter your message", "style":{marginTop: '10vh'}})
    }
    else{
      sendEmail(e)
      setSuccess(true)
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(()=>{
        setSuccess(false)
      }, 4000)

    }
    
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ijd414o', 'template_obdkp0q', form.current, 'Mine2i3LfozGh5wAI')
      .then((result) => {
          messages.success({"content":"Message sent successfully", "style":{marginTop: '10vh'}})
          console.log(result.text);
          setName("")
          setEmail("")
          setMessage("")
      }, (error) => {
          console.log(error.text);
          messages.error({"content":"Error occured!!", "style":{marginTop: '10vh'}})
      });
  };

  return ( 
    <section name='contact' className='py-12 lg:pb-12 lg:mt-32 relative min-h-[584px]' onSubmit={handleSubmit}>
      <div className='container mx-auto'>
        <div className='lg:absolute lg:-top-40 lg:left-0 lg:right-0'>
          {/* image */}
          <div className='hidden w-full max-w-[790px] mx-auto lg:flex justify-center'>
            <img src={DogImg} alt='' />
          </div>
          {/* form */}
          <form ref={form} className='bg-yellow w-full max-w-[790px] h-[500px] mx-auto lg:-mt-5 rounded-[60px] 
          py-8 px-6 text-center flex flex-col justify-start items-center gap-y-4'>
            <h2 className='h2 my-4'>Contact Us</h2>
            <input
              className='input-control'
              type='text'
              placeholder='Full name'
              onChange = {(e)=>setName(e.target.value)}
              value= {name}
              name='name'
            />
            <input
              className='input-control'
              type='email'
              placeholder='Email address'
              onChange = {(e)=>setEmail(e.target.value)}
              value= {email}
              name='email'
            />
            <textarea 
              className='input-control py-4' 
              placeholder="Your message" 
              cols="30" 
              rows="10"
              onChange = {(e)=>setMessage(e.target.value)}
              value= {message}
              name="message"
            >
            </textarea>
            <button className='btn w-full max-w-[514px]'>Send</button>.
          </form>
        </div>
      </div>
    </section> 
  );
}
 
export default ContactUs;