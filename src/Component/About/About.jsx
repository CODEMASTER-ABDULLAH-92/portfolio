import React from "react";
import './About.css'
import man from '/src/assets/Man_image-removebg-preview@2x.png'
import oval from '/src/assets/oval.png'
const About = ({setLoginset}) => {
  return (
    <div className="mm" id="about">
      <div className="main1">
        <div className="left-about">
          <h2 className="web-heading">
            Create your Website <br /> in <span className="less">less than 12 days</span>
          </h2>
          <p className="about_para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            necessitatibus nisi id veniam assumenda, accusamus recusandae
            architecto nesciunt vel cupiditate?
          </p>
          <button className="btn" onClick={()=>setLoginset(prevState => !prevState)} style={{marginTop:10}}>Get In Touch</button>
        </div>
        <div className="right-about">
            <div className="right2">

            <img src={oval} alt="" className="oval-img" />
            <img src={man} alt="" className="man-img"/>
        </div>
            </div>
      </div>
    </div>
  );
};

export default About;
