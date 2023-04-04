import Form1 from "../components/Form1";
import dog from "../assets/img/dog.png";

function Signup1({setLogged,setUserName,setUserEmail}) {
    
  return (
    <div className="flex w-full h-screen">
       <div className="w-full flex items-center justify-center lg:w-1/2" style={{backgroundColor:'#f9fafb'}}>
        <Form1 setLogged={setLogged} setUserName={setUserName} setUserEmail={setUserEmail}/>
        </div>
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center" style={{backgroundColor:'#e5e7b'}}>
          <div >
            <img src={dog} width={520} height={520} alt=""></img>
           
          </div>

          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 ">

          </div>

        </div>
    </div>
  );
}

export default Signup1;