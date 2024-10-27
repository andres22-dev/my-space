import React from 'react';

const Navbar = () => {

return(
  <nav className="navbar">
    <img className="navbar__logo" src="logo.png" alt="Logo" />
      <ul className="navbar__buttons">
        <a href="#home" className='navbar__links'>HOME</a>
        <a href="#aboutme" className='navbar__links'>ABOUT ME</a>
        <a href="#projects" className='navbar__links'>PROJECTS</a>
        <a href="#myexperience" className='navbar__links'>MY EXPERIENCE</a>
        <a href="#contactme" className='navbar__links'>CONTACT ME</a>
      </ul>
  </nav>   
)

}

export default Navbar