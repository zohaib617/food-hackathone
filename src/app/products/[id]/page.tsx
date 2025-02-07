// In your ProductDetails page
'use client'

import React, { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import Footer from '@/app/components/footer';

type Product = {
  quantity: number;
  _id: string;
  name: string;
  category: string;
  price: number;
  imageUrl?: string;
  description: string;
  available: boolean;
  tags: string;
};

export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params; // Await the params Promise
      setId(resolvedParams.id); // Store the ID in state
    };

    fetchParams();
  }, [params]);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return; // Ensure we have the ID before fetching

      const query = `*[_type == "product" && _id == $id][0]{
        _id,
        name,
        category,
        price,
        "imageUrl": image.asset->url,
        description,
        available,
        tags
      }`;

      try {
        const fetchedProduct = await client.fetch(query, { id });
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existingProduct = cart.find((item: Product) => item._id === product._id);

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count in navbar
    const totalItems = cart.reduce((acc: number, item: Product) => acc + item.quantity, 0);
    window.localStorage.setItem('cartCount', totalItems.toString());

    alert(`${product.name} added to cart!`);
  };

  if (loading) {
    return <p className='text-green-500 text-3xl'>Loading...</p>;
  }

  if (!product) {
    return (
      <div>
        <h1>Product Not Found</h1>
        <p>The product with the provided ID does not exist.</p>
      </div>
    );
  }

  return (
    <section className="bg-white">


<div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[250px] mb-20  md:h-[350px]  lg:h-[410px] flex justify-center items-center">
        
        
        <div className="text-center">

        <h1 className="text-white  text-[32px] md:text-[48px] lg:text-[56px] font-sans " >Shop</h1>
        <ul className="text-white flex justify-center space-x-2 mt-2    " >
            <li><a href="/hero" className=" hover:text-[#ff9f0d] ">home   </a></li>
            <li className="">&gt;</li>
            <li><a href="/shop-details" className="hover:text-[#ff9f0d] ">Shop details</a></li>
        </ul>
        </div>
        
        </div>


      <div className="flex border-4 " style={{  padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
        <div className="">
          {product.imageUrl && (
            <img
              src={product.imageUrl}
              alt={product.name}
              style={{ width: '400px', height: '400px', objectFit: 'cover' }}
            />
          )}
        </div>
        <div className="ml-6">
          <div className="flex w-[70px] h-[22px] text-white bg-[#FF9F0D]">
            <p className="flex justify items-center">{product.available ? 'In Stock' : 'Out of Stock'}</p>
          </div>
          <h1 className="text-[48px] font-sans font-bold">{product.name}</h1>
          <p>{product.description}</p>
          <p className="text-[32px] font-bold mt-8">${product.price}</p>
          <button
            className="w-[191px] h-[50px] bg-[#FF9F0D] mt-4 mb-4 text-white"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
          <p>Category: {product.category}</p>
          <p>Tags: {product.tags}</p>
        </div>
      </div>

      <Footer/>
    </section>
  );
}
