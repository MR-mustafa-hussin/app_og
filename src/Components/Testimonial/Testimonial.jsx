import React from "react";
import bg from "../../Assets/Testimonial people background.png";
import img1 from "../../Assets/testimonial doctor 1.jfif";
import img2 from "../../Assets/testimonial doctor 2.jfif";
import img3 from "../../Assets/testimonial doctor 3.jfif";
import img4 from "../../Assets/testimonial doctor 4.jfif";
import img5 from "../../Assets/testimonial doctor 5.jfif";
import img6 from "../../Assets/testimonial doctor 6.jfif";
import "./Testimonials.css";
import { Carousel } from "react-bootstrap";
import TestimonialPlus from "../../Assets/shape Plus.png";
import TestimonialBlueCircle from "../../Assets/footer circle.png";
import TestimonialBlueSquare from "../../Assets/shape Square.png";
const Testimonial = () => {
  return (
    <div className="Testimonial">
    <img src={TestimonialPlus} className='TestimonialPlus'/> 
      <h5 className="title">Testimonial</h5>
      <h2 className="title-2">See What Are The Patients Saying About us</h2>
      <img src={TestimonialBlueCircle} className='TestimonialBlueCircle'/> 
      
      <div className="row">
        <div className="container">
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 people">
<img src={TestimonialBlueSquare} className='TestimonialBlueSquare'/> 

            <img src={bg} alt="bg" className="bg" />

            <img src={img1} alt="img1" className="img1" />
            <img src={img2} alt="img2" className="img2" />
            <img src={img3} alt="img3" className="img3" />
            <img src={img4} alt="img4" className="img4" />
            <img src={img5} alt="img5" className="img5" />
            <img src={img6} alt="img6" className="img6" />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 slider-testimonials">
        
       
            <Carousel>
              <Carousel.Item>
                <div className="d-block w-100">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecena ssuspendisse ultrices gravida.
                  </p>
                  <h5>John Deo</h5>
                  <p>patient</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-block w-100">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecena ssuspendisse ultrices gravida.
                  </p>
                  <h5>John Deo</h5>
                  <p>patient</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-block w-100">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecena ssuspendisse ultrices gravida.
                  </p>
                  <h5>John Deo</h5>
                  <p>patient</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-block w-100">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecena ssuspendisse ultrices gravida.
                  </p>
                  <h5>John Deo</h5>
                  <p>patient</p>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="d-block w-100">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecena ssuspendisse ultrices gravida.
                  </p>
                  <h5>John Deo</h5>
                  <p>patient</p>
                </div>
              </Carousel.Item>
              </Carousel>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
