import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef } from "react";
import "./DropUp.css";
const DropUp = () => {
  let re = useRef("");
  window.onscroll = () => {
    if (window.scrollY >= 640) {
      re.current.style.display = "flex";
      re.current.style.animation = "dropUp 1s 1 alternate forwards";
    } else {
      re.current.style.display = "none";
    }
  };
  let scroll = ()=> {
    console.log("good");
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
  }
  return (
    <span className="dropUp" ref={re} onClick={scroll}>
      <FontAwesomeIcon icon={faChevronUp} />
    </span>
  );
};

export default DropUp;
