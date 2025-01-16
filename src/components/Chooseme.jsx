import React from "react";

function Chooseme() {
  return (
    <>
      <div className="container">
        <div className="row service_head">
          <div className="col-md-6">
            <p>Why Choose Me</p>
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              Expertise for{" "}
              <span style={{ color: "#e9be10" }}> digital growth</span> your
              journey
            </h1>
          </div>
          <div className="col-md-6 service_second_head">
            <p data-aos="fade-up-left">
              My dedicated team is focused on understanding your unique needs
              and delivering innovative strategies that yield measurable
              results. We prioritize quality and integrity in everything we do.
            </p>
          </div>
        </div>
      </div>



      <div className="container my-5">
        <div className="row choose_row">
          <div
            className="col-md-6 "
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="choose_content">
              <h4>Data-Driven Approach</h4>
              <p>
                I leverage data and insights to make informed decisions that
                lead to more effective and efficient solutions.
              </p>
            </div>
            <div className="choose_content">
              <h4>Competitive Pricing</h4>
              <p>
                We offer our top-quality services at competitive prices,
                providing you with great value for your investment.
              </p>
            </div>
            <div className="choose_content">
              <h4>Ethical Business Practices</h4>
              <p>
                We maintain the highest level of professionalism and ethical
                standards professionalism in all our business dealings.
              </p>
            </div>
          </div>
          <div
            className="col-md-6"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <img
              src="https://images.unsplash.com/photo-1484864771740-6464cff395d8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Shining Effect"
              className="shining-effect"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chooseme;
