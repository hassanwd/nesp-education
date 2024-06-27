import React from 'react'
import './scholarship.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Image1 from './images/scholarship-cover-2048x630.jpg'
import Image2 from './images/collage2.png'

const Scholarship = () => {

    return(
      <>
          <Navbar />

            <div class="one">
              <div class="two">
                  <img id="scholorship-img" src={Image1} alt="" />
              </div>
              <h1 id="scholorship-text">Scholorship</h1>
              <div class="three">
              <p id="text-1">NESP Education offers scholarships for Pakistani students from matriculation, intermediate, bachelor, master, vocational diplomas, short courses, and Ph.D. programs. The grant of scholarship is basically on merit and needs a base and the students have to demonstrate their eligibility for the scholarship they are applying for. The entry test is a basic requirement for all the programs. For International scholarships, students may have to take the IELTS to demonstrate their English language ability. NESP Education offers scholarships in collaboration with Scholarship Council Canada. The scholarship is financial aid to overcome financial barriers towards an educated society.</p>
              
              </div>
              <h1 id="scholorship-text">Distribution&nbsp;Ceremony</h1>
              <div class="four">
                  <img id="scholorship-img" src={Image2} alt="" />
              </div>
            </div>

          <Footer />
      </>
    )
}

export default Scholarship
