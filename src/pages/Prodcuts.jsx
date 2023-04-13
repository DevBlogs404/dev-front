import React from 'react'
import Product from '../components/Product'

const Prodcuts = () => {
  return (
    <div className='flex flex-col w-full h-full gap-4 p-10 md:flex-row md:flex-wrap'>
        <Product name={"Green high-neck green sweater"} price={"Rs. 2299"} rating={"4.9"} />
        <Product />
        <Product />
        <Product />
    </div>
  )
}

export default Prodcuts