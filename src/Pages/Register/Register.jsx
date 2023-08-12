import React from "react";
import "./Register.css";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <div className="Register-N">
        <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12 container">
          <div className="imgs">
            <img src={Logo} />
          </div>
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-mail" />
            <input type="text" placeholder="User Name" />
            <input type="password" placeholder="Password" />
            <Link to="/" className="btn submit">
              Register Now
            </Link>
            <Link to="/login" className="link-account">
              Already have an account?
            </Link>
            <Link to="/login" className="register">
              Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
