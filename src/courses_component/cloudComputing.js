import React from 'react'
import './cloudComputing.css'
import Image from "../images/cloud-computing (1).webp"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import {NavLink} from 'react-router-dom'
import 'react-tabs/style/react-tabs.css';

const cloudComputing = (props) => {

    return(
      <>
      <Navbar />
      <div className="container w-75">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-12">
            <h1 className="mt-4 python_heading">What is Cloud Computing</h1>
            <p className="mt-4">
            Cloud computing is the delivery of on-demand computing services — from applications to storage and processing power — typically over the internet and on a pay-as-you-go basis.
            </p>
          </div>
          <div className="courses_column_2 col-md-4 col-sm-12 col-12">
            <img src={Image} alt="" />
            <button onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</button>
          </div>
        </div>
      </div>

      <div className="container w-75">
        <h1 className=" python_heading">Scope of Cloud Computing</h1>
        <p className="mt-4">
          The above predictions prove that the scope of growth for cloud computing is immense. More and more organizations need to prioritize the use of this technology. In fact, they need to restructure and invest in coding standards that can support seamless migration into the cloud. Also, cloud computing is strongly associated with concepts like the internet of things. When data gets stored in the cloud, it becomes easier for IoT to ensure performance, security, and functionality. The only limitation would be the speed of the network, which controls the pace at which data is gathered and processed. If the network is fast, everything else about the use of cloud computing will fall in place.
        </p>
      </div>
      <div className="container w-75 mt-5">
        <h1 className=" python_heading">Job Market of Cloud Computing</h1>
        <p className="mt-4">
          The global cloud computing market is one of the fastest-growing technology markets in the world. It reached $274.79 billion in 2020 and is expected to grow at a compound annual growth rate (CAGR) of 19.1%, reaching $1.25 trillion by 2028, according to Grand View Research.
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
                  1: Cloudwatch. …<br />
                  2: Cloud Monitoring Tool. …<br />
                  3: Infrastructure Manager. …<br />
                  4: AppDynamics. …<br />
                  5: Relic. …<br />
                  6: True Sight Pulse. …<br />
                  7: Solar Winds. …<br />
                  8: Retrace.<br />
                </div>
              </TabPanel>
              <TabPanel>
                  <div className='container p-3 border border-top-0'>
                    <p>With the help of design tools, we will develop the professional skills such as:</p>
                  • Database Skills Invest in learning a database querying language and database platform. <br />
                  • Programming Skills Proficiency in programming languages like Php, Java, <br />
                  • Linux:<br />
                  • Networking Skills: <br />
                  • Cloud Service Providers <br />
                  • Web Services & APIs<br />
                  • Information Security<br />
                  </div>
              </TabPanel>
              <TabPanel>
                <div className='container p-3 border border-top-0'>
                  <p className='fw-bolder'>Keeping these in view, there are certain elements which make up a powerful cloud computing plan. This model makes resources like storage space, networking, interfaces, applications and VMs available to the general community online</p>
                </div>
              </TabPanel>
            </Tabs>
        </div>
      <Footer />
    </>
    )
}

export default cloudComputing
