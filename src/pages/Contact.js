import React from 'react'
import '../styles/Contact.css'
import Map from '../assets/map.png'
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";

const Contact = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div className='contact'>
        <div className="content">
          <div>
            <h2>Contact QDC Services</h2>
          </div>
          <div>
            <img src={Map} alt="Map" />
          </div>
          <div className="container">
            <div>
              <h2>Get in touch with QDC Services</h2>
              <p>It takes a lot of time to keep your home beautiful. For bright, freshly-painted walls, a pristine yard, or the cheeriest Christmas lights, call today.</p>
              <p><span>Contact: </span>Dan Sottile</p>
              <p><span>Phone: </span>609-254-1673</p>
              <p><span>NJ Home improvement contractor reg #: </span>13vh06205500</p>
              <p><span>Hours: </span>Mon-Sat: 6 A.M. - 11:00 P.M.</p>
              <p>Referrals available</p>
              <p>Serving Gloucester / Camden County</p>
              <p>Registered and insured</p>
              <p><span>Methods of Payment</span></p>
              <FaMoneyBill1Wave className='icon' />
              <FaMoneyCheckDollar className='icon' />
            </div>
            <div className='contact-form'>
              <form>
                <label>
                  Services:
                  <select>
                    <option value="painting">Painting</option>
                    <option value="lighting">Lighting</option>
                    <option value="gutters">Gutter Cleaning</option>
                    <option value="landscaping">Landscaping</option>
                  </select>
                </label>
                <label for="name">Name:
                  <input type="text" name="name" id="name" placeholder='Enter Name' required />
                </label>
                <label for="email">Email:
                  <input type="email" name="email" id="email" placeholder="Enter email" required />
                </label>
                <label for="phone">Phone:
                  <input type="text" name='phone' id='phone' placeholder='Enter phone#' required />
                </label>
              </form>
              <button className='btn'>Submit</button>
            </div>
          </div>
        </div>


      </div>
    </>
  )
}

export default Contact