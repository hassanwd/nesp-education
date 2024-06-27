import React from 'react'
import './pythonProgram.css'
// import {NavLink} from 'react-router-dom'
import Image from "../images/python.webp"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const pythonProgram = (props) => {

    return(
      <>
      <Navbar />
      <div className="container w-75">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-12">
            <h1 className="python_heading mt-4">What is Python Programming</h1>
            <p className="mt-4">
            Python is a multipurpose programming language, and it has applicability pretty much anywhere that uses data, mathematical computation, or lines of code. That means unlike Java, for instance, Python isn’t confined to being used for web development. Like most programming languages, Python works in tandem with an interpreter that executes the finalized lines of codes. There are lots of free resources to learn the Python coding language, which, with its basis in English syntax, is considered one of the least fussy and most straightforward coding languages to learn and read. One quick side note about Python: The serpentine namesake isn’t an abbreviation or acronym, but rather, simply the result of Python creator Guido van Rossum being an avid Monty Python fan.
            </p>
          </div>
          <div className="courses_column_2 col-md-4 col-sm-12 col-12">
            <img src={Image} alt="" />
            <button onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</button>
          </div>
        </div>
      </div>

      <div className="container w-75">
        <h1 className="python_heading fs-4">Scope of Python Programming</h1>
        <p className="mt-4">
        Python programming language, to be the most promising career in technologies, industry. Opportunities in the career of python are increasing tremendously in the world. Since Python has simple codes, faster readability capacity, significant companies are in demand in python language.
        </p>
      </div>
      <div className="container w-75 mt-5">
        <h1 className="python_heading fs-4">Job Market of Python Programming</h1>
        <p className="mt-4">
        As Python is the most popular programming language in the world used by companies all across the globe, it’s a pretty strong market. There are currently more than 10,000 job advertisements worldwide on Glassdoor for Python-related roles, with Indeed having around 14,000 roles.
        </p>
      </div>

      <div className='container w-75 mt-5'>
          <Tabs>
              <TabList>
                <Tab>Tools</Tab>
                <Tab>Professional Skills</Tab>
              </TabList>

              <TabPanel>
                <div className='container p-3 border border-top-0'>
                  <p>We will learn and apply the fundamentals of various software applications such as:</p>
                  <span>
                    • 1) Scikit-Learn.<br />
                    • 2) Keras.<br />
                    • 3) Theano.<br />
                    • 4) SciPy.<br />
                    • 5) Selenium.<br />
                    • 6) Robot Framework.<br />
                    • 7) TestComplete.<br />
                    • 8) Beautiful Soup.<br />
                  </span>
                </div>
              </TabPanel>
              <TabPanel>
                  <div className='container p-3 border border-top-0'>
                  <span>
                    • Expertise in Core Python. …<br />
                    • Sound Knowledge of Web Frameworks. …<br />
                    • Object Relational Mappers. …<br />
                    • Skills of Data Scientists. …<br />
                    • Artificial Intelligence and Machine Learning Skill. …<br />
                    • Deep Learning. …<br />
                    • Good Understanding of Multi-Process Architecture. …<br />
                    • Analytical Skills.<br />
                  </span>
                  </div>
              </TabPanel>
            </Tabs>
        </div>
      <Footer />
    </>
    )
}

export default pythonProgram
