import React from 'react'
import Banner from '../../Components/Banner/Banner'

import { Link } from 'react-router-dom'
import "./Error.css"
const Error = () => {
  return (
  <>
  <Banner title="Page Not Found" />
 
  <div className='error-404'>
  <h2>
  <span>4</span>
  <span> <img src={"erorFace"}/> </span>
  <span>4</span>
  </h2>
  <h3>The Page you were looking for, couldn't be found.</h3>
  <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
  <div className='link-container'>
  <Link to='/' className='back'>Back</Link>
  <Link to='/' className='back'>Back To Home</Link>
  </div>
  </div>
  </>
  )
}

export default Error
