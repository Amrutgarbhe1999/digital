import React from 'react'

function Benifits() {
  return (
    <>
    <div className="container">
        <br />
        <h4 className='text-center'>Key Benifits</h4>
        <h1 className='text-center benifitmainhead'>My Proven <span className='f-bold'>Process</span> For Achieving Success.</h1>

        <div className="row beinifits-row">
            <div className="col-md-3 benefit_card" data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-delay="500">
                <h2>01</h2>
                <div className="benifit_icon">
                    <img src="https://img.icons8.com/?size=100&id=uEODWmOgQ4xQ&format=png&color=e9be10" alt="" />
                </div>
                <div className="benifit_content">
                    <h4>Personalize  <br />Approch</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, porro.</p>
                </div>
            </div>
            <div className="col-md-3 benefit_card" data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="1000">
                <h2>02</h2>
                <div className="benifit_icon">
                    <img src="https://img.icons8.com/?size=100&id=364&format=png&color=e9be10" alt="" />
                </div>
                <div className="benifit_content">
                    <h4>Experienced  <br /> Team</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, porro.</p>
                </div>
            </div>
            <div className="col-md-3 benefit_card" data-aos="flip-up"
            data-aos-duration="1000"
            data-aos-delay="1500">
                <h2>03</h2>
                <div className="benifit_icon">
                    <img src="https://img.icons8.com/?size=100&id=3005&format=png&color=e9be10" alt="" />
                </div>
                <div className="benifit_content">
                    <h4>Data-Driven   <br />Decisions</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, porro.</p>
                </div>
            </div>
            <div className="col-md-3 benefit_card" data-aos="flip-left"
            data-aos-duration="1000"
            data-aos-delay="2000">
                <h2>04</h2>
                <div className="benifit_icon">
                    <img src="https://img.icons8.com/?size=100&id=1361&format=png&color=e9be10" alt="" />
                </div>
                <div className="benifit_content">
                    <h4>Ongoing   <br />Support</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, porro.</p>
                </div>
            </div>
          
        </div>
    </div>
    </>
  )
}

export default Benifits