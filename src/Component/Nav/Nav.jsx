import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
const Nav = ({setSign}) => {

  return (
    <div className='main'>
      <div className="nav">
        <div className="left-nav">
            <h1 className='name'>Abdullah</h1>
        </div>
        <div className="Right-nav">
        <ul className='ul'>
            <li><Link to="/">Home</Link></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#workaa">Works</a></li>
            <li><a href="#contactSec">Contact</a></li>
            <button className='btn'onClick={()=>setSign(prev => !prev)}>Get In Touch</button>
        </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav

// '/' element={<Skill/>}/>
//         <Route path='/company' element={<Company/>}/>
//         <Route path='/recent' element={<Recent/>}/>
//         <Route path='/contac
