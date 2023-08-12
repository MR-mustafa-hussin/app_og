import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import "./LatestNews.css";
import SliderCardLatestNews from "../SliderCardLatestNews/SliderCardLatestNews";
import img1 from "../../Assets/Testimonial people background.png";
import img2 from "../../Assets/Square Lines.png";
import img3 from "../../Assets/about square.png";
import img4 from "../../Assets/booking mobile.png";
import img5 from "../../Assets/booking setting.png";

import latestTriangle from "../../Assets/Triangle shape.png";
import latestCircleLines from "../../Assets/blue circle lines.png";
import latestOrangeSquare from "../../Assets/about square.png";
import latestBlueLine from "../../Assets/footer line.png";
const LatestNews = () => {
  let carouselRef = useRef();
  let [width, setWidth] = useState(0);
  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  return (
    <div className="LatestNews">
      <div className="container">
        <div className="row">
          <h5 className="little-title">Latest News</h5>
          <h2 className="large-title">Our Latest News</h2>
          <div className="col-xl-12 col-lg-12 col-md-10 col-sm-10 slider-latestNews">
            <motion.div ref={carouselRef} className="carousel">
              <motion.div
                drag="x"
                dragConstraints={{ right: 0, left: -width }}
                className="inner-carousel"
                whileTap={{ cursor: "grabbing" }}
              >
                <motion.div className="item">
                  <SliderCardLatestNews
                    cardImg={img1}
                    personImg={"imgT1"}
                    name="John deo"
                    date="21 July 2021"
                    title="In this hospital there are special surgeon"
                  />
                </motion.div>
                <motion.div className="item">
                  <SliderCardLatestNews
                    cardImg={img2}
                    personImg={"imgT2"}
                    name="Peter Packer"
                    date="20 July 2021"
                    title="Can you get a diflucan prescription online?"
                  />
                </motion.div>
                <motion.div className="item">
                  <SliderCardLatestNews
                    cardImg={img3}
                    personImg={"imgT3"}
                    name="Sonar Moyna"
                    date="19 July 2021"
                    title="Why Is Skin Surgeon Considered Underrated"
                  />
                </motion.div>
                <motion.div className="item">
                  <SliderCardLatestNews
                    cardImg={img4}
                    personImg={"imgT4"}
                    name="Kalina Mollika"
                    date="18 July 2021"
                    title="Dental Care for Women is very important"
                  />
                </motion.div>
                <motion.div className="item">
                  <SliderCardLatestNews
                    cardImg={img5}
                    personImg={"imgT5"}
                    name="Michel"
                    date="17 July 2021"
                    title="Health Will Be A Thing Of The Past And Here's Why"
                  />
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <img src={latestTriangle} className="latestTriangle" />
      <img src={latestCircleLines} className="latestCircleLines" />
      <img src={latestOrangeSquare} className="latestOrangeSquare" />
      <img src={latestBlueLine} className="latestBlueLine" />
    </div>
  );
};

export default LatestNews;
