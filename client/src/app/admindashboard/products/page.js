'use client'
import React from 'react'
import Sidebar from '../sidebar/page'
import Nav from '@/components/navBar/page'
import { Input, Button } from '@nextui-org/react'
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";


const products = () => {
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["Select Category"]));

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  return (
    <>
      <Nav/>
    <div className='flex justify-start min-h-screen'>
        <Sidebar/>
        <div className='flex-1'>
            <p>Product Name</p>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Input type="Name" label="Product Name" />
    </div>
    <Input
          type="number"
          label="Price"
          placeholder="0.00"
          labelPlacement="inside"
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
        <hr></hr>
     <Dropdown>
      <DropdownTrigger>
        <Button 
          variant="bordered" 
          className="capitalize m-2"
        >
          {selectedValue}
        </Button>
      </DropdownTrigger>
      <DropdownMenu 
        aria-label="Single selection example"
        variant="flat"
        disallowEmptySelection
        selectionMode="single"
        selectedKeys={selectedKeys}
        onSelectionChange={setSelectedKeys}
      >
        <DropdownItem key="text">Womens</DropdownItem>
        <DropdownItem key="number">Mens</DropdownItem>
        <DropdownItem key="date">Kids</DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <hr></hr>
      <Button className='m-2 bg-orange-300' type="submit">Submit</Button>
        </div>
    </div>
    </>
  )
}

export default products