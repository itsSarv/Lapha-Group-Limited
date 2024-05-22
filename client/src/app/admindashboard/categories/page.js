import React from 'react'
import Sidebar from '../sidebar/page'
import Nav from '@/components/navBar/page'
import { Input } from '@nextui-org/react'



const category = () => {
  return (
    <>
    <Nav/>
  <div className='flex justify-start min-h-screen'>
      <Sidebar/>
    <div className='flex-1'>
        <div>
          category
          </div>
    </div>
  </div>
  </>
  )
}

export default category