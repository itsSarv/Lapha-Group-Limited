"use client";
import React from "react";
import {
  Navbar,
  Button,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
  Input,
} from "@nextui-org/react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "@/redux/reducerSlice/userSlice";
import { useRouter } from 'next/navigation'


const page = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const logoutUser = ()=>{
    dispatch(logout())
  }

  const LoginLogoutbtn = ()=>{
    return( 
    <> 
        <Button color='secondary' onClick={()=>router.push('/login')} >Login</Button> 
        <Button color="warning" onClick={()=>router.push('/register')} >Register</Button>
        </>)
  }
  const LoggedIndrop = ()=>{
    return( 
    <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">zoey@example.com</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={logoutUser}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        )
  }
  const {isLoggedIn} = useSelector(state=>state.user)

 
  return (
    <div>      
        <Navbar isBordered>
      <NavbarContent justify="start">
        <NavbarBrand className="mr-4">
        <Image src='/laphagroup.png' width='50' height='50'/>
          <p className="hidden sm:block font-bold text-inherit">Lapha Group</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
      
        <Input
          classNames={{
            base: "max-w-full sm:max-w-[10rem] h-10",
            mainWrapper: "h-full",
            input: "text-small",
            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
          }}
          placeholder="Type to search..."
          size="sm"
          type="search"
        />
        {isLoggedIn? <LoggedIndrop/> : <LoginLogoutbtn/>}
      </NavbarContent>
    </Navbar>
    </div>
  );
};

export default page;
