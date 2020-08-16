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
          linkUrl: 'hats',
        },
        {
          title: 'Personal Care',
          imageUrl: 'https://i.ibb.co/N1dtL9L/complexion-1576106034.jpg',
          id: 2,
          linkUrl: '',
        },
        {
          title: 'Home Care',
          imageUrl: 'https://i.ibb.co/8PbCwhY/householdsupplies.jpg',
          id: 3,
          linkUrl: '',
        },
        {
          title: 'Men',
          imageUrl:
            'https://i.ibb.co/8YyN8zj/2833225d9872042042168f86d4c8df99.jpg',
          id: 4,
          size: 'large',
          linkUrl: '',
        },
        {
          title: 'Women',
          imageUrl:
            'https://i.ibb.co/s6KN3GQ/Set-of-fashion-accessories-Women-items-and-accessories-Vector-illustration.jpg',
          id: 5,
          size: 'large',
          linkUrl: '',
        },
      ],
    };
  }
  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
