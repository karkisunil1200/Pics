import React from 'react';
import ImageCard from './ImageCard';

import './Imagelist.css';
const Imagelist = props => {
  const image = props.images.map(image => <ImageCard image={image} key={image.id} />);

  return <div className='image-list'>{image}</div>;
};

export default Imagelist;
