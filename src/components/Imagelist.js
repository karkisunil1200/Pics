import React from 'react';

const Imagelist = props => {
  const {images} = props;
  console.log('THis is from Image list ', props);
  return (
    <div>
      <h1>Images</h1>
      {images.map(images => (
        <h1>Likes: {images.description}</h1>
      ))}
    </div>
  );
};

export default Imagelist;
