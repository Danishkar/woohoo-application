import api from "../api/woohoo_axios";
import{message as messages} from 'antd';
const DeleteModals = ({deleteModal,setDeleteModal,deleteOrganization,setCount}) => {
    const handleDelete = async() =>{
        try{
            const response = await api.delete("api/deleteOrganization/"+deleteOrganization._id)
            const json = await response.data;
            if(response.statusText === 'OK'){
                console.log(json)
                setCount(prevCount => prevCount + 1)
                messages.success({"content":"Organization deleted successfully", "style":{marginTop: '10vh'}})
                setDeleteModal(false)
            }

        }catch(err){
            console.log(err)
        }
    }
    return ( 
        deleteModal && (
            <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                        <h3 className="text-3xl font-semibold">
                            Delete Organization
                        </h3>
                        <button
                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-7 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                            onClick={() => setDeleteModal(false)}
                        >
                            <span className="text-black opacity-9 h-6 w-6 text-xl block  py-0 rounded-full">
                                X
                            </span>
                        </button>
                        </div>
                        {/*body*/}
                        <div className="relative p-6 flex-auto">
                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                            Are u Sure that you want to delete this organization?
                        </p>
                        <p className="mt-4 mb-2 text-slate-500 font-bold text-lg leading-relaxed">
                            Name: {deleteOrganization.organizationName}
                        </p>
                        <p className="mt-2 mb-4 text-slate-500 font-bold text-lg leading-relaxed">
                            Email: {deleteOrganization.userEmail}
                        </p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                        <button
                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={() => setDeleteModal(false)}
                        >
                            Close
                        </button>
                        <button
                            className="bg-orange text-white active:bg-orange-secondary font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            type="button"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
        )
     );
}
 
export default DeleteModals;