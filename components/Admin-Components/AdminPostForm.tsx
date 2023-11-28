"use client"
import PoemSectionInput from "./PoemSectionInput"
import { useState } from "react"

const AdminPostForm = () => {
    const [componentCount, setComponentCount] = useState(1);

    const handleAddComponent = () => {
      setComponentCount(prevCount => prevCount + 1);
    };
  
  return (
    <>
        <form className='bg-theme-3 w-full flex flex-col items-center justify-center gap-2'>
            <div className="flex items-center justify-center w-full gap-2 p-2">
                <input type="text" className="p-2 rounded-sm w-auto" placeholder="Poem Title" />
                <input type="text" className="p-2 rounded-sm w-auto" placeholder="Author" />
            </div>
            <div className="flex items-center justify-center w-full gap-2 p-2">
                <input type="file"  className="p-2 rounded-sm w-24 h-24 bg-white active:bg-theme-1"/>
                <input type="file"  className="p-2 rounded-sm w-24 h-24 bg-white active:bg-theme-1" />
            </div>
            {[...Array(componentCount)].map((_, index) => (
        <PoemSectionInput key={index} name={`poem-text-${index + 1}`}/>
      ))}
            <button onClick={handleAddComponent} className="p-2 bg-theme-1 text-white uppercase font-medium text-xl rounded-md hover:border-2 hover:scale-125 hover:border-theme-4" type="button">Add Section</button>
        </form>
    </>
  )
}

export default AdminPostForm