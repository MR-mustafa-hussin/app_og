import React from "react";
import "./Footer.css";
import logo from "../../Assets/logo.png";
import fLine from "../../Assets/footer line.png";
import fCircle from "../../Assets/footer circle.png";
import fPlus from "../../Assets/footer plus.png";
import facebook from "../../Assets/facebook.png";
import skybe from "../../Assets/skybe.png";
import instigram from "../../Assets/instigram.png";
import linked from "../../Assets/linked in.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
   
      <img src={fLine} className='f-line'/>
        <div className="row">
          <div className="col-md-4 col-lg-3 col-sm-6">
            <img src={logo} className='f-logo' />
            <p>
              اوجى كودك شركة برمجيات من سنة 2014 لتقديم افضل الخدمات التكنولوجية الحديثة .
            </p>
            <div className="footer-contact">
              <div className="footer-icon">
                <FontAwesomeIcon icon={faPhone} className="" />
              </div>
              <div className="footer-text">
                <h6>تواصل معنا</h6>
                <h4>+0201141099983</h4>
              </div>
            </div>
      <img src={fCircle} className='f-circle'/>

          </div>
          <div className="col-md-4 col-lg-3 col-sm-6">
            <h2>صفحات هامة</h2>
            <ul>
              <li>
                <a href="#">من نحن</a>
              </li>
              <li>
                <a href="#">خدمتنا</a>
              </li>
              <li>
                <a href="#"> معرض اعمالنا</a>
              </li>
              <li>
                <a href="#"> الاسئلة الشائعة</a>
              </li>
              <li>
                <a href="#"> مقالتنا</a>
              </li>
              <li>
                <a href="#">الدعم الفنى</a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 col-lg-3 col-sm-6">
            <h2>خدمتنا</h2>
            <ul>
              <li>
                <a href="#">مواقع شركات</a>
              </li>
              <li>
                <a href="#">منصات تعليمية</a>
              </li>
              <li>
                <a href="#">متاجر الكترونية</a>
              </li>
              <li>
                <a href="#">اعلانات ممؤلة</a>
              </li>
              <li>
                <a href="#">ادارة صفحات تواصل اجتماعى</a>
              </li>
              <li>
                <a href="#">حجز استضافات ودومينات </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 col-lg-3 col-sm-6 container-f-line">
          <img src={fPlus} className='f-plus'/>

            <h2>الاشتراك الاخبارى</h2>
            <form>
              <input type="email" placeholder="E-mail Address" />
              <button type="sibmit">اشترك الان</button>
            
            <ul className="social">
              <li>
                <a href="#">
                  <img src={facebook} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={skybe} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instigram} />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={linked} />
                </a>
              </li>
            </ul></form>
            <img src={fLine} className='f-line'/>
          </div>
        </div>
        </div>
        
        <div className="copyRight">
        Copyright © 2023 Design & Developed by
        <span> <a href="#">OG Coding</a> </span>
        </div>
      
    </footer>
  );
};

export default Footer;
