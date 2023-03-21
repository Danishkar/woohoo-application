import React from "react";
import "./Aboutus.css";

import Chandula from "../assets/img/Aboutus/Chandula.jpg"
import text from "../assets/img/Aboutus/text.png"
import bodini from "../assets/img/Aboutus/bodini.jpeg"
import Sujana from "../assets/img/Aboutus/Sujana.jpg"
import Footer from "../components/Footer";
function Aboutus() {
    return (
    <>
        <div className="about-section">
            <h1 style={{paddingTop: '0px', textAlign: 'center'}}>About Us</h1>
            <p style={{fontSize: '20px', color:'black'}}>WooHoo is a website dedicated to 
            identifying and treating skin diseases in dogs and cats. Our team of 
            experienced veterinarians and animal healthcare professionals work tirelessly 
            to provide the best possible care for your beloved pets.<br></br>

           At WooHoo, we understand how important your pets are to you, 
           which is why we are committed to providing the highest level of care and treatment for them. 
           We specialize in diagnosing and treating skin conditions in dogs and cats, including allergies, infections, 
           and other issues that can cause discomfort and pain for your furry friends.<br></br>

           Our team is dedicated to staying up-to-date with the latest research and 
           techniques in animal healthcare, so that we can provide the most effective and 
           efficient treatment options for our patients. We also believe in working closely 
           with pet owners to develop individualized treatment plans that meet the unique needs 
           of each pet and their owner.<br></br>

           At WooHoo, we are passionate about helping pets live healthy and happy lives, and we are 
           committed to providing exceptional care and service to each and every one of our patients. 
           If you have any questions or concerns about your pet's health, or if you suspect they may be 
           suffering from a skin condition, please don't hesitate to contact us. We are here to help and 
           support you and your pet every step of the way.</p>
          
        </div>
        <h2 style={{ textAlign: "center",  fontSize:  50 + 'px', color:'#FF4917' }}>Our Team</h2>
        <div className="row">
            <div className="column">
                <div className="card">
                    <img src={Sujana} alt="Jane" style={{ width: "38%" }} />
                    <div className="container">
                        <h2>Sujana Tharmalingam</h2>
                        <p className="title">Group Leader</p>
                        <p>IIT Number - 20210070<br></br> 
                            UOW Number - w1866994</p>
                        <p>tharmalingam2021007iit.ac.lk</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src={text} alt="Danishkar" style={{ width: "50%",  }} />
                    <div className="container">
                        <h2>Danishkar Sriwagalingm</h2>
                        <p className="title">Group Member</p>
                        <p>IIT Number - 20210070<br></br> 
                            UOW Number - w1866994</p>
                        <p>mike@example.com</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src={bodini} alt="Bodini" style={{ width: "40%" }} />
                    <div className="container">
                        <h2>Bodini Perera</h2>
                        <p className="title">Group Member</p>
                        <p>IIT Number - 20210123<br></br> 
                            UOW Number - w1870576</p>
                        <p>bodini.20210123@iit.ac.lk</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src={text} alt="Ranudi" style={{ width: "50%" }} />
                    <div className="container">
                        <h2>Ranudi Kumarawadu</h2>
                        <p className="title">Group Member</p>
                        <p>IIT Number - 20210413<br></br> 
                            UOW Number - W1867139</p>
                        <p>ranudi.20210413@iit.ac.lk</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div>

            <div className="column">
                <div className="card">
                    <img src={Chandula} alt="Chandula" style={{ width: "40%" }} />
                    <div className="container">
                        <h2>Chandula NIpun</h2>
                        <p className="title">Group Member</p>
                        <p>IIT Number - 20210265<br></br>
                            Uow Number - W1867053</p>
                        <p>chandula.20210265@iit.ac.lk</p>
                        <p><button className="button">Contact</button></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full max-w-[1440px] mx-auto bg-orange-quaternary relative'>
            <Footer />
        </div>
    </>
    );
}
        
  
export default Aboutus;        
