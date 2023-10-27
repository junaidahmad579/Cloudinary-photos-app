'use client'

import React, { useEffect, useState } from 'react'
import cloudinary from 'cloudinary'
import { CldImage } from 'next-cloudinary';
import CloudinaryImage from '@/components/CloudinaryImage';
import { searchResult } from '../Gallery/page';
import ForceRefresh from '@/components/force-refresh';
import ImageGrid from '@/components/imageGrid';


export default function FavoritesList({
    initialResources,
  }: {
    initialResources: searchResult[];
  }) {
    const [resources, setResources] = useState(initialResources);
  
    useEffect(() => {
      setResources(initialResources);
    }, [initialResources]);
  
    return (
      <ImageGrid
        images={resources}
        getImage={(imageData: searchResult) => {
          return (
            <CloudinaryImage
              key={imageData.public_id}
              imageData={imageData}
              width="400"
              height="300"
              alt="image"
              onUnheart={(unheartedResource) => {
                setResources((currentResources) =>
                  currentResources.filter(
                    (resource) =>
                      resource.public_id !== unheartedResource.public_id
                  )
                );
              }}
            />
          );
        }}
      />
    );
  }
