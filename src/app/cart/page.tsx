"use client"

import Footer from "../components/footer"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type CartItem = {
  _id: string
  name: string
  price: number
  quantity: number
  imageUrl?: string
}

export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)
    const savedCart = JSON.parse(localStorage.getItem("cart") || "[]")
    setCart(savedCart)
  }, [])

  const handleProceedToCheckout = () => {
    localStorage.setItem("checkoutCart", JSON.stringify(cart))
    router.push("/checkout-page")
  }

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart)
    localStorage.setItem("cart", JSON.stringify(updatedCart))
  }

  const handleRemove = (id: string) => {
    const updatedCart = cart.filter((item) => item._id !== id)
    updateCart(updatedCart)
  }

  const handleQuantityChange = (id: string, amount: number) => {
    const updatedCart = cart.map((item) =>
      item._id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item,
    )
    updateCart(updatedCart)
  }

  const calculateTotal = () => cart.reduce((total, item) => total + item.price * item.quantity, 0)

  if (!isClient) {
    return null // or a loading spinner
  }

  return (
    <section className="flex flex-col justify-center items-center w-full bg-white">
      <div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans">Shopping Cart</h1>
          <ul className="text-white flex justify-center space-x-2 mt-2 text-sm sm:text-base">
            <li>
              <a href="/hero" className="p-2 hover:text-[#ff9f0d]">
                {" "}
                Home &gt;{" "}
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-[#ff9f0d] p-2">
                {" "}
                Shopping Cart
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-4 sm:p-6 w-full max-w-7xl">
        <div className="flex justify-between items-center border-b pb-4 text-sm sm:text-base">
          <p className="w-1/3 sm:w-[200px] font-bold">Product</p>
          <p className="font-bold hidden sm:block">Price</p>
          <p className="font-bold">Quantity</p>
          <p className="font-bold hidden sm:block">Total</p>
          <p className="font-bold">Remove</p>
        </div>

        {cart.map((item) => (
          <div
            key={item._id}
            className="flex flex-wrap sm:flex-nowrap justify-between items-center mt-4 sm:mt-6 border-b pb-4"
          >
            <div className="flex w-full sm:w-[200px] mb-2 sm:mb-0">
              {item.imageUrl && (
                <img
                  src={item.imageUrl || "/placeholder.svg"}
                  alt={item.name}
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded"
                />
              )}
              <p className="ml-2 sm:ml-4 font-bold text-sm sm:text-base">{item.name}</p>
            </div>
            <p className="text-sm sm:text-base">${item.price}</p>
            <div>
              <button
                className="px-2 sm:px-3 py-1 font-bold text-sm sm:text-lg border"
                onClick={() => handleQuantityChange(item._id, -1)}
              >
                -
              </button>
              <span className="px-2 sm:px-4 font-bold text-sm sm:text-base">{item.quantity}</span>
              <button
                className="px-2 sm:px-3 py-1 font-bold text-sm sm:text-lg border"
                onClick={() => handleQuantityChange(item._id, 1)}
              >
                +
              </button>
            </div>
            <p className="text-sm sm:text-base hidden sm:block">${(item.price * item.quantity).toFixed(2)}</p>
            <button className="text-red-500 font-bold text-sm sm:text-base" onClick={() => handleRemove(item._id)}>
              X
            </button>
          </div>
        ))}

        <h2 className="text-right text-xl sm:text-2xl font-bold mt-4 sm:mt-6">
          Total Bill: ${calculateTotal().toFixed(2)}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-start w-full max-w-7xl mt-6 sm:mt-10 px-4 sm:px-6">
        <div className="w-full lg:w-1/2 p-4 mb-6 lg:mb-0">
          <h1 className="text-2xl sm:text-3xl font-bold">Coupon Code</h1>
          <p className="text-sm sm:text-base">Enter a coupon code to avail discounts on your order.</p>
          <div className="flex mt-4">
            <input
              type="text"
              className="w-full sm:w-[500px] h-12 sm:h-[62px] border-2 p-2 text-sm sm:text-base"
              placeholder="Enter coupon code"
            />
            <button className="w-20 sm:w-[89px] h-12 sm:h-[62px] bg-[#FF9F0D] text-white font-bold text-sm sm:text-base">
              Apply
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <h1 className="text-2xl sm:text-3xl font-bold">Total Bill</h1>
          <div className="border-2 p-4 sm:p-6">
            <div className="flex justify-between items-center mt-4 sm:mt-6">
              <p className="text-base sm:text-xl font-bold">Cart Subtotal</p>
              <p className="text-base sm:text-xl font-bold">${calculateTotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center mt-4 sm:mt-6">
              <p className="text-sm sm:text-base text-[#4F4F4F]">Shipping Charge</p>
              <p className="text-sm sm:text-base text-[#4F4F4F]">$0.00</p>
            </div>
            <div className="flex justify-between items-center mt-4 sm:mt-6">
              <p className="text-base sm:text-xl font-bold">Total Amount</p>
              <p className="text-base sm:text-xl font-bold">${calculateTotal().toFixed(2)}</p>
            </div>

            <button
              onClick={handleProceedToCheckout}
              className="w-full mt-4 sm:mt-6 h-12 sm:h-[64px] bg-[#FF9F0D] text-white text-lg sm:text-2xl font-bold"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}

