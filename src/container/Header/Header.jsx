import React from 'react';
import { images } from "../../constants";
import SubHeading from '../../components/SubHeading/SubHeading';
import './Header.css';

const Header = () => (

  <div className="app__header app__wrapper section__padding" id='home'>
    <div className="app__wrapper_info">
      <SubHeading title={"Chase The New Flavour"}/>
      <h1 className="headtext__cormorant">The Key To Fine Dining</h1>
      <p className='p__opensans'>Sir Tallus Lobortis Triste Senectus Vivamus Molastie. Doença de Candimentum Valutpar Fácil Como</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="Welcome img" />
    </div>
  </div>
);

export default Header;
