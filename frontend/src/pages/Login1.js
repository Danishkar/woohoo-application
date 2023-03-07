import Form from "../components/Form";
import main from '../assets/img/main.jpg'

function Login1() {
  return (
    <div className="flex w-full h-screen">
       <div className="w-full flex items-center justify-center lg:w-1/2" style={{backgroundColor:'#f9fafb'}}>
        <Form/>
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
