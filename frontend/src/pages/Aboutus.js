import React from "react";
import "./Aboutus.css";

import Chandula from "../assets/img/Aboutus/Chandula.jpg"
import Ranudi from "../assets/img/Aboutus/Ranudi.jpeg"
import bodini from "../assets/img/Aboutus/bodini.jpeg"
import Sujana from "../assets/img/Aboutus/Sujana.jpg"
import Danishkar from "../assets/img/Aboutus/Danishkar.jpeg"
import Footer from "../components/Footer";
import Header from "../components/Header";
function Aboutus() {
    return (
    <div className="divv w-full max-w-[1440px] mx-auto bg-orange-quaternary relative">
        <Header />
        <div className="about-section">
            <h1 className="h11" style={{paddingTop: '0px', textAlign: 'center'}}>About Us</h1>
            <p className="pp" style={{fontSize: '20px', color:'black'}}>WooHoo is a website dedicated to 
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
        <h2 className="h22" style={{ textAlign: "center",  fontSize:  50 + 'px', color:'#FF4917' }}>Our Team</h2>
        <div className="row">
            <div className="columnn">
                <div className="cardd text-center">
                    <img src={Sujana} alt="Sujana" style={{ width: "33%" , marginLeft:"auto", marginRight:'auto' }} />
                    <div className="containers">
                        <h2 className="h22">Sujana Tharmalingam</h2>
                        <p className="titlee">Group Leader</p>
                        <p className="pp">IIT Number - 20210070<br></br> 
                            UOW Number - w1866994</p>
                        <p className="pp">tharmalingam2021007iit.ac.lk</p>
                        <p><button className="buttonn">Contact</button></p>
                    </div>
                </div>
            </div>

            <div className="columnn">
                <div className="cardd">
                    <img src={Danishkar} alt="Danishkar" style={{ width: "38%", marginLeft:"auto", marginRight:'auto'}} />
                    <div className="containers">
                        <h2 className="h22">Danishkar Sivalingam</h2>
                        <p className="titlee">Group Member</p>
                        <p className="pp">IIT Number - 20210070<br></br> 
                            UOW Number - w1866994</p>
                        <p className="pp">danishkar.20210779@iit.ac.lk</p>
                        <p><button className="buttonn">Contact</button></p>
                    </div>
                </div>
            </div>

            <div className="columnn">
                <div className="cardd">
                    <img src={bodini} alt="Bodini" style={{ width: "37%", marginLeft:"auto", marginRight:'auto' }} />
                    <div className="containers">
                        <h2 className="h22">Bodini Perera</h2>
                        <p className="titlee">Group Member</p>
                        <p className="pp">IIT Number - 20210123<br></br> 
                            UOW Number - w1870576</p>
                        <p className="pp">bodini.20210123@iit.ac.lk</p>
                        <p><button className="buttonn">Contact</button></p>
                    </div>
                </div>
            </div>

            <div className="columnn">
                <div className="cardd">
                    <img src={Ranudi} alt="Ranudi" style={{ width: "26%", marginLeft:"auto", marginRight:'auto' }} />
                    <div className="containers">
                        <h2 className="h22">Ranudi Kumarawadu</h2>
                        <p className="titlee">Group Member</p>
                        <p className="pp">IIT Number - 20210413<br></br> 
                            UOW Number - W1867139</p>
                        <p className="pp">ranudi.20210413@iit.ac.lk</p>
                        <p><button className="buttonn">Contact</button></p>
                    </div>
                </div>
            </div>

            <div className="columnn">
                <div className="cardd">
                    <img src={Chandula} alt="Chandula" style={{ width: "35%", marginLeft:"auto", marginRight:'auto' }} />
                    <div className="containers">
                        <h2 className="h22">Chandula Nipun</h2>
                        <p className="titlee">Group Member</p>
                        <p className="pp">IIT Number - 20210265<br></br>
                            Uow Number - W1867053</p>
                        <p className="pp">chandula.20210265@iit.ac.lk</p>
                        <p><button className="buttonn">Contact</button></p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full max-w-[1440px] mx-auto bg-orange-quaternary relative'>
            <Footer />
        </div>
    </div>
    );
}
        
  
export default Aboutus;   