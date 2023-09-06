import React, { useState } from 'react';
import { images } from "../../constants";
import { RiMenuLine } from "react-icons/ri";
import { MdRestaurantMenu } from "react-icons/md";
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const closeMenu = () =>{
    setToggleMenu(false);
  }
  return (
    <div className="app__navbar">
      <a href="#home" className="app__navbar_logo">
        <img src={images.gericht} alt="logo" />
      </a>

      <ul className="app__navbar_links_desktop">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>

      <div className="app__navbar_login">
        <a href="#" className="p__opensans">Log In / Registration</a>
        <div className="app__navbar_login_dash"></div>
        <a href="#" className="p__opensans">Book Table</a>
      </div>

      <div className="app__navbar_menu">
        {toggleMenu 
          ? null
          : <RiMenuLine color='#fff' size={27} onClick={()=> setToggleMenu(true)}></RiMenuLine>
        }
        {toggleMenu && (
          <ul className="app__navbar_links_mobile flex__center scale-in-top">
            <li className="p__cormorant" onClick={closeMenu}><a href="#home">Home</a></li>
            <li className="p__cormorant" onClick={closeMenu}><a href="#about">About</a></li>
            <li className="p__cormorant" onClick={closeMenu}><a href="#menu">Menu</a></li>
            <li className="p__cormorant" onClick={closeMenu}><a href="#awards">Awards</a></li>
            <li className="p__cormorant" onClick={closeMenu}><a href="#contact">Contact</a></li>
            <MdRestaurantMenu color='#DCCA87' size={27} onClick={()=> setToggleMenu(false)}></MdRestaurantMenu>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Navbar;
