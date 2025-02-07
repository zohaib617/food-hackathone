'use client'

import { useEffect, useState } from 'react';

type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl?: string;
};


export default function CheckoutPage() {
    const [cart, setCart] = useState<CartItem[]>([]);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const savedCart = JSON.parse(localStorage.getItem('checkoutCart') || '[]');
        setCart(savedCart);
      }
    }, []);
  
    const calculateTotal = () =>
      cart.reduce((total, item) => total + item.price * item.quantity, 0);
  



    const handleCheckout = async () => {
        const getInputValue = (selector: string) => {
          const input = document.querySelector(selector) as HTMLInputElement;
          return input ? input.value : "";
        };
      
        const userInfo = {
          firstName: getInputValue('input[placeholder="First Name"]'),
          lastName: getInputValue('input[placeholder="Last Name"]'),
          email: getInputValue('input[type="email"]'),
          phone: getInputValue('input[type="tel"]'),
          address1: getInputValue('input[placeholder="Address 1"]'),
          city: getInputValue('input[placeholder="City"]'),
          zipCode: getInputValue('input[placeholder="Zip Code"]'),
          country: getInputValue('input[placeholder="Country"]'),
        };
      
        const response = await fetch("/api/checkout", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ cart, userInfo }),
        });
      
        const data = await response.json();
        if (data.url) {
          window.open(data.url, "_self"); // Redirect to Stripe
        } else {
          alert("Error: " + data.error);
        }
      };
            





    return (

<section className="bg-white w-[1920px] flex justify-center items-center " >




<div className='grid grid-cols-2 w-[1320px]  ' >
<div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>

          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" >
          <div className="">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" className="w-full p-2 border rounded-md" />
          </div>
          
          <div className="">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input type="tel" className="w-full p-2 border rounded-md" />
          </div>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" >
          
          <div className="">
            <label className="block text-sm font-medium text-gray-700">Company</label>
            <input type="text" className="w-full p-2 border rounded-md" />
          </div>

          <div>
              <label className="block text-sm font-medium text-gray-700">Country</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
          
          </div>
          
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          
            <div>
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input type="text" className="w-full p-2 border rounded-md" />
            </div>
            <div className="">
            <label className="block text-sm font-medium text-gray-700">Zip Code</label>
            <input type="text" className="w-full p-2 border rounded-md" />
          </div>
         
         
          </div>
          
         
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" >

          <div className="">
            <label className="block text-sm font-medium text-gray-700">Address 1</label>
            <input type="text" className="w-full p-2 border rounded-md" />
          </div>
          
          <div className="">
            <label className="block text-sm font-medium text-gray-700">Address 2</label>
            <input type="text" className="w-full p-2 border rounded-md" />
          </div>
          

          </div>
          
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Billing Address</label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center space-x-2">
                <input type="radio" name="billing" className="w-4 h-4" />
                <span>Same as shipping</span>
              </label>
            </div>
          </div>
          
          <div className="mt-6 flex justify-around items-center">
            
          <button className="w-[424px] h-[56px] bg-white text-black p-3 rounded-md hover:bg-[#FF9F0D] hover:text-white">
              Back to cart
            </button>
            <button 
            onClick={handleCheckout}
            className="w-[424px] h-[56px] bg-white text-black p-3 rounded-md hover:bg-[#FF9F0D] hover:text-white">
              Proceed to Payment
            </button>
          </div>
        </form>
      </div>
       {/* Cart Summary on the Right Side */}
       <div className=" bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
        {cart.map((item) => (
          <div key={item._id} className="flex justify-between items-center border-b pb-2 mb-2">
            <div className="flex items-center">
              {item.imageUrl && <img src={item.imageUrl} alt={item.name} className="w-12 h-12 rounded mr-4" />}
              <p className="font-bold">{item.name}</p>
            </div>
            <p>{item.quantity} × ${item.price}</p>
          </div>
        ))}
        <div className='flex justify-between items-center mt-4' >
        <h2 className="text-xl font-bold ">Total: </h2>
        <p className='text-xl font-bold' >${calculateTotal().toFixed(2)}</p>
        </div>
      </div>
  
</div>


    </section>
    );
  }
  