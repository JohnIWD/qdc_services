import React from 'react'
import { Outlet, NavLink } from "react-router-dom";
import '../styles/Home.css'
import Lights from '../assets/lights.jpg'
import Leaves from '../assets/leaves.jpg'
import Paint from '../assets/paint3.jpg'

const Home = () => {
  return (
    <>
      <br />
      <br />
      <div id='home' className='home'>

        <div className='content'>
          <div className='heading'>
            <h1>Making Homes Beautiful...Inside and Out</h1>
            <p>At QDC Services, our goal is to make your home more beautiful without breaking the bank. We offer a wide variety of home improvement services including:</p>
            <p>Landscaping, painting, gutter cleaning, and outdoor lighting</p>
          </div>

          <div className="container">
            <div className='specialty'>
              <div>
                <div>
                  <img src={Lights} alt="lighting" />
                </div>
                <div>
                  <h2><NavLink to="/lighting">Outdoor Lighting</NavLink></h2>
                </div>
                <div className="text">
                  <p>We can do it all with just one call.</p>
                </div>
              </div>

              <div>
                <div>
                  <img src={Leaves} alt="lighting" />
                </div>
                <div>
                  <h2><NavLink to="/gutter">Gutter Cleaning</NavLink></h2>
                  {/* <p>Don't let leaves, and other debris build up in your homes gutters. Get gutter cleaning from trusted professionals.</p> */}
                </div>
                <div className="text">
                  <p>Don't let leaves, and other debris build up in your homes gutters. Get gutter cleaning from trusted professionals.</p>
                </div>
              </div>

              <div>
                <div>
                  <img src={Paint} alt="lighting" />
                </div>
                <div>
                  <h2><NavLink to="/painting">Painting</NavLink></h2>
                </div>
                <div className="text">
                  <p>DanSottile, owner of QDC Services is on all jobs. Customer satisfaction is our priority.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>



  )

};

export default Home;