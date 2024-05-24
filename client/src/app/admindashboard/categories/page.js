import React from 'react'
import Sidebar from '../sidebar/page'
import Nav from '@/components/navBar/page'
import { Input } from '@nextui-org/react'



const category = () => {
  return (
    <>
      <Nav/>
    <div className='flex min-h-screen'>
        <Sidebar/>
        <div className='flex-1 justify-center m-10'>

            <p className='flex justify-center p-5 text-lg'>Add Products</p>
            <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-5 ">
      <Input type="Name" label="Product Name" />
    </div>
    <Input
          type="number"
          label="Price"
          placeholder="0.00"
          labelPlacement="inside"
          className='p-5 '
          startContent={
            <div className="pointer-events-none flex items-center">
              <span className="text-default-400 text-small">$</span>
            </div>
          }
        />
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-5 lg">
      <Input type="Name" label="Product Description" />
    </div>
        <hr></hr>
        <div className='flex justify-center' >
      <Form.Select aria-label="Default select example" className='lg flex justify-center'>
      <option>Select Category</option>
      <option value="1">Womens</option>
      <option value="2">Mens</option>
      <option value="3">Kids</option>
    </Form.Select>
    <hr></hr>
      <Button className=' flex justify-center m-2 bg-orange-300' type="submit">Submit</Button>
      </div>
        </div>
    </div>
    </>
  )
}

export default category