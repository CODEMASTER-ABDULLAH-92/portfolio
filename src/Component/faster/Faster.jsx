import React from 'react'
import './Faster.css'
const Faster = () => {
  return (
    <div>
      <div className="faster">
        <h2 className='FasterHeading'>Make your Website Way <span className='fasterSpan'>Faster!</span></h2>
<p className='fasterPara'>Hey, I’m Mark Essein. A fullstack web developer with 7 years <br /> experience building successful websites and applications. I can build a <br /> high converting website for you as quick as possible!</p>
<div className="footerBtn">
<button className='btn'onClick={()=>setSign(prev => !prev)}>Get In Touch</button>

</div>
      </div>
    </div>
  )
}

export default Faster
