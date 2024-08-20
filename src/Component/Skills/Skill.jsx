import React from 'react'
import './Skill.css'
import html_img from '/src/assets/html.png' 
import veu_img from '/src/assets/veu.png' 
import html_img2 from '/src/assets/html2.png' 
import CSS_img from '/src/assets/css.png' 
import React_img from '/src/assets/react.png' 
const Skill = () => {
  return (
    <div className='skills'>
      <div className="innerSkill">
      <div className="left-Skill">
        <img src={html_img} alt="" className='html-img1' />
        <img src={html_img2} alt="" className='html-img2' />
        <img src={CSS_img} alt="" className='css-img' />
        <img src={veu_img} alt="" className='veu-img' />
        <img src={React_img} alt="" className='react-img' />
      </div>
      <div className="right-Skill">
        <h2 className='about_heading'>About Me</h2>
        <p className='skillsPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur nobis rerum necessitatibus illum quas aperiam quae dolorum eveniet quidem sint incidunt, laboriosam eos. Quisquam molestiae qui doloremque ipsum nostrum?</p>
        <p className='skillsPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur nobis rerum necessitatibus illum quas aperiam quae dolorum eveniet ?</p>
        <p className='skillsPara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere consectetur nobis rerum necessitatibus illum quas aperiam quae dolorum eveniet quidem sint.</p>
      </div>

      </div>
    </div>
  )
}

export default Skill
