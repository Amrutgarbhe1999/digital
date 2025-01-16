import React from "react";
import About from "./About";
import Services from "./Services";
import Boost from "./Boost";
import Chooseme from "./Chooseme";
import Howitworks from "./Howitworks";
import Footer from "./Footer";
import Homesec from "../Assests/images/homesection.png";
import Benifits from "./Benifits";
import { Link } from "react-router-dom";
import Testimonial from "./Testimonial";

function Home() {

 
  return (
    <>
      <div class="overlay-section">
        <div class="overlay-content">
          {/* <h1
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            Capsule <br /> Lavato
          </h1> */}
           <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1300" style={{fontWeight:'700',fontSize:'2rem'}}>I Am</h1>
          <h1 data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" style={{fontWeight:'700'}}>Utkar<span style={{fontSize:'5rem'}}>sha</span> <br /> <span style={{fontSize:'5rem'}}>Mur</span>tadak</h1>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
           A professional and expertise in Digital marketer, graphic desiner and content
            management.
          </p>
          <div className="social-media">
            <Link><img data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine" src="https://img.icons8.com/?size=100&id=32323&format=png&color=000000" alt="" /></Link>
            <Link><img  data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"src="https://img.icons8.com/?size=100&id=114441&format=png&color=000000" alt="" /></Link>
            <Link><img  data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="" /></Link>
          </div>
        </div>
      </div>
     

      <About />
      <Services />
      <Boost />
      <Chooseme />
      <br />
      <br />
      <br />

      
      <Howitworks />
      <img data-aos="fade-down"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
        className="homeSection"
        src={Homesec}
        alt=""
      />
      <Benifits />
<br />
<Testimonial/>
      <div className="video-section">
      {/* Background Video */}
      <div className="video-container">
        <iframe
          src="https://giphy.com/embed/xTiTnjEFmivkL0cfDi"
          width="100%"
          height="100%"
          style={{ border: 'none', pointerEvents: 'none' }}
          frameBorder="0"
          allowFullScreen
          title="Background Video"
        ></iframe>
        {/* Black Overlay */}
        <div className="black-overlay"></div>
      </div>

      {/* Content */}
      <div className="section-content">
              <h2 data-aos="fade-down" >LETS COLLABORATE</h2>
              <h1 data-aos="zoom-in-up" data-aos-duration="3000">
                LET'S WO<span>R</span>K  </h1>
                <Link data-aos="flip-right" data-aos-duration="8000" className='contactlink' to="/">Get in touch</Link>
                <h1 data-aos="zoom-in-up" data-aos-duration="6000">TO<span>G</span>ETHER</h1>
              
            </div>
    </div>
    <br />
   

      <Footer />
    </>
  );
}

export default Home;
