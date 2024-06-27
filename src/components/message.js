import React, { useState } from 'react'
import './message.css'
import Video1 from '../images/yt5s.com-Waseem Akhtar Ramay Vice Chairman  Overseas Pakistanis Commission Punjab.mp4'
import Video2 from '../images/yt5s.com-Tanzeela Imran Chairperson Women Development.mp4'
import Video3 from '../images/yt5s.com-Sadia Sohail Rana Spokesperson Punjab Government-(480p).mp4'

const App = () => {

  const [state] = useState([
    {
      messageHeading: "Message for Students",
      messagePara: "NESP, Try to learn from every little thing, and no one would be wiser than you. Help yourself; others will come forward to help you as well. In this competitive world, students face various challenges on the academic and emotional front. Along with great advice, they also need encouragement from teachers, parents, siblings, and peers so that they can do wonders in their studies.",
    }
  ])
  const [video1, setvideo1] = useState(false)
  // const [video2, setvideo2] = useState(false)
  // const [video3, setvideo3] = useState(false)

  
  const videos = document.querySelectorAll(".message_video");
  // useEffect(()=>{
    
  // }, [video1]) 

  window.addEventListener("scroll", function(){
    if(window.pageYOffset < 750 || window.pageYOffset > 1765){
      videos.forEach( (vid) => {
        vid.pause()
      })
    }
    else{
    }
  })
  const handlevideo = (e) => {
    setvideo1(true)
    if(video1){
      videos.forEach( (vid) => {
        vid.pause()
      })
      e.target.setAttribute("autoplay")
    }
  }
  
  
  const content = state.map((e) => {
    return(
     <>

        <div className='message_container d-flex justify-content-evenly align-items-center flex-column container'>
            <h1>{e.messageHeading}</h1>
            <p className='text-center m-3'>{e.messagePara}</p>
            <div className='message_row row'>
                <div className='col-8 col-lg-8 col-12 col-md-12 col-sm-12 d-flex justify-content-evenly align-items-center flex-column message__container'>
                  <video onClick={handlevideo} controls className='message_video' src={Video1}></video>  
                </div>
                <div className='col-4 col-lg-4 col-12 col-xs-12 col-md-12 col-sm-12 d-flex flex-column align-items-center justify-content-between'>
                  <video onClick={handlevideo} controls className='message_video' src={Video2} ></video>
                  <video onClick={handlevideo} controls className='message_video' src={Video3}></video>
                </div>
            </div>
        </div>
     </>
    )
  })

    return(
      <>
        {content}
      </>
    )
}

export default App
