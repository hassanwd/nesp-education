import React from 'react'
import './courses.css'
import Navbar from './components/navbar'
import { NavLink } from 'react-router-dom'
import Course1 from './images/Graphic-Course-cover.png'
import Course2 from './images/Video-Editing.png'
import Course3 from './images/PythonProgramming.png'
import Course4 from './images/Artificial-Intelligence-1.png'
import Course5 from './images/Amazon-VirtualAssistant.png'
import Course6 from './images/Cloud-Computing-1.png'
import Course7 from './images/Full-Stack-Web-Development.png'
import Course8 from './images/Penetration-Testing-1.png'
import Course9 from './images/AviationManagement.png'
import Course10 from './images/Ethical-Hacker.png'
import Course11 from './images/WordPressDevelopment.png'
import Course12 from './images/UI-UXDesigning.png'
import Course13 from './images/SEO-1.png'
import Course14 from './images/IOT-Internet-of-Things.png'
import Course15 from './images/Freelancing-1.png'
import Course16 from './images/Digital-Marketing-1.png'
import Course17 from './images/Data-Science-1.png'
import Course18 from './images/ASPNET.png'
import Course19 from './images/IELTS.png'
import Course20 from './images/SpokenEnglish.png'
import Course21 from './images/Game-Development-3.png'

import Footer from './components/footer'

const Courses = () => {

    return(
      <>
        <Navbar />
        <div className='courses_main container mw-100 d-flex flex-column align-items-center justify-content-center'>
            <h1>Available Courses</h1>
            <p className='text-center w-75'>We offer Video Lectures of the following courses with Interactive & Online Learning Management system. You can learn with the help of our Online Learning Management System i.e. the Course contents with HD video streaming. Upon completion of each lesson. After completing all Lessons provided in the Course.</p>

            <div className='courses_container container'>
              <div className='row'>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                      <div className='course'>
                          <div className='course_image'>
                              <img src={Course1} alt="" />
                          </div>
                          <div className='course_text'>
                              <p>Graphic design is a craft where professionals create visual content to communicate messages.</p>
                              <NavLink to='/graphic-designing'>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                      <div className='course'>
                          <div className='course_image'>
                              <img src={Course2} alt="" />
                          </div>
                          <div className='course_text'>
                              <p>A Video Editor is tasked with taking the raw footage shot by a film crew and director and turning it into the final product.</p>
                              <NavLink to='/video-editing'>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>

                      <div className='course'>
                          <div className='course_image'>
                              <img src={Course3} alt="" />
                          </div>
                          <div className='course_text'>
                              <p>Python is a computer programming language often used to build websites</p>
                              <NavLink to='/python-programming'>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>

                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>

                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course4} alt="" />
                          </div>
                          <div className='course_text'>
                              <p>AI is the simulation of human intelligence processes by machines, especially computer systems.</p>
                              <NavLink to='/artificial-intelligence'>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>

                  </div>
              </div>
              <div className='row'>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course5} alt="" />
                          </div>
                          <div className='course_text'>
                              <p>As well as being an online retailer, Amazon allows for individuals and business to sell and display products for sale on line.</p>
                              <NavLink to='/amazon-virtual-assistant'>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course6} alt="" />
                          </div>
                          <div className='course_text'>
                              <p>Simply put, cloud computing is the delivery of computing services.</p>
                              <NavLink to='/cloud-computing'>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course7} alt="" />
                          </div>
                          <div className='course_text'>
                              <p>A full stack web developer is a person who can develop both client and server software.</p>
                              <NavLink to='/full-stack-web-development'>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course8} alt="" />
                          </div>
                          <div className='course_text'>
                              <p>Penetration testing, also known as pen testing, security pen testing, and security testing.</p>
                              <NavLink to='/penetration-testing'>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='row'>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course9} alt="" />
                          </div>
                          <div className='course_text'>
                              <p>Aviation management is the practice of coordinating and planning the logistics and operations of an airport, airline, or other industry within the field of aviation.</p>
                              <NavLink to='/aviation-management'>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course10} alt="" />
                          </div>
                          <div className='course_text'>
                              <p>An ethical hacker, also referred to as a white hat hacker, is an information security (infosec)</p>
                              <NavLink to='/ethical-hacker'>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course11} alt="" />
                          </div>
                          <div className='course_text'>
                              <NavLink to=''>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course12} alt="" />
                          </div>
                          <div className='course_text'>
                              <NavLink to=''>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='row'>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course13} alt="" />
                          </div>
                          <div className='course_text'>
                              <NavLink to=''>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course14} alt="" />
                          </div>
                          <div className='course_text'>
                              <p>The internet of things, or IoT, is a system of interrelated computing devices, mechanical and digital machines.</p>
                              <NavLink to='/'>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course15} alt="" />
                          </div>
                          <div className='course_text'>
                              <NavLink to=''>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course16} alt="" />
                          </div>
                          <div className='course_text'>
                              <NavLink to=''>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='row'>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course17} alt="" />
                          </div>
                          <div className='course_text'>
                              <NavLink to=''>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course18} alt="" />
                          </div>
                          <div className='course_text'>
                              <p>.NET is a developer platform made up of tools, programming languages, and libraries for building different types of applications.</p>
                              <NavLink to='/'>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course19} alt="" />
                          </div>
                          <div className='course_text'>
                              <NavLink to=''>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
                  <div className='course_item col-md-3 col-sm-6 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course20} alt="" />
                          </div>
                          <div className='course_text'>
                              <NavLink to=''>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
              </div>
              <div className='row'>
                  <div className='course_item col-md-3 col-sm-12 col-12'>
                  <div className='course'>
                          <div className='course_image'>
                              <img src={Course21} alt="" />
                          </div>
                          <div className='course_text'>
                              <NavLink to=''>
                                <button>View Course</button>
                              </NavLink>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
        <Footer />
      </>
    )
}

export default Courses
