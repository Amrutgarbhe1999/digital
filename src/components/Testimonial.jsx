import React, { useState } from 'react';

function Testimonial() {
  const testimonials = [
    {
      text: "This is a fantastic service! Highly recommended.",
      author: "John Doe",
    },
    {
      text: "The team was professional and exceeded my expectations.",
      author: "Jane Smith",
    },
    {
      text: "Great experience from start to finish.",
      author: "Robert Brown",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
    <div className="container my-5">
    <h1 className='text-center'
              data-aos="fade-down"
              data-aos-duration="1000"
              data-aos-delay="100"
            >
              What <span style={{ color: "#e9be10" }}>Clients</span> Says About Me
            </h1>
    </div>
    <div className="testimonial-slider">
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {testimonials.map((testimonial, index) => (
          <div className="slide" key={index}>
            <p>"{testimonial.text}"</p>
            <h4>- {testimonial.author}</h4>
          </div>
        ))}
      </div>
      <button className="prev-btn" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next-btn" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
    </>
  );
}

export default Testimonial;
