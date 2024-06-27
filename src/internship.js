import React from 'react'
import './internship.css'
import Navbar from './components/navbar'
import Footer from './components/footer'

const Internship = () => {

    return(
      <>

        <Navbar />
          <div class="block1 container mt-5">
              <h4>National Education Scholarship Program (NESP)
                  – The virtual Internship program, a pathway to find your dream
                  job at your favorite destination.</h4>
              <p>National Education Scholarship Program (NESP) has designed internships that focus on
                  developing your professional aptitude to work and at work. This program will strengthen
                  your personal character and provide you with a greater opportunity to network with key
                  professionals in your field.</p>
              <p>By taking part in NESP internships, you’ll acquire skill-set and practical work experience that will help you
                  in the process of seeking and applying for a job after college. Our objective is to empower our nation to
                  progress towards excellence through innovation. NESP aims to develop your skills for the National and
                  International market.</p>
              <p>What will you get? <br />
                  NESP has designed an internship program in a way that will empower students to understand the corporate
                  sector, its work environment, market norms, required skill set, and job culture. You will be trained in the
                  following:</p>
          </div>
          <div class="container internship_block2">
              <ul>
                  <li><i class="fa-solid fa-square-check"></i> Practical work structure</li>
                  <li><i class="fa-solid fa-square-check"></i> Daily work tasks as per profession and job description</li>
                  <li><i class="fa-solid fa-square-check"></i> Personal grooming and industry knowledge</li>
                  <li><i class="fa-solid fa-square-check"></i> Establishing connections with professionals and market leaders
                  </li>
                  <li><i class="fa-solid fa-square-check"></i> Complete support by experienced and successful mentors</li>
                  <li><i class="fa-solid fa-square-check"></i> Flexible meeting hours to suit your time zone(s)</li>
                  <li><i class="fa-solid fa-square-check"></i> Interaction with industry leaders</li>
                  <li><i class="fa-solid fa-square-check"></i> Tips on job hunting</li>
                  <li><i class="fa-solid fa-square-check"></i> Resume writing and support</li>
                  <li><i class="fa-solid fa-square-check"></i> Interview preparations</li>

              </ul>
          <p class="container para col-12">These internships are designed for three months. After a successful internship, you will be ready to find the job best suits to your profile.</p>
          </div>
          <div class="block3 container">
              <h3>Internships Industries:</h3>
              <p>The NESP Virtual Internship Program (NESP) provides you with an opportunity for virtual placement to build
                  professional skills and enhance your career through work opportunities with industry expert teams in
                  diversified fields in Pakistan, Mena Region, Europe, USA, Canada, Australia, and Singapore.</p>
                  <p class="block4_para">Internship placements are offered in the above-mentioned countries in the Public and
                  Private sector; in
                  collaboration with NESP network local, national and multinational organizations. NESP internship program is
                  dedicated to improving the quality of life and opportunities for you to maximize your scope to find the best
                  jobs for your career pathway.</p>
          </div>

          <div class="block4 container">
              <h3>NESP Virtual Internship Program:</h3>
              <p>The NESP Virtual Internship Program (NESP) provides you with an opportunity for virtual placement to build
                  professional skills and enhance your career through work opportunities with industry expert teams in
                  diversified fields in Pakistan, Mena Region, Europe, USA, Canada, Australia, and Singapore.</p>
              <p class="block4_para">Internship placements are offered in the above-mentioned countries in the Public and
                  Private sector; in
                  collaboration with NESP network local, national and multinational organizations. NESP internship program is
                  dedicated to improving the quality of life and opportunities for you to maximize your scope to find the best
                  jobs for your career pathway.</p>
          </div>
          <Footer />
      </>
    )
}

export default Internship
