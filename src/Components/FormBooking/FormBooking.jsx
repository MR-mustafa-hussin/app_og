import React from "react";
import "./FormBooking.css";
import mobile from "../../Assets/about square.png";
import Women from "../../Assets/banner.jpg";
import message from "../../Assets/about square.png";
import True from "../../Assets/booking location.png";
import location from "../../Assets/circle about.png";
import setting from "../../Assets/circle about.png";
import blueLine from "../../Assets/download 2.png";
import triangle from "../../Assets/Square Lines.png";
import orangeLine from "../../Assets/banner.jpg";
import orangeCircle from "../../Assets/circle about.png";

/**

 */
const FormBooking = () => {
  return (
    <div className="FormBooking">
      <img src={orangeCircle} className="orangeCircle-2" />
      <img src={blueLine} className="blueLine" />
      <div className="container">
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 form-book">
          <img src={triangle} className="triangle" />
          <div className="after-form">
            <form>
              <h2>نوع الخدمة</h2>
              <div className="con-f">
                <select>
                  <option value="Select Department">اختار الخدمة المطلوبة</option>
                  <option value="One">1</option>
                  <option value="Two">2</option>
                  <option value="Three">3</option>
                </select>
              </div>
              <div className="con-f">
                <select>
                  <option value="Select Doctor">اختار المشروع</option>
                  <option value="One">1</option>
                  <option value="Two">2</option>
                  <option value="Three">3</option>
                </select>
              </div>
              <div className="con-f">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="con-f">
                <input type="number" placeholder="Phone Nambers" />
              </div>
              <div className="con-f con-date">
                <input type="date" placeholder="mm/dd/yyyy" />
              </div>
              <div className="con-f">
                <a href="" className="btn">
                  اطلب الان
                </a>
              </div>
            </form>
          </div>
        </div>
        <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 img-animation">
          <div className="container-images">
            <img src={mobile} className="mobile" />
            <img src={Women} className="Women" />
            <div className="imgs">
              <img src={message} className="message" />
              <img src={True} className="True" />
              <img src={location} className="location" />
              <img src={setting} className="setting" />
            </div>
          </div>
        </div>
      </div>

      <img src={orangeLine} className="orangeLine" />
    </div>
  );
};
export default FormBooking;
