import React from 'react'
import '../styles/Gutter.css'
import leaves from '../assets/leaves.jpg'
import gutterclean from '../assets/gutter-cleaning.jpg'
import gutter_cleaning from '../assets/gutter_cleaning.jpg'
import gutters from '../assets/gutters.jpg'
import clog from '../assets/gutter_clog.jpg'
// import background from '../assets/autumn.jpg'

const Gutter = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <div id='gutter' className="gutter_hero">
        <div className="gutter_top">
          <img src={leaves} alt="leaves" />
          <img src={gutterclean} alt="cleanout" />
          <img src={gutter_cleaning} alt="cleanout2" />
        </div>
        <div className="gutter_bottom">
          <div>
            <div className="gutter_container">
              <h2>Gutter Cleaning</h2>
              <h3>Fall is the time to get those Gutters cleared of debris, leaves and dirt.</h3>
              <div className="gutter_content">
                <p>QDC will have them looking great at a price you will love. We pride ourselves in getting the job done quickly and efficiently. Our customer’s satisfaction is our top priority. That’s why our current customers always call us when they need further home improvement work done.</p>
                <p>Call Dan today for a free estimate on Gutter Cleaning!</p>
              </div>

              <img src={gutters} alt="before_after" />
            </div>
          </div>
          <div>
            <img className='clog' src={clog} alt="gutter clog" />
          </div>
        </div>
      </div>
    </>

  )
}

export default Gutter