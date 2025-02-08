"use client"

import { useState, useEffect } from "react"
import { client } from "@/sanity/lib/client"
import Footer from "@/app/components/footer"
import { ShoppingCart } from "lucide-react"

type Product = {
  quantity: number
  _id: string
  name: string
  category: string
  price: number
  imageUrl?: string
  description: string
  available: boolean
  tags: string
}

export default function ProductDetails({ params }: { params: Promise<{ id: string }> }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [id, setId] = useState<string | null>(null)

  useEffect(() => {
    const fetchParams = async () => {
      const resolvedParams = await params
      setId(resolvedParams.id)
    }

    fetchParams()
  }, [params])

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return

      const query = `*[_type == "product" && _id == $id][0]{
        _id,
        name,
        category,
        price,
        "imageUrl": image.asset->url,
        description,
        available,
        tags
      }`

      try {
        const fetchedProduct = await client.fetch(query, { id })
        setProduct(fetchedProduct)
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  const addToCart = (product: Product) => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]")
    const existingProduct = cart.find((item: Product) => item._id === product._id)

    if (existingProduct) {
      existingProduct.quantity += 1
    } else {
      cart.push({ ...product, quantity: 1 })
    }

    localStorage.setItem("cart", JSON.stringify(cart))

    const totalItems = cart.reduce((acc: number, item: Product) => acc + item.quantity, 0)
    window.localStorage.setItem("cartCount", totalItems.toString())

    alert(`${product.name} added to cart!`)
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-500"></div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h1>
        <p className="text-gray-600">The product with the provided ID does not exist.</p>
      </div>
    )
  }

  return (
    <section className="bg-white">
      <div className="bg-[url('/image/menu.png')] bg-cover bg-center w-full h-[250px] md:h-[350px] lg:h-[410px] flex justify-center items-center mb-12">
        <div className="text-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Shop</h1>
          <ul className="text-white flex justify-center space-x-2 text-sm md:text-base">
            <li>
              <a href="/hero" className="hover:text-[#ff9f0d] transition-colors">
                Home
              </a>
            </li>
            <li>&gt;</li>
            <li>
              <a href="/shop-details" className="hover:text-[#ff9f0d] transition-colors">
                Shop details
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-16">
        <div className="flex flex-col lg:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="lg:w-1/2">
            {product.imageUrl && (
              <img
                src={product.imageUrl || "/placeholder.svg"}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="lg:w-1/2 p-8">
            <div className="flex items-center mb-4">
              <span
                className={`px-2 py-1 text-xs font-semibold rounded ${product.available ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
              >
                {product.available ? "In Stock" : "Out of Stock"}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <p className="text-3xl font-bold text-[#FF9F0D] mb-6">${product.price.toFixed(2)}</p>
            <button
              className="flex items-center justify-center w-full md:w-auto px-6 py-3 bg-[#FF9F0D] text-white rounded-lg hover:bg-[#e08c0b] transition-colors mb-6"
              onClick={() => addToCart(product)}
            >
              <ShoppingCart className="mr-2" />
              Add to cart
            </button>
            <div className="space-y-2">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Category:</span> {product.category}
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Tags:</span> {product.tags}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}

