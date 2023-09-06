import React from 'react';
import { images, data } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import MenuItem from '../../components/Menuitem/MenuItem';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id='menu'>
    <div className="app__specialMenu_title">
      <SubHeading title={"Menu That Fits Your Palatte"}/>
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>

    <div className="app__specialMenu_content">
      <div className="app__specialMenu_wine">
        <p className="app__specialMenu_menu_heading">Wine & Beer</p>
        <div className="app__specialMenu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags}/>
          ))}
        </div>
      </div>

      <div className="app__specialMenu_menu_img">
        <img src={images.menu} alt="menu img" />
      </div>

      <div className="app__specialMenu_cocktails">
        <p className="app__specialMenu_menu_heading">Cocktails</p>
        <div className="app__specialMenu_items">
        {data.cocktails.map((cocktails, index) => (
            <MenuItem key={cocktails.title + index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags}/>
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type='button' className='custom__button'>View More</button>
    </div>
  </div>
);

export default SpecialMenu;
