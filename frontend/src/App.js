import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Destinations from "./components/Destinations";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar/>

      <main>
        <div id="home">
          <Home/>
        </div>

        <div id="features">
          <Features/>
        </div>

        <div id="destinations">
          <Destinations/>
        </div>

        <div id="aboutUs">
          <AboutUs/>
        </div>

        <div id="contact">
          <ContactUs/>
        </div>

        <div>
          <Footer/>
        </div>
      </main>
    </div>
  );
}

export default App;
