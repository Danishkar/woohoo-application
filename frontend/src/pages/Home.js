import About from "../components/About";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home1 = () => {
    return ( 
        <div className='w-full max-w-[1440px] mx-auto bg-orange-quaternary relative'>
            <Header />
            <Hero />
            <About />
            <ContactUs />
            <Footer />
        </div>
     );
}
 
export default Home1;