'use client';
import { ShoppingBag } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

type Product = {
  _id: string;
  name: string;
  tags?: string[];
  imageUrl?: string;
  quantity: number; // Ensure this field exists to prevent further errors
};


export default function Navbar() {

  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Retrieve cart from localStorage and update the cartCount
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const totalItems = cart.reduce((acc: number, item: Product) => acc + item.quantity, 0);
    setCartCount(totalItems);
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const router = useRouter();

  // Fetch search results dynamically
  useEffect(() => {
    if (searchQuery.trim().length > 2) {
      const fetchData = async () => {
        const results = await client.fetch(
          `*[_type == "product" && (name match $query || tags[] match $query)]{
            _id,
            name,
      
            tags,
            "imageUrl": image.asset->url
          }`,
          { query: `${searchQuery}*` }  // You can modify this query as per your needs
        );
        setSearchResults(results);
      };
      fetchData();
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);
  
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="flex justify-center items-center w-full lg:w-[1920px] bg-[#151514] sticky top-0 z-50">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      ></link>

      <div className="flex justify-between items-center w-full max-w-[1320px] h-[87px] px-4 md:px-6 lg:px-8 border-b-4 border-[#ff9f0d]">
        {/* Logo */}
        <div>
          <h1 className="font-bold text-[24px] text-[#ff9f0d]">
            Food<span className="text-white">tuck</span>
          </h1>
        </div>

        {/* Navigation Menu */}
        <nav className={`$${isOpen ? 'block' : 'hidden'} md:flex md:items-center text-white`}>
          <ul className="flex flex-col md:flex-row items-left p-4 lg:ml-0 ml-10 md:space-x-5 lg:mt-0 mt-48 lg:w-full text-lg w-[250px] lg:bg-[#151514] bg-gray-900">
            <li className="font-sans"><a href="/hero">Home</a></li>
            <li className="font-sans"><a href="/menu">Menu</a></li>
            <li className="font-sans"><a href="/blog">Blog</a></li>
            <li className="font-sans"><a href="/my-error">Pages</a></li>
            <li className="font-sans"><a href="/about">About</a></li>
            <li className="font-sans"><a href="/shop">Shop</a></li>
            <li className="font-sans"><a href="#">Contact</a></li>
          </ul>
        </nav>

        {/* Search Box */}
        <div className="hidden md:block relative">
          <form onSubmit={handleSearchSubmit} className="flex space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="bg-[#151514] text-center text-lg border-2 w-[310px] h-[54px] border-[#ff9f0d] rounded-3xl text-white pl-4"
            />
            <button type="submit" className="rounded-3xl">
              <i className="fa fa-search p-5 text-white pr-7 transform hover:scale-150 transition duration-500 ease-in-out"></i>
            </button>
          </form>

          {/* Search Suggestions */}
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 w-full bg-white text-black rounded-lg shadow-md z-10">
              {searchResults.map((result) => (
               
             
               <div
                  key={result._id}
                  className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => router.push(`/products/${result._id}`)}
                >
               <Link href={`/products/${result._id}`}>  
                       <img
                  src={result.imageUrl || '/placeholder.png'}
                  alt={result.name}
                  style={{ width: '50px', height: '50px' }}
                />
               </Link>
                  <div>
                  
                    <h3 className="font-bold p-2">{result.name}</h3>
                    <p className="text-sm text-gray-600 p-2"> {result.tags?.join(', ')}</p>
                  </div>
                  
                </div>
               
              ))}
            </div>
            
          )}
        </div>

        {/* Icons and Links */}
        <div className="flex justify-center items-center p-4">
          <a href="/checkout"></a>
          <a href="/cart">
      <div className="relative text-white">
        <ShoppingBag />
        {cartCount > 0 && (
          <span className="absolute top-0 right-0 w-4 h-4 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
            {cartCount}
          </span>
        )}
      </div>
    </a>
          <a href="/sign-up">
            <img
              src="/a-user.png"
              className="pl-7 transform hover:scale-150 transition duration-500 ease-in-out"
              alt="user"
            />
          </a>
        </div>
      </div>

      {/* Hamburger Icon */}
      <div
        className="md:hidden text-white text-2xl cursor-pointer mr-8"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </div>
    </div>
  );
}
