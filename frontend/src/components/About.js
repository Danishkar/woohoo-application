import { Link } from "react-router-dom";

const About = () => {
    return ( 
        <section className='bg-yellow-secondary py-12 lg:pb-12 lg:mt-32 relative'>
            <div className='container mx-auto'>
                <div className='text-center mb-20'>
                    <div className='text-orange font-semibold mb-3'>Our Services</div>
                    <h2 className='h2 text-2xl font-bold text-blue mb-3'>What do we offer</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 place-items-center gap-[1.5rem]">

                        
                        <div className="w-full bg-white rounded-lg shadow-xl lg:max-w-sm">
                            <img
                                className="object-cover w-full h-48 rounded-lg"
                                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                                alt="ima"
                            />
                            <div className="p-4">
                                <h4 className="text-xl font-semibold tracking-tight text-blue">
                                    Disease Detection
                                </h4>
                                <p className="mb-2 leading-normal text-blue-secondary">
                                    With WooHoo find your pets skin disease within a minute simply by uploading 
                                    a picture.                                </p>
                                <Link to={'/upload'}>
                                    <button className="px-4 py-2 text-sm bg-orange text-white rounded shadow">
                                        Go
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="w-full bg-white rounded-lg shadow-xl lg:max-w-sm">
                            <img
                                className="object-cover w-full h-48 rounded-lg"
                                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                                alt="ima"
                            />
                            <div className="p-4">
                                <h4 className="text-xl font-semibold tracking-tight text-blue">
                                    Accommodation
                                </h4>
                                <p className="mb-2 leading-normal text-blue-secondary">
                                    Join with Woohoo to provide a safe home to stray pets simply but 
                                    filling out the form
                                </p>
                                <Link to={'/accommodation'}>
                                    <button className="px-4 py-2 text-sm bg-orange text-white rounded shadow">
                                        Go
                                    </button>
                                </Link>
                                
                            </div>
                        </div>
                        <div className="w-full bg-white rounded-lg shadow-xl lg:max-w-sm">
                            <img
                                className="object-cover w-full h-48 rounded-lg"
                                src="https://cdn.pixabay.com/photo/2022/08/18/09/20/houses-7394390__340.jpg"
                                alt="ima"
                            />
                            <div className="p-4">
                                <h4 className="text-xl font-semibold tracking-tight text-blue">
                                    Adoption
                                </h4>
                                <p className="mb-2 leading-normal text-blue-secondary">
                                    Coming Soon ...
                                </p>
                                <button className="px-4 py-2 text-sm bg-orange text-white rounded shadow cursor-not-allowed">
                                    Read more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
     );
}
 
export default About;

