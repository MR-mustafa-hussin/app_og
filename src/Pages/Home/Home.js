import React from "react";
import "./Home.css";
import landingPage from "../../Assets/landing Page.png";
import Triangle from "../../Assets/Triangle shape.png";
import square from "../../Assets/shape Square.png";
import circle from "../../Assets/shape Circle.png";
import plus from "../../Assets/shape Plus.png";
import line from "../../Assets/line shape.png";
import AboutUs from "../About/AboutUs";
import AreaSection from "../../Components/AreaSection/AreaSection";
import FormBooking from "../../Components/FormBooking/FormBooking";
import ServiceSlider from "../../Components/ServiceSlider/ServiceSlider";
import Testimonial from "../../Components/Testimonial/Testimonial";
import LatestNews from "../../Components/Latest News/LatestNews";
import SliderCardLatestNews from "../../Components/SliderCardLatestNews/SliderCardLatestNews";
import DropUp from "../../Components/DropUp/DropUp";
// <div className='back-img'></div>
const Home = () => {


  return (
    <>
    <header>
  
      <div className="container">
        <div className="row">
        <span className='circle'>
        <img src={circle} />
        </span>
          <div className="col-lg-7 col-md-6 col-sm-12">
            <h5>We Provide All Health Care Solution</h5>
            <h2>Protect Your Health And Take Care To Of Your Health</h2>
            <button><a href="#">Read More</a></button>
            <img src={Triangle} className='Triangle'/>
            </div>
          <div className="col-lg-5 col-md-6 col-sm-12 img-container">
            <div className="header-box">
              <img src={landingPage} className='landingPage'/>
            <img src={plus} className="shapePlus" />
            <img src={square} className='square'/>
            <img src={line} className='line'/>
            </div>
          </div>
        </div>
      </div>
    </header>
  
    <AboutUs/>
    <AreaSection/>
   <FormBooking/>
   <ServiceSlider/>
   <Testimonial/>
   <LatestNews/>

        </>
  );
};

export default Home;
