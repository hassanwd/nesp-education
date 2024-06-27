import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './events.css'
import Video from './images/video4.mp4'
import Navbar from './components/navbar'
import Footer from './components/footer'

function Event() {

  const [state] = useState (
    [
      {
        mes_video: Video,
      }
    ]
  )

  function getLink(e) {
    console.log(e,"e");
  }

  
  let playlist = state.map((item)=>{
    return(
          <>
            <div onclick={getLink} className='mes_Playlist'>
                <video src={item.mes_video} muted></video>
                <h6>NESP Distribution Ceremony 2021</h6>
            </div>
          </>
        )
      })
    return(
      <>

        <Navbar />
        <div className='container-fluid d-flex align-items-center justify-content-between flex-column messageforstudents'>
          <div className='container-fluid p-4 bg-light'>
            <div className='container d-flex flex-wrap align-items-center justify-content-between main_studentmessage'>
              <h3>Events</h3>
              <div className='d-flex align-items-center justify-content-between'>
                <NavLink to='/'>Home</NavLink>
                <i class="fa-solid fa-angles-right"></i>
                <h6>Events</h6>
              </div>
            </div>
          </div>

          <div className='container d-flex justify-content-center p-5 message_container'>
            <div className='messageST_video'>
              <video className='p-2' src={Video} controls muted autoplay></video>
            </div>
            <div className='messageST_video1 p-2'>
                <div className='d-felx mes_Playlist_up'>
                  <h6>Playlist</h6>
                  <p>1 Video</p>
                </div>
                {playlist}
            </div>
          </div>
        </div>

        <Footer />
      </>
    )
}

export default Event
