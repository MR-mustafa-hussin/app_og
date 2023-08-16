import React from "react";
import Banner from "../../Components/Banner/Banner";
import Feature from "../../Components/Feature/Feature";
import LatestNews from "../../Components/Latest News/LatestNews";
import AboutUs from "./AboutUs";
import Testimonial from "../../Components/Testimonial/Testimonial";
import CardDoctors from "../../Components/cardDoctors/cardDoctors";//
import ourDoctor1 from "../../Assets/testimonial doctor 6.jfif";//
import ourDoctor2 from "../../Assets/testimonial doctor 2.jfif";//
import ourDoctor3 from "../../Assets/testimonial doctor 5.jfif";//
import orangeSquare from "../../Assets/about square.png";
import Triangle from "../../Assets/Triangle shape.png";
import blueLine from "../../Assets/footer line.png";
import blueCircleLines from "../../Assets/blue circle lines.png";
import blueCircle from "../../Assets/footer circle.png";
import "./about.css"
const About = () => {
  return (
    
    <div className='about'>
      <Banner title="About Us" />
      <AboutUs />
      <Feature />
    <div  className='about-container-cards'>
    <div className='title-card-doctor' >
    <h5 className="small-title">نبذة عن المطور</h5>
    <h2 className="title">تفاصيل المطور</h2>
    </div>
    <div className='container'>
    <div className='row about-card'>

    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 about-card-resp">
      <CardDoctors
        src={ourDoctor1}
        Title="Dr. Addition Smith"
        smallTitle="Dentist"
      />
    </div>
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 activ about-card-resp">
      <CardDoctors
        src={ourDoctor2}
        Title="Dr. Mahfuz Riad"
        smallTitle="Chiropractor"
      />
    </div>
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 about-card-resp">
      <CardDoctors
        src={ourDoctor3}
        Title="Dr. David Benjamin"
        smallTitle="Cardiologist"
      />
    </div>
    </div>
    </div>
    <img src={orangeSquare} className="orange-Square" />
<img src={Triangle} className="T-riangle" />
<img src={blueLine} className="blue-Line" />
<img src={blueCircleLines} className="blue-Circle-Lines" />
<img src={blueCircle} className="blue-Circle" />
    </div>
      <Testimonial />
      <LatestNews />
    </div>
  );
};

export default About;
