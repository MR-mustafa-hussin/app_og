import React from "react";
import Banner from "../../Components/Banner/Banner";
import "./Services.css";
import CardService from "../../Components/CardService/CardService";
import {
  faBed,
  faBriefcaseMedical,
  faSprayCanSparkles,
  faStethoscope,
  faSyringe,
  faTruckMedical,
} from "@fortawesome/free-solid-svg-icons";
import Feature from "../../Components/Feature/Feature";
import CardDoctors from "../../Components/cardDoctors/cardDoctors";
import ourDoctor2 from "../../Assets/testimonial doctor 2.jfif";
import ourDoctor3 from "../../Assets/testimonial doctor 5.jfif";
import orangeSquare from "../../Assets/about square.png";
import Triangle from "../../Assets/Triangle shape.png";
import blueLine from "../../Assets/footer line.png";
import blueCircleLines from "../../Assets/blue circle lines.png";
import blueCircle from "../../Assets/footer circle.png";
import LatestNews from "../../Components/Latest News/LatestNews";
const Services = () => {
  return (
    <>
      <Banner title="Services" />
      <div className="Services">
      <div className="container">
        <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 card">
              <CardService
                title="Diagnostics"
                desc="Phasellus venenatis porta rhoncus. Integer et viverra felis."
                icon={faStethoscope}
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 card">
              <CardService
                title="Treatment"
                desc="Phasellus venenatis porta rhoncus. Integer et viverra felis."
                icon={faSprayCanSparkles}
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 card">
              <CardService
                title="Surgery"
                desc="Phasellus venenatis porta rhoncus. Integer et viverra felis."
                icon={faBriefcaseMedical}
              />
            </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 card">
              <CardService
                title="Emergency"
                desc="Phasellus venenatis porta rhoncus. Integer et viverra felis."
                icon={faTruckMedical}
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 card">
              <CardService
                title="Vaccine"
                desc="Phasellus venenatis porta rhoncus. Integer et viverra felis."
                icon={faSyringe}
              />
            </div>
          
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 card">
            <CardService
            title="Qualified Doctors"
            desc="Phasellus venenatis porta rhoncus. Integer et viverra felis."
            icon={faBed}
          /></div>
          </div>
        </div>
      </div>
      <Feature />
      <div  className='Services-container-cards'>
      <div className='title-card-doctor' >
      <h5 className="small-title">Our Doctor</h5>
      <h2 className="title">Meet Best Doctors</h2>
      </div>
      <div className='container'>
      <div className='row Services-card'>
  
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 Services-card-resp">
        <CardDoctors
          src={"ourDoctor1"}
          Title="Dr. Addition Smith"
          smallTitle="Dentist"
        />
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 activ Services-card-resp">
        <CardDoctors
          src={ourDoctor2}
          Title="Dr. Mahfuz Riad"
          smallTitle="Chiropractor"
        />
      </div>
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 Services-card-resp">
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
      <LatestNews />

    </>
  );
};



export default Services;
