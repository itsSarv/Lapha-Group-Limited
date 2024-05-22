import React from 'react'
import Sidebar from '../sidebar/page'
import Nav from '@/components/navBar/page'

const allusers = () => {
  return (
    
    <div>
    <Nav/>
  <div className='flex justify-start min-h-screen'>
      <Sidebar/>
      All users
  </div>
  </div>
  )
}

export default allusers