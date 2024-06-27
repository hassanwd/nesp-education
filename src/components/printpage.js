import React from 'react'
import './printPage.css'
const printpage = (props) => { 

  console.log(props.data, "props vala data");

  return (
    <>
      <div className='printPage border m-auto p-3 text-center'>
        <h1 className='text-center mt-5'>Chalaan Form</h1>
        <button className='btn btn-success rounded-pill' style={{padding: "14px 25px"}}>Download Chalaan Form</button>
        <div className='container-fluid bg-light rounded text-left mt-4'>
          <p>Roll No: <span>2022-1-6092</span> </p>
          <p>Chalaan id:  <span>2022-1-3507</span> </p>
          <br />
          <p>Please Submit Your Fee And Reserve Your Fee Now <br /> Last Day of Fee Submission: 28-03-2022 <span>2022-1-6092</span> </p>
          <br />
          <p>Your Personal Assistant Name: <span>Hunza Alvi</span> </p>
          <p>Your Personal Assistant Number:  <span>03251888817</span> </p>
          <br />
          <p>Your Selected Courses</p>
          <br />
          <p>Title: <span>{props.data.course_select1}</span> </p>
          <p>Type: <span>{props.data.class_type}</span> </p>
          <p>Fee: <span>{props.data.price}</span> </p>
          {props.data.course_select2 && 
            <>
              <br />
              <p>Title: <span>{props.data.course_select2}</span> </p>
              <p>Type: <span>{props.data.class_type}</span> </p>
              <p>Fee: <span>{props.data.price}</span> </p>
            </>
          }
          {props.data.course_select3 && 
            <>
              <br />
              <p>Title: <span>{props.data.course_select3}</span> </p>
              <p>Type: <span>{props.data.class_type}</span> </p>
              <p>Fee: <span>{props.data.price}</span> </p>
            </>
          }
          {props.data.course_select4 && 
            <>
              <br />
              <p>Title: <span>{props.data.course_select4}</span> </p>
              <p>Type: <span>{props.data.class_type}</span> </p>
              <p>Fee: <span>{props.data.price}</span> </p>
            </>
          }
          <br />
          <p>Total Fee: <span>{props.totalPrice}</span> </p>
          <br />
          <p>Bank Name: Bank Islami</p>
          <p>Institute Account Name: <span>M/S PSTI</span> </p>
          <p>Institute Account Number:  <span>203756043700001</span> </p>
          <br />
          <p>JazzCash Institute Account Name: <span>Pakistan Trainings</span> </p>
          <p>Till ID: <span>0025 5936</span> </p>
        </div>
          <button className='btn btn-success mt-4' onClick={props.handleBack}>Proceed</button>
      </div>
    </>
  )
}

export default printpage