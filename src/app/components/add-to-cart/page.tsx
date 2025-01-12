'use client'
import React, { useState } from "react";

const ProductDisplay = () => {

const [plus, setPlus] = useState(0)
const handleEvent = ()=> {setPlus(plus+1)

}
const handleEventm = ()=>{setPlus(plus-1)

}


  // State for the dynamic content
  const [currentProduct, setCurrentProduct] = useState(0);

  // Array of products
  const products = [
    {
      image: "/mask7.png",
      title: "Yummy Chicken Chup",
      price: "54.00$",
      Category: "Pizza",
    },
    {
      image: "/mask8.png", // Replace with the second product's image
      title: "Sandwichs",
      price: "25.00$",
      Category: "Sandwich",
    },
    {
      image: "/mask9.png", // Replace with the third product's image
      title: "Cheez Butter",
      price: "12.00$",
      Category: "Cheez & Butter",
    },
    {
      image: "/mask6.png", // Replace with the third product's image
      title: "Pizza",
      price: "43.00$",
      Category: "Pizza",
    },
    {
      image: "/mask5.png", // Replace with the third product's image
      title: "Drink",
      price: "23.00$",
      Category: "Drink",
    },
    {
      image: "/mask4.png", // Replace with the third product's image
      title: "Country Bureger",
      price: "45.00$",
      Category: "Burger",
    },
    {
      image: "/mask3.png", // Replace with the third product's image
      title: "Bureger",
      price: "21.00$",
      Category: "Burger",
    },
    {
      image: "/mask2.png", // Replace with the third product's image
      title: "Choclate Muffin",
      price: "28.00$",
      Category: "Choclate",
    },
    {
      image: "/mask1.png", // Replace with the third product's image
      title: "Fresh Lime",
      price: "28.00$",
      Category: "Drink",
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

  return (
    <div className="flex justify-center items-center mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex w-full lg:w-[1320px] lg:h-[718px] p-4">
        {/* Left images */}
        <div className="justify-between p-4">
          <img src="/suji1.png" alt="food" className="p-3" />
          <img src="/suji2.png" alt="food" className="p-3" />
          <img src="/suji3.png" alt="food" className="p-3" />
          <img src="/suji4.png" alt="food" className="p-3" />
        </div>

        {/* Main product image */}
        <div className="p-4">
          <img src={products[currentProduct].image} alt="product" />
        </div>

        {/* Product details */}
        <div className="p-4">
          <div className="flex justify-between w-full lg:w-[685px]">
            <div className="flex justify-center items-center w-[86px] h-[28px] bg-[#FF9F0D] text-white">
              In stock
            </div>
            <div>
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
          </div>
          <h1 className="text-[32px] md:text[40px] lg:text-[48px] font-sans font-bold">
            {products[currentProduct].title}
          </h1>
          <p className="w-ful lg:w-[608px] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, urna, vitae feugiat pretium donec id elementum. Ultrices
            mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit
            in consequat.
          </p>
          <h1 className="text-[20px] lg:text-[32px] font-bold mt-12">
            {products[currentProduct].price}
          </h1>
          {/* Remaining static content */}
          <div className="flex justify-start items-center mt-4 w-full lg:w-[260px]">
            <span className="fa fa-star text-[#FF9F0D]"></span>
            <span className="fa fa-star text-[#FF9F0D]"></span>
            <span className="fa fa-star text-[#FF9F0D]"></span>
            <span className="fa fa-star text-[#FF9F0D]"></span>
            <span className="fa fa-star text-[#FF9F0D]"></span>
            <p className=""> / 5.0 rating / 22 views</p>
          </div>
          <p className="mt-4">Dictum/cursus/Risus</p>
          <div className="flex justify-between items-center w-full lg:w-[306px] h-[51px] mt-4">
            <button onClick={handleEventm} className="w-[50px] h-[50px] bg-[#ffffff] hover:bg-[#FF9F0D]">
              <span className="text-3xl">-</span>
            </button>
            <div className="flex justify-center items-center text-black text-2xl w-[50px] h-[50px] bg-[#ffffff]">
              {plus}
            </div>
            <button onClick={handleEvent} className="text-black text-2xl w-[50px] h-[50px] bg-[#ffffff] hover:bg-[#FF9F0D]">
              +
            </button>
            <a href="/chackout"><button className="text-black text-lg w-[191px] h-[50px] bg-[#ffffff] hover:bg-[#FF9F0D]">
              Add to Cart
            </button></a>
          </div>
          <div className="text-[#4F4F4F] mt-4 text-lg">
            <p>Add to Wishlist Compare</p>
            <p> Category: {products[currentProduct].Category}</p>
            <p>Tag: Our Shop</p>
            <img src="/social-icon.png" alt="social" className="mt-4" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
