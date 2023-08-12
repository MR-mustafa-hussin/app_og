import { faHome } from '@fortawesome/free-solid-svg-icons'
import "./Banner.css"
import fBanner from "../../Assets/footer Banner.png"
import circle from "../../Assets/footer circle.png"
import line from "../../Assets/footer line.png"
import plus from "../../Assets/footer plus.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
const Banner = (props) => {
  return (
    <div className='banner'>
    <img src={circle}  className='banner-circle'/>
    
      <div className='container'>
      <div className='row'>
      <div className='col-lg-12 col-md-12 col-sm-12'></div>
      <h2>{props.title}</h2>
      <li>
      <Link to='/'>
      <FontAwesomeIcon icon={faHome} /> الرئيسية
      </Link>
       / {props.title}
      </li>
      </div>
      
      </div>
    <img src={plus}  className='banner-plus'/>
    <img src={line}  className='banner-line'/>

      <img src={fBanner}  className='f-banner'/>
    </div>
  )
}

export default Banner
