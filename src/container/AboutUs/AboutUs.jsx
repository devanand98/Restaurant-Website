import React from 'react';
import {images} from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding'  id='about'>
    
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__cormorant'>About Us </h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className="p__opensans">At Bar 105, we strive to craft exquisite cocktails that tantalize the senses, creating a memorable experience that reflects our passion for mixology and hospitality. Join us for a journey of taste and elegance in the heart of Cardiff.</p>
        <button className='custom__button' type='button'>Know More</button>
      </div>

      <div className="app_aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__cormorant'>Our History </h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
        <p className="p__opensans">At Bar 105, we strive to craft exquisite cocktails that tantalize the senses, creating a memorable experience that reflects our passion for mixology and hospitality. Join us for a journey of taste and elegance in the heart of Cardiff.</p>
        <button className='custom__button' type='button'>Know More</button>
      </div>
    </div>
  </div>
);

export default AboutUs;
