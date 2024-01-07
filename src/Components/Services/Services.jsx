import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './resume.pdf'
import {themeContext} from '../../Context'
import { useContext } from 'react'

const Services = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
  return (
    <div className='services'>
        {/* left side */}
        <div className="awasome">
            <span>My Awesome</span>
            <span style={{color: darkMode? 'white': ''}}>services</span>
            <span>Helping start-ups, small businesses, and agencies achieve
                <br />
                high quality websites and exceptional user experience
            </span>
            <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <div style={{left: '20rem'}}>
                <Card 
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </div>
            {/* Second card */}
            <div style={{top: '12rem', left: "1rem"}}>
                <Card 
                emoji={Glasses}
                heading={"Developer"}
                detail={"Html, Css, JavaScript, React"}
                />
            </div>
            {/* Third card */}
            <div style={{ top: '19rem', left: '18rem'}}>
                <Card 
                emoji={Humble}
                heading={"UI/UX"}
                detail={"Prototyping, wireframing, user flows, mockups"}
                />
            </div>
            <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
        </div>
    </div>
  )
}

export default Services