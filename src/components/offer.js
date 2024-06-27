import React from 'react'
import './offer.css'
// import { NavLink } from 'react-router-dom'

const Scholarship = (props) => {

    return(
      <>

        <div class="offer">
          <div class="offer-1">
              <h1>We Offer</h1>
              <p>We offer Internships, Scholarships, and Student loans. The NESP Educational Scholarship Program offers
                  students and recent the opportunity to gain direct practical experience with
                  NESP work. Internship opportunities are available worldwide. Learn more about where we work When the
                  NESP office identifies the need for an intern to support their team, they
                  publish the opportunity, and all eligible candidates can submit their application through our website.
                  You can find current opportunities on our career page. Build a compelling profile
                  and get your dream job with
                  these application and assessment tips. chance to learn and earn by doing in a setting where you are
                  supervised by a workplace professional and have
                  the opportunity to achieve your goals.</p>
          </div>

          <div class="offer-2">

              <div class="offer-2-squar1 s">
                  <div class="p1">
                      <i class="fa-solid fa-graduation-cap i"></i>
                      <h1 class="h">Scholarship</h1>
                      <p class="p">Nesp provide best opourtunity to get the student scholarship</p>
                  </div>
                  <div class="p2">
                      <h1>Scholarship</h1>
                      <button onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</button>
                  </div>
              </div>

              <div class="offer-2-squar2 s">
                  <div class="p1">
                      <i class="fa-solid fa-location-dot i"></i>
                      <h1 class="h">Internship</h1>
                      <p class="p">Nesp provide best opourtunity to get the student internship</p>
                  </div>
                  <div class="p2">
                      <h1>Internship</h1>
                      <button onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</button>
                  </div>
              </div>

              <div class="offer-2-squar3 s">
                  <div class="p1">
                      <i class="fa-solid fa-language i"></i>
                      <h1 class="h">Student Loan</h1>
                      <p class="p">Nesp provide best opourtunity to get the student loan</p>
                  </div>
                  <div class="p2">
                      <h1>Student Loan</h1>
                      <button onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</button>
                  </div>
              </div>
          </div>
      </div>
      </>
    )
}

export default Scholarship
