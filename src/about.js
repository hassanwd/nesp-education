import React from 'react'
import './about.css'
import Image from './images/About-Us-1-scaled.gif'
import Navbar from './components/navbar'
import Footer from './components/footer'

const About = () => {

    return(
      <>

      <Navbar />
        <h3 class="about_h">About Us</h3>

    <div class="block">
        <img className='w-100 h-100 rounded' src={Image} alt="" />
    </div>
    <div class="block2 container">
        <p>NESP symbolizes class and control-on skills. NESP is an association with smart Pakistan’s
            industrial & educational experts with an excellent support framework that gives the nation
            of the art practice atmosphere. Our operation is to train the nation of Pakistan so that they
            allow themselves to be the coming leader and change maker. The vision of NESP is to reduce
            severance, create employment openings, and empower the nation in Pakistan. NESP Provides a
            thick range of Professional practice, Associate certificates, and quick Track Instruments at
            minimal cost as equated to different foundations under one cover. NESP practice program where
            our youth will pick up control-on skills using arising technologies for sustainable development
            which will contribute to Pakistan’s Progress. NESP provides an equal occasion for Externships/
            Jobs to the smart applicant in our institute and provides openings to its applicants
            by well-reputed diligence. NESP is the name of NEVER STOP LEARNING.</p>
    </div>
    <div class="block3 container">
        <h3>Mission</h3>
        <p>The operation of NESP is to bring application & qualified the nation to contribute their services
            to remodel Pakistan’s Technology, Government, Industrial and educative sectors for business
            development, experience Development specifically for the nation of Pakistan to do bring on new
            entrepreneurial ideas that would assist get the difference in Pakistan which is beneficent for
            Pakistan’s Frugality Growth by taking on 4.0 Industrial Revolution creative technologies. Our
            operation is to train the nation of Pakistan in arising technologies to give professionally skillful
            accoutered with the loftiest norms in creativity & contribute to the 4.0 Industrial Revolution at
            the National position. NESP training program where our nation will get hands-on experience using
            coming up technologies for justifiable development which will contribute to Pakistan’s Progress.</p>
    </div>
    <div class="block4 container">
        <h3>Vision</h3>
        <p>The vision of NESP is to reduce severance, create application openings, and certify the nation in Pakistan.
            NESP envisions a transformative impact on association through its nation authorization by creation in
            educative practice, expertise Development by coming up technologies, imagination, and entrepreneurship.
            After finalizing this practice, program every experienced applicant will be suitable to get a job or
            business occasion in the general request.</p>
    </div>

    <div class="block5 container">
        <h3>Why NESP.?</h3>
        <p>NESP symbolizes caliber and control-on skills. NESP is an association with smart Pakistan’s industrial &
            educational experts with excellent reinforcement structure give the nation of the art practice surround.
            NESP gives up to Rs/- Literacy to the value-grounded students. NESP Provides a thick range of Professional
            Training, Associate Diplomas programs, and quick Track certificate at minimal cost as equated to
            different institutes under one cover. After finalizing the Associate certifications or quick Track
            certificate, the smart students would get a chance to gain up to classy pay by well-reputed diligence,
            companies, banks, and authority spots. NESP provides an equal occasion for Externships/ Jobs to the smart
            applicant in our association and provides openings to its applicants by well-reputed diligence. NESP is
            the name of NEVER STOP LEARNING.</p>
    </div>
      <Footer />
      </>
    )
}

export default About
