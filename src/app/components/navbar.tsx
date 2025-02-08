"use client"

import { ShoppingBag, Menu, X } from "lucide-react"
import type React from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { client } from "@/sanity/lib/client"
import Link from "next/link"

type Product = {
  _id: string
  name: string
  tags?: string[]
  imageUrl?: string
  quantity: number
}

export default function Navbar() {
  const [cartCount, setCartCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchResults, setSearchResults] = useState<any[]>([])
  const router = useRouter()

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const totalItems = cart.reduce((acc: number, item: Product) => acc + item.quantity, 0)
    setCartCount(totalItems)
  }, [])

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
          { query: `${searchQuery}*` },
        )
        setSearchResults(results)
      }
      fetchData()
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`)
    }
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex justify-center items-center w-full bg-[#151514] sticky top-0 z-50">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div className="flex flex-wrap justify-between items-center w-full max-w-[1320px] h-auto md:h-[87px] px-4 md:px-6 lg:px-8 border-b-4 border-[#ff9f0d]">
        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto py-4 md:py-0">
          <h1 className="font-bold text-[24px] text-[#ff9f0d]">
            Food<span className="text-white">tuck</span>
          </h1>
          <button onClick={toggleMenu} className="md:hidden text-white focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Menu */}
        <nav
          className={`${
            isOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-start md:items-center w-full md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-5 w-full md:w-auto text-lg text-white py-4 md:py-0">
            <li className="font-sans hover:text-[#ff9f0d] transition-colors duration-300">
              <Link href="/hero">Home</Link>
            </li>
            <li className="font-sans hover:text-[#ff9f0d] transition-colors duration-300">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="font-sans hover:text-[#ff9f0d] transition-colors duration-300">
              <Link href="/blog">Blog</Link>
            </li>
            <li className="font-sans hover:text-[#ff9f0d] transition-colors duration-300">
              <Link href="/my-error">Pages</Link>
            </li>
            <li className="font-sans hover:text-[#ff9f0d] transition-colors duration-300">
              <Link href="/about">About</Link>
            </li>
            <li className="font-sans hover:text-[#ff9f0d] transition-colors duration-300">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="font-sans hover:text-[#ff9f0d] transition-colors duration-300">
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </nav>

        {/* Search Box */}
        <div className="hidden md:block relative w-full md:w-auto mt-4 md:mt-0">
          <form onSubmit={handleSearchSubmit} className="flex space-x-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products..."
              className="bg-[#151514] text-center text-lg border-2 w-full md:w-[310px] h-[54px] border-[#ff9f0d] rounded-3xl text-white pl-4"
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
                      src={result.imageUrl || "/placeholder.png"}
                      alt={result.name}
                      className="w-12 h-12 object-cover rounded"
                    />
                  </Link>
                  <div className="ml-2">
                    <h3 className="font-bold">{result.name}</h3>
                    <p className="text-sm text-gray-600">{result.tags?.join(", ")}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Icons and Links */}
        <div className="flex justify-center items-center space-x-4 mt-4 md:mt-0">
          <Link href="/cart">
            <div className="relative text-white">
              <ShoppingBag />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>
          <Link href="/sign-up">
            <img
              src="/a-user.png"
              className="w-6 h-6 transform hover:scale-125 transition duration-300 ease-in-out"
              alt="user"
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

