import React from 'react';
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import './AboutUs.css';

const AboutUs = () => (
  <div className="app__aboutus app__bg flex__center section__padding" id='about'>
    <div className="app__aboutus_overlay flex__center">
      <img src={images.G} alt="G letter" />
    </div>

    <div className="app__aboutus_content flex__center">
      <div className="app__aboutus_content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="spoon img" />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel leo et tellus maximus ullamcorper.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>

      <div className="app__aboutus_knife">
        <img src={images.knife} alt="knife img" />
      </div>

      <div className="app__aboutus_content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="spoon img" />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel leo et tellus maximus ullamcorper.</p>
        <button type='button' className='custom__button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
