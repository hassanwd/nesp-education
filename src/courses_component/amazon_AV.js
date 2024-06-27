import React from 'react'
import './amazon_AV.css'
import Image from "../images/amazon-1.webp"
import Navbar from '../components/navbar'
import Footer from '../components/footer'
// import {NavLink} from 'react-router-dom'
import 'react-tabs/style/react-tabs.css';

const amazon_AV = (props) => {

    return(
      <>
      <Navbar />
      <div className="container w-75">
        <div className="row">
          <div className="col-md-8 col-sm-12 col-12">
            <h1 className="python_heading mt-4">What is Amazon</h1>
            <p className="mt-4">
            Today Amazon is a titan of e-commerce, logistics, payments, hardware, data storage, and media. It dabbles in plenty more industries. It’s the go-to site for online shoppers and merchants alike, a modern necessity that independent sellers love to hate. Prime, Amazon’s signature $99-a-year membership program, has an estimated 85 million subscribers in the US, equivalent to about two-thirds of American households. To even call it an e-commerce company feels completely inadequate.
            </p>
          </div>
          <div className="courses_column_2 col-md-4 col-sm-12 col-12">
            <img src={Image} alt="" />
            <button onClick={props.handleMove} style={{cursor: "pointer"}}>Apply Now</button>
          </div>
        </div>
      </div>

      <div className="container w-75">
        <h1 className="python_heading fs-4">Scope of Amazon</h1>
        <p className="mt-4">
        Amazon has an extremely vast scope of business because It began as an online bookstore, became an online marketplace, and then began creating its own technology such as AWS and the Kindle. Another service Amazon provides is a subscription service Amazon Prime. By purchasing a subscription to Amazon Prime, customers can purchase almost anything from Amazon and receive free two-day shipping. Included in the subscription is the popular Amazon Video which began as a way for customers to stream videos online instead of purchasing them and has evolved into Amazon creating their own content through Amazon Studios.
        </p>
      </div>
    
      <Footer />
    </>
    )
}

export default amazon_AV
