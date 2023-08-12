import React from "react";
import Banner from "../../Components/Banner/Banner";
import CardDoctors from "../../Components/cardDoctors/cardDoctors";
import "./OurTeam.css";
import ourDoctor1 from "../../Assets/testimonial doctor 6.jfif";
import ourDoctor2 from "../../Assets/testimonial doctor 2.jfif";
import ourDoctor3 from "../../Assets/testimonial doctor 5.jfif";
import ourDoctor4 from "../../Assets/testimonial doctor 4.jfif";
import ourDoctor5 from "../../Assets/testimonial doctor 7.jpg";
import ourDoctor6 from "../../Assets/testimonial doctor 3.jfif";
import orangeSquare from "../../Assets/about square.png";
import Triangle from "../../Assets/Triangle shape.png";
import blueLine from "../../Assets/footer line.png";
import blueCircleLines from "../../Assets/blue circle lines.png";
import blueCircle from "../../Assets/footer circle.png";
const OurTeam = () => {
  return (
    <>
      <Banner title="Our Team" />
      <div className="our-team-cards">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 our-team-card-resp">
              <CardDoctors
                src={ourDoctor1}
                Title="Dr. Addition Smith"
                smallTitle="Dentist"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 our-team-card-resp">
              <CardDoctors
                src={ourDoctor2}
                Title="Dr. Mahfuz Riad"
                smallTitle="Chiropractor"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 our-team-card-resp">
              <CardDoctors
                src={ourDoctor3}
                Title="Dr. David Benjamin"
                smallTitle="Cardiologist"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 our-team-card-resp">
              <CardDoctors
                src={ourDoctor4}
                Title="Dr. Kalina Mollika"
                smallTitle="Dentist"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 our-team-card-resp">
              <CardDoctors
                src={ourDoctor5}
                Title="Dr. Michel"
                smallTitle="Chiropractor"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 our-team-card-resp">
              <CardDoctors
                src={ourDoctor6}
                Title="Dr. Sonar Moyna"
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
    </>
  );
};

export default OurTeam;
