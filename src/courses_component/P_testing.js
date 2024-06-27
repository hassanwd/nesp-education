import React from 'react'
import './P_testing.css'
import Image from "../images/penetration.png"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import {NavLink} from 'react-router-dom'
import 'react-tabs/style/react-tabs.css';

const P_testing = (props) => {

    return(
      <>
      <Navbar />
      <div className="container w-75">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-12">
            <h1 className="mt-4 python_heading">What is Penetration Testing</h1>
            <p className="mt-4">
              Penetration testing (or pen testing) is a security exercise where a cyber-security expert attempts to find and exploit vulnerabilities in a computer system. The purpose of this simulated attack is to identify any weak spots in a system’s defenses which attackers could take advantage of. This is like a bank hiring someone to dress as a burglar and try to break into their building and gain access to the vault. If the ‘burglar’ succeeds and gets into the bank or the vault, the bank will gain valuable information on how they need to tighten their security measures.
            </p>
          </div>
          <div className="courses_column_2 col-md-4 col-sm-12 col-12">
            <img src={Image} alt="" />
            <button onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</button>
          </div>
        </div>
      </div>

      <div className="container w-75">
        <h1 className=" python_heading">Scope of Penetration Testing</h1>
        <p className="mt-4">
          The scope of a pentest is the sum of all the boundaries of an engagement, which is a combination of all items to be tested or to be specifically excluded from that engagement. When a consultant says that something is “out of scope” for an engagement.
        </p>
      </div>
      <div className="container w-75 mt-5">
        <h1 className=" python_heading">Job Market of Penetration Testing</h1>
        <p className="mt-4">
          Penetration testers, also known as pen testers, help organizations identify and resolve security vulnerabilities affecting their digital assets and computer networks. Some professionals hold in-house positions with permanent employers, functioning as part of internal cybersecurity or information technology (IT) teams. Other pen testers work for specialized firms that provide services to clients. Industries that deal with sensitive, personal, classified, or proprietary information tend to hire penetration testers. Employers increasingly prefer applicants with a bachelor’s or master’s degree in computer science, IT, cybersecurity, or a related specialization. However, some may place more emphasis on the candidate’s knowledge and experience than their formal educational backgrounds. The cybersecurity profession tends to attract people with advanced technical and problem-solving skills. The Bureau of Labor Statistics (BLS) includes penetration testing in the job duties information security analysts perform. The agency projects a 33% increase in demand for information security analysts from 2020 and 2030. The BLS also reports a median annual salary of $103,590 in 2020.
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
                    1. Powershell-Suite<br />
                    2. Zmap<br />
                    3. Xray<br />
                    4. SimplyEmail<br />
                    5. Wireshark<br />
                    6. Hashcat<br />
                    7. John the Ripper<br />
                    8. Hydra<br />
                    9. Aircrack-ng<br />
                    10. Burp Suite<br />
                    11. Metasploit<br />
                    12. Nikto<br />
                    13. Fuzzdb<br />
                    14. NMAP/ZenMap<br />
                    15. sqlmap<br />
                    16. MobSF<br />
                    17. Linux-Exploit-Suggester<br />
                    18. Apktool<br />
                    19. Resource Hacker<br />
                    20. IDA<br />
                    21. Radare<br />
                    22. Email or Chat Software<br />
                    23. Srm<br />
                    24. Catfish<br />
                  </span>
                </div>
              </TabPanel>
              <TabPanel>
                  <div className='container p-3 border border-top-0'>
                    <span>
                      • Knowledge of Vulnerabilities and Exploits Outside of Tool Suites.<br />
                      • Willingness to Continually Learn. <br />
                      • Understanding of Secure Web Communications and Technologies. <br />
                      • Ability to Script or Write Code.  <br />
                    </span>
                  </div>
              </TabPanel>
              <TabPanel>
                <div className='container p-3 border border-top-0'>
                  <p className='fw-bolder'>Elements of Graphic Design</p>
                  <span>
                  • Web Application Penetration Testing.<br />
                  • Network Penetration Testing.<br />
                  • Wireless Penetration Testing. <br />
                  • Physical Penetration Testing.<br />
                  • Social Engineering Penetration Testing.<br />
                  • Client Side Penetration Testing.<br />
                  </span>
                </div>
              </TabPanel>
            </Tabs>
        </div>
      <Footer />
    </>
    )
}

export default P_testing
