import "./App.css";
import AboutUs from "./Components/AboutUs";
import Benefits from "./Components/Benefits";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Insight from "./Components/Insight";
import LogoSlider from "./Components/LogoSlider";
import Navbar from "./Components/Navbar";
import OurWork from "./Components/OurWork";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonial/Testimonials";
import Welcome from "./Components/Welcome";
import WhyChooseUs from "./Components/WhyChooseUs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Welcome />
      <AboutUs />
      <WhyChooseUs />
      <Benefits />
      <Services />
      <LogoSlider />
      <OurWork />
      <Testimonials />
      <Insight/>
      <Contact/>
      <Footer/>
    </div>
  );
}
export default App;
