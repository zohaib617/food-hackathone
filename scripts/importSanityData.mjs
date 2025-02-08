import { createClient } from '@sanity/client'
import axios from 'axios'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import path from 'path'

// Load environment variables from .env.local
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

// Create Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: '2021-08-31'
})

// Upload image to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    console.log(`Uploading image: ${imageUrl}`)
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(response.data)
    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop()
    })
    console.log(`Image uploaded successfully: ${asset._id}`)
    return asset._id
  } catch (error) {
    console.error('Failed to upload image:', imageUrl, error)
    return null
  }
}

// Main function to import data
async function importData() {
  try {
    console.log('Fetching products from API...')
    const response = await axios.get('https://sanity-nextjs-rouge.vercel.app/api/foods')
    const products = response.data
    console.log(`Fetched ${products.length} products`)

    for (const product of products) {
      console.log(`Processing product: ${product.name}`)
      let imageRef = null

      // Upload image if available
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image)
      }

      // Create product object for Sanity
      const sanityProduct = {
        _type: 'product',
        name: product.name,
        category: product.category, // Added category field
        price: product.price,
        originalPrice: product.originalPrice || product.price, // Added originalPrice field
        tags: product.tags || [], // Added tags field
        image: imageRef ? {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: imageRef,
          },
        } : undefined,
        description: product.description,
        available: product.available || true, // Added available field
      }

      console.log('Uploading product to Sanity:', sanityProduct.name)
      const result = await client.create(sanityProduct)
      console.log(`Product uploaded successfully: ${result._id}`)
    }

    console.log('Data import completed successfully!')
  } catch (error) {
    console.error('Error importing data:', error)
  }
}

// Start data import
importData()
