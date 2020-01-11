import React from 'react';

import './Imagelist.css';
const Imagelist = props => {
  const image = props.images.map(({description, id, urls}) => (
    <img src={urls.regular} alt={description} key={id} />
  ));

  return <div className='image-list'>{image}</div>;
};

export default Imagelist;
