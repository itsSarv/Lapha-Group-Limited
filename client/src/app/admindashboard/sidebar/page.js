import React from 'react'
import Link from 'next/link'
import {MdAddShoppingCart} from 'react-icons/md'
import {FaRegUser} from 'react-icons/fa6'
import {BiCategory} from 'react-icons/bi'

const page = () => {
  return (
    <div className='flex justify-start min-h-screen'>
      <aside className='bg-gray-100 w-60 p-4'>
        <ul>
        <li className='flex justify-start items-center hover:bg-blue-400 hover:text-white rounded-xl p-2'>
            <BiCategory className='mr-2'/>
            <Link href="/admindashboard/categories">Add Category</Link>
          </li>
          <li className='flex justify-start items-center hover:bg-blue-400 hover:text-white rounded-xl p-2'>
            <MdAddShoppingCart className='mr-2'/>
            <Link href="/admindashboard/products">Add Products</Link>
          </li>
          <li className='flex justify-start items-center hover:bg-blue-400 hover:text-white rounded-xl p-2'>
            <FaRegUser className='mr-2'/>
            <Link href="/admindashboard/allusers">Users</Link>
          </li>
        </ul>
      </aside>
    </div>
  )
}

export default page