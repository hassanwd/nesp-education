import React from 'react'

const form3 = (props) => {
  
  const data = props.SelectData[0].map((e) => {
    
    if(props.data.class_type === "Recorded"){
      return(
        <>
            <div className="col-md-6 col-12">
              <div class="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                      <b>{e.label}</b>
                      <span>*</span>
                  </label>
                <select class="form-select form-select-sm w-100 p-2" name={e.unique} 
                onChange={props.handleChange} id="3000.00" aria-label=".form-select-sm example">
                  <option selected>-Select Course-</option>
                  <option name={e.unique} id="3000.00" value="Graphic Designing">Graphic Designing</option>
                  <option name={e.unique} id="3000.00" value="Video Editing">Video Editing</option>
                  <option name={e.unique} id="3000.00" value="Amazon virtual Assistent">Amazon virtual Assistent</option>
                  <option name={e.unique} id="3000.00" value="Wordpress Developer">Wordpress Developer</option>
                  <option name={e.unique} id="3000.00" value="UI / UX Designing">UI / UX Designing</option>
                  <option name={e.unique} id="3000.00" value="Cloud computing">Cloud computing</option>
                  <option name={e.unique} id="3000.00" value="Digital Marketing">Digital Marketing</option>
                  <option name={e.unique} id="3000.00" value="ASP.net">ASP.net</option>
                  <option name={e.unique} id="3000.00" value="Ethical Programming">Ethical Programming</option>
                  <option name={e.unique} id="3000.00" value="Penetration Training">Penetration Training</option>
                  <option name={e.unique} id="3000.00" value="SEO">SEO</option>
                  <option name={e.unique} id="3000.00" value="Full Stack Web Development">Full Stack Web Development</option>
                  <option name={e.unique} id="3000.00" value="Andriod Appp Development">Andriod Appp Development</option>
                  <option name={e.unique} id="3000.00" value="Artificial Inteligence">Artificial Inteligence</option>
                  <option name={e.unique} id="3000.00" value="Game Development">Game Development</option>
                  <option name={e.unique} id="3000.00" value="Freelancing">Freelancing</option>
                  <option name={e.unique} id="3000.00" value="ILETS">ILETS</option>
                  <option name={e.unique} id="3000.00" value="Spoken English">Spoken English</option>
                </select>
                </div>
            </div>  
        </>
      )
    }
    else if(props.data.class_type === "Online/Live"){
      return(
        <>
            <div className="col-md-6 col-12">
              <div class="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                      <b>{e.label}</b>
                      <span>*</span>
                  </label>
                <select class="form-select form-select-sm w-100 p-2" name={e.unique} 
                onChange={props.handleChange} id="6000.00"  aria-label=".form-select-sm example">
                  <option selected>-Select Course-</option>
                  <option name={e.unique} id="6000.00" value="Graphic Designing">Graphic Designing</option>
                  <option name={e.unique} id="6000.00" value="Video Editing">Video Editing</option>
                  <option name={e.unique} id="6000.00" value="Amazon virtual Assistent">Amazon virtual Assistent</option>
                  <option name={e.unique} id="6000.00" value="Wordpress Developer">Wordpress Developer</option>
                  <option name={e.unique} id="6000.00" value="UI / UX Designing">UI / UX Designing</option>
                  <option name={e.unique} id="6000.00" value="Cloud computing">Cloud computing</option>
                  <option name={e.unique} id="6000.00" value="Digital Marketing">Digital Marketing</option>
                  <option name={e.unique} id="6000.00" value="ASP.net">ASP.net</option>
                  <option name={e.unique} id="6000.00" value="Ethical Programming">Ethical Programming</option>
                  <option name={e.unique} id="6000.00" value="Penetration Training">Penetration Training</option>
                  <option name={e.unique} id="6000.00" value="SEO">SEO</option>
                  <option name={e.unique} id="6000.00" value="Full Stack Web Development">Full Stack Web Development</option>
                  <option name={e.unique} id="6000.00" value="Andriod Appp Development">Andriod Appp Development</option>
                  <option name={e.unique} id="6000.00" value="Artificial Inteligence">Artificial Inteligence</option>
                  <option name={e.unique} id="6000.00" value="Game Development">Game Development</option>
                  <option name={e.unique} id="6000.00" value="Freelancing">Freelancing</option>
                  <option name={e.unique} id="6000.00" value="ILETS">ILETS</option>
                  <option name={e.unique} id="6000.00" value="Spoken English">Spoken English</option>
                </select>
                </div>
            </div>     
        </>
      )        
    }
    if(props.data.class_type === "Physical/ In Campus (Only for Lahore)"){
      return(
        <>
          <div className="col-md-6 col-12">
              <div class="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
                      <b>{e.label}</b>
                      <span>*</span>
                  </label>
                <select class="form-select form-select-sm w-100 p-2" name={e.unique} 
                onChange={props.handleChange} id="12000.00"  aria-label=".form-select-sm example">
                  <option selected>-Select Course-</option>
                  <option name={e.unique} id="12000.00" value="Graphic Designing">Graphic Designing</option>
                  <option name={e.unique} id="12000.00" value="Video Editing">Video Editing</option>
                  <option name={e.unique} id="12000.00" value="Amazon virtual Assistent">Amazon virtual Assistent</option>
                  <option name={e.unique} id="12000.00" value="Wordpress Developer">Wordpress Developer</option>
                  <option name={e.unique} id="12000.00" value="UI / UX Designing">UI / UX Designing</option>
                  <option name={e.unique} id="12000.00" value="Cloud computing">Cloud computing</option>
                  <option name={e.unique} id="12000.00" value="Digital Marketing">Digital Marketing</option>
                  <option name={e.unique} id="12000.00" value="ASP.net">ASP.net</option>
                  <option name={e.unique} id="12000.00" value="Ethical Programming">Ethical Programming</option>
                  <option name={e.unique} id="12000.00" value="Penetration Training">Penetration Training</option>
                  <option name={e.unique} id="12000.00" value="SEO">SEO</option>
                  <option name={e.unique} id="12000.00" value="Full Stack Web Development">Full Stack Web Development</option>
                  <option name={e.unique} id="12000.00" value="Andriod Appp Development">Andriod Appp Development</option>
                  <option name={e.unique} id="12000.00" value="Artificial Inteligence">Artificial Inteligence</option>
                  <option name={e.unique} id="12000.00" value="Game Development">Game Development</option>
                  <option name={e.unique} id="12000.00" value="Freelancing">Freelancing</option>
                  <option name={e.unique} id="12000.00" value="ILETS">ILETS</option>
                  <option name={e.unique} id="12000.00" value="Spoken English">Spoken English</option>
                </select>
                </div>
            </div>
        </>
      )
    }
  })


  return (
    <>


      <div className="container w-75">
        <div className="row">
            <div className="col-md-6 col-12"> 
                <div class="mb-3">
                  <label for="exampleInputEmail1" class="form-label">
                    Class Type
                    <span>*</span>
                  </label> <br />
                    <div class="form-check form-check mt-2">
                  <input onChange={props.handleChange} class="form-check-input" type="radio" name="class_type" id="class_type1" alt='3000.00' value="Recorded" />
                  <label class="form-check-label" for="class_type1">Recorded</label>
                  </div>
                  <div class="form-check form-check">
                    <input onChange={props.handleChange} class="form-check-input" type="radio" name="class_type" id="class_type2" alt='6000.00' value="Online/Live" />
                    <label class="form-check-label" for="class_type2">Online/Live</label>
                  </div>
                  <div class="form-check form-check">
                    <input onChange={props.handleChange} class="form-check-input" type="radio" name="class_type" id="class_type3" alt='12000.00' value="Physical/ In Campus (Only for Lahore)" />
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
                    <input onClick={props.handleselect} class="form-check-input course_num" type="radio" name="courses" id="0" value="option1" />
                  <label class="form-check-label" for="0">1</label>
                  </div>
                  <div class="form-check form-check">
                    <input onClick={props.handleselect} class="form-check-input course_num" type="radio" name="courses" id="1" value="option2" />
                    <label class="form-check-label" for="1">2</label>
                  </div>
                  <div class="form-check form-check">
                    <input onClick={props.handleselect} class="form-check-input course_num" type="radio" name="courses" id="2" value="option2" />
                    <label class="form-check-label" for="2">3</label>
                  </div>
                  <div class="form-check form-check">
                    <input onClick={props.handleselect} class="form-check-input course_num" type="radio" name="courses" id="3" value="option2" />
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

      <button className="btn btn-success mt-4 mb-4 float-right" onClick={props.handlestep3}>
        Submit
      </button>

      </div>


    </>

  )
}

export default form3