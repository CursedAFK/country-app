import React from 'react'
import { MdErrorOutline } from 'react-icons/md'

const NotFound = () => {
  return (
    <section className='notFoundDiv'>
      <MdErrorOutline />
      <h2>Country not found, Please try another...</h2>
    </section>
  )
}

export default NotFound
