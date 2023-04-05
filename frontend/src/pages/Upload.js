import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Upload.css"
import api from "../api/woohoo_axios";


import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Disease from "../components/Disease";

const Upload = ({logged, setLogged}) =>{
    const [hid,setHide] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen(!open);
    };

    const [selectedImage, setSelectedImage] = useState(null);
    const [image, setImage] = useState(null);
    const [foundDisease, setFoundDisease] = useState(null);
    const [animalTypes, setAnimalTypes] = useState("cat");
    const radioChanged = (e) =>{
        setAnimalTypes(e.target.value)
    }

    const onSelectFile = (event) => {
        setFoundDisease(null)
        const selectedFile = event.target.files[0];
        setImage(selectedFile)
        const image = URL.createObjectURL(selectedFile);
        setSelectedImage(image);

        // FOR BUG IN CHROME
        event.target.value = " ";
    };

    function deleteHandler() {
        setSelectedImage(null);
        URL.revokeObjectURL(selectedImage);
    }

    const handleUploadImage = async () => {
        handleToggle()
        const formData = new FormData();
        formData.append("name", "image29");
        formData.append("testImage", image);
        formData.append("animalType", animalTypes);
        console.log(formData);
        try {
            const response = await api.post("api/upload", formData);
            if(response.statusText === 'OK'){
                deleteHandler();
                handleClose();
                setFoundDisease(response.data);
                setHide(true);
                console.log(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
        <Header logged={logged} setLogged={setLogged}/>
        <section className="upload relative min-h-[748px] pt-24 pb-12 lg:pt-32 overflow-hidden items-center">
            {!hid &&<h1 className="flex justify-center mb-4 text-[20px] font-bold">Select the type of animal.</h1>}
            {!hid && <div className="flex items-center mb-4 justify-center">
                <input
                    defaultChecked={animalTypes === 'cat'}
                    onClick={radioChanged}
                    id="cat"
                    type="radio"
                    value="cat"
                    name="radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="cat" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cat</label>
            </div>}
            {!hid && <div className="flex items-center justify-center mb-8">
                <input
                    defaultChecked={animalTypes === 'dog'}
                    onClick={radioChanged}
                    id="dog"
                    type="radio"
                    value="dog"
                    name="radio"
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label htmlFor="dog" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dog</label>
            </div>}
            {!hid && <h1 className="flex justify-center mb-4 text-[20px] font-bold">Add the picture of the infeacted area.</h1>}
            {!hid && <label className="upload-label">
                + Add Image
                <br />
                <span>only one image</span>
                <input
                    type="file"
                    name="image"
                    onChange={onSelectFile}
                    accept=".png, .jpeg, .jpg"
                />
            </label>}
            {!hid && <br />}

            {!hid && selectedImage && (
                <>
                    <button className="upload-btn" onClick={handleUploadImage}>
                    UPLOAD IMAGE
                </button>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <CircularProgress color="inherit"/>
                </Backdrop>
                </>
                
            )}

            {!hid && <div className="images">
                {selectedImage && (
                    <div className="image">
                        <img className="upload-img" src={selectedImage} height="200" alt="upload" />
                        <button onClick={deleteHandler}>
                            Delete
                        </button>
                    </div>
                )}
            </div>}
            {hid && <Disease setHide={setHide} foundDisease={foundDisease} animalTypes={animalTypes} />}
        </section>
        <Footer />
        </>
    );
};

export default Upload;
