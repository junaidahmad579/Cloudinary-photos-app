// 'use client'
import Image from 'next/image'
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { ReactNode, useState } from 'react';
import GalleryPage from './Gallery/page';



export default function Home() {
  // const [imageId,setImageId] =useState("");
  return (
    // <><main className="flex min-h-screen flex-col items-center justify-between p-24">


    //   {imageId && (
    //     <CldImage
    //       width="400"
    //       height="300"
    //       src={imageId}
    //       sizes="100vw"
    //       alt="Description of my image" />
    //   )}
    // </main>
    // </>
    <GalleryPage searchParams={{search: ''}}/>
  )
}
