'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

// Type for the Product data  
type Product = {
  _id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  tags: string[];
  imageUrl?: string;
  description: string;
  available: boolean;
};

type FoodListProps = {
  selectedCategories: string[];
};

export default function FoodList({ selectedCategories }: FoodListProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filter, setFilter] = useState<string>('allProduct');
  const [sortOrder, setSortOrder] = useState<string>('default'); // new state for sorting

  useEffect(() => {
    const fetchProducts = async () => {
      
      const tagFilter = filter !== 'allProduct' ? `&& "${filter}" in tags` : '';
      
      // the query to filter by selected categories
      const categoryFilter = selectedCategories.length
        ? `&& category in [${selectedCategories.map((category) => `"${category}"`).join(', ')}]`
        : '';
        
      const query = `*[_type == "product" ${categoryFilter} ${tagFilter}]{
        _id,
        name,
        category,
        price,
        originalPrice,
        tags,
        "imageUrl": image.asset->url,
        description,
        available
      }`;

      try {
        const data = await client.fetch(query);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [selectedCategories, filter]); // Re-fetch when categories change

  useEffect(() => {
    if (sortOrder === 'high') {
      setProducts((prevProducts) =>
        [...prevProducts].sort((a, b) => b.price - a.price) // Sort by high price
      );
    } else if (sortOrder === 'low') {
      setProducts((prevProducts) =>
        [...prevProducts].sort((a, b) => a.price - b.price) // Sort by low price
      );
    } else {
      // Default sort, could be alphabetically by name or any other logic you prefer
      setProducts((prevProducts) =>
        [...prevProducts].sort((a, b) => a.name.localeCompare(b.name))
      );
    }
  }, [sortOrder]); // Re-sort whenever the sort order changes

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex justify-center items-center w-[332px] h-[46px] m-4">
        <h1 className="text-[20px]">Sort By :</h1>
        <select
          className="w-[236px] h-[46px] bg-gray-200"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="allProduct">All Product</option>
          <option value="New">Newst</option>
          <option value="Best Seller">Best Seller</option>
          <option value="Populer">Populer</option>
        </select>
      </div>

      <div className="flex justify-center items-center w-[332px] h-[46px] m-4">
        <h1 className="text-[20px]">Show :</h1>
        <select
          className="w-[236px] h-[46px] bg-gray-200"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="high">High Price</option>
          <option value="low">Low Price</option>
        </select>
      </div>

      <div className="w-[332px] h-[46px]"></div>

      <div className="grid grid-cols-3 gap-4 w-[800px] ">
        {products.map((product) => (
          <div key={product._id} className="">
            <Link href={`/products/${product._id}`}>
              <div>
                <img
                  src={product.imageUrl || '/placeholder.png'}
                  alt={product.name}
                  style={{ width: '250px', height: '300px' }}
                />
                <h2 className="font-bold text-lg">{product.name}</h2>
                <p className="text-gray-600">Price: ${product.price}</p>
                {product.originalPrice && (
                  <p className="line-through text-red-500">
                    ${product.originalPrice}
                  </p>
                )}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
