import React from 'react'
import "../styles/Lighting.css"
// import holiday from '../assets/Holiday-light.jpg'
import { FaCheck } from "react-icons/fa6";
import church from '../assets/church4.jpg'
import christmas_lights from '../assets/christmas_lights.jpg'
import steeple from '../assets/steeple.jpg'

const Lighting = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div id="lighting" className='lighting_hero'>
        <div className="lighting_top">
          <img src={christmas_lights} alt="lights" />
          <img src={steeple} alt="steeple" />
          <img src={church} alt="church" />
        </div>
        <div className="lighting_bottom">
          <div>
            <div className="lighting_container">
              <h2>Holiday, Residential, and Commercial Outdoor Lighting</h2>
              <p>Why waste your precious time over the holidays or at your upcoming events carrying boxes of Christmas lights, untangling them, testing them, and arranging hundreds of lights and decorations? QDC Services is here and will do it all for you. We will bring all the decorations, install them, take them down, and pack them back up for you after the holidays or your event.</p>
              <div className='events'>
                <div>
                  <ul>
                    <li><FaCheck className='icon' />Christmas</li>
                    <li><FaCheck className='icon' />New Years</li>
                    <li><FaCheck className='icon' />Easter</li>
                    <li><FaCheck className='icon' />Landscape</li>
                    <li><FaCheck className='icon' />Graduation</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li><FaCheck className='icon' />Weddings</li>
                    <li><FaCheck className='icon' />Proms</li>
                    <li><FaCheck className='icon' />Birthday Parties</li>
                    <li><FaCheck className='icon' />Corporate evevnt</li>
                    <li><FaCheck className='icon' />And other special events</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* <div className='holiday'>
            <img src={holiday} alt="Holiday Lights" />
          </div> */}

        </div>
      </div>
    </>
  )
}

export default Lighting