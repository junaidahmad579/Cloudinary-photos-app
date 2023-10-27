'use client'
import { searchResult } from '@/app/Gallery/page'
import React from 'react'
import ImageGrid from './imageGrid'
import CloudinaryImage from './CloudinaryImage'

const AlbumGrid = ({images}:{images:searchResult[]}) => {
  return (
        <ImageGrid
          images={images}
          getImage={(imageData: searchResult) => {
            return (
              <CloudinaryImage
                key={imageData.public_id}
                imageData={imageData}
                width="400"
                height="300"
                alt="an image of something"
              />
            );
          }}
        />
      );
    }

export default AlbumGrid