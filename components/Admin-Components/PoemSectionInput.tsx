import React from 'react'
interface Type {
    name: string;
    dataHandle:any;
}

const PoemSectionInput = ({name, dataHandle} : Type) => {
  return (
    <>
    <label className='uppercase bg-theme-1 rounded-md p-2 text-white' htmlFor={name}>{name}</label>
    <textarea onChange={dataHandle} id={name} className='w-[400px] rounded p-2' name={name} placeholder='Enter the poem' ></textarea>
    </>
  )
}

export default PoemSectionInput