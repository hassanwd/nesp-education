import React from 'react'
import { NavLink } from 'react-router-dom'
import './gallery.css'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Image1 from './images/1-1-300x200.jpeg'
import Image2 from './images/1-2-300x200.jpeg'
import Image3 from './images/1-3-300x200.jpeg'
import Image4 from './images/1-4-300x200.jpeg'
import Image5 from './images/1-5-300x200.jpeg'
import Image6 from './images/1-6-300x200.jpeg'
import Image7 from './images/1-7-300x200.jpeg'
import Image8 from './images/1-8-300x200.jpeg'
import Image9 from './images/1-9-300x200.jpeg'
import Image10 from './images/1-10-300x200.jpeg'
import Image11 from './images/1-11-300x200.jpeg'
import Image12 from './images/1-12-300x200.jpeg'
import Image13 from './images/1-13-300x200.jpeg'
import Image14 from './images/1-14-300x200.jpeg'
import Image15 from './images/1-15-300x200.jpeg'
import Image16 from './images/1-16-300x200.jpeg'
import Image17 from './images/1-17-300x200.jpeg'
import Image18 from './images/1-18-300x200.jpeg'
import Image19 from './images/1-19-300x200.jpeg'
import Image20 from './images/1-20-300x200.jpeg'
import Image21 from './images/1-21-300x200.jpeg'
import Image22 from './images/1-22-300x200.jpeg'
import Image23 from './images/1-23-300x200.jpeg'
import Image24 from './images/1-24-300x200.jpeg'
import Image25 from './images/1-25-300x200.jpeg'
import Image26 from './images/1-26-300x200.jpeg'
import Image27 from './images/1-27-300x200.jpeg'
import Image28 from './images/1-28-300x200.jpeg'
import Image29 from './images/1-29-300x200.jpeg'
import Image30 from './images/1-30-300x200.jpeg'
import Image31 from './images/1-31-300x200.jpeg'
import Image32 from './images/1-32-300x200.jpeg'
import Image33 from './images/1-33-300x200.jpeg'
import Image34 from './images/1-34-300x200.jpeg'
import Image35 from './images/1-35-300x200.jpeg'
import Image36 from './images/1-36-300x200.jpeg'


const Gallery = () => {

    return(
      <>

        <Navbar />
        <div className='container-fluid d-flex align-items-center justify-content-between flex-column galleryforstudents'>
          <div className='container-fluid p-4 bg-light'>
            <div className='container d-flex flex-wrap align-items-center justify-content-between main_studentgallery'>
              <h3>Gallery</h3>
              <div className='d-flex align-items-center justify-content-between'>
                <NavLink to='/'>Home</NavLink>
                <i class="fa-solid fa-angles-right"></i>
                <h6>Gallery</h6>
              </div>
            </div>
          </div>

          <div className='container-fluid w-100 d-flex flex-column align-items-center justify-content-evenly gallery_container'>
            <h4>Distribution Ceremony 2021</h4>
            <div className='container-fluid d-flex align-items-center justify-content-center flex-wrap'>
              <div className='gal_image'>
                <img src={Image1} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image2} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image3} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image4} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image5} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image6} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image7} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image8} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image9} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image10} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image11} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image12} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image13} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image14} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image15} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image16} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image17} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image18} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image19} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image20} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image21} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image22} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image23} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image24} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image25} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image26} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image27} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image28} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image29} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image30} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image31} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image32} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image33} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image34} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image35} alt=''/>
              </div>
              <div className='gal_image'>
                <img src={Image36} alt=''/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
}

export default Gallery