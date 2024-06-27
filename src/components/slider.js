import React from "react";
import "./slider.css";
import Image1 from '../images/Slider-1.webp'
import Image2 from '../images/Slider-1-–-1.webp'
import Image3 from '../images/Slider-1-–-2.webp'

const Slider = () => {
  return (
    <>

<div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={Image1} alt="First slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Image2} alt="Second slide" />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={Image3} alt="Third slide" />
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    </>
  );
};

export default Slider;



