import React from 'react';

import './menuitem.scss';

const MenuItem = ({ title, imageUrl, size }) => (
  <div className={`${size} menu-item`}>
    <div
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className='background-image'
    />
    <div className='content'>
      <div className='title'>{title}</div>
      <div className='subtitle'>Shop Now</div>
    </div>
  </div>
);

export default MenuItem;
