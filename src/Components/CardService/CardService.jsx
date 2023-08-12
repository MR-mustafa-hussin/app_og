import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import "./CardService.css"
/**   <h2>{props.title}</h2>
    <p>{props.desc}</p> 
    



    */
const CardService = (props) => {
  return (
    <div className='card-container' >
    <div className='icon' >
    <FontAwesomeIcon icon={props.icon}/>
    </div>
    <h2>{props.title}</h2>
    <p>{props.desc}</p>
    <Link to="/servicesDetails" className='btn btn-view'>View More</Link>
    </div>
  )
}

export default CardService
