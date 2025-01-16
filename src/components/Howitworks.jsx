import React from "react";

function Howitworks() {
  return (
    <>
      <div className="container ">
        <div className="row service_head">
          <div className="col-md-6 ">
            <p>How It Works </p>
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Our proven
              <span style={{ color: "#e9be10" }}>
                {" "}
                process for achieving{" "}
              </span>{" "}
              success
            </h1>
          </div>
          <div className="col-md-6 service_second_head">
            <p data-aos="fade-up-left">
              My proven process combines research, strategy, and creativity to
              deliver tailored solutions that drive measurable results.
            </p>
          </div>
        </div>






        <div className=" row works">
          <div className="col-md-4 carded" data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500">
            <h3>Discover phase</h3>
            <p>
              Initial consultation to understand your brand, goals, and target
              audience Conducting research and analysis of market trends.
            </p>
            <div className="twosection">
              <div className="row">
                <div className="col-md-6 work-contents " style={{display:'flex',margin:'auto', alignItems:'center', flexDirection:'column'}}>
                  <h2>step</h2>
                  <h2 style={{color:'#e9be10'}}>01</h2>
                </div>
                <div className="col-md-6 work-icon">
                  <img
                    src="https://img.icons8.com/?size=100&id=miqh5tOOJGm4&format=png&color=1A1A1A"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 carded" data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000">
            <h3>Discover phase</h3>
            <p>
              Initial consultation to understand your brand, goals, and target
              audience Conducting research and analysis of market trends.
            </p>
            <div className="twosection">
              <div className="row">
                <div className="col-md-6 work-contents" style={{display:'flex',margin:'auto', alignItems:'center', flexDirection:'column'}}>
                  <h2>step</h2>
                  <h2 style={{color:'#e9be10'}}>02</h2>
                </div>
                <div className="col-md-6 work-icon">
                  <img
                    src="https://img.icons8.com/?size=100&id=fJKs3A7hg7iS&format=png&color=1A1A1A"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 carded" data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1500">
            <h3>Discover phase</h3>
            <p>
              Initial consultation to understand your brand, goals, and target
              audience Conducting research and analysis of market trends.
            </p>
            <div className="twosection">
              <div className="row">
                <div className="col-md-6 work-contents" style={{display:'flex',margin:'auto', alignItems:'center', flexDirection:'column'}}>
                  <h2>step</h2>
                  <h2 style={{color:'#e9be10'}}>03</h2>
                </div>
                <div className="col-md-6 work-icon">
                  <img
                    src="https://img.icons8.com/?size=100&id=109MbOh2BNcu&format=png&color=1A1A1A"
                    class="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Howitworks;
