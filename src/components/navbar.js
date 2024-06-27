import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import LogoImage from "../images/logo.png";

const App = (props) => {
  const [state] = useState([
    {
      navbarTopIcon1: "fa-solid fa-phone-flip",
      navbarTopIcon2: "fa-solid fa-envelope",
      navbarTopText1: " 0323 4433534",
      navbarTopText2: " info@nesp.pk",
      navbarTopButton1: " Apply Now",
      navbarTopButton2: " Verification",
      navbarNavLogo: LogoImage,
      navbarNavElement1: "Home",
      navbarNavElement2: "About us",
      navbarNavElement3: "Courses",
      navbarNavElement4: "Scholarships",
      navbarNavElement5: "Student Loan",
      navbarNavElement6: "Message/Events",
      navbarNavElement7: "Career",
      navbarNavElement8: "Contact us",
      navbarNavElementIcon: "fa-solid fa-angle-down",
    },
  ]);

  const content = state.map((e) => {
    return (
      <>
        <div className="header_navbar_main"> 
          <div className="navbar_top">
            <div className="navbar_top_left">
              <i className={e.navbarTopIcon1}></i> {e.navbarTopText1}{" "}
              &nbsp;&nbsp;&nbsp;
              <i className={e.navbarTopIcon2}></i> {e.navbarTopText2}
            </div>
            <div className="navbar_top_right">
              <button onClick={props.handleMove}>{e.navbarTopButton1}</button>
              <button><a className="text-white" target=" _blank " href="https://lms.nesp.pk/" >LMS
              </a></button>
              <button><a className="text-white" target=" _blank " href="https://docs.google.com/forms/d/e/1FAIpQLSczXnxvkgtY8EDo62aaNClUFS2aER6mgG1sFPwdARtre8V19A/viewform?usp=sf_link" > Verification
              </a></button>
            </div>
          </div>

          <nav className="navbar header_navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid navbar_container d-flex justify-content-evenly align-items-center">
              <NavLink to="/">
                <div className="navbar-brand d-flex justify-content-end">
                  <img src={e.navbarNavLogo} alt="" />
                </div>
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse bg-white" id="navbarNav">
                <ul className="navbar-nav w-75 d-flex justify-content-evenly ml-5">
                  <NavLink to="/" style={{ textDecoration: "none" }}>
                    <li className="nav-link">
                      {e.navbarNavElement1}
                      <div className="underline"></div>
                    </li>
                  </NavLink>
                  <NavLink to="/about-us" style={{ textDecoration: "none" }}>
                    <li className="nav-link">
                      {e.navbarNavElement2}
                      <div className="underline"></div>
                    </li>
                  </NavLink>
                  <NavLink to="/courses" style={{ textDecoration: "none" }}>
                    <li className="nav-link">
                      {e.navbarNavElement3}
                      <div className="underline"></div>
                    </li>
                  </NavLink>
                  <li className="nav-link">
                    {e.navbarNavElement4}
                    &nbsp;<i className={e.navbarNavElementIcon}></i>
                    <div className="dropdown">
                      <NavLink
                        to="/scholarship"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <p>Scholarships</p>
                      </NavLink>
                      <p onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</p>
                    </div>
                    <div className="underline"></div>
                  </li>
                  <li className="nav-link">
                    {e.navbarNavElement5}
                    &nbsp;<i className={e.navbarNavElementIcon}></i>
                    <div className="dropdown">
                      <NavLink
                        to="/student-loan"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <p>Student Loan</p>
                      </NavLink>
                      <p onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</p>
                    </div>
                    <div className="underline"></div>
                  </li>
                  <li className="nav-link">
                    {e.navbarNavElement6}
                    &nbsp;<i className={e.navbarNavElementIcon}></i>
                    <div className="dropdown">
                      <NavLink
                        to="/message-for-student"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <p>Message For Students</p>
                      </NavLink>
                      <NavLink
                        to="/events"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <p className="border-bottom">Events</p>
                      </NavLink>
                      <NavLink
                        to="/gallery"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <p>Gallery</p>
                      </NavLink>
                    </div>
                    <div className="underline"></div>
                  </li>
                  <li className="nav-link">
                    {e.navbarNavElement7}
                    &nbsp;<i className={e.navbarNavElementIcon}></i>
                    <div className="dropdown">
                      <NavLink
                        to="/internship"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <p>Internship</p>
                      </NavLink>
                      <p onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</p>
                    </div>
                    <div className="underline"></div>
                  </li>
                  <NavLink to="/contact-us" style={{ textDecoration: "none" }}>
                    <li className="nav-link">
                      {e.navbarNavElement8}
                      <div className="underline"></div>
                    </li>
                  </NavLink>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  });

  return <>{content}</>;
};

export default App;
