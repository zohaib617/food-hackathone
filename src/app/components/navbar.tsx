'use client'
import React from "react";
import ToggleDiv from "../toggleMenu/page";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center  w-full lg:w-[1920px] bg-[#151514] sticky top-0 z-50">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

      <div className="flex justify-between items-center w-full max-w-[1320px] h-[87px] px-4 md:px-6 lg:px-8 border-b-4 border-[#ff9f0d]">
        {/* Logo */}
        <div>
          <h1 className="font-bold text-[24px] text-[#ff9f0d]">
            Food<span className="text-white">tuck</span>
          </h1>
        </div>

        {/* Hamburger Icon */}
        

        {/* Navigation Menu */}
        <nav className={`${isOpen ? "block" : "hidden"} md:flex md:items-center text-white`}>
          <ul className="flex flex-col md:flex-row
           items-left p-4 lg:ml-0 ml-10 md:space-x-5 lg:mt-0 mt-48  lg:w-full text-lg w-[250px] lg:bg-[#151514]  bg-gray-900 ">
            <li className="font-sans">
              <a href="/hero">Home</a>
            </li>
            <li className="font-sans">
              <a href="/menu">Menu</a>
            </li>
            <li className="font-sans">
              <a href="/blog">Blog</a>
            </li>
            <li className="font-sans">
              <a href="/my-error">Pages</a>
            </li>
            

            <li className="font-sans">
              <a href="/about">About</a>
            </li>
            

            <li className="font-sans">
              <a href="/shop">Shop</a>
            </li>
            <li className="font-sans">
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Search Box */}
        <div className="hidden md:block">
          <input
            type="text"
            placeholder="Search... 🔍"
            className="bg-[#151514] text-right border-2 w-[310px] h-[54px] border-[#ff9f0d] rounded-3xl text-white pl-4"
          />
        </div>
        
        <div className="flex justify-center items-center p-4 ">
        <i className="fa fa-search text-white pr-7 transfrom hover:scale-150 transition duration-500 ease-in-out  "></i>
        <a href="/chackout">
        
        </a>
        <div> <ToggleDiv/> </div>
       <a href="/sign-up"><img src="/a-user.png" className="pl-7 transfrom hover:scale-150 transition duration-500 ease-in-out " alt="user" /></a>
       </div>
      </div>
    
      <div className=" md:hidden text-white text-2xl cursor-pointer mr-8" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
    
    </div>
  );
}
