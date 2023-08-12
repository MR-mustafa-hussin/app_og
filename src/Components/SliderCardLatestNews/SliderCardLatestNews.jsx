import React from "react";

import "./SliderCardLatestNews.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const SliderCardLatestNews = (props) => {
  return (
    <div className="card">
      <a href="#" className="card-img">
        <img src={props.cardImg} />
      </a>
      <div className="card-text">
        <div className="card-text-top">
          <span className="img-name-small">
            <a href="#" className="link-small">
              <img src={props.personImg} />
              {"  "}
              {props.name}
            </a>
          </span>
          <span className="date">
            <FontAwesomeIcon icon={faCalendarDays} />
            {props.date}
          </span>
        </div>
        <h2 className="card-text-title-con">
          <a href="#" className="card-text-title">
            {props.title}
          </a>
        </h2>
        <button className="btn read-more-btn">
          Read More
          <span>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </button>
      </div>
    </div>
  );
};

export default SliderCardLatestNews;
