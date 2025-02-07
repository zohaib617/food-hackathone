'use client';

import Footer from '../components/footer';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; 




type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
};


export default function Cart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const router = useRouter();
  const handleProceedToCheckout = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('checkoutCart', JSON.stringify(cart));
    }
    router.push('/checkout-page');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
      setCart(savedCart);
    }
  }, []);

  const updateCart = (updatedCart: CartItem[]) => {
    setCart(updatedCart);
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const handleRemove = (id: string) => {
    const updatedCart = cart.filter(item => item._id !== id);
    updateCart(updatedCart);
  };

  const handleQuantityChange = (id: string, amount: number) => {
    const updatedCart = cart.map(item =>
      item._id === id
        ? { ...item, quantity: Math.max(1, item.quantity + amount) }
        : item
    );
    updateCart(updatedCart);
  };

  const calculateTotal = () =>
    cart.reduce((total, item) => total + item.price * item.quantity, 0);


  return (
    <section className='flex flex-col justify-center items-center w-full lg:w-[1920px] bg-white'>

      <div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[250px] md:h-[350px] lg:h-[410px] flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-white text-[32px] md:text-[48px] lg:text-[56px] font-sans">Shopping Cart</h1>
          <ul className="text-white flex justify-center space-x-2 mt-2">
            <li><a href="/hero" className="p-2 hover:text-[#ff9f0d]"> Home &gt; </a></li>
            <li><a href="/blog" className="hover:text-[#ff9f0d] p-2"> Shopping Cart</a></li>
          </ul>
        </div>
      </div>

      <div className="bg-white p-6 w-[1320px]">
        <div className='flex justify-between items-center border-b pb-4'>
          <p className='w-[200px] font-bold'>Product</p> <p className='font-bold'>Price</p> <p className='font-bold'>Quantity</p> <p className='font-bold'>Total</p> <p className='font-bold'>Remove</p>
        </div>
        
        {cart.map(item => (
          <div key={item._id} className="flex justify-between items-center mt-6 border-b pb-4">
            <div className='flex w-[200px]'>
              {item.imageUrl && (
                <img src={item.imageUrl} alt={item.name} className="w-16 h-16 rounded" />
              )}
              <p className='ml-4 font-bold text-[16px]'>{item.name}</p>
            </div>
            <p>${item.price}</p>
            <div>
              <button className='px-3 py-1 font-bold text-lg border' onClick={() => handleQuantityChange(item._id, -1)}>-</button>
              <span className='px-4 font-bold'>{item.quantity}</span>
              <button className='px-3 py-1 font-bold text-lg border' onClick={() => handleQuantityChange(item._id, 1)}>+</button>
            </div>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
            <button className='text-red-500 font-bold' onClick={() => handleRemove(item._id)}>X</button>
          </div>
        ))}
        
        <h2 className="text-right text-2xl font-bold mt-6">Total Bill: ${calculateTotal().toFixed(2)}</h2>
      </div>

      <div className='flex justify-center items-center w-[1320px] h-[338px] mt-10'>
        <div className='w-[648px] p-4'>
          <h1 className='text-[32px] font-bold'>Coupon Code</h1>
          <p>Enter a coupon code to avail discounts on your order.</p>
          <div className='flex mt-4'>
            <input type="text" className='w-[500px] h-[62px] border-2 p-2' placeholder="Enter coupon code" />
            <button className='w-[89px] h-[62px] bg-[#FF9F0D] text-white font-bold'>Apply</button>
          </div>
        </div>

        <div className='w-[648px]'>
          <h1 className='text-[32px] font-bold'>Total Bill</h1>
          <div className='border-2 p-6'>
            <div className='flex justify-between items-center mt-6'>
              <p className='text-[20px] font-bold'>Cart Subtotal</p>
              <p className='text-[20px] font-bold'>${calculateTotal().toFixed(2)}</p>
            </div>
            <div className='flex justify-between items-center mt-6'>
              <p className='text-[#4F4F4F] mt-4'>Shipping Charge</p>
              <p className='text-[#4F4F4F] mt-4'>$0.00</p>
            </div>
            <div className='flex justify-between items-center mt-6'>
              <p className='text-[20px] font-bold'>Total Amount</p>
              <p className='text-[20px] font-bold'>${calculateTotal().toFixed(2)}</p>
            </div>
            
            <button 
            onClick={handleProceedToCheckout}  
              className='w-full mt-6 h-[64px] bg-[#FF9F0D] text-white text-2xl font-bold'>
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      <Footer />

    </section>
  );
}
