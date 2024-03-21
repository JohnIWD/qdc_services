import React from 'react'
import '../styles/Paint.css'
import { FaCheck } from "react-icons/fa6";
import paint1 from '../assets/painter.jpg'
import paint2 from '../assets/indoor-paint.jpg'
import paint3 from '../assets/indoor-paint2.jpg'


const Painting = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div id="painting" className='painting_hero'>
        <div className="painting_top">
          <img src={paint1} alt="painter" />
          <img src={paint2} alt="indoor paint" />
          <img src={paint3} alt="indoor paint 2" />
        </div>
        <div className="painting_bottom">
          <div>
            <div className="painting_container">
              <h2>Holiday, Residential, and Commercial Outdoor Lighting</h2>
              <p>Why waste your precious time over the holidays or at your upcoming events carrying boxes of Christmas lights, untangling them, testing them, and arranging hundreds of lights and decorations? QDC Services is here and will do it all for you. We will bring all the decorations, install them, take them down, and pack them back up for you after the holidays or your event.</p>
              <div className='events'>
                <div>
                  <ul>
                    <li><FaCheck className='icon' />Interior/Exterior Painting</li>
                    <li><FaCheck className='icon' />Light Remodeling</li>
                    <li><FaCheck className='icon' />Clean and Paint Ceilings</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li><FaCheck className='icon' />Sand and Paint Walls</li>
                    <li><FaCheck className='icon' />Apply Epoxy Floor Coatings</li>
                    <li><FaCheck className='icon' />Prep and Paint Trim around Windows, Doors, and Floors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* <img src={holiday} alt="Holiday Lights" /> */}
          </div>

        </div>
      </div>
    </>
  )
}

export default Painting