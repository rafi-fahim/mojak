import RenderCollections from '@/components/RenderCollections'
import Image from 'next/image'
import React, { FC } from 'react'

const page:FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-gradient-to-br from-theme-2 via-theme-3 to-theme-4">
    <Image 
      src="https://firebasestorage.googleapis.com/v0/b/mojak-6de41.appspot.com/o/Assets%2FImages%2Fmojak%20about%20us.png?alt=media&token=14a0e3c0-f62d-4ea7-9d9f-8142dfce6613"
      width={1000}
      height={200}
      alt="All poems cover photo"
      className="w-full h-auto"
    />
    <h1 className="bg-theme-1 text-white text-3xl font-medium font-cabin-sketch p-2 rounded ml-2 mr-2">Poem Collections</h1>
    <RenderCollections />
  </div>
  )
}

export default page