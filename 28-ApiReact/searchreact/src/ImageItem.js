import React from 'react';

function ImageItem({ image }) {
  return (
    <div>
      <img className="imageListImg" src={image.urls.small} alt="" />
    </div>
  );
}

export default ImageItem;
