import React from 'react'
import { useDispatch } from 'react-redux'
import { addToardS } from '../slices/AddToCard'
import { Link } from 'react-router-dom';

const Product = ({ image, title, price, id }) => {
  const dispatch = useDispatch();
  function handleCart() {
    dispatch((addToardS({
      image,
      title,
      price,
      id,
      quantity: 1
    })))
  }
  return (
    <Link to={`/productdetails/${id}`}>
      <div className='max-w-full bg-gray-100 rounded-md p-5 shadow-[0px_0px_10px] shadow-green-500'>
        <div className="max-w-full rounded-md overflow-hidden">
          <img src={image} alt="" />
        </div>
        <h3 className='text-lg font-semibold mt-4 mb-1'> {title} </h3>
        <h4 className='text-xl font-semibold'>${price}</h4>
        <button onClick={() => handleCart()} className='cursor-pointer bg-green-950 py-2.5 text-gray-100 text-base font-medium block w-full rounded-md mt-4 border-2 border-green-950 duration-300 hover:bg-gray-100 hover:text-green-950 hover:font-semibold'>Add To Cart</button>
      </div>
    </Link>
  )
}

export default Product