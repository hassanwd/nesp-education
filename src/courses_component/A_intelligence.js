import React from 'react'
import './A_intelligence.css'
import Image from "../images/ai.webp"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const A_intelligence = (props) => {

    return(
      <>
      <Navbar />
      <div className="container w-75">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-12">
            <h1 className="python_heading mt-4">What is Artificial Intelligence</h1>
            <p className="mt-4">
            Artificial intelligence (AI) is a wide-ranging branch of computer science concerned with building smart machines capable of performing tasks that typically require human intelligence.
            </p>
          </div>
          <div className="courses_column_2 col-md-4 col-sm-12 col-12">
            <img src={Image} alt="" />
            <button onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</button>
          </div>
        </div>
      </div>

      <div className="container w-75">
        <h1 className="python_heading fs-4">Scope of Artificial Intelligence</h1>
        <p className="mt-4">
        There is a scope in developing the machines games, speech recognition machine, language detection, computer vision, expert systems, robotics etc. The more you learn about machine learning sciences, e.g. physics or biology, the better.
        </p>
      </div>
      <div className="container w-75 mt-5">
        <h1 className="python_heading fs-4">Job Market of Artificial Intelligence</h1>
        <p className="mt-4">
        AI and machine learning are at the top of many lists of the most important skills in today’s job market. Jobs requesting AI or machine-learning skills are expected to increase by 71% in the next five years.
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
                <p>With the help of design tools, we will develop the professional skills such as:
                </p>
                    <span>1. AMAZON WEB SERVICES</span><br /><br />
                    <span>2. AI-ONE</span><br /><br />
                    <span>3. DEEPLEARNING4J</span><br /><br />
                    <span>4. APACHE MAHOUT</span><br /><br />
                    <span>5. OPEN NEURAL NETWORKS LIBRARY (OPENNN)</span><br />
                </div>
              </TabPanel>
              <TabPanel>
                  <div className='container p-3 border border-top-0'>
                    <span>
                    • Programming Skills. The first skill required to become an AI engineer is programming.<br />
                    • Linear Algebra, Probability, and Statistics. <br />
                    • Spark and Big Data Technologies. <br />
                    • Algorithms and Frameworks.<br />
                    • Communication and Problem-solving Skills.<br />
                    • Communication and Problem-solving Skills.<br />
                    • AI Developer.<br />
                    • AI Architect. <br />
                    • Machine Learning Engineer.<br />
                    </span><br />
                  </div>
              </TabPanel>
              <TabPanel>
                <div className='container p-3 border border-top-0'>
                  <span>
                  • Speech Recognition. <br />
                  • Computer Vision. <br />
                  • Natural Language Processing. <br />
                  • Color <br />
                  </span>
                </div>
              </TabPanel>
            </Tabs>
        </div>
      <Footer />
    </>
    )
}

export default A_intelligence
