import React, { useState } from 'react';

interface Type {
  name: string;
  dataHandle: any;
  index: number;
}

const PoemSectionInput = ({ name, dataHandle, index }: Type) => {
  const [showButton, setShowButton] = useState<boolean>(true);
  const [poemText, setPoemText] = useState<string>('');

  const handleButtonClick = () => {
    dataHandle({ name, value: poemText, index });
    setShowButton(false);
  };

  return (
    <>
      <label className='uppercase bg-theme-1 rounded-md p-2 text-white' htmlFor={name}>
        {name}
      </label>
      <textarea
        id={name}
        className='w-[400px] rounded p-2'
        name={name}
        placeholder='Enter the poem'
        value={poemText}
        onChange={(e) => setPoemText(e.target.value)}
      ></textarea>
      {showButton && (
        <button
          onClick={handleButtonClick}
          className="p-2 bg-red-700 w-[300px] transition-all text-white uppercase font-medium text-xl rounded-md hover:border-2 hover:scale-125 hover:border-theme-4"
          type="button"
        >
          Click Here if you are done. Be careful
        </button>
      )}
    </>
  );
};

export default PoemSectionInput;
