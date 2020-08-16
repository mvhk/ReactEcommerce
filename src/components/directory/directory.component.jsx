import React from 'react';

import './directory.scss';
import MenuItem from '../menu-item/menuitem.component';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'Snacks',
          imageUrl: 'https://i.ibb.co/Gvkq8wH/snacks-in-america.jpg',
          id: 1,
        },
        {
          title: 'Personal Care',
          imageUrl: 'https://i.ibb.co/N1dtL9L/complexion-1576106034.jpg',
          id: 2,
        },
        {
          title: 'Home Care',
          imageUrl: 'https://i.ibb.co/8PbCwhY/householdsupplies.jpg',
          id: 3,
        },
        {
          title: 'Men',
          imageUrl:
            'https://i.ibb.co/8YyN8zj/2833225d9872042042168f86d4c8df99.jpg',
          id: 4,
          size: 'large',
        },
        {
          title: 'Women',
          imageUrl:
            'https://i.ibb.co/s6KN3GQ/Set-of-fashion-accessories-Women-items-and-accessories-Vector-illustration.jpg',
          id: 5,
          size: 'large',
        },
      ],
    };
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
        ))}
      </div>
    );
  }
}

export default Directory;
