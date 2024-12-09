'use client'

import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center items-center  w-full lg:w-[1920px] bg-[#151514]">
      <div className="flex justify-between items-center w-full max-w-[1320px] h-[87px] px-4 md:px-6 lg:px-8 border-b-4 border-[#ff9f0d]">
        {/* Logo */}
        <div>
          <h1 className="font-bold text-[24px] text-[#ff9f0d]">
            Food<span className="text-white">tuck</span>
          </h1>
        </div>

        {/* Hamburger Icon */}
        

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center text-white`}
        >
          <ul className="flex flex-col md:flex-row
           items-left p-4 lg:ml-0 ml-10 md:space-x-5 lg:mt-0 mt-48  lg:w-full text-lg w-[250px] lg:bg-[#151514]  bg-gray-900 ">
            <li className="font-sans">
              <a href="#">Home</a>
            </li>
            <li className="font-sans">
              <a href="#">Menu</a>
            </li>
            <li className="font-sans">
              <a href="#">Blog</a>
            </li>
            <li className="font-sans">
              <a href="#">Pages</a>
            </li>
            <li>
              <select
                name=""
                id=""
                className="text-white font-sans bg-[#151514] border-none"
              >
                <option value="about">About</option>
              </select>
            </li>
            <li className="font-sans">
              <a href="#">Shop</a>
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
        <img src="/image/Tote.png" alt="" />
      
      </div>
    
      <div className="md:hidden text-white text-2xl cursor-pointer mr-8" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>
    
    </div>
  );
}
