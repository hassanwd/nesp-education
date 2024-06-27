import React from "react";
import "./counter.css";
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <>
  
  <div class="Sucess container mt-5">
        <h3>Our Success Stories</h3>
        <p>Our goal is to design Courses that are based only on Successful Student Outcomes including qualify of life,
            job placement, and purpose. The following career paths have had
            proven successes in today’s market based on both student and employer feedback. Experience our students’
            testimonials during and after their career development courses and
            certification programs.</p>
    </div>


    <div class="history container-fluid mt-5">
        <div class="row w-75 m-auto">
            <div class="box col-md-3 col-sm-6 col-12">
                <h1 class="Student_count"><CountUp end={986} /></h1>
                <h3>STUDENTS</h3>
            </div>
            <div class="box col-md-3 col-sm-6 col-12">
                <h1 class="Learn_count"><CountUp end={384} /></h1>
                <h3>LEARNERS</h3>
            </div>
            <div class="box col-md-3 col-sm-6 col-12">
                <h1 class="publish_count"><CountUp end={117} /></h1>
                <h3>PUBLISHED COURSES</h3>
            </div>
            <div class="box col-md-3 col-sm-6 col-12">
                <h1 class="cirtifiy_count"><CountUp end={258} /></h1>
                <h3>CERTIFICATE PUBLISH</h3>
            </div>
        </div>
        </div>

    </>
  )
}

export default Counter;



