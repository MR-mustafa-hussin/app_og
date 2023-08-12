import React from 'react'
import './Login.css'
import Logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'

const Login = () => {
  let forget = (e) => {
    e.preventDefault()
console.log(e.target);
e.target.style.display = "none"
  }
  return (
    <div className='log-in'>

    <div className='col-xl-5 col-lg-5 col-md-6 col-sm-12 container'>
    <div className='imgs'>
    <img src={"Logo"}/>
    </div>
   <form>
   <input type='text' placeholder='User Name'/>
   <input type='password' placeholder='Password'/>
   <button type='submit' className='submit' >Login</button>
   <Link to="/login" className='link-forget' onClick={(e)=> forget(e)}>Forgot Password</Link>
   <Link to="/register" className='link-account'>Dont have any account?</Link>
   <Link to="/register" className='register'>Register</Link>
   </form>
    
    </div>
    </div>
  )
}

export default Login
