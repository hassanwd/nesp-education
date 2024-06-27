import React from 'react'
import './aviation_management.css'
import Image from "../images/sdsdsdsd.gif"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
// import {NavLink} from 'react-router-dom'
import 'react-tabs/style/react-tabs.css';

const aviation_management = (props) => {

    return(
      <>
      <Navbar />
      <div className="container w-75">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-12">
            <h1 className="mt-4 python_heading">What is Aviation Management </h1>
            <p className="mt-4">
            Aviation management is the practice of coordinating and planning the logistics and operations of an airport, airline, or other industry within the field of aviation. The discipline involves many different aspects and roles. Some parts of the field focus specifically on logistical considerations, such as fleet planning and how to manage airport traffic or flight routes. Other aspects deal with marketing for airlines or services associated with flying. Aviation management is a significant part of both commercial flight and aerospace manufacturing.
            </p>
          </div>
          <div className="courses_column_2 col-md-4 col-sm-12 col-12">
            <img src={Image} alt="" />
            <button onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</button>
          </div>
        </div>
      </div>

      <div className="container w-75">
        <h1 className=" python_heading">Job Market of Aviation Management</h1>
        <p className="mt-4">
        Aviation requires each member to form a team and work as a cohesive unit. A candidate should have some particular skills to perform well on the job.
        </p>
      </div>
      <Footer />
    </>
    )
}

export default aviation_management
