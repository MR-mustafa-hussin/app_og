import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Banner from "../../Components/Banner/Banner";
import mainImg from "../../Assets/testimonial doctor 9.jpg";
import littleImg from "../../Assets/testimonial doctor 3.jfif";
import imgAfterQuote1 from "../../Assets/testimonial doctor 2.jfif";
import imgAfterQuote2 from "../../Assets/testimonial doctor 8.jpg";
import fb from "../../Assets/facebook.png";
import ins from "../../Assets/instigram.png";
import linked from "../../Assets/linked in.png";
import twit from "../../Assets/skybe.png";
import imgCardcomment1 from "../../Assets/testimonial doctor 1.jfif";
import imgRight1 from "../../Assets/latest News 1.jpg";
import imgRight2 from "../../Assets/latest News  2.jpg";
import imgRight3 from "../../Assets/latest news1321.jpg";
import gallery1 from "../../Assets/testimonial doctor 4.jfif";
import gallery6 from "../../Assets/latest News 5.jpg";
import "./BlogsDetails.css";

import {
  faCalendarDays,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
const BlogsDetails = () => {
  return (
    <>
      <Banner title="Blog Details" />
      <div className="blogsDetails">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-10 col-sm-10 blog-left">
              <div className="main-img">
                <img src={mainImg} />
              </div>
              <div className="img-name-date">
                <img src={littleImg} />
                <a href="#">Sonar Moyna</a>
                <span>
                  <FontAwesomeIcon icon={faCalendarDays} /> 19 July 2021{" "}
                </span>
              </div>
              <div className="info">
                <h2>Precious Tips To Help You Get Better.</h2>
                <p>
                  You just need to enter the keyword and select the keyword type
                  to generate a list of 6 title ideas and suggestions. If you’re
                  not satisfied with the results, you can always hit the refresh
                  button to generate a new list of unique titles.
                </p>
              </div>
              <blockquote className="quote">
                <span>,,</span>
                <p className="p-1">
                  Once you’ve gotten all the titles and have chosen the best
                  one, the next thing you need to do is to craft a magnetic
                  content. Great content marketers excel at creating content.
                </p>
              </blockquote>
              <p className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div className="imgs">
                <img src={imgAfterQuote1} className="img-1" />
                <img src={imgAfterQuote2} className="img-2" />
              </div>
              <p className="p-2">
                You just need to enter the keyword and select the keyword type
                to generate a list of 6 title ideas and suggestions. If you’re
                not satisfied with the results, you can always hit the refresh
                button to generate a new list of unique titles.
              </p>
              <p className="p-3">
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
              <div className="social">
                <div className="Tags">
                  <span className="span-t">Tags:</span>
                  <span className="span-link-1 span-link">
                    <a>Health</a>
                  </span>
                  <span className="span-link-2 span-link">
                    <a>Growth</a>
                  </span>
                  <span className="span-link-3 span-link">
                    <a>Life</a>
                  </span>
                </div>
                <div className="Share">
                  <span className="span-t">Share:</span>
                  <span className="facbook">
                    <a href="https://www.facebook.com/">
                      <img src={fb} />
                    </a>
                  </span>
                  <span className="instigram">
                    <a href="https://www.instagram.com/">
                      <img src={ins} />
                    </a>
                  </span>
                  <span className="linkedIn">
                    <a href="https://www.linkedin.com/">
                      <img src={linked} />
                    </a>
                  </span>
                  <span className="twitter">
                    <a href="https://twitter.com/">
                      <img src={twit} />
                    </a>
                  </span>
                </div>
              </div>

              <div className="cardd">
                <div className="img">
                  <img src={imgAfterQuote1} />
                </div>
                <div className="text">
                  <h2>Sonar Z. Moyna</h2>
                  <p>
                    Aenean sollicitudin, lorem quis biber idum auctor anisi elit
                    consequat happ quam vel enim augue.
                  </p>
                  <div className="social">
                    <span className="facbook">
                      <a href="https://www.facebook.com/">
                        <img src={fb} />
                      </a>
                    </span>
                    <span className="instigram">
                      <a href="https://www.instagram.com/">
                        <img src={ins} />
                      </a>
                    </span>
                    <span className="linkedIn">
                      <a href="https://www.linkedin.com/">
                        <img src={linked} />
                      </a>
                    </span>
                    <span className="twitter">
                      <a href="https://twitter.com/">
                        <img src={twit} />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <h3 className="comment-8">8 Comments</h3>
              <div className="card-comment-1 cardComments">
                <div className="contain">
                  <div className="img-comment">
                    <img src={imgCardcomment1} />
                  </div>
                  <div className="text-comment">
                    <h2>George</h2>
                    <p>MAY 09, 2021 AT 10:45 AM</p>
                  </div>
                </div>
                <p className="desc-comment">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley.
                </p>
                <h4 className="btn">Reply</h4>
              </div>
              <div className="card-comment-2 cardComments">
                <div className="contain">
                  <div className="img-comment">
                    <img src={imgAfterQuote1} />
                  </div>
                  <div className="text-comment">
                    <h2>Falikaz</h2>
                    <p>MAY 09, 2021 AT 10:45 AM</p>
                  </div>
                </div>
                <p className="desc-comment">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley.
                </p>
                <h4 className="btn">Reply</h4>
              </div>
              <div className="card-comment-3 cardComments">
                <div className="contain">
                  <div className="img-comment">
                    <img src={imgCardcomment1} />
                  </div>
                  <div className="text-comment">
                    <h2>Sonar</h2>
                    <p>MAY 09, 2021 AT 10:45 AM</p>
                  </div>
                </div>
                <p className="desc-comment">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley.
                </p>
                <h4 className="btn">Reply</h4>
              </div>
              <div className="card-comment-4 cardComments">
                <div className="contain">
                  <div className="img-comment">
                    <img src={imgAfterQuote1} />
                  </div>
                  <div className="text-comment">
                    <h2>Michel</h2>
                    <p>MAY 09, 2021 AT 10:45 AM</p>
                  </div>
                </div>
                <p className="desc-comment">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley.
                </p>
                <h4 className="btn">Reply</h4>
              </div>

              <div className="leave-reply">
                <h2>Leave a Reply</h2>
                <form>
                  <div>
                    <input type="text" placeholder="Author" />
                    <input type="email" placeholder="Email" />
                  </div>
                  <textarea placeholder="Comment"></textarea>
                  <button className="btn">Submit Comment</button>
                </form>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-md-10 col-sm-10 blog-right">
              <div className="container">
                <div className="search">
                  <input type="text" placeholder="Enter your keywords..." />
                  <span>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </span>
                </div>
                <div className="RecentPosts">
                  <h2>Recent Posts</h2>
                  <div className="imgs-container">
                    <div className="img">
                      <img src={imgRight1} />
                    </div>
                    <div className="text">
                      <h3>Precious Tips To Help You Get Better.</h3>
                      <p>
                        <span>
                          <FontAwesomeIcon icon={faCalendarDays} />
                        </span>
                        21 July 2021
                      </p>
                    </div>
                  </div>
                  <div className="imgs-container">
                    <div className="img">
                      <img src={imgRight2} />
                    </div>
                    <div className="text">
                      <h3>Ten Doubts You Should Clarify About.</h3>
                      <p>
                        <span>
                          <FontAwesomeIcon icon={faCalendarDays} />
                        </span>
                        20 July 2021
                      </p>
                    </div>
                  </div>
                  <div className="imgs-container imgs-container-last">
                    <div className="img">
                      <img src={imgRight3} />
                    </div>
                    <div className="text">
                      <h3>The 10 Steps Needed For Putting.</h3>
                      <p>
                        <span>
                          <FontAwesomeIcon icon={faCalendarDays} />
                        </span>
                        19 July 2021
                      </p>
                    </div>
                  </div>
                </div>
                <div className="gallery">
                  <h2>Our Gallery</h2>
                  <div className="imgs">
                    <img src={gallery1} />
                    <img src={imgAfterQuote1} />
                    <img src={mainImg} />
                    <img src={imgRight3} />
                    <img src={imgAfterQuote2} />
                    <img src={gallery6} />
                  </div>
                </div>

                <div className="Tags">
                  <h2>Tags</h2>
                  <div className="t1 t">
                    <span>Improvement</span>
                    <span>Health</span>
                    <span>Life</span>
                    <span>Covid</span>
                  </div>
                  <div className="t2 t">
                    <span>Healthy</span>
                    <span>Growth</span>
                    <span>Education</span>
                  </div>
                  <div className="t3 t">
                    <span>Manage</span>
                    <span>General</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsDetails;
