import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import {themeContext} from '../../Context'
import { useContext } from 'react'

const Works = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='works'>
        {/* left side */}
        <div className="awasome">
            <span style={{color: darkMode? 'white': ''}}>Works for All these</span>
            <span>Brands & Clients</span>
            <span>From startups to established corporations, wide spectrum of clients.
                <br />
                "I've partnered with globally recognized brands to craft compelling campaigns and designs.
                <br />
                Spanning across sectors such as technology, entertainment diverse industries.
                <br />
                high quality websites and exceptional user experience of every client.
            </span>
            
            <button className='button s-button'>Hire me</button>
            
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>

        {/* right side*/}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
            {/* background Circles */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>

    </div>
  )
}

export default Works