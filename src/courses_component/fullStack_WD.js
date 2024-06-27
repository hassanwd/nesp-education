import React from 'react'
import './fullStack_WD.css'
import Image from "../images/web.png"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
// import {NavLink} from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const fullStack_WD = (props) => {

    return(
      <>
      <Navbar />
      <div className="container w-75">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-12">
            <h1 className="mt-4 python_heading">What is Full Stack Web Development</h1>
            <p className="mt-4">
            A Full Stack Developer is someone who works with the Back End — or server side — of the application as well as the Front End, or client side. Full Stack Developers have to have some skills in a wide variety of coding niches, from databases to graphic design and UI/UX management in order to do their job well.
            </p>
          </div>
          <div className="courses_column_2 col-md-4 col-sm-12 col-12">
            <img src={Image} alt="" />
            <button onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</button>
          </div>
        </div>
      </div>

      <div className="container w-75">
        <h1 className=" python_heading">Scope of Full Stack Web Development</h1>
        <p className="mt-4">
        Full-stack developers can work with multiple technologies, and so, they can handle more aspects of a project than an average programmer. They cut costs for companies because they can do the work of many specialists alone. A full-stack developer is familiar with many stacks, including the MEAN stack and the LAMP stack.
        </p>
      </div>
      <div className="container w-75 mt-5">
        <h1 className=" python_heading">Job Market of Full Stack Web Development</h1>
        <p className="mt-4">
        Web development has become one of the most popular careers in recent years. With 14,000 available jobs in the market and a $73k+ median salary, web development is currently the 8th best technology job and the 20th best STEM job (US News). Full-stack web developers are the most valued web dev professionals due to their advanced understanding of both front and back-end technologies.
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
                    <span>
                    • Backbone. Backbone.<br />
                    • CodePen. It is a web development environment made specifically for web designers and front-end developers.<br />
                    • Visual Studio Code. This free and powerful tool is a necessity if you’re planning to become a full stack developer.<br />
                    • TypeScript.<br />
                    • WebStorm.<br />
                    • GitHub.<br />
                    • Slack.<br />
                    • Electron.<br />
                    </span><br />
                </div>
              </TabPanel>
              <TabPanel>
                  <div className='container p-3 border border-top-0'>
                    <span>
                    • HTML/CSS. While HTML stands for Hypertext Markup Language, CSS stands for     <br />• Cascading Style Sheets.<br />
                    • JavaScript.<br />
                    • Git and GitHub.<br />
                    • Backend languages.<br />
                    • Web architecture. <br />
                    • HTTP and REST.<br />
                    • Database storage. <br />
                    • Basic design skills.<br />
                  </span>
                  </div>
              </TabPanel>
              <TabPanel>
                <div className='container p-3 border border-top-0'>
                      <span>
                        Program a browser (like using JavaScript, jQuery, Angular, or Vue)<br />
                        Program a server (like using PHP, ASP, Python, or Node)<br />
                        Program a database (like using SQL, SQLite, or MongoDB)<br />
                      </span>
                </div>
              </TabPanel>
            </Tabs>
        </div>
      <Footer />

    </>
    )
}

export default fullStack_WD
