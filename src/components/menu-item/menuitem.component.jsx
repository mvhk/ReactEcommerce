import React from 'react';
import { withRouter } from 'react-router-dom';

import './menuitem.scss';

const MenuItem = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
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

export default withRouter(MenuItem);
