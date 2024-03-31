import React from 'react'
// import Logo from '../assets/logo.webp'
import "../styles/Header.css"


const Header = () => {
  return (
    <div>
      <header className='header'>
        {/* <p className="verse">"Whatever your hand finds to do, do it with all your might . . ." Ecclesiastes 9:10</p> */}
        <div className="logo">
          {/* <img src={Logo} alt="Logo" /> */}
          <h2>Going strong since 2006</h2>
          {/* <div>
            <p>Proudly Serving South Jersey Since 2006</p>
            <p className='phone'>609-254-1673</p>
          </div> */}
        </div>

      </header>
    </div>
  )
}

export default Header