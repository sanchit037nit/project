import React from 'react'
import  Container  from '../components/Container.jsx'
import  PostForm  from '../components/Postform.jsx'

function AddPost() {
  return (
    <div className='py-8'>
        <Container>
            <PostForm />
        </Container>
    </div>
  )
}

export default AddPost