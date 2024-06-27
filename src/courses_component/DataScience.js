import React from 'react'
import './DataScience.css'
import Image from "../images/graphicDesigning.png"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import {NavLink} from 'react-router-dom'

const DataScience = (props) => {

    return(
      <>
      <Navbar />
      <div className="container w-75">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-12">
            <h1 className="mt-4 python_heading">What is Graphic Designing</h1>
            <p className="mt-4">
              Graphic design is a craft where professionals create visual
              content to communicate messages. By applying visual hierarchy and
              page layout techniques, designers use typography and pictures to
              meet users’ specific needs and focus on the logic of displaying
              elements in interactive designs, to optimize the user experience.
            </p>
          </div>
          <div className="courses_column_2 col-md-4 col-sm-12 col-12">
            <img src={Image} alt="" />
            <button onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</button>
          </div>
        </div>
      </div>

      <div className="container w-75">
        <h1 className=" python_heading">Scope of Graphic Designing</h1>
        <p className="mt-4">
          Designing has been one of the great career nowadays. Earlier career in
          designing field was not having much scope. But with the introduction
          of new career opportunities in various field and at the same time it
          has given a rise in the fields of Designing too. There has been
          several designing fields that emerged with the time like viz. Interior
          Designer, Jewelry Designer, Landscape Designers, Graphic Designers,
          Product Designers etc. Technology has advanced so much that the world
          is in the hand of the people through internet. A rapid use of internet
          has given a room for the Graphic Designer which has led to the huge
          requirement of the Graphic Designer students. Students who have a
          great imagination power and creativity and who loves to work on the
          computers for long hours can make a great career in the field of
          Graphic Designing.
        </p>
      </div>
      <div className="container w-75 mt-5">
        <h1 className=" python_heading">Job Market of Graphic Designing</h1>
        <p className="mt-4">
          A degree relating to graphic design can be beneficial for a range of
          careers. The best job for you depends on your interests, skills,
          career goals and values. Estimated salary figure (40,000Rs to
          80,000Rs) Here are 11 graphic design-related jobs to explore as you
          begin your job search. Photo editor, Apparel graphic designer, Logo
          designer, Packaging designer, Web designer, Multimedia designer,
          Advertising designer, Publication designer, Art director, User
          interface (UI) designer, User experience (UX) designer
        </p>
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

export default DataScience
