import React from 'react';
import { SubHeading } from '../../components';
import { images } from "../../constants";
const FindUs = () => (
  <div className="app__findUs app__bg app__wrapper section__padding">
    <div className="app__findUs_title">
      <SubHeading title={"Contact"}/>
      <h1 className='headtext__cormorant'>Find Us</h1>

      <div className="app__findUs_content" style={{ marginTop: "2rem" }}>
        <p className="p__opensans">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheach, CW9 75G</p>
        <p className="p__cormorant" style={{ color: "#DCCA87", margin: "2rem 0 2rem 0" }}>Opening Hours</p>
        <p className='p__opensans'>Mon-Fri: 10:00 Am-02:00 Am</p>
        <p className='p__opensans'>Sat-Sun: 10:00 Am-03:00 Am</p>
        <button type='button' className='custom__button' style={{ marginTop: "1.25rem" }}>Visit Us</button>
      </div>  
    </div>

    <div className="app__wrapper_img">
        <img src={images.findus} alt="find img" />
    </div>
  </div>
);

export default FindUs;
