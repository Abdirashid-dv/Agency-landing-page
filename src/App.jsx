import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

const App = () => {
    return (
        <div className="overflow-y-hidden text-neutral-300 antialiased">
            <div className="fixed -z-10 h-full w-full">
                <div className="absolute top-0 z-[-2] bg-white h-screen w-screen"></div>
            </div>

            <div className="container">
                <Navbar />
                <Hero />
                <About />
                <Services />
                <Portfolio />
                <Testimonials />
                <Contacts />
                <Footer />
            </div>
        </div>
    );
};

export default App;
