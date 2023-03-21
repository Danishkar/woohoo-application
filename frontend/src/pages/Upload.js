import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import "./Upload.css"

const Upload = () =>{
    const [selectedImage, setSelectedImage] = useState(null);

    const onSelectFile = (event) => {
        const selectedFile = event.target.files[0];
        const image = URL.createObjectURL(selectedFile);
        setSelectedImage(image);

        // FOR BUG IN CHROME
        event.target.value = "";
    };

    function deleteHandler() {
        setSelectedImage(null);
        URL.revokeObjectURL(selectedImage);
    }

    return (
        <>
        <Header />
        <section className="upload relative min-h-[748px] pt-24 pb-12 lg:pt-24 overflow-hidden items-center">
            <label className="upload-label">
                + Add Image
                <br />
                <span>only one image</span>
                <input
                    type="file"
                    name="image"
                    onChange={onSelectFile}
                    accept="image/png , image/jpeg, image/webp"
                />
            </label>
            <br />

            {selectedImage && (
                <button
                    className="upload-btn"
                    onClick={() => {
                        console.log(selectedImage);
                    }}
                >
                    UPLOAD IMAGE
                </button>
            )}

            <div className="images">
                {selectedImage && (
                    <div className="image">
                        <img className="upload-img" src={selectedImage} height="200" alt="upload" />
                        <button onClick={deleteHandler}>
                            delete image
                        </button>
                    </div>
                )}
            </div>
        </section>
        <Footer />
        </>
    );
};

export default Upload;
