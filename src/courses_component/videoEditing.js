import React from 'react'
import './videoEditing.css'
import Image from "../images/Untitled-1-1.png"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import {NavLink} from 'react-router-dom'
import 'react-tabs/style/react-tabs.css';

const videoEditing = (props) => {

    return(
      <>
        <Navbar />
        <div className='container w-75'>
          <div className='row'>
            <div className='col-md-8 col-sm-12 col-12'>
                <h1 className='mt-4 python_heading'>What is Video Editing</h1>
                <p className='mt-4'>Video editing is the process of piecing together video clips, images, and sounds to create a movie. Nowadays, this is usually done on a computer with fancy video editing programs called non-linear editors, or NLE’s. All that means is that you can view, cut, and arrange digital video in any order without the need to play through the whole thing. When movies were edited on film, editors had to chop up the film with a razor blade and attach the pieces end to end to make a movie. That’s why editing is sometimes called cutting. In fact, a lot of video editing lingo is carried over from the old film cutting days. For example, the file organization systems in a digital editor are called bins because film canisters were once stored in bins during the editing process. Video editing is also sometimes referred to as post-production. Movie making is typically split into three stages: pre-production, production, and post-production. Pre-production is the beginning phase where the script is written, the crew is established, and the shots are planned. Production involves shooting the video. Finally, post-production is where video editing, sound editing, and special effects happen.</p>
            </div>
            <div className='courses_column_2 col-md-4 col-sm-12 col-12'>
              <img src={Image} alt="" />
              <button onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</button>
            </div>
          </div>
        </div>

        <div className='container w-75'>
          <h1 className=' python_heading'>Scope of Video Editing</h1>
          <p className='mt-4'>Besides media houses, large film studios, electronic news channel groups, one can also find wide ranging opportunities in various production houses scattered all across the country. The increased popularity of online video clips has also resulted in large number of job   for competent video editors.</p>
        </div>
        <div className='container w-75 mt-5'>
          <h1 className=' python_heading'>Job Market of Video Editing</h1>
          <p className='mt-4'>With some years of experience and expertise gained in video editing, a video editor’s career is on the smooth track with high pay-package and other benefits. A creative and experienced video editor working for a large studio can earn a salary of anywhere between Rs. 25, 000 to Rs. 75,000 per month.</p>
        </div>


        <div className='container w-75 mt-5'>
          <Tabs>
              <TabList>
                <Tab>Tools</Tab>
                <Tab>Professional Skills</Tab>
                <Tab>Elements</Tab>
              </TabList>

              <TabPanel>
                <div className='container p-3 border border-top-0'>
                  <p>We will learn and apply the fundamentals of various software applications such as:</p>
                  <span>• Adobe Photoshop</span><br />
                  <span>• Adobe Illustrator</span>
                </div>
              </TabPanel>
              <TabPanel>
                  <div className='container p-3 border border-top-0'>
                    <p>With the help of design tools, we will develop the professional skills such as:</p>
                    <span>• Logo Design</span><br />
                    <span>• Brochure Design</span><br />
                    <span>• Stationary Design</span><br />
                    <span>• Poster Design</span><br />
                    <span>• Image Editing</span><br />
                    <span>• Website Design</span><br />
                    <span>• App Design</span><br />
                    <span>• Social Media Campaign Design</span><br />
                    <span>• Portfolio Design/Building</span><br />
                    <span>Introduction to Graphic Design</span><br />
                    <span>• Basic Introduction</span><br />
                    <span>• History of Graphic Design</span><br />
                    <span>• Importance of Graphic Design</span><br />
                    <span>• Objective of a Graphic Designer</span><br />
                  </div>
              </TabPanel>
              <TabPanel>
                <div className='container p-3 border border-top-0'>
                  <p className='fw-bolder'>Elements of Graphic Design</p>
                  <span>
                  • Point & Shape <br />
                  • Texture <br />
                  • Line & Space <br />
                  • Color <br />
                  • Principles of Graphic Design <br />
                    (Theoretical Part)
                  • Balance, Contrast, Emphasis, Harmony & Movement <br />
                  • Proportion, Repetition, Unity & Variety <br />
                  Typography
                  • Introduction to Typography <br />
                  • Typefaces <br />
                  • Classification of Typography <br />
                  • Anatomy of a Letter <br />
                  • Typographic Measurements <br />
                  • Typographic Standards <br />
                  • Typographic Guidelines <br />
                  Creating Images for Print & Web
                  • Formats <br />
                  • Resolution <br />
                  • Rector & Vector Based Graphics <br />
                    Printing
                  • Basic Printing Techniques <br />
                  • Mediums for Printing <br />
                  • Offset Printing <br />
                  • Digital Printing <br />
                  • Guidelines for Printing <br />
                  • Bleed & Margins <br />
                  Photo Editing & Manipulation
                  Web Design / App Design
                  • Types of Websites <br />
                  • Pixel theory <br />
                  • Static, Dynamic & Responsive Websites <br />
                  • Wireframes & Layouts <br />
                  • Mobile Pixels, App design process & iOS / Android Behavior <br />
                  Freelancing
                  • Online Portfolio Building <br />
                  • Freelancing Websites Behavior <br />
                  • Projects Winning Techniques <br />
                  • Earning High Amount projects Tips <br />
                  • Successful application writing to get online projects <br />
                  • Detailed overview of payment method <br />
                  • Precautions to keep your earning secure <br />
                  </span>
                </div>
              </TabPanel>
            </Tabs>
        </div>
        <Footer />
      </>
    )
}

export default videoEditing
