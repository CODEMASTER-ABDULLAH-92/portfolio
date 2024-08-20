import React from 'react'
import './Recent.css'
import {working_img} from '/src/assets/assets.js'
const Recent = () => {
  return (
    <div className='worksaa' id='workaa'>
<h2 className='worksHanding'>
          My Recent Works
          </h2>
      <div className='worksHandingaa'>
          </div>
          <div className="imageWorking">
<div className="row1">

      <img className='workingIMg' src={working_img.mobile} alt="" />
      <img className='workingIMg' src={working_img.docter} alt="" />
      <img className='workingIMg' src={working_img.man_cont} alt="" />
</div>
<div className="row2">
      <img className='workingIMg' src={working_img.vally_ball} alt="" />
      <img className='workingIMg' src={working_img.bottle} alt="" />
      <img className='workingIMg' src={working_img.house} alt="" />
</div>
          </div>
          <div className="workingBtn">
            <button>Show More</button>
          </div>
    </div>
  )
}

export default Recent
