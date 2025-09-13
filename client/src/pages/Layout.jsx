import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { SignIn, useUser } from '@clerk/clerk-react';
import Sidebar from '../components/Sidebar';


const Layout = () => {

  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {user} = useUser();

  return user ? (
    <div className='flex flex-col items-start justify-start h-screen'>
      <nav className='w-full flex items-center justify-between px-8 min-h-14 border-b border-gray-200'>
        <img className='cursor-pointer w-32 sm:w-44' src={assets.logo} alt="" onClick={()=> navigate('/')} />
        {
          sidebarOpen ? <X onClick={()=> setSidebarOpen(false)} className='w-6 h-6 text-gray-600 sm:hidden'/> 
          : <Menu onClick={()=> setSidebarOpen(true)} className='w-6 h-6 text-gray-600 sm:hidden'/>
        }
      </nav>
      <div className='flex-1 w-full flex h-[calc(100vh-64px)]'>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <div className='flex-1 bg-[#F4F7FB]'>
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <SignIn />
    </div>
  )
}

export default Layout
