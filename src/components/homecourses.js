import React from 'react'
import { NavLink } from 'react-router-dom';
import './homecourses.css'
import Image1 from '../images/Cloud-Computing.webp'
import Image2 from '../images/video-editing.webp'
import Image3 from '../images/Penetration-Testing.webp'
import Image4 from '../images/SEo.webp'
import Image5 from '../images/python.webp'
import Image6 from '../images/Spoken-English.webp'
import Image7 from '../images/Untitled-1.webp'
import Image8 from '../images/UI-UX-desiging.webp'
import Image9 from '../images/Ethical-Hacking.webp'

const Courseshome = () => {

    return(
      <>
        <div className='container pt-5 course_container'>
            <div className='container main_container'>
               <div className='container available_course'>
                  <h1>Available Courses</h1>
                  <p>We offer Video Lectures of the following courses with an Interactive & Online Learning Management system. You can learn with the help of our Online Learning Management System i.e. the Course contents with HD video streaming. Upon completion of each lesson. After completing all Lessons provided in the Course.</p>
               </div>
               
               <div className='container mt-2 mb-3 course_slider'>  

               <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                      <div className="row">
                          <div className="col-md-4 col-sm-6 col-12">
                            <NavLink to="/courses"><img src={Image1} alt="" /></NavLink>
                          </div>
                          <div className="col-md-4 col-sm-6 col-12">
                            <NavLink to="/courses"><img src={Image2} alt="" /></NavLink>
                          </div>
                          <div className="col-md-4 col-sm-6 col-12">
                            <NavLink to="/courses"><img src={Image3} alt="" /></NavLink>
                          </div>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div className="row">
                          <div className="col-md-4 col-sm-6 col-12">
                            <NavLink to="/courses"><img src={Image4} alt="" /></NavLink>
                          </div>
                          <div className="col-md-4 col-sm-6 col-12">
                            <NavLink to="/courses"><img src={Image5} alt="" /></NavLink>
                          </div>
                          <div className="col-md-4 col-sm-6 col-12">
                            <NavLink to="/courses"><img src={Image6} alt="" /></NavLink>
                          </div>
                      </div>
                  </div>
                  <div class="carousel-item">
                      <div className="row">
                          <div className="col-md-4 col-sm-6 col-12">
                            <NavLink to="/courses"><img src={Image7} alt="" /></NavLink>
                          </div>
                          <div className="col-md-4 col-sm-6 col-12">
                            <NavLink to="/courses"><img src={Image8} alt="" /></NavLink>
                          </div>
                          <div className="col-md-4 col-sm-6 col-12">
                            <NavLink to="/courses"><img src={Image9} alt="" /></NavLink>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
               
               </div>
            </div>
         </div>
      </>
    )
}

export default Courseshome