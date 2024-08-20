import React, { useState } from 'react'
import './Home.css'
import Nav from '../../Component/Nav/Nav'
import About from '../../Component/About/About'
import Sign from '../../Component/Sign/Sign'
import Skill from '../../Component/Skills/Skill'
import Company from '../../Component/CompanyWork/Company'
import Recent from '../../Component/RecentWorks/Recent'
import Client from '../../Component/Clientt/Client'
import Footer from '../../Component/Footer/Footer'
import ContactMe from '../../Component/ContactMe/ContactMe'
import Faster from '../../Component/faster/Faster'
import { Route, Routes } from 'react-router'
const Home = () => {
  const [loginSet,setLoginset] = useState(false)
  return (
    <div>
      {loginSet ? <Sign/>  : <></>}
      <About setLoginset={setLoginset}/>
      <Skill/>
      <Faster/>
      <Company/>
      <Recent/>
      <Client/>
      <ContactMe/>
      <Footer/>
    </div>
  )
}

export default Home;

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/CODEMASTER-ABDULLAH-92/portfolio.git
// git push -u origin main
