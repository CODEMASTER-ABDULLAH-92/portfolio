import React from 'react'
import './Footer.css'
import githubIMg from '/src/assets/github.png'
import twitterIMg from '/src/assets/Protwitter.png'
import facebookIMg from '/src/assets/facebook.png'
const Footer = () => {
  return (
    <div className='footerSection'>
      <div className="nameFooter">
        <h2>Abdullah</h2>
      </div>
      <div className="copyFooter">
        <p>&copy; Copyright 2024,All rights are reserved</p>
      </div>
      <div className="contactFooter"><p>Contact With Me</p>
      <img src={facebookIMg} alt="" />
      <img src={twitterIMg} alt="" />
      <img src={githubIMg} alt="" />
      </div>
    </div>
  )
}

export default Footer
