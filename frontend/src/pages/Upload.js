import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Upload.css"
import api from "../api/woohoo_axios";


const Upload = () =>{
    const [selectedImage, setSelectedImage] = useState(null);
    const [image, setImage] = useState(null);
    const [foundDisease, setFoundDisease] = useState(null);
    const onSelectFile = (event) => {
        setFoundDisease(null)
        const selectedFile = event.target.files[0];
        setImage(selectedFile)
        const image = URL.createObjectURL(selectedFile);
        setSelectedImage(image);

        // FOR BUG IN CHROME
        event.target.value = "";
    };

    function deleteHandler() {
        setSelectedImage(null);
        URL.revokeObjectURL(selectedImage);
    }

    const handleUploadImage = async () => {
        const formData = new FormData();
        formData.append("name", "image29")
        formData.append("testImage", image);
        console.log(formData);
        try {
            const response = await api.post("api/upload", formData);
            if(response.statusText === 'OK'){
                deleteHandler();
                setFoundDisease(response.data)
                console.log(response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
        <Header />
        <section className="upload relative min-h-[748px] pt-24 pb-12 lg:pt-32 overflow-hidden items-center">
            <h1 className="flex justify-center mb-4 text-[20px] font-bold">Select the type of animal.</h1>
            <div className="flex items-center mb-4 justify-center">
                <input checked  id="cat" type="radio" value="" name="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="cat" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cat</label>
            </div>
            <div className="flex items-center justify-center mb-8">
                <input id="dog" type="radio" value="" name="radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="dog" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Dog</label>
            </div>
            <h1 className="flex justify-center mb-4 text-[20px] font-bold">Add the picture of the infeacted area.</h1>
            <label className="upload-label">
                + Add Image
                <br />
                <span>only one image</span>
                <input
                    type="file"
                    name="image"
                    onChange={onSelectFile}
                    accept=".png , .jpeg, .jpg"
                />
            </label>
            <br />

            {selectedImage && (
                <button className="upload-btn" onClick={handleUploadImage}>
                    UPLOAD IMAGE
                </button>
            )}

            <div className="images">
                {selectedImage && (
                    <div className="image">
                        <img className="upload-img" src={selectedImage} height="200" alt="upload" />
                        <button onClick={deleteHandler}>
                            Delete
                        </button>
                    </div>
                )}
            </div>
            <div className={foundDisease == null ? "hidden":""}>
                <h1>{foundDisease}</h1>
            </div>
        </section>
        <Footer />
        </>
    );
};

export default Upload;
