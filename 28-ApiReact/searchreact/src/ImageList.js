import React from 'react';
import ImageItem from './ImageItem';

function ImageList({ imagePlaceholders }) {
  return (
    <div className="imageList">
      {imagePlaceholders.map((image, index) => {
        return <ImageItem key={index} image={image} />;
      })}
    </div>
  );
}

export default ImageList;
