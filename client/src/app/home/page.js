'use client'
import React, { useEffect, useState } from 'react'
import Nav from '@/components/navBar/page'
import Footer from '@/components/footer/page'
import Cardlist from '@/app/card/page'



const page = () => {
  const [productlist, setproductlist] = useState([])
  const fetchproducts= async()=>{
    const response = await fetch('http://localhost:5000/product')
    const data = await response.json()
    setproductlist(data.productlist)
  }

  useEffect ( ()=>{
      fetchproducts()
  },[])

  return (
    
  <div>
    <Nav/>

      {productlist.length>0 && productlist.map((item)=>{
         return <Cardlist item = {item}/>
      })}
<Footer/>
 </div>

  )
}

export default page