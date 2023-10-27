import React from 'react'
import cloudinary from 'cloudinary'
import { searchResult } from '@/app/Gallery/page';
import ForceRefresh from '@/components/force-refresh';
import AlbumGrid from '@/components/albumGrid';


const Albumpage = async({params: {albumName}}:{params:{albumName:string}}) => {

  const results = (await cloudinary.v2.search
    .expression(`resource_type:image AND folder=${albumName}`)
    .sort_by("created_at", "desc")
    .with_field("tags")
    .max_results(30)
    .execute()) as { resources: searchResult[] };
  return (
    <section>
    <ForceRefresh />

    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold">Album {albumName}</h1>
      </div>

      <AlbumGrid images={results.resources} />
    </div>
  </section>
);
}

export default Albumpage