import React, { useState } from "react";
import { send } from "emailjs-com";
import "./applynow.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const Applynow = () => {

    let formMain = document.getElementById("main_form");
    const [toSend, setToSend] = useState({
      from_name: '',
      email: '',
      phone: '',
      country: '',
      CNIC: '',
      Ref_No: '',
      Gender_male: '',
      Gender_female: '',
      class_type1: '',
      class_type2: '',
      class_type3: '',
      course_select1: "",
      course_select2: "",
      course_select3: "",
      course_select4: "",
      reply_to: '',
    });
    const [SelectData, setSelectData] = useState([
      []
    ]);

    console.log(toSend, "ToSend");


  
    const onSubmit = (e) => {
      e.preventDefault();

      if(toSend.from_name === ""){
        alert("Please enter the Name")
      }
      else if(toSend.email === ""){
        alert("Please enter the Email")
      }
      else if(toSend.phone === ""){
        alert("Please enter the Phone")
      }
      else if(toSend.CNIC === ""){
        alert("Please enter the CNIC")
      }
      else if(toSend.Ref_No === ""){
        alert("Please enter the Ref_No")
      }
      else if(toSend.age === ""){
        alert("Please enter the Age")
      }
      else if(toSend.country === ""){
        alert("Please enter the country")
      }
      else if(toSend.gender === ""){
        alert("Please enter the country")
      }
      else if(toSend.Gender_male === "" && toSend.Gender_female === ""){
        alert("Please enter the gender")
      }
      else if(toSend.class_type1 === "" && toSend.class_type2 === "" && toSend.class_type3 === ""){
        alert("Please enter the Class Type")
      }
      else if(toSend.course_select1 === "" && toSend.course_select2 === "" && toSend.course_select3 === "" && toSend.course_select4 === ""){
        alert("Please Select the Course")
      }
      else{
        alert("Form submitted successfully!")
        send(
          'service_bzskhtr',
          'template_ugmz4il',
          toSend,
          'user_OkjbR0gs1JaT0BUNXmcoj'
        )
          .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
          })
          .catch((err) => {
            console.log('FAILED...', err);
          });
          
          
        formMain.reset();
        setToSend({
          from_name: "",
          email: "",
          phone: "",
          country: "",
          CNIC: "",
          Ref_No: "",
          age: "",
          Gender_male: "",
          Gender_female: "",
          class_type1: "",
          class_type2: "",
          class_type3: "",
          course_select1: "",
          course_select2: "",
          course_select3: "",
          course_select4: "",
        })
      }    

      
    };
  
    const handleChange = (e) => {
      setToSend({ ...toSend, [e.target.id]: e.target.value });
    };

    const handleselect = (e) =>{
      if(e.target.id === "0"){
        setSelectData([
            [
              {
                unique: "course_select1",
                label: "Course Interest 1"},
            ]
          ])
      }
      else if(e.target.id === "1"){
        setSelectData([
            [
              {
                unique: "course_select1",
                label: "Course Interest 1"},
              {
                unique: "course_select2",
                label: "Course Interest 2"},
            ]
          ])
      }
      else if(e.target.id === "2"){
        setSelectData([
            [
              {
                unique: "course_select1",
                label: "Course Interest 1"},
              {
                unique: "course_select2",
                label: "Course Interest 2"},
              {
                unique: "course_select3",
                label: "Course Interest 3"},
            ]
          ])
      }
      else{
        setSelectData([
            [
              {
                unique: "course_select1",
                label: "Course Interest 1"},
              {
                unique: "course_select2",
                label: "Course Interest 2"},
              {
                unique: "course_select3",
                label: "Course Interest 3"},
              {
                unique: "course_select4",
                label: "Course Interest 4"},
            ]
          ])
      }
    }
      const data = SelectData[0].map((e) => {
        return(
          <>
          
                <div className="col-md-6 col-12">
                  <div class="mb-3">
                      <label for="exampleInputEmail1" className="form-label">
                          <b>{e.label}</b>
                          <span>*</span>
                      </label>
                    <select class="form-select form-select-sm w-100 p-2" id={e.unique} 
                    onChange={handleChange}  aria-label=".form-select-sm example">
                      <option selected>-Select Course-</option>
                      <option id={e.unique} value="Graphic Designing">Graphic Designing</option>
                      <option id={e.unique} value="Video Editing">Video Editing</option>
                      <option id={e.unique} value="Amazon virtual Assistent">Amazon virtual Assistent</option>
                      <option id={e.unique} value="Wordpress Developer">Wordpress Developer</option>
                      <option id={e.unique} value="UI / UX Designing">UI / UX Designing</option>
                      <option id={e.unique} value="Cloud computing">Cloud computing</option>
                      <option id={e.unique} value="Digital Marketing">Digital Marketing</option>
                      <option id={e.unique} value="ASP.net">ASP.net</option>
                      <option id={e.unique} value="Ethical Programming">Ethical Programming</option>
                      <option id={e.unique} value="Penetration Training">Penetration Training</option>
                      <option id={e.unique} value="SEO">SEO</option>
                      <option id={e.unique} value="Full Stack Web Development">Full Stack Web Development</option>
                      <option id={e.unique} value="Andriod Appp Development">Andriod Appp Development</option>
                      <option id={e.unique} value="Artificial Inteligence">Artificial Inteligence</option>
                      <option id={e.unique} value="Game Development">Game Development</option>
                      <option id={e.unique} value="Freelancing">Freelancing</option>
                      <option id={e.unique} value="ILETS">ILETS</option>
                      <option id={e.unique} value="Spoken English">Spoken English</option>
                    </select>
                    </div>
                  </div>    
          </>
        )
      })




  return (
    
    
    
    
    <>
    

    <Navbar />


    <form id="main_form" onSubmit={onSubmit}>
      <div className="container w-75">
        <div className="row mt-5">

          <div className="col-md-6 col-12">
            <div class="mb-3">
              <label for="form_name" class="form-label">
                Name
                <span>*</span>
              </label>
              <input
                name="from_name"
                onChange={handleChange}
                type="text"
                class="form-control"
                value={toSend.from_name}
                id="from_name"
                placeholder="Name"
              />
            </div>
          </div>
          
          <div className="col-md-6 col-12">
            <div class="mb-3">
              <label for="email" class="form-label">
                Email
                <span>*</span>
              </label>
              <input
                name="email"
                onChange={handleChange}
                type="email"
                class="form-control"
                id="email"
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
              <label for="CNIC" class="form-label">
                CNIC
                <span>*</span>
              </label>
              <input
                name="CNIC"
                onChange={handleChange}
                type="number"
                class="form-control"
                value={toSend.CNIC}
                id="CNIC"
                placeholder="CNIC"
              />
            </div>
          </div>
          
          <div className="col-md-6 col-12">
            <div class="mb-3">
              <label for="Ref_No" class="form-label">
                Ref No
                <span>*</span>
              </label>
              <input
                name="Ref_No"
                onChange={handleChange}
                type="text"
                class="form-control"
                id="Ref_No"
                placeholder="Ref_No"
                value={toSend.Ref_No}
              />
            </div>
          </div>

        </div>
      </div>

      <div className="container w-75">
        <div className="row">
          <div className="col-md-6 col-12">
            <div class="mb-3">
              <label for="phone" class="form-label">
                  Phone/Mobile
                <span>*</span>
              </label>
              <input
                name="phone"
                onChange={handleChange}
                type="number"
                class="form-control"
                id="phone"
                placeholder="Phone"
                value={toSend.phone}
              />
            </div>
          </div>

          <div className="col-md-6 col-12">
            <div class="mb-3">
              <label for="age" class="form-label">
                Age
                <span>*</span>
              </label>
              <input
                name="age"
                onChange={handleChange}
                type="number"
                class="form-control"
                id="age"
                placeholder="Age"
                value={toSend.age}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container w-75">
        <div className="row">
          <div className="col-md-6 col-12">
              <div class="mb-3">
                <label for="country" class="form-label">
                  Country
                  <span>*</span>
                </label>
                <input
                  name="country"
                  onChange={handleChange}
                  type="text"
                  class="form-control"
                  id="country"
                  placeholder="Country"
                  value={toSend.country}
                />
              </div>
            </div>
            <div className="col-md-6 col-12">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Gender
                    <span>*</span>
                  </label> <br />
                    <div class="form-check form-check-inline mt-2">
                  <input onChange={handleChange} class="form-check-input" type="radio" name="gender" id="Gender_male" 
                  value="Male" />
                  <label class="form-check-label" for="Gender_male">Male</label>
                  </div>
                  <div class="form-check form-check-inline">  
                    <input  onChange={handleChange} class="form-check-input" type="radio" name="gender" id="Gender_female" value="Female" />
                    <label class="form-check-label" for="Gender_female">Female</label>
                  </div>
                </div>
              </div>
        </div>
      </div>
      <div className="container w-75">
        <div className="row">
            <div className="col-md-6 col-12">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Class Type
                    <span>*</span>
                  </label> <br />
                    <div class="form-check form-check mt-2">
                  <input onChange={handleChange} class="form-check-input" type="radio" name="class_type" id="class_type1" value="Recorded" />
                  <label class="form-check-label" for="class_type1">Recorded</label>
                  </div>
                  <div class="form-check form-check">
                    <input onChange={handleChange} class="form-check-input" type="radio" name="class_type" id="class_type2" value="Online/Live" />
                    <label class="form-check-label" for="class_type2">Online/Live</label>
                  </div>
                  <div class="form-check form-check">
                    <input onChange={handleChange} class="form-check-input" type="radio" name="class_type" id="class_type3" value="Physical/ In Campus (Only for Lahore)" />
                    <label class="form-check-label" for="class_type3">Physical/ In Campus (Only for Lahore) </label>
                  </div>
                </div>
              </div>
            <div className="col-md-6 col-12">
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                      Its your choice if you want enroll in one or more courses
                    <span>*</span>
                  </label> <br />
                  <div class="form-check form-check mt-2">
                    <input onClick={handleselect} class="form-check-input course_num" type="radio" name="courses" id="0" value="option1" />
                  <label class="form-check-label" for="0">1</label>
                  </div>
                  <div class="form-check form-check">
                    <input onClick={handleselect} class="form-check-input course_num" type="radio" name="courses" id="1" value="option2" />
                    <label class="form-check-label" for="1">2</label>
                  </div>
                  <div class="form-check form-check">
                    <input onClick={handleselect} class="form-check-input course_num" type="radio" name="courses" id="2" value="option2" />
                    <label class="form-check-label" for="2">3</label>
                  </div>
                  <div class="form-check form-check">
                    <input onClick={handleselect} class="form-check-input course_num" type="radio" name="courses" id="3" value="option2" />
                    <label class="form-check-label" for="3">4 </label>
                  </div>
                </div>
              </div>
        </div>
      </div>

      <div className="container form_container w-75">
        <div className="row">
          {data}
        </div>
      </div>
      
      <div class="container w-75 mb-5 form-check">
        <button type="submit" className="btn btn-success mb-5 pl-5 pr-5 form_btn" >SUBMIT</button>
      </div>
      </form>
    

    <Footer />

    </>
  )
}

export default Applynow