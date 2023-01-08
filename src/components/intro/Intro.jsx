import React from 'react'
import './Intro.css'
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import FloatingDev from '../FloatingDev/FloatingDev';


const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className='i-name'>
         <span>Hy! I Am</span>
         <span>Mahesh Natham</span>
         <span>Frontend Developer, Electrical and Electronics Engineer, Fresher.</span>
        </div>
        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
        <div style={{top : '-4%', left: '68%'}}>
          <FloatingDev image={crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{top :'18.27rem', left :'0.64rem' }}>
          <FloatingDev image={thumbup} txt1="Best Design" txt2="Award" />
        </div>
        <div style={{top:'-18%' ,left:'56%',zIndex:'-9'}}>
          <div className="blur" style={{background : "rgb(238 210 255)"}}>
          </div>
          <div className="blur" style={{background:'#C1F5FF' , top:'19rem', width:'38rem',height:'28rem',left:'-24rem'}}></div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default Intro