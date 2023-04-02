// import data
import { disease } from '../data';

const Disease = ({setHide,foundDisease,animalTypes}) => {
    return ( 
        <div className={foundDisease == null ? "hidden":""}>
            <button onClick={()=>{setHide(false)}} className="ml-6 text-white bg-orange focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none dark:focus:ring-blue-800">Back</button>
            <h1 className="flex justify-center mb-4 text-[20px] md:text-[35px] font-bold text-blue">The disease is {foundDisease}</h1>
            {foundDisease && disease.map((item,index) => {
                console.log("desease"+item.disease+ " " + foundDisease)
                if(item.Animaltype === animalTypes && item.disease.trim().toLowerCase() === foundDisease.trim().toLowerCase()){
                    console.log("found")
                    return(
                        
                        <div key={index} className="flex justify-center">
                            <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-3xl md:flex-row">
                                <img
                                className="h-96 w-full rounded-t-lg object-contain mt-4 md:mt-0 md:h-[400px] md:ml-4 md:w-60 md:rounded-none md:rounded-l-lg"
                                src={item.img.type}
                                alt={item.disease} />
                                <div className="flex flex-col justify-start p-6">
                                    <h5 className="mb-2 text-2xl font-medium text-blue dark:text-neutral-50">
                                        {item.disease}
                                    </h5>
                                    <p className="mb-4 text-xl text-neutral-600 dark:text-neutral-200">
                                        {item.description}
                                    </p>
                                    <h5 className="mb-2 text-xl font-medium text-blue dark:text-neutral-50">
                                        Remedies
                                    </h5>
                                    <p className="text-md text-neutral-500 dark:text-neutral-300">
                                        {item.medicine}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }
            })}
        </div>
     );
}
 
export default Disease;