import React from 'react';

import {images} from '../../constants';
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title='Chase the new flavor' />
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{ margin:'2rem 0'}}>
      the epitome of sophisticated cocktail culture in the heart of Cardiff. With our expert mixologists, extensive drink menu, and stylish ambiance, we invite you to indulge in unforgettable evenings filled with delightful libations and captivating conversations.
      </p>
      <button className='custom__button'>Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
