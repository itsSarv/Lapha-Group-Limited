'use client'
import React from "react";
import Nav from "@/components/navBar/page";
import Login from "@/app/login/page";
import { UseSelector, useSelector } from "react-redux";

const page = () => {
  const s = useSelector(state=>state)
  console.log(s)
  return (
    <div>
      {/* <Nav /> */}
      <Login />
    </div>
  );
};

export default page;
