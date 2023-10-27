'use client'
import { CldImage, CldImageProps } from 'next-cloudinary'
import React, { startTransition, useState, useTransition } from 'react'
import Heart from './icons/Heart'
import setAsFavouriteAction from '@/app/Gallery/actions'
import { searchResult } from '@/app/Gallery/page'
import FullHeart from './icons/fullHeart'
import { ImageMenu } from './imageMenu'


const CloudinaryImage = (props:{
  imageData:searchResult;
  onUnheart?:(unheartedReacource:searchResult)=>void;
 } & Omit<CldImageProps,"src">
 ) => {
  const {imageData, onUnheart}=props;
  const [transition,startTransition] = useTransition()

  const [isFavourited,setIsFavourite]= useState(imageData.tags.includes('favorite'))
  return (
    <div className='relative'>
    <CldImage
    {...props} 
    src={imageData.public_id}/>
    {isFavourited ? 
    <FullHeart 
    onClick={()=>{
      onUnheart?.(imageData);
      setIsFavourite(false);
      startTransition(()=>{
        setAsFavouriteAction(imageData.public_id, false);
      })
    }}
    className='absolute top-2 left-2 hover:text-red-500 cursor-pointer'/>
    :
    <Heart 
    onClick={()=>{
      setIsFavourite(true);
      startTransition(()=>{
        setAsFavouriteAction(imageData.public_id, true);
      })
    }}
    className='absolute top-2 left-2 hover:text-red-500 cursor-pointer'/>
  }
  <ImageMenu image={imageData}/>
  </div>
)}

export default CloudinaryImage