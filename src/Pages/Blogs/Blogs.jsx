import React from "react";
import Banner from "../../Components/Banner/Banner";
import SliderCardLatestNews from "../../Components/SliderCardLatestNews/SliderCardLatestNews";
import img1 from "../../Assets/latest News 1.jpg";
import img2 from "../../Assets/latest News  2.jpg";
import img3 from "../../Assets/latest News  3.jpg";
import img4 from "../../Assets/latest News  4.jpg";
import img5 from "../../Assets/latest News 5.jpg";
import img7 from "../../Assets/testimonial doctor 8.jpg";
import img9 from "../../Assets/testimonial doctor 9.jpg";
import imgT1 from "../../Assets/testimonial doctor 1.jfif";
import imgT2 from "../../Assets/testimonial doctor 2.jfif";
import imgT3 from "../../Assets/testimonial doctor 3.jfif";
import imgT4 from "../../Assets/testimonial doctor 6.jfif";
import imgT5 from "../../Assets/testimonial doctor 5.jfif";
import imgT6 from "../../Assets/testimonial doctor 4.jfif";
import "./Blogs.css";
import { Pagination } from "react-bootstrap";
const Blogs = () => {
  return (
    <>
      <Banner title="Blog Grid 3" />
      <div className="blogs">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 cardo">
              <SliderCardLatestNews
                cardImg={img1}
                personImg={imgT1}
                name="John deo"
                date="21 July 2021"
                title="Dental Care for Women is very important"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 cardo">
              <SliderCardLatestNews
                cardImg={img2}
                personImg={imgT2}
                name="Peter Packer"
                date="20 July 2021"
                title="In this hospital there are special surgeon"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 cardo">
              <SliderCardLatestNews
                cardImg={img3}
                personImg={imgT3}
                name="Sonar Moyna"
                date="19 July 2021"
                title="Why Is Skin Surgeon Considered Underrated"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 cardo">
              <SliderCardLatestNews
                cardImg={img4}
                personImg={imgT4}
                name="Kalina"
                date="18 July 2021"
                title="Understand Health Before You Regret"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 cardo">
              <SliderCardLatestNews
                cardImg={img5}
                personImg={imgT5}
                name="Michel"
                date="17 July 2021"
                title="Health Will Be A Thing Of The Past And Here"
              />
            </div>

            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 cardo">
              <SliderCardLatestNews
                cardImg={imgT6}
                personImg={imgT6}
                name="Peter Packer"
                date="16 July 2021"
                title="Can you get a diflucan prescription online?"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 cardo">
              <SliderCardLatestNews
                cardImg={img7}
                personImg={imgT1}
                name="Sonar Moyna"
                date="15 July 2021"
                title="Ten Gigantic Influences Of Health"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 cardo">
              <SliderCardLatestNews
                cardImg={img2}
                personImg={imgT2}
                name="Kalina"
                date="14 July 2021"
                title="Why Is Skin Surgeon Considered Underrated"
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 cardo">
              <SliderCardLatestNews
                cardImg={img9}
                personImg={imgT3}
                name="Michel"
                date="13 July 2021"
                title="Everyone need to go Dentist regularly"
              />
            </div>
          </div>
          <div className="paginat">
            <Pagination>
              <Pagination.Item>{"Prev"}</Pagination.Item>
              <Pagination.Item active>{1}</Pagination.Item>
              <Pagination.Item>{2}</Pagination.Item>
              <Pagination.Item>{3}</Pagination.Item>
              <Pagination.Item>{"Next"}</Pagination.Item>
            </Pagination>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
