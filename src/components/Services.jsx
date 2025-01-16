import React from "react";
import { Link } from "react-router-dom";

function Services() {
  return (
    <>
      <div className="container my-5">
        <div className="row service_head">
          <div className="col-md-6">
            <p>My Services</p>
            <h1
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              My <span style={{ color: "#e9be10" }}>Services</span> to grow your
              brand.business
            </h1>
          </div>
          <div className="col-md-6 service_second_head">
            <p data-aos="fade-up-left">
              Join our creative community to collaborate, innovate, and thrive
              together We welcome passionate individuals eager to make.
            </p>
          </div>
        </div>

        <br />
        <div className="cards-container my-5">
          <div className="row cards_row">
            <div
              className="col-md-4"
              data-aos="flip-right"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <div
                class="card"
                style={{
                  width: "18rem;",
                  background: "rgb(24 23 23)",
                  border: "1px solid #3c3c3c",
                }}
              >
                <div className="head_content_card">
                  <img
                    src="https://img.icons8.com/?size=100&id=117704&format=png&color=e9be10"
                    class="card-img-top"
                    alt="..."
                  />
                  <Link to="/digital-marketing">
                    <img
                      className="card_go"
                      src="https://img.icons8.com/?size=100&id=74159&format=png&color=e9be10"
                      alt="Icon"
                    />
                  </Link>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Digital Marketing</h5>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vitae incidunt similique perferendis temporibus voluptatem
                    in?
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="flip-up"
              data-aos-duration="1000"
              data-aos-delay="800"
            >
              <div
                class="card"
                style={{
                  width: "18rem;",
                  background: "rgb(24 23 23)",
                  border: "1px solid #3c3c3c",
                }}
              >
                <div className="head_content_card">
                  <img
                    src="https://img.icons8.com/?size=100&id=48463&format=png&color=e9be10"
                    class="card-img-top"
                    alt="..."
                  />
                  <Link to="/your-path">
                    <img
                      className="card_go"
                      src="https://img.icons8.com/?size=100&id=74159&format=png&color=e9be10"
                      alt="Icon"
                    />
                  </Link>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Graphics Design</h5>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vitae incidunt similique perferendis temporibus voluptatem
                    in?
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="flip-left"
              data-aos-duration="1000"
              data-aos-delay="1200"
            >
              <div
                class="card"
                style={{
                  width: "18rem;",
                  background: "rgb(24 23 23)",
                  border: "1px solid #3c3c3c",
                }}
              >
                <div className="head_content_card">
                  <img
                    src="https://img.icons8.com/?size=100&id=47756&format=png&color=e9be10"
                    class="card-img-top"
                    alt="..."
                  />
                  <Link to="/social-media-marketing">
                    <img
                      className="card_go"
                      src="https://img.icons8.com/?size=100&id=74159&format=png&color=e9be10"
                      alt="Icon"
                    />
                  </Link>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Social Media Marketing</h5>
                  <p class="card-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Vitae incidunt similique perferendis temporibus voluptatem
                    in?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
