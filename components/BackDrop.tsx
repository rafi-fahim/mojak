import React from 'react'
import AdminConfirmModal from './Admin-Components/AdminConfirmModal';

const BackDrop = (params: {
  handleClose?:any;
  children: any;
}) => {
  return (
    <div onClick={params.handleClose} className='fixed center-absolute w-full flex items-center justify-center h-screen bg-[#18181891]'>
      {params.children}
    </div>
  )
}

export default BackDrop