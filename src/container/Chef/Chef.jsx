import React from 'react';

import {SubHeading} from '../../components';
import { images } from '../../constants';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's word"/>
      <h1 className='headtext__cormorant'>What We Believe In</h1>
    
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />

          <p className="p__opensans">As the head chef of Bar105, I take pride in creating culinary delights that perfectly complement the vibrant atmosphere.</p>        
        </div>
        <p className='p__opensans'>  <br />From delectable small plates to exquisite main courses, our menu offers a delightful fusion of flavors that will tantalize your taste buds. Join us at Bar105 for an unforgettable dining experience in a charming setting</p>
      </div>
      
      <div className="app__chef-sign">
        <p >Kim Kim</p>
        <p className='p__opensans'>Chef and Founder</p>
        <img src={images.sign}alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
