import React from 'react';
import { images } from "../../constants";
import SubHeading from "../../components/SubHeading/SubHeading";
import './Chef.css';

const Chef = () => (
  <div className="app__chef app__wrapper app__bg section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <img src={images.chef} alt="chef img" />
      </div>

      <div className="app__wrapper_info">
        <SubHeading title={"Chefs World"}/>
        <h1 className="headtext__cormorant">What We Believe In</h1>
       
       <div className="app__chef_content">
          <div className="app__chef_content_quote">
            <img src={images.quote} alt="quote" />
            <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula semper nisl ut rutrum.</p>
       </div>

       <div className="app__chef_single ">
        <p>Kevin Luo</p>
        <p>Chef & Founder</p>
        <img src={images.sign} alt="sing img" />
       </div>

      </div>
  </div>
);

export default Chef;
