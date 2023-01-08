import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glases from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
         <span>My Awesome</span>
         <span>Services</span>
         <span>Electrical and electronics research , Frontenddevelopment ,
         <br />
         Labview programming,Plc programming etc.
          </span>
         <button className="button s-button">Download</button>

      </div>
      
      {/* right side */}
      <div className="cards">
         <div style={{left:'14rem'}}>
          <Card 
          emoji={HeartEmoji}
          heading={"Design"}
          details={"Adobe, photoshop, sketch, Labview , Matlab"}
          />
          </div>
          <div style={{top:'12rem' ,left:'-4rem'}}>
            <Card 
            emoji={Glases}
            heading={'Developer'}
            details={'Html,Css,JavaScrippt,React'}
            />
          </div>
          <div  style={{top:'19rem',left:'12rem'}}>
            <Card 
            emoji={Humble}
            heading={"UI/UX"}
            details={'some dummy text nothing or something'}
            />
          </div>
          <div className="blur" style={{background: 'var(--purple)' , top:'9rem', width:'21rem',height:'11rem',left:'4rem', zIndex:'-9'}}></div>

      </div>
    </div>
  )
}

export default Services