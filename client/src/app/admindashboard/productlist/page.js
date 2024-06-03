'use client'
import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/page'
import Nav from '@/components/navBar/page'
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
    key: "1",
    name: "Tony Reichert",
    role: "CEO",
    status: "Active",
  },
  {
    key: "2",
    name: "Zoey Lang",
    role: "Technical Lead",
    status: "Paused",
  },
  {
    key: "3",
    name: "Jane Fisher",
    role: "Senior Developer",
    status: "Active",
  },
  {
    key: "4",
    name: "William Howard",
    role: "Community Manager",
    status: "Vacation",
  },
];

const columns = [
  {
    key: "name",
    label: "NAME",
  },
  {
    key: "role",
    label: "PRICE",
  },
  {
    key: "status",
    label: "Category",
  },
];

const productlist = (props) => {
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
  <div className='flex justify-start min-h-screen '>
      <Sidebar/>
      <Table>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  </div>
  </div>
  
)}

export default productlist