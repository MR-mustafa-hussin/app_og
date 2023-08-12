import React from "react";
import "./Nav.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../Assets/logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPhone, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Link} from "react-router-dom"
import Search from "../Search/Search";
const Navbars = () => {

  return (
   
    <Navbar   expand="lg" >
    <div  className='container-fluid' >
        <Navbar.Brand href="#home"><img src={logo} title='logo'/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link  to="/" className='nav-link active'>الرئيسية</Link>
            <NavDropdown title="اساسى" id="basic-nav-dropdown">
              <Link to="/aboutUs" className='nav-link page dropdown-item'>من نحن</Link>
              <Link to="/ourTeam" className='nav-link page dropdown-item'>ادارة المشروعات</Link>
              <Link to="/faqs" className='nav-link page dropdown-item'>الاسئلة الشائعة</Link>
              <Link to="/booking" className='nav-link page dropdown-item'>مدونة</Link>
              <Link to="/error" className='nav-link page dropdown-item'>Error 404</Link>
              <Link to="/login" className='nav-link page dropdown-item'>دخول / تسجيل</Link>
              
            </NavDropdown>
            <NavDropdown title="خدمات" id="basic-nav-dropdown">
              <NavDropdown.Item href="/services">خدمتنا</NavDropdown.Item>
              <NavDropdown.Item href="/servicesDetails">
                تفاصيل خدمتنا
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="مقالات" id="basic-nav-dropdown">
            <Link to="/blogs" className='nav-link'>مقالتنا</Link>
            <Link to="/blogDetails" className='nav-link'>تفاصيل المقالة</Link>
            
            </NavDropdown>
            <Link to="/contact" className='nav-link'>تواصل معنا</Link>
            <Link to="/search" className='nav-link'><FontAwesomeIcon icon={faSearch}  /></Link>
            <Nav.Link href="#home" className='teleIcon'><FontAwesomeIcon icon={faPhone} className='phone' />  (+02) 01141099983</Nav.Link>
            <Nav.Link href="#home" className='btn'><button>تواصل معنا <span><FontAwesomeIcon icon={faChevronRight} className='arrow' /></span></button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
      
    </Navbar>
  );
};

export default Navbars;
