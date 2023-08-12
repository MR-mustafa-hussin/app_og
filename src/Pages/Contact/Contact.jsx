import {
  faGlobe,
  faIdCard,
  faMapLocation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Banner from "../../Components/Banner/Banner";
import twitter from "../../Assets/Square Lines.png";
import linkedIn from "../../Assets/Testimonial people background.png";
import instigram from "../../Assets/Square Lines.png";
import telephone from "../../Assets/about 2.jpg";
import message from "../../Assets/Triangle shape.png";
import location from "../../Assets/about square.png";
import "./Contact.css";
const Contact = () => {
  return (
    <>
      <Banner title="Contact Us" />
      <section className="contact-us">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="container">
              <form>
                <div className="form-control">
                  <input type="text" placeholder="Your Name" />
                </div>
                <div className="form-control">
                  <input type="email" placeholder="Your E-mail" />
                </div>
                <div className="form-control">
                  <input type="number" placeholder="Phone Number" />
                </div>
                <div className="form-control">
                  <select>
                    <option>Select Department</option>
                    <option>One</option>
                    <option>Two</option>
                    <option>Three</option>
                  </select>
                </div>
                <div className="form-control">
                  <textarea placeholder="Type Messages"></textarea>
                </div>
                <button>Submit</button>
              </form>
            </div>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-6 contact-img">
            <div className="overlay"></div>
            <div className="side">
              <h3 className="">Contact Us For Any Informations</h3>
              <li className="li">
                <FontAwesomeIcon icon={faMapLocation} /> Location
              </li>
              <p className="p1">
                2005 Stokes Isle Apt. 896, Venaville 10010, USA
              </p>
              <h4 className="">
                <FontAwesomeIcon icon={faIdCard} /> Email & Phone
              </h4>
              <a className="" href="#">
                info@yourdomain.com
              </a>

              <p className="p2">(+68) 120034509</p>
              <h2 className="">
                <FontAwesomeIcon icon={faGlobe} /> Follow Us
              </h2>
              <div className="social">
                <span className="twitter">
                  <img src={twitter} />
                </span>
                <span className="linkedIn">
                  <img src={linkedIn} />
                </span>
                <span className="instigram">
                  <img src={instigram} />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="cards">
        <div className="container">
          <div className="row">
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12  ">
            <div className=" card card1">
              <div className="img">
                <img src={telephone} />
              </div>
              <div className="text">
                <h3>Contact Number</h3>
                <p>+001 123 456 790</p>
                <p>+002 3424 44 00</p>
              </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12  ">
            <div className=" card card2">
              <div className="img">
                <img src={message} />
              </div>
              <div className="text">
                <h3>Email Address</h3>
                <p>info@yourdomain.com</p>
                <p>example@support.com</p>
              </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12  ">
            <div className=" card card3">
              <div className="img">
                <img src={location} />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>2005 Stokes Isle Apt. 896, Venaville</p>
                <p>10010, USA</p>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
