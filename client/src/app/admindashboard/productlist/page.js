'use client'
import Sidebar from '../sidebar/page'
import Nav from '@/components/navBar/page'
import React, { useState } from 'react';

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [productImage, setProductImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // For example, you might want to send the form data to an API
    console.log({
      productName,
      productPrice,
      productDescription,
      productCategory,
      productImage,
    });
  };

  const handleImageChange = (e) => {
    setProductImage(e.target.files[0]);
  };

  return (
    <>
      <Nav/>
    <div className='flex min-h-screen'>
        <Sidebar/>
    <div>
      <h1>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Product Name:
            <input
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Product Price:
            <input
              type="number"
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Product Description:
            <textarea
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Category:
            <select
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
              required
            >
              <option value="">Select a category</option>
              <option value="men">Men</option>
              <option value="women">Women</option>
              <option value="kids">Kids</option>
            </select>
          </label>
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
    </div>
    </>
  );
};

export default AddProduct;
