import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Accommodation.css"
import api from "../api/woohoo_axios";
import Modals from "../components/Modals.js"
import{message as messages} from 'antd';

const Accommodation = ({logged,setLogged,userEmail}) => {
    const [showModal, setShowModal] = useState(false);
    const [count, setCount] = useState(0);

    const [name, setName] = useState('');
    const [contactNumber, setContactNumber] = useState('');
    const [selectedShelter, setSelectedShelter] = useState(null);
    const [selectedAnimal, setSelectedAnimal] = useState('Dog');
    const [organizationDetails, setOrganizationDetails] = useState([]);

    const FetctData = async () => {
        useEffect(() => {
        api.get('api/retreiveOrganization')
          .then((response) => {
            console.log(response.data);
            setOrganizationDetails(response.data);
          })
          .catch((error) => {
            console.log(error);
          })
      }, [count]);
    }

    FetctData()
    const handleFormSubmit = async(event) => {
        event.preventDefault();
        if(name == ""){
            messages.error({"content":"Enter your name", "style":{marginTop: '10vh'}})
        }
        else if(contactNumber == ""){
            messages.error({"content":"Enter your contact number", "style":{marginTop: '10vh'}})
        }
        else if(selectedShelter == null){
            messages.error({"content":"Select an organization", "style":{marginTop: '10vh'}})
        }
        else if(selectedShelter){
            var data = {
                service_id: 'service_ptoopvd',
                template_id: 'template_fxeoblj',
                user_id: 'Mine2i3LfozGh5wAI',
                template_params: {
                    'organizationName': selectedShelter.organizationName,
                    'userEmail': selectedShelter.userEmail,
                    'name': name,
                    'selectedAnimal': selectedAnimal,
                    'contactNumber': contactNumber,
                }
            };
            if(selectedAnimal === "Dog"){
                if(selectedShelter.noOfSlotsDogs > 0){
                    try{
                        const organizationName = selectedShelter.organizationName
                        const noOfDogs = selectedShelter.noOfSlotsDogs - 1
                        const noOfCats = selectedShelter.noOfSlotsCats
                        const userEmail = selectedShelter.userEmail
                        const body  = JSON.stringify({organizationName,noOfSlotsDogs:noOfDogs,noOfSlotsCats:noOfCats,userEmail})
                        const headers = {
                            "Content-Type": 'application/json'
                        }
                        const response = await api.put("api/updateOrganization/"+selectedShelter._id, body, {headers} )
                        const json = await response.data;
                        if(response.statusText === 'OK'){
                            api.post('https://api.emailjs.com/api/v1.0/email/send', data, {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                                .then(function (response) {
                                    console.log(response);
                                    messages.success({"content":"Your mail is sent!", "style":{marginTop: '10vh'}})
                                })
                                .catch(function (error) {
                                    console.log(error);
                                    messages.error({"content":"Oops... " + JSON.stringify(error), "style":{marginTop: '10vh'}})
                                });
                            setName("");
                            setContactNumber("");
                            setSelectedAnimal("Dog");
                            setSelectedShelter(null);
                            console.log(json)
                            setCount(prevCount => prevCount + 1)
                        }
                    }catch(err){
                        console.log(err)
                    }
                    
                }else{
                    messages.error({"content":"No slots available for dogs", "style":{marginTop: '10vh'}})
                }
            }else{
                if(selectedShelter.noOfSlotsCats > 0){
                    try{
                        const organizationName = selectedShelter.organizationName
                        const noOfDogs = selectedShelter.noOfSlotsDogs
                        const noOfCats = selectedShelter.noOfSlotsCats - 1
                        const userEmail = selectedShelter.userEmail
                        const body  = JSON.stringify({organizationName,noOfSlotsDogs:noOfDogs,noOfSlotsCats:noOfCats,userEmail})
                        const headers = {
                            "Content-Type": 'application/json'
                        }
                        const response = await api.put("api/updateOrganization/"+selectedShelter._id, body, {headers} )
                        const json = await response.data;
                        if(response.statusText === 'OK'){
                            api.post('https://api.emailjs.com/api/v1.0/email/send', data, {
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            })
                                .then(function (response) {
                                    console.log(response);
                                    messages.success({"content":"Your mail is sent!", "style":{marginTop: '10vh'}})
                                })
                                .catch(function (error) {
                                    console.log(error);
                                    messages.error({"content":"Oops... " + JSON.stringify(error), "style":{marginTop: '10vh'}})
                                });
                            setName("");
                            setContactNumber("");
                            setSelectedAnimal("Dog");
                            setSelectedShelter(null);
                            console.log(json)
                            setCount(prevCount => prevCount + 1)
                        }
                    }catch(err){
                        console.log(err)
                    }
                    
                }else{
                    messages.error({"content":"No slots available for cats", "style":{marginTop: '10vh'}})
                }
            }
        }
    };

    const handleShelterSelect = (shelterId) => {
        setSelectedShelter(shelterId);
        console.log(selectedShelter);
    };

    const handleAnimalSelect = (event) => {
        setSelectedAnimal(event.target.value);
    };

    return ( 
        <div className='w-full max-w-[1440px] mx-auto bg-orange-quaternary relative'>
            <Header logged={logged} setLogged={setLogged} />
            <div className="pt-16 pb-96">
                <h1 className="md:text-center ml-6 md:ml-0 text-[20px] md:text-[25px] pb-4">Find a shelter for your furry friend!</h1>
                <form onSubmit={handleFormSubmit}>
                    <div className="ml-auto mr-auto grid grid-cols-2 md:grid-cols-3">
                        <label className="accom-label ml-6 md:ml-[20%]">
                        Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="accom-input"
                        />
                        </label>
                        <label className="accom-label ml-6 md:ml-[20%]">
                        Contact Number:
                        <input
                            type="text"
                            value={contactNumber}
                            onChange={(event) => setContactNumber(event.target.value)}
                            className="accom-input"
                        />
                        </label>
                        <label className="accom-label ml-6 md:ml-[20%]">
                        Type of Animal:
                        <select value={selectedAnimal} onChange={handleAnimalSelect} className="accom-input">
                            <option value="Dog">Dog</option>
                            <option value="Cat">Cat</option>
                        </select>
                        </label>
                        
                    </div>
                    <label className="accom-label ml-6 md:ml-[7%]">
                        Select a Shelter:
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:ml-[7%]">
                        {organizationDetails.map((organization,index) => (
                            <div
                            key={index}
                            className={`shelter-card ${
                                organization === selectedShelter ? 'selected' : ''
                            } w-[50%] ml-auto mr-auto`}
                            onClick={() => handleShelterSelect(organization)}
                            >
                            <img
                                src={`https://source.unsplash.com/300x200/?${organization.organizationName}`}
                                alt={`${organization.organizationName} shelter`}
                            />
                            <h3>{organization.organizationName}</h3>
                            <p className="font-bold">
                                {`Email: ${organization.userEmail}`}
                            </p>
                            <p>
                                {`Available Slots Dogs: ${organization.noOfSlotsDogs}`}
                            </p>
                            <p>
                                {`Available Slots Cats: ${organization.noOfSlotsCats}`}
                            </p>
                            </div>
                        ))}
                    </div>
                    <button type="submit" className="book-btn ml-6 md:ml-[7%] ">Book Slot</button>
                    
                </form>
                <button type="button" onClick={() => setShowModal(true)} className="book-btn ml-6 md:ml-[7%]">Add Organization</button>
            </div>
            <Modals showModal={showModal} setShowModal={setShowModal} userEmail={userEmail} setCount={setCount}/>
            <Footer />
        </div>

     );
}
 
export default Accommodation;