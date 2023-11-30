"use client"
import React, {useState} from 'react'
interface Type {
    name: string;
    dataHandle:any;
    index:number;
}

const PoemSectionInput = ({name, dataHandle, index} : Type) => {
  const [ showButton, setShowButton ] = useState<boolean>(true)

  return (
    <>
    <label className='uppercase bg-theme-1 rounded-md p-2 text-white' htmlFor={name}>{name}</label>
    <textarea id={name} className='w-[400px] rounded p-2' name={name} placeholder='Enter the poem' ></textarea>
    {showButton && <button
              onClick={(e) => {
                dataHandle(e, 'poem-text', index)
                setShowButton(prev => !prev)
            }}
              className="p-2 bg-red-700 w-[300px] transition-all text-white uppercase font-medium text-xl rounded-md hover:border-2 hover:scale-125 hover:border-theme-4"
              type="button"
            >
              Click Here if you are done. Be careful
            </button>}
    </>
  )
}

export default PoemSectionInput