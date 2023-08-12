import React from "react";
import Banner from "../../Components/Banner/Banner";
import "./servicesDetails.css";
import mainImg from "../../Assets/latest News 1.jpg";
import { Accordion } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import imgDawnload1 from "../../Assets/download.png";
import imgDawnload2 from "../../Assets/download 2.png";
const ServicesDetails = () => {
  return (
    <>
      <Banner title="Services Details" />
      <div className="servicesDetails">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-10 col-sm-10 con-left">
              <div className="img">
                <img src={mainImg} />
              </div>
              <div className="info">
                <h2>Why Medical Had Been So Popular Till</h2>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 list">
                  <ul>
                    <li>
                      <span>
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      Then along come two they
                    </li>
                    <li>
                      <span>
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      That’s just a little bit more than
                    </li>
                    <li>
                      <span>
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      Standard dummy text ever since
                    </li>
                    <li>
                      <span>
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      Simply dummy text of the printing
                    </li>
                    <li>
                      <span>
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      Make a type specimen book
                    </li>
                  </ul>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 Progress">
                  <h4>Advanced Technology</h4>
                  <p className="pp-1" data-percent="96%">
                    <span></span>
                  </p>
                  <h4>Certified Engineers</h4>
                  <p className="pp-2 p-1" data-percent="79%">
                    <span></span>
                  </p>
                  <h4>6 years Experience</h4>
                  <p className="pp-3" data-percent="75%">
                    <span></span>
                  </p>
                </div>
              </div>
              <div className="info-1">
                <h2>Popular Questions</h2>
                <p>
                  Standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>

              <div className="col-xl-12 Accordion">
                <Accordion defaultActiveKey="0">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      How Doctor Can Ease Your Pain?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      How do I withdraw from a subject?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Understand Doctor Before You Regret?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      What types of systems do you support?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      We Teach You How To Feel Better?
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>How Can I Contact You?</Accordion.Header>
                    <Accordion.Body>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-10 col-sm-10 con-right">
            <aside>
              <div className="btns">
                <button className="btn">
                  Engine Diagnostics
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </button>
                <button className="btn">
                  Lube Oil and Filters
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </button>
                <button className="btn">
                  Belts and Hoses
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </button>
                <button className="btn">
                  Air Conditioning
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </button>
                <button className="btn">
                  Brake Repair
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </button>
                <button className="btn">
                  Tire and Wheel Services
                  <span>
                    <FontAwesomeIcon icon={faChevronRight} />
                  </span>
                </button>
              </div>
              <div className="Dawnload">
                <h2>Download</h2>
                <button className="btn">
                  <span>
                    <img src={imgDawnload1} />
                  </span>
                  <div className="dawn">
                    <h5>Download our Brochures</h5>
                    <p>Download</p>
                  </div>
                </button>
                <button className="btn">
                  <span>
                    <img src={imgDawnload2} />
                  </span>
                  <div className="dawn">
                    <h5>Our Company Details</h5>
                    <p>Download</p>
                  </div>
                </button>
              </div></aside>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesDetails;
