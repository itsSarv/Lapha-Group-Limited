'use client'
import React from 'react'
import Nav from '@/components/navBar/page'
import Footer from '@/components/footer/page'
import Cardlist from '@/app/card/page'



const page = () => {
  return (
  <div>
 <Nav/>
 <Cardlist/>
<Footer/>
 </div>

  )
}

export default page