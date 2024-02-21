import React from 'react'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const page = () => {
  return (
    <div>   
    <Sidebar className='bg-white w-min h-screen'>
    <Menu>
        <MenuItem> Dashboard </MenuItem>
        <MenuItem> My Details </MenuItem>
      <MenuItem> My Shares </MenuItem>
      <MenuItem> News </MenuItem>
    </Menu>
  </Sidebar></div>
  )
}

export default page