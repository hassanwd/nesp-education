import React from "react";
import "./patners.css";
import Image1 from '../images/3-pfgyw5f234s8emm8gkxfffp3c6z1ddckq79f1g15k8.gif'
import Image2 from '../images/4-pfgyw96eugxdp2grumjxpeqxpqgi85ri2pvcyjvkvc.gif'
import Image3 from '../images/5-pfgywbzxez18nwcoe5rtew1bhw2lv92p33ttedreco.gif'
import Image4 from '../images/6-pfgywdvlsn3tb49y36l2jvk8ontcana5rd4scxom08.gif'
import Image5 from '../images/7-pfgywfra6b6dyc77s7ebov35vfk2q1hmfmfrbhltns.gif'
import Image6 from '../images/8-pfgywhmyjz8ylk4hh87ktum327at5fp33vqqa1j1bc.gif'
import Image7 from '../images/9-pfgywkgh4hctke0e0rfgjbwgucwwsj0a49p6pveuso.gif'
import Image8 from '../images/11-pfgywp5o2nj96ftk9bgldsprta9qv0ixswym497vxk.gif'

const patners = () => {
  return (
    <>
  
      <div class="partners container mt-5">
          <div class="partner">
              <h3 clas>Our Partners</h3>
              <p>NESP partners with top international universities and specialist organizations to offer online courses
                  and degrees.
                  Since our launch, we’ve run hundreds of courses on a
                  diverse range of topics, We’re always happy to talk if you’re interested in becoming a partner.</p>
          </div>
          <div class="container mt-5">
              <div className="patners_slider">
                
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="patners_item carousel-item active">
                      <div className="row">
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image1} alt="" />
                          </div>
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image2} alt="" />
                          </div>
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image3} alt="" />
                          </div>
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image4} alt="" />
                          </div>
                      </div>
                  </div>
                  <div class="patners_item carousel-item">
                      <div className="row">
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image7} alt="" />
                          </div>
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image6} alt="" />
                          </div>
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image8} alt="" />
                          </div>
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image5} alt="" />
                          </div>  
                      </div>
                  </div>
                  <div class="patners_item carousel-item">
                      <div className="row">
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image2} alt="" />
                          </div>
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image1} alt="" />
                          </div>
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image3} alt="" />
                          </div>
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image4} alt="" />
                          </div>
                      </div>
                  </div>
                  <div class="patners_item carousel-item">
                      <div className="row">
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image5} alt="" />
                          </div>
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image6} alt="" />
                          </div>
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image7} alt="" />
                          </div>
                          <div className="col-md-3 col-sm-6 col-12">
                            <img src={Image8} alt="" />
                          </div>
                      </div>
                  </div>
                </div>
              </div>
              </div>
          </div>
      </div>

    </>
  )
}

export default patners;



