import React from 'react'

function Boost() {
  return (
    <>
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
      <div class="gradient-border" data-aos="fade-up"
            data-aos-duration="1">
    <h2>Expertise that drives digital success</h2>
    <div className="row">
        <div className="col-md-4">
            <h1 style={{fontWeight:'700'}}>+60%</h1>
            <p>Expertise that drives digital success</p>
        </div>
        <div className="col-md-4">
            <h1 style={{fontWeight:'700'}}>+60%</h1>
            <p>Expertise that drives digital success</p>
        </div>
    </div>
    {/* <p>Here is some content inside the section. The border is 10px thick, with a gradient from green to black.</p> */}
  </div>
    </div>
     
    </>
  )
}

export default Boost