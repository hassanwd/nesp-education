import React from 'react'
import classes from './Cart.module.css';

const Cart = (props) => {
  return (
    <>
        
        <div className={classes.message_container}>
            <div className={classes.message_overlay}>ss</div>
            <div className={classes.message_box}>
                <i onClick={props.onClose} style={{position: "absolute", top: "5px", right:"-20px",transform: "translate(-50%, -50%)", fontSize: "25px", cursor: "pointer"}} class="fa-solid fa-circle-xmark"></i>
                <img src='https://nesp.pk/wp-content/uploads/2022/02/Untitled-1-1-2-2-150x150.webp' alt='' />
                <h5>NESP Education Scholarship Program</h5>
                <p>Admissions are now open all over Pakistan</p>
                <button onClick={props.handleMove} className="btn btn-success rounded-pill" style={{cursor: "pointer", padding: "5px 30px", fontSize: "25px", fontWeight: "bold"}}>Apply Now</button>
            </div>
        </div>

    </>
  )
}

export default Cart