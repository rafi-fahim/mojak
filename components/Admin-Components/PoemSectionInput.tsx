import React from 'react'
interface Type {
    name: string;
}

const PoemSectionInput = ({name} : Type) => {
  return (
    <textarea className='w-[400px] rounded p-2' name={name} placeholder='Enter the poem' ></textarea>
  )
}

export default PoemSectionInput