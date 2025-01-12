"use client";

import { useState } from "react";


// Define the product type
type Product = {
  image: string;
  title: string;
  price: number;
  Category: string;
};

type CartItem = Product & {
  quantity: number;
};

const ProductDisplay = () => {
  // State for the dynamic content
  const [currentProduct, setCurrentProduct] = useState<number>(0);
  const [cart, setCart] = useState<CartItem[]>([]);

  // Array of products
  const products: Product[] = [
    
    
    {
      image: "/mask5.png", // Replace with the third product's image
      title: "Drink",
      price: 23.0,
      Category: "Drink",
    },
    {
      image: "/mask4.png", // Replace with the third product's image
      title: "Country Bureger",
      price: 45.0,
      Category: "Burger",
    },
    {
      image: "/mask3.png", // Replace with the third product's image
      title: "Bureger",
      price: 21.0,
      Category: "Burger",
    },
    {
      image: "/mask2.png", // Replace with the third product's image
      title: "Choclate Muffin",
      price: 28.0,
      Category: "Choclate",
    },
    {
      image: "/mask1.png", // Replace with the third product's image
      title: "Fresh Lime",
      price: 28.0,
      Category: "Drink",
    },

    
    
    {
      image: '/mask6.png',
      title: 'Pizza',
      price: 43.0,
      Category: 'Pizza',
    },
    
    {
      image: '/mask7.png',
      title: 'Yummy Chicken Chup',
      price: 54.0,
      Category: 'Pizza',
    },
    {
      image: '/mask8.png',
      title: 'Sandwichs',
      price: 25.0,
      Category: 'Sandwich',
    },
    {
      image: '/mask9.png',
      title: 'Cheez Butter',
      price: 12.0,
      Category: 'Cheez & Butter',
    },
    
  ];

  // Function to handle the "Next" button click
  const handleNext = () => {
    setCurrentProduct((prev) => (prev + 1) % products.length);
  };

  // Function to handle the "Prev" button click
  const handlePrev = () => {
    setCurrentProduct((prev) =>
      prev === 0 ? products.length - 1 : prev - 1
    );
  };

  // Function to handle adding to the cart
  const addToCart = (product: Product) => {
    const existingItem = cart.find((item) => item.title === product.title);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.title === product.title
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Function to update the quantity of items
  const updateQuantity = (title: string, delta: number) => {
    setCart(
      cart
        .map((item) =>
          item.title === title
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate totals
  const deliveryCharge = 5.0;
  const discount = 0.2;
  const taxRate = 0.1; // 10%
  const subtotal = cart.reduce(
  
    (total, item) => total + item.price * item.quantity,
    0
  );
  const tax = subtotal * taxRate;
  const dis = subtotal * discount;
  const total = subtotal + deliveryCharge + tax - dis ;

  return (



<section className=
'  flex flex-col    w-[1320px] h-[600px] lg:mt-[700px] lg:-ml-[1000px] sticky z-50  '>



      <div className="flex flex-col bg-[url('/mask3.png')] bg-cover bg-center   h-[500px]">
      {/* Main Product Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex w-full lg:w-[1320px] lg:h-[718px] p-4 " >
      
        {/* Product Image */}
        
        <div className="p-4 ">
          <img
            src={products[currentProduct].image}
            alt={products[currentProduct].title}
          />
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h1 className="text-[32px] md:text[40px] lg:text-[48px] font-sans font-bold">
            {products[currentProduct].title}
          </h1>
          <p className="w-full lg:w-[608px] mt-6 text-white font-sans font-bold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
          </p>
          <h1 className="text-[20px] lg:text-[32px] font-bold mt-12">
            ${products[currentProduct].price.toFixed(2)}
          </h1>
          <div className="flex mt-4">
            <button
              className="hover:text-white bg-[#ffffff] hover:bg-[#FF9F0D] p-2"
              onClick={handlePrev}
            >
              <span className="p-2">&#129032;</span>Prev
            </button>
            <button
              className="hover:text-white bg-[#ffffff] hover:bg-[#FF9F0D] p-2"
              onClick={handleNext}
            >
              Next<span className="p-2">&#129034;</span>
            </button>
          </div>
          
          <button
            className="  mt-4 text-black text-lg w-[191px] h-[50px] bg-[#FF9F0D] hover:text-white  transform hover:scale-110 transition duration-500 ease-in-out  "
            onClick={() => addToCart(products[currentProduct])}
          >
            Add to Cart
          </button>
        </div>



 
{/* Cart Summary */}
        
         <div className="  w-full lg:w-[600px]  bg-gray-100 p-4   rounded-lg shadow-md border-2 border-black">
        <h2 className="text-xl font-bold mb-4">Bill Summary</h2>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item) => (
                <li key={item.title} className="flex items-center my-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 mr-4"
                  />
                  <div className="flex-1">
                    <p className="font-bold">{item.title}</p>
                    <p>
                      ${item.price.toFixed(2)} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      className="w-8 h-8 bg-gray-300 rounded"
                      onClick={() => updateQuantity(item.title, -1)}
                    >
                      -
                    </button>
                    <p className='text-xl p-2' >{item.quantity}</p>
                    <button
                      className="w-8 h-8 bg-gray-300 rounded mx-2"
                      onClick={() => updateQuantity(item.title, 1)}
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <hr className="my-4" />
            <div className='text-[#4F4F4F] text-[16px] font-sans flex justify-between items-center mt-4 ' >
              Subtotal <div>{subtotal}$</div></div>
            <div className='text-[#4F4F4F] text-[16px] font-sans flex justify-between items-center mt-4 ' >
            Shipping <div>{deliveryCharge}$</div></div>
            <div className='text-[#4F4F4F] text-[16px] font-sans flex justify-between items-center mt-4 ' >
              Discount   <p>20%</p></div>
            <div className='text-[#4F4F4F] text-[16px] font-sans flex justify-between items-center mt-4 ' >
              Tax <div>{tax.toFixed(2)}$</div></div>
            <h3 className="text-lg font-bold text-[#4F4F4F]  font-sans flex justify-between items-center mt-4 ">
              Total <div>{total.toFixed(2)}$</div></h3>
              <div className='p-4 flex justify-center items-center mt-2   font-sans  ' >
                <button className='bg-[#FF9F0D] w-[350px] h-[60px] text-xl hover:text-white
                  transform hover:scale-110 transition duration-500 ease-out  ' >Place an Order  <span className='' >&#129034;</span> </button></div>
          </>
        ) : (
          <p>Your cart is empty.</p>
          
        )}
      </div>
    

    </div>





      </div>










    </section>
  
  );
};

export default ProductDisplay;
