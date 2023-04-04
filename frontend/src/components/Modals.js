import { useState } from "react";
import api from "../api/woohoo_axios";

const Modals = ({showModal,setShowModal,userEmail,setCount}) => {
    const [organizationName,setOrganizationName] = useState('');
    const [noOfSlotsDogs,setNoOfSlotsDogs] = useState('');
    const [noOfSlotsCats,setNoOfSlotsCats] = useState('');
    const handleModalSubmit = async() =>{
      console.log(organizationName,noOfSlotsDogs,noOfSlotsCats)
      try{
        const noOfDogs = parseInt(noOfSlotsDogs)
        const noOfCats = parseInt(noOfSlotsCats)
        if(organizationName === ''){
          throw new Error("Enter organization name")
        }
        else if(noOfSlotsDogs === ''){
          throw new Error("Enter no. of slots for dogs")
        }
        else if (noOfSlotsCats === ''){
          throw new Error("Enter no. of slots for cats")
        }
        else if (isNaN(noOfDogs)) {
          throw new Error("Enter an integer value for no. of slots for dogs");
        }
        else if (isNaN(noOfCats)) {
          throw new Error("Enter an integer value for no. of slots for cats");
        }else{
          const body  = JSON.stringify({organizationName,noOfSlotsDogs:noOfDogs,noOfSlotsCats:noOfCats,userEmail})
          const headers = {
            "Content-Type": 'application/json'
          }
          try{
            const response = await api.post("api/addOrganization", body, {headers} )
            const json = await response.data;
            if(response.statusText === 'OK'){
              console.log(json)
              setCount(prevCount => prevCount + 1)
              setShowModal(false)
            }
          }catch(err){
            console.log(err.response.data.error);
          }
        }
        
      }catch(err){
        console.log(err)
      }
      
    }
    return ( 
        showModal && (
              <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                      <h3 className="text-3xl font=semibold">Organization Info</h3>
                      <button
                        className="bg-transparent border-0 text-black float-right"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                          X
                        </span>
                      </button>
                    </div>
                    <div className="relative p-6 flex-auto">
                      <form className="bg-gray-200 shadow-md rounded px-8 pt-6 pb-8 w-full">
                        <label className="block text-black text-sm font-bold mb-1">
                          Organization's Name
                        </label>
                        <input 
                          onChange={(e)=>{setOrganizationName(e.target.value)}} 
                          value={organizationName} 
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                        />
                        <label className="block text-black text-sm font-bold mb-1">
                          No. of Slots (Dogs)
                        </label>
                        <input 
                          onChange={(e)=>{setNoOfSlotsDogs(e.target.value)}} 
                          value={noOfSlotsDogs} 
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black" 
                        />
                        <label className="block text-black text-sm font-bold mb-1">
                          No. of Slots (Cats)
                        </label>
                        <input 
                          onChange={(e)=>{setNoOfSlotsCats(e.target.value)}} 
                          value={noOfSlotsCats} 
                          className="shadow appearance-none border rounded w-full py-2 px-1 text-black"
                        />
                      </form>
                    </div>
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="text-white bg-orange font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={handleModalSubmit}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          )
     );
}
 
export default Modals;