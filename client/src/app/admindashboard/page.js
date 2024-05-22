import React from 'react'
import Nav from '@/components/navBar/page'
import Link from 'next/link'
import {AiOutlineHome} from 'react-icons/ai'
import {MdAddShoppingCart} from 'react-icons/md'
import {FaRegUser} from 'react-icons/fa6'



const dashboard = () => {
  return (
    <>
      <Nav/>
      <div className='flex justify-start min-h-screen'>
      <aside className='bg-gray-100 w-60 p-4'>
        <ul>
          <li className='flex justify-start items-center hover:bg-blue-400 hover:text-white rounded-xl p-2'>
            <MdAddShoppingCart className='mr-2'/>
            <Link href="/admindashboard">Add Products</Link>
          </li>
          <li className='flex justify-start items-center hover:bg-blue-400 hover:text-white rounded-xl p-2'>
            <FaRegUser className='mr-2'/>
            <Link href="/admindashboard">Users</Link>
          </li>
        </ul>
      </aside>
      </div>
      
    </>
  )
}

export default dashboard