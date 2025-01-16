import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
// import About from './components/About'; // Example of another component
// import Contact from './components/Contact'; // Example of another component
import AOS from 'aos';
import 'aos/dist/aos.css';
import DigitalMarketing from './components/DigitalMarketing';
import SocialMedia from './components/SocialMedia';
import Navbar from './components/Navbar';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Whether animation should happen only once while scrolling down
    });
  }, []); // Runs only once when the component is mounted

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/d`igital-marketing" element={<DigitalMarketing/>} />
          <Route path="/social-media-marketing" element={<SocialMedia/>} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
