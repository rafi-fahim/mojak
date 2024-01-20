import React from 'react'
import AdminPostForm from './AdminPostForm'

const CreatePoemPage = ({ collectionId } : { collectionId: string }) => {
  return (
    
    <AdminPostForm id={collectionId}/>
  )
}

export default CreatePoemPage