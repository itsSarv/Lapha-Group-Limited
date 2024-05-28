'use client'
import React from 'react'
import Sidebar from '../sidebar/page'
import Nav from '@/components/navBar/page'
import { Input, Button } from '@nextui-org/react'
import Form from 'react-bootstrap/Form';
import { useFormik} from 'formik';

const products = () => {
  const addProduct = async(values)=> {
    await fetch(`http://localhost:5000/product`,{
       method: 'POST',
       headers: {'Content-Type':'application/json' },
       body: JSON.stringify(values)
     })
    }
  const formik = useFormik({
    initialValues:{
      productName: '',
      price: '',
      productDescription:'',
      productCategory:''
    },
    onSubmit: values => {
      addProduct(values)
    }
  });
  return (
         <form onSubmit={formik.handleSubmit}>
      <Nav/>
    <div className='flex min-h-screen'>
        <Sidebar/>
        <div className='flex-1 justify-center m-10'>

            <p className='flex justify-center p-5 text-lg'>Add Products</p>       
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-5 " >
              
      <Input 
      id="productName"
      name="productName" 
      label="Product Name" 
      onChange={formik.handleChange}
      value={formik.values.productName}
      />
             
    </div >
          <Input
           id="price"
           name="price" 
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
          onChange={formik.handleChange}
          value={formik.values.price}
        />
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4 p-5 lg">
      <Input  
      id="productDescription"
      name="productDescription" 
      type="Name" 
      label="Product Description" 
      onChange={formik.handleChange}
      value={formik.values.productDescription} />
      
    </div>
        <hr></hr>
        <div className='flex justify-center' >
      
      <Form.Select 
      id="productCategory"
      name="productCategory" 
      aria-label="productCategory" 
      className='lg flex justify-center' 
      onChange={formik.handleChange}
      value={formik.values.productCategory}>
      <option>Select Category</option>
      <option value="Womens">Womens</option>
      <option value="Mens">Mens</option>
      <option value="Kids">Kids</option>
    </Form.Select>
    <hr></hr>
      <Button className=' flex justify-center m-2 bg-orange-300' type="submit">Submit</Button>
      </div>
        </div>

    </div>
    </form>
  )
}

export default products