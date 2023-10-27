import UploadButton from '@/components/UploadButton'
import React from 'react'
import cloudinary from 'cloudinary'
import { CldImage } from 'next-cloudinary';
import CloudinaryImage from '@/components/CloudinaryImage';
import ImageGrid from '@/components/imageGrid';
import GalleryGrid from '@/components/galleryGrid';
import SearchForm from '@/components/searchForm';

export type searchResult={
  public_id:string;
  tags: string[]
}

 const GalleryPage = async ({searchParams: { search }}: {searchParams: {search: string}}) => {
    const results = await cloudinary.v2.search
    .expression(`resource_type:image${search ? ` AND tags=${search}` : ""}`) 
    .sort_by('created_at','desc')
    .with_field("tags")
    .max_results(100)
    .execute() as {resources:searchResult[]}
  return (
    <section>
        <div className='flex flex-col gap-8'>
       <div className='flex justify-between'>      
         <h1 className='text-4xl font-bold'>
            Gallery
        </h1>    
        <UploadButton/>
        </div>
      
        <SearchForm
        initialSearch={search}/>

        <GalleryGrid
        images={results.resources}
        />
      </div>
        
    </section>
  )
}

export default GalleryPage