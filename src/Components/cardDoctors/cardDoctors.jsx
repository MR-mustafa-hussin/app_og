import React from "react";
import twitter from "../../Assets/skybe.png";
import linkedIn from "../../Assets/linked in.png";
import instigram from "../../Assets/instigram.png";
import "./cardDocyor.css";
const CardDoctors = (props) => {
  return (
    <div className="our-doctor">
      <div className=" card-Doctor">
        <div className="imgs">
          <div className="imgs-1"></div>
          <div className="imgs-2"></div>
          <img src={props.src} />
        </div>
        <div className="text">
          <h3>{props.Title}</h3>
          <h5>{props.smallTitle}</h5>
        </div>
        <div className="social">
          <img src={twitter} className="twitter" />
          <img src={linkedIn} className="linkedIn" />
          <img src={instigram} className="instigram" />
        </div>
      </div>
    </div>
  );
};

export default CardDoctors;
