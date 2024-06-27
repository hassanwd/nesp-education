import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom'

const Footer = (props) => {

    return(
      <>

        <footer class="footer_container container-fluid mt-5">
          <div class="container">
                        <div className='row'>
                        <div className='footer_box col-md-5 col-sm-6 col-12'>
                            <h3 class="h3">About Us</h3>
                            <p>NESP initiated this project to assist Pakistani Students to overcome financial barriers to their
                                education. Scholarships, Internships, and interest-free student loans. Education for all, be a
                                part of it.</p>
                            <div class="icons">
                                <i class="fa-brands fa-facebook icon"></i>
                                <i class="fa-brands fa-twitter icon"></i>
                                <i class="fa-brands fa-instagram icon"></i>
                                <i class="fa-brands fa-linkedin icon"></i>
                            </div>
                        </div>
                        <div className='footer_box col-md-3 col-sm-6 col-12'>
                            <h3 class="h3">Contact Us</h3>
                            <li class="fotter_li"><i class="fa-solid fa-phone-volume"></i> 
                            &nbsp; <NavLink to="">0323-4433534</NavLink></li>
                            <li class="fotter_li"><i class="fa-solid fa-phone-volume"></i> 
                            &nbsp; <NavLink to="">042 35760006</NavLink></li>
                            <li class="fotter_li"><i class="fa-solid fa-envelope"></i> 
                            &nbsp; <NavLink to="">info@nesp.pk</NavLink></li>
                            <li class="fotter_li"><i class="fa-solid fa-location-dot"></i> 
                            &nbsp; <NavLink to="">IT TOWER M-46 Hali Road
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Gulberg ||| Lahore,Pakistan</NavLink></li>
                            <li class="fotter_li"><i class="fa-solid fa-calendar-days"></i> 
                            &nbsp; <NavLink to="/">Mon.-Fri : 9PM-5PM</NavLink>
                            </li>
                        </div>
                        <div className='footer_box col-md-2 col-sm-6 col-12'>
                            <h3 class="h3 li_h">Apply Now</h3>
                            <li class="fotter_li"  onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</li>
                            <li class="fotter_li"><NavLink to ="/scholarship">Scholarship</NavLink></li>
                            <li class="fotter_li"><NavLink to ="/internship">Internship</NavLink></li>
                            <li class="fotter_li"><NavLink to ="/student-loan">Student Loan</NavLink>
                            </li>
                        </div>
                        <div className='footer_box col-md-2 col-sm-6 col-12'>
                            <h3 class="h3">Quick Link</h3>
                            <li class="fotter_li l"><NavLink to ="/">Home</NavLink></li>
                            <li class="fotter_li l"><NavLink to ="/about-us">About Us</NavLink></li>
                            <li class="fotter_li l"><NavLink to ="/courses">Courses</NavLink></li>
                            <li class="fotter_li l"><NavLink to ="/message-for-student">
                                Message For Students</NavLink></li>
                            <li class="fotter_li l"><NavLink to ="/">Career</NavLink></li>
                            <li class="fotter_li l"><NavLink to ="/contact-us">Contact Us</NavLink></li>

                        </div>
                </div>


          </div>
          
          <h6 style={{fontWeight: "400", textAlign: "center"}}>Copyright&copy;2022 All rights reserved | NESP Education
              Scholarship Program</h6>
          </footer>
      </>
    )
}

export default Footer
