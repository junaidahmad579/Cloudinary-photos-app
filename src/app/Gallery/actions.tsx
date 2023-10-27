'use server'

import React from 'react'
import cloudinary from "cloudinary"


const setAsFavouriteAction = async (
    publicId:string,
     isFavourite:boolean,
     ) => {

    if(isFavourite){
        await cloudinary.v2.uploader.remove_tag("favourite", [publicId])
    } else{
   await cloudinary.v2.uploader.add_tag("favourite", [publicId])
    }
     }

export default setAsFavouriteAction