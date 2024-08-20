import React from 'react'
import './ContactMe.css'
const ContactMe = () => {
  return (
      <div className='ContactSection' id='contactSec'>
      <h2 className='Contactheading'>Tell Me About Your Project</h2>
      <div className="diva">

      <div className='divaaaa'></div>
      </div>
      <form action="/" method="get">
      <div className="nameSection">
      <input type="text" placeholder='Name' className='nameInput' />
<input type="email" name="" id="" placeholder='Email' className='email' />
      </div>
      <textarea name="" id="" placeholder='Message Description' className='tetarea' ></textarea>
      <div className="sendBtn"><button>Send</button></div>
      </form>
    </div>
  )
}

export default ContactMe
