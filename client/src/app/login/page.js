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
import { addUserDetails } from "@/redux/reducerSlice/userSlice";
import { useDispatch } from "react-redux";

const LoginForm =()=>{
const router = useRouter()
const dispatch = useDispatch()
const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const loginUser = async(values)=> {
  const res=  await fetch(`http://localhost:5000/login`,{
     method: 'POST',
     headers: {'Content-Type':'application/json' },
     body: JSON.stringify(values)
   })
   const data = await res.json()
   if(res.status == 200) {
     dispatch(addUserDetails(data))
     router.push('/home')
   }
   toast(data.msg)
  }

const formik = useFormik({
      initialValues:{
        email: '',
        password: '',
      },
      validationSchema : LoginSchema,
      onSubmit: values => {
       loginUser(values)
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
            Login
          </Button>
          <Link href="/register">
            <Button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Register
          </Button>
          </Link>
        </div>
      </div>
    </section>
    </form>
    )
    }

export default LoginForm;