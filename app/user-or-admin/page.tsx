import Link from 'next/link'
import React, { FC } from 'react'

const page:FC = () => {
  return (
    <div className='flex flex-col gap-4 w-full h-screen justify-center items-center'>
        <h1 className='bg-theme-4 font-medium text-5xl max-sm:text-3xl text-center p-4 rounded-sm'>Who are You ? 🤔</h1>
        <div className='flex gap-8 max-sm:flex-col items-center justify-center '>
            <Link className='bg-theme-1 hover:border-4 w-60 text-center p-3 font-medium text-4xl hover:scale-110 transition-all text-white hover:bg-theme-4 hover:text-theme-1' href="/sign-in">
                User
            </Link>
            <Link className='bg-theme-1 hover:border-4 w-60 text-center p-3 font-medium text-4xl hover:scale-110 transition-all text-white hover:bg-theme-4 hover:text-theme-1' href="/admin">
                Admin
            </Link>
        </div>
    </div>
  )
}

export default page