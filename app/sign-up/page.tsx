import SignUpForm from '@/components/SignUpForm'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-auto p-4 gap-4'>
        <SignUpForm key="hello" />
    </div>
  )
}

export default page