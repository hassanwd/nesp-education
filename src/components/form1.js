import React from "react";

const form1 = (props) => {
  return (
    <>
      <div class="container mb-3">
        <label for="exampleInputEmail1" class="form-label mt-3">
          Email:
        </label>
        <input
          onChange={props.handleCheck}
          onKeyUp={props.handleCheck}
          name="email"
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="Your Email"
        />

        <label for="exampleInputEmail2" class="form-label mt-3">
          Full Name:
        </label>
        <input
          onChange={props.handleCheck}
          name="name"
          type="text"
          class="form-control"
          id="exampleInputEmail2"
          placeholder="Your Name"
        />

        <label for="exampleInputEmail1" class="form-label  mt-3">
          Mobile Number:
        </label>
        <input
          onChange={props.handleCheck}
          name="number"
          type="number"
          class="form-control"
          id="exampleInputEmail1"
          placeholder="0300xxxxxxx"
        />

        <label for="exampleInputEmail1" class="form-label  mt-3">
          Interest:
        </label>
        <select class="form-control" onChange={props.handleCheck}
        name="intrest" aria-label="Default select example">
          <option selected>Select your Interest</option>
          <option value="Complete Python">Complete Python</option>
          <option value="Ethical Hacking & Penetration Testing">
            Ethical Hacking & Penetration Testing
          </option>
          <option value="Artificial Intelligence">
            Artificial Intelligence
          </option>
          <option value="Graphic Designing">Graphic Designing</option>
          <option value="Video Editing">Video Editing</option>
          <option value="Full Stack Web Development">
            Full Stack Web Development
          </option>
          <option value="Social Media Marketing">Social Media Marketing</option>
          <option value="English Language">English Language</option>
          <option value="Wordpress">Wordpress</option>
          <option value="Cloud">Cloud</option>
          <option value="Android Development">Android Development</option>
          <option value="Game">Game</option>
          <option value="Web 3.o">Web 3.o</option>
          <option value="Amazon">Amazon</option>
          <option value="SEO">SEO</option>
          <option value="3d Animations">3d Animations</option>
        </select>

        <label for="exampleInput" class="form-label  mt-3">
          Password:
        </label>
        <input
          onChange={props.handleCheck}
          name="password"  
          type="number"
          class="form-control"
          id="exampleInput"
          placeholder="Password"
        />

        <label for="exampleInput" class="form-label  mt-3">
          Retype Password:
        </label>
        <input
          onChange={props.handleCheck}
          name="password_confirm"  
          type="number"
          class="form-control"
          id="exampleInput"
          placeholder="Confirm Password"
        />

        <button
          onClick={props.handlestep1}
          className="btn btn-success mt-4 mb-4 float-right"
          style={{
            borderRadius: "0",
            backgroundColor: "rgb(0,128,0)",
            fontSize: "18x",
            fontWeight: "bold",
            padding: "6px 30px",
          }}
        >
          Apply
        </button>
      </div>
    </>
  );
};

export default form1;
