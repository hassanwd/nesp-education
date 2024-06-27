// import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './messageForStudents.css'
import Video from './images/video1.mp4'
import Video1 from './images/video2.mp4'
import Video2 from './images/video3.mp4'
import Video3 from './images/video4.mp4'
import Video4 from './images/video5.mp4'
import Navbar from './components/navbar'
import Footer from './components/footer'

const Message = () => {

  // const [state, setState] = useState(
  //    [
  //     {
  //       mes_video: Video,
  //       mes_video1: Video1,
  //       mes_video2: Video2,
  //       mes_video3: Video3,
  //       mes_video4: Video4,
  //     }
  //   ]
  // )

  // const getLink = (e) => {
  //   let link = e.target.parentNode.childNodes[0].getAttribute('src')
  //   console.log(link,"l");
  //   setState({
  //     mes_video: link
  //   })
  // }

    // let playlist = state.map((item)=>{

    //   return(
    //         <>  
    //         <div className='messageST_video'>
    //           <video className='p-2' src={item.mes_video} controls muted></video>
    //         </div>
    //           <div className='messageST_video1 p-2'>
    //             <div className='d-felx mes_Playlist_up'>
    //               <h6>Playlist</h6>
    //               <p>5 Videos</p>
    //             </div>
    //             <div onClick={getLink} className='mes_Playlist'>
    //                 <video src={item.mes_video1} muted></video>
    //                 <h6>Muhammad Ijaz Chaudhary CEO</h6>
    //               </div>
    //               <div onClick={getLink} className='mes_Playlist'>
    //                 <video src={item.mes_video2} muted></video>
    //                 <h6>Waseem Akhtar Ramay Vice Chair</h6>
    //               </div>
    //               <div onClick={getLink} className='mes_Playlist'>
    //                 <video src={item.mes_video} muted></video>
    //                 <h6>Elizabeth Laurence Public Relatio</h6>
    //               </div>
    //               <div onClick={getLink} className='mes_Playlist'>
    //                 <video src={item.mes_video4} muted></video>
    //                 <h6>Tanzeela Imran Chairperson Women</h6>
    //               </div>
    //               <div onclick={getLink} className='mes_Playlist'>
    //                 <video src={item.mes_video3} muted></video>
    //                 <h6>Waseem Akhtar Ramay Vice Chair</h6>
    //               </div>
    //             </div>
    //           </>
    //       )
    //     })

    const playlistVideo = document.querySelectorAll(".mes_Playlist");
    const mainVideo = document.querySelector(".messageST_video video")
    
    playlistVideo.forEach(e => {
      e.onclick = () => {
        let src = e.children[0].getAttribute('src')
        mainVideo.src = src;
      }
    })

    return(
      <>

        <Navbar />

         <div className='container-fluid d-flex align-items-center justify-content-between flex-column messageforstudents'>
          <div className='container-fluid p-4 bg-light'>
            <div className='container d-flex flex-wrap align-items-center justify-content-between main_studentmessage'>
              <h3>Message for Students</h3>
              <div className='d-flex align-items-center justify-content-between'>
                <NavLink to='/'>Home</NavLink>
                <i class="fa-solid fa-angles-right"></i>
                <h6>Message for Students</h6>
              </div>
            </div>
          </div>

          <div className='container d-flex justify-content-center p-5 message_container'>
            {/* {playlist} */}
            <div className='messageST_video'>
              <video className='p-2' src={Video} controls muted></video>
            </div>
              <div className='messageST_video1 p-2'>
                <div className='d-felx mes_Playlist_up'>
                  <h6>Playlist</h6>
                  <p>5 Videos</p>
                </div>
                <div className='mes_Playlist'>
                    <video src={Video1} muted></video>
                    <h6>Muhammad Ijaz Chaudhary CEO</h6>
                  </div>
                  <div className='mes_Playlist'>
                    <video src={Video2} muted></video>
                    <h6>Waseem Akhtar Ramay Vice Chair</h6>
                  </div>
                  <div className='mes_Playlist'>
                    <video src={Video} muted></video>
                    <h6>Elizabeth Laurence Public Relatio</h6>
                  </div>
                  <div className='mes_Playlist'>
                    <video src={Video4} muted></video>
                    <h6>Tanzeela Imran Chairperson Women</h6>
                  </div>
                  <div className='mes_Playlist'>
                    <video src={Video3} muted></video>
                    <h6>Waseem Akhtar Ramay Vice Chair</h6>
                  </div>
                </div>
          </div>
        </div>        
      
      <Footer />
      </>
    )
  }

export default Message