import React from 'react'
import './ethicalHacker.css'
import Image from "../images/Untitled-1.gif"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
// import {NavLink} from 'react-router-dom'
import 'react-tabs/style/react-tabs.css';

const ethicalHacker = (props) => {

    return(
      <>
      <Navbar />
      <div className="container w-75">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-12">
            <h1 className="mt-4 python_heading">What is Ethical Hacking</h1>
            <p className="mt-4">
            Ethical hacking involves an authorized attempt to gain unauthorized access to a computer system, application, or data. Carrying out an ethical hack involves duplicating strategies and actions of malicious attackers. This practice helps to identify security vulnerabilities which can then be resolved before a malicious attacker has the opportunity to exploit them.
            </p>
          </div>
          <div className="courses_column_2 col-md-4 col-sm-12 col-12">
            <img src={Image} alt="" />
            <button onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</button>
          </div>
        </div>
      </div>

      <div className="container w-75">
        <h1 className=" python_heading">Scope of Ethical Hacking</h1>
        <p className="mt-4">
        Ethical hacking is generally used as penetration testing to detect vulnerabilities, risk and identify the loopholes in a security system and to take corrective measures against those attacks. Ethical hacking is a key component of risk evaluation, auditing, and counter-frauds.
        </p>
      </div>
      <div className="container w-75 mt-5">
        <h1 className=" python_heading">Job Market of Ethical Hacking</h1>
        <p className="mt-4">
        The U.S. Bureau of Labor Statistics (BLS) indicates that information security analysts, which includes ethical hackers, can expect to see jobs increase by 31% from 2019 to 2029. This is significantly above the national average job growth rate for the same time period, which is 4%.
        </p>
      </div>
      <Footer />
    </>
    )
}

export default ethicalHacker
