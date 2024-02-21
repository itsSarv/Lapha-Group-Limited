'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {Input,Button} from "@nextui-org/react";
import * as Yup from 'yup';
import { useFormik} from 'formik';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation'

const RegisterForm =()=>{
const router = useRouter()
const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(3, 'Password must be 3 characters long'),
});

const registerUser = async(values)=> {
  const res=  await fetch(`http://localhost:5000/register`,{
     method: 'POST',
     headers: {'Content-Type':'application/json' },
     body: JSON.stringify(values)
   })
   const data = await res.json()
   if(res.status == 200) {
     router.push('/login')
   }
   toast(data.msg)
  }

const formik = useFormik({
      initialValues:{
        name: '',
        email: '',
        password: '',
      },
      validationSchema : SignupSchema,
      onSubmit: values => {
        registerUser(values)
      }
    });
    return(
      <form onSubmit={formik.handleSubmit}>
      <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center" >
        <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 m-auto">
          <div className= "m-auto"><Image src="/laphagroup.png" width="100" height="100"/></div>
          <h2 className="text-gray-900 text-lg font-medium title-font mb-5 m-auto">
            Lapha Group Limited
          </h2>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Name
            </label>
            <input
              type="name"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik?.errors.name}
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik?.errors.email}
          </div>
          <div className="relative mb-4">
            <label htmlFor="Password" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik?.errors.password}
          </div>
          <Button type="submit" className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg relative mb-2">
            Register
          </Button>
            <Button onClick={()=>router.push('/')} className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Login
          </Button>
        </div>
      </div>
    </section>
    </form>
    )
    }

export default RegisterForm