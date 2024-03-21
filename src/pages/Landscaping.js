import React from 'react'
import '../styles/Landscaping.css'
import { FaCheck } from "react-icons/fa6";
import landscaping from '../assets/landscaping.jpg'

const Landscaping = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className='landscaping'>
        <div>
          <h2>Full Service Landscaping for your Home or Office</h2>
          <h3>Make a great first impression.</h3>
          <p>When people visit your home or workplace, the first thing they see is your landscaping. Trust QDC Services to keep your lawn trimmed and green, and your flowers and shrubs perfectly tended.</p>
          <p>Even after the snow falls, your grounds still need attention. Trust QDC Services to shovel out your driveway and sidewalks, and to brighten your evenings with colorful Christmas lighting .</p>
          <p>Your satisfaction is <span>GUARANTEED</span>! If you present a written quote, we'll match that contractor's price for comparable work.</p>
          <h2>Commercial and residential landscapes</h2>
          <div className="services">
            <div>
              <ul>
                <li><FaCheck className='icon' /> Landscape Design</li>
                <li><FaCheck className='icon' /> Landscape Lighting</li>
                <li><FaCheck className='icon' /> Trimming and Weeding</li>
                <li><FaCheck className='icon' /> Hedges and Shrubs</li>
                <li><FaCheck className='icon' /> Fertilizing</li>
              </ul>
            </div>
            <div>
              <ul>
                <li><FaCheck className='icon' /> Planting Flowers</li>
                <li><FaCheck className='icon' /> Mulching</li>
                <li><FaCheck className='icon' /> Spring and Fall cleanup</li>
                <li><FaCheck className='icon' /> Power Seeding</li>
                <li><FaCheck className='icon' /> Lawn Sodding</li>
              </ul>
            </div>
          </div>
          <p>
            Did you suffer any damages due to a storm? You can rely on our 24/7 emergency service. Call us at <span className='phone'>609-254-1673</span> today. At QDC Services, our team is delighted to serve the community of Gloucester County. We're a licensed and insured business.
          </p>
        </div>
        <div>
          <img src={landscaping} alt="landscaping" />
        </div>

      </div>
    </>

  )
}

export default Landscaping