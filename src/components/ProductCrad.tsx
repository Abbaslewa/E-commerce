"use client"

import { ProductType } from '@/types'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


const ProductCrad = ({product}:{product:ProductType}) => {
  return (
    <div className='shadow-lg rounded-lg overflow-hidden'>
       <Link href={`/products/${product.id}`}>
        <div className="relative aspect-[2/3]">
          <Image src={product.images[product.colors[0]]} alt={product.name} fill className="object-cover hover:scale-105 transition-all duration-300" />
        </div>
      </Link>

      <div className='flex-col gap-4 p-4'>
        <h1 className="font-medium">{product.name}</h1>
        <p className="text-sm text-gray-500">{product.shortDescription}</p>
      </div>

      <div className='flex items-center gap-4 text-xs'>
       
        <div className='flex flex-col gap-1'>
          <span className="text-gray-500">Size</span>
          <select
              name="size"
              id="size"
              className="ring ring-gray-300 rounded-md px-2 py-1"
              onChange={(e) =>
                handleProductType({ type: "size", value: e.target.value })
              }
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
        </div>
        <div className='flex-col gap-1 flex'>
          <span className="text-gray-500">Color</span>
          <div className='flex flex-center gap-2'>
            {product.colors.map(colors =>(
              <div key={colors} className={`w-5 h-5 rounded-full border-2 border-gray-200 cursor-pointer`} style={{backgroundColor:colors}}></div>  
            ))}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between p-4 border-t border-gray-200'>
        <p className="font-medium">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}

export default ProductCrad