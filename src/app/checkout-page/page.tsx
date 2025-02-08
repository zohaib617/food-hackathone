"use client"
import Link from "next/link";
import { useEffect, useState } from "react"
import type React from "react" // Added import for React
import { loadStripe } from "@stripe/stripe-js"

type CartItem = {
  _id: string
  name: string
  price: number
  quantity: number
  imageUrl?: string
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address1: "",
    city: "",
    zipCode: "",
    country: "",
  })

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedCart = JSON.parse(localStorage.getItem("checkoutCart") || "[]")
      setCart(savedCart)
    }
  }, [])

  const calculateTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value })
  }

  const handleCheckout = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!userInfo.email || !userInfo.firstName || !userInfo.lastName) {
      alert("Please fill out all required fields!")
      return
    }

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart, userInfo }),
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorText}`)
      }

      const data = await response.json()

      if (!data.sessionId) {
        throw new Error("No session ID returned from the server")
      }

      // Redirect to Stripe Checkout
      const stripe = await stripePromise
      const { error } = await stripe!.redirectToCheckout({ sessionId: data.sessionId })

      if (error) {
        throw new Error(error.message)
      }
    } catch (error) {
      console.error("Checkout Error:", error)
      alert(`Checkout Error: ${error instanceof Error ? error.message : String(error)}`)
    }
  }

  return (
    <section className="bg-white w-full flex justify-center items-center py-10 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-7xl gap-6">
        {/* Left Side - Checkout Form */}
        <div className="w-full max-w-3xl mx-auto p-4 sm:p-6 bg-white shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
          <form>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={userInfo.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="First Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={userInfo.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={userInfo.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={userInfo.phone}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Phone Number"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input
                  type="text"
                  name="country"
                  value={userInfo.country}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Country"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input
                  type="text"
                  name="city"
                  value={userInfo.city}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="City"
                />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Zip Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={userInfo.zipCode}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Zip Code"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Address 1</label>
                <input
                  type="text"
                  name="address1"
                  value={userInfo.address1}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  placeholder="Address 1"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
              <Link href="/cart"> <button className="w-full sm:w-[180px] h-[48px] bg-gray-300 text-black p-3 rounded-md hover:bg-gray-400">
                Back to Cart
              </button></Link> 
              <button
                onClick={handleCheckout}
                className="w-full sm:w-[180px] h-[48px] bg-[#FF9F0D] text-white p-3 rounded-md hover:bg-[#e08c00]"
              >
                Proceed to Payment
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Order Summary */}
        <div className="w-full max-w-3xl mx-auto bg-white p-4 sm:p-6 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item._id} className="flex justify-between items-center border-b pb-2 mb-2">
                <div className="flex items-center">
                  {item.imageUrl && (
                    <img src={item.imageUrl || "/placeholder.svg"} alt={item.name} className="w-12 h-12 rounded mr-4" />
                  )}
                  <p className="font-bold">{item.name}</p>
                </div>
                <p>
                  {item.quantity} × ${item.price}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}

          <div className="flex justify-between items-center mt-4">
            <h2 className="text-xl font-bold">Total:</h2>
            <p className="text-xl font-bold">${calculateTotal().toFixed(2)}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

