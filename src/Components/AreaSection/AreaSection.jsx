import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./AreaSection.css";
import orangeCircle from "../../Assets/Square Lines.png"
import plus from "../../Assets/Testimonial people background.png"
import blueCircle from "../../Assets/Triangle shape.png"
const AreaSection = () => {
  return (
    <div className="AreaSection">
      <div className="container">
     
        <div className="row Area-row">

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card1">
              <h2>01</h2>
              <h4 className="mb-10">مواقع تعريفية</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
              <Link to="/Booking" className="btn">
                المزيد <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card2">
              <h2>02</h2>
              <h4 className="mb-10">متاجر الكترونية</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
              <Link to="/services" className="btn">
                المزيد <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 card3-container">
            <div className="card3">
              <h2>03</h2>
              <h4 className="mb-10">استضافات</h4>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of.
              </p>
              <Link to="/contact" className="btn">
                المزيد <FontAwesomeIcon icon={faChevronRight} />
              </Link>
            </div>
            <img src={blueCircle} className="blueCircle"/>
          </div>
        </div>
      </div>
      <img src={orangeCircle} className='orangeCircle' />
      <img src={plus} className='plus' />
      <img src={blueCircle} className='blueCircle' />
    </div>
  );
};

export default AreaSection;
