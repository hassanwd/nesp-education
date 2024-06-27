import React, { useState } from "react";
import { send } from "emailjs-com";
import "./contactUs.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Contact = () => {


  const [toSend, setToSend] = useState({
    from_name: '',
    email: '',
    phone: '',
    course: '',
    country: '',
    reply_to: '',
  });

  const onSubmit = (e) => {

    if(toSend.from_name === ""){
      alert("Please enter the Name")
    }
    else if(toSend.email === ""){
      alert("Please enter the Email")
    }
    else if(toSend.phone === ""){
      alert("Please enter the Phone")
    }
    else if(toSend.course === ""){
      alert("Please enter the course")
    }
    else if(toSend.country === ""){
      alert("Please enter the country")
    }
    else{


      e.preventDefault();
      send(
        'service_q86pzf8',
        'template_5cxzj4o',
        toSend,
        'user_1xoM37JnoYa4uiAZEWMDG'
      )
        .then((response) => {
          console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
          console.log('FAILED...', err);
        });


      alert("Form submitted successfully!")
      setToSend({
        from_name: "",
        email: "",
        phone: "",
        course: "",
        country: "",
      })
    }

    
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };


  // const alertMessage = () => {
    


  // }



  return (
    <>
      <Navbar />

      <form onSubmit={onSubmit}>
      <div className="container w-75">
        <div className="row mt-5">

          <div className="col-md-6 col-12">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Name
                <span>*</span>
              </label>
              <input
                name="from_name"
                onChange={handleChange}
                type="text"
                class="form-control"
                value={toSend.from_name}
                id="exampleInputEmail1"
                placeholder="Name"
              />
            </div>
          </div>
          
          <div className="col-md-6 col-12">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email
                <span>*</span>
              </label>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Email Address"
                value={toSend.email}
              />
            </div>
          </div>

        </div>
      </div>

      <div className="container w-75">
        <div className="row">
          
          <div className="col-md-6 col-12">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                  Phone/Mobile
                <span>*</span>
              </label>
              <input
                name="phone"
                onChange={handleChange}
                type="number"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Phone"
                value={toSend.phone}
              />
            </div>
          </div>

          <div className="col-md-6 col-12">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Course
                <span>*</span>
              </label>
              <input
                name="course"
                onChange={handleChange}
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Course"
                value={toSend.course}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container w-75">
        <div className="row">
        <div className="col-md-6 col-12">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Country
                <span>*</span>
              </label>
              <input
                name="country"
                onChange={handleChange}
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                placeholder="Country"
                value={toSend.country}
              />
            </div>
          </div>
        </div>
      </div>
      <div class="container w-75 mb-5 form-check">
        <input
          onChange={handleChange} type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">I have read and agree to the Terms and Conditions</label> <br />
        <button className="btn btn-success mb-5 pl-5 pr-5 form_btn" type="submit">SUBMIT</button>
      </div>
      </form>
      <Footer />
    </>
  );
};

export default Contact;
