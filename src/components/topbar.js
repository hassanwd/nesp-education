import React from 'react'
import './topbar.css'

const topbar = (props) => {
  return (
    <>
    
      <div className='container d-flex justify-content-between p-3 border-bottom'>
          <h4>{props.getInfo}</h4>
          <div className='percentage'>
                <div className='percentage_bar'>
                    <div className='perc_bar' style={{width: `${props.progress}%`}}></div>
                </div>
                <div className='percentage_num'>{props.progress}%</div>
          </div>
      </div>

    </>
  )
}

export default topbar