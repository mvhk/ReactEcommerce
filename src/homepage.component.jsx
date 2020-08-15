import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
  <div className='homepage'>
    <div className='directory-menu'>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Snacks</div>
          <div className='subtitle'>Shop Now</div>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Personal Care</div>
          <div className='subtitle'>Shop Now</div>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Home Care</div>
          <div className='subtitle'>Shop Now</div>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Men</div>
          <div className='subtitle'>Shop Now</div>
        </div>
      </div>
      <div className='menu-item'>
        <div className='content'>
          <div className='title'>Women</div>
          <div className='subtitle'>Shop Now</div>
        </div>
      </div>
    </div>
  </div>
);

export default HomePage;
