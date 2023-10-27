'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Button } from './ui/button';

const SearchForm = ({initialSearch}:{initialSearch:string}) => {
    const [tagName, setTagName]=useState(initialSearch ?? "")
    const router = useRouter();

    useEffect(()=>{
    
    setTagName(initialSearch)
  },[initialSearch])
  
  return (
    <form onSubmit={(e)=>{
      e.preventDefault();
      router.replace(`/Gallery?search=${encodeURIComponent(tagName)}`)
      router.refresh
    }}>

      <Label htmlFor='tag-name' className='text-right'>
        Search by tag
      </Label>
      <div className='flex gap-2'>
        <Input onChange={(e)=> setTagName(e.currentTarget.value)}
        id='tag-name'
        value={tagName}>
        </Input>

        <Button type='submit'>Search</Button>
      </div>

    </form>
  )
}

export default SearchForm