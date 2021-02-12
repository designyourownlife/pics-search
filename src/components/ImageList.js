import React from 'react';
import ImageCard from './ImageCard';
import './ImageList.css';

const ImageList = ({images}) => {
  console.log(images);
  const imageList = images.map( image => {
    return <ImageCard key={image.id} image={image} />
  })
  return (
    <div className="imageList">
      {imageList}
    </div>
  )
}

export default ImageList
