import React, { useEffect, useState } from 'react'
import Container from '../components/Container'
import { MdClose, MdDelete } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { cartRemove, quantityMinuF, quantityPlusF } from '../slices/AddToCard'
import { Link } from 'react-router-dom'

const Cart = () => {
    const data = useSelector((state) => state.addToCardS.cartItems)
    const [totalPrice,setTotalPrice]=useState(0)
    let total = 0;
    useEffect(()=>{
        data.map((item)=>{
            total+=item.price*item.quantity
        })
        setTotalPrice(total);  
    },[data])
    const dispatch = useDispatch()
    function handleMinus(item) {
        dispatch(quantityMinuF(item))
    }
    function handlePlus(item) {
        dispatch(quantityPlusF(item))
    }
    function handleRemoveCart(item) {
        dispatch(cartRemove(item))
    }
    return (
        <>
            <Container>
                <div className="my-10 md:my-20 overflow-x-auto">
                    <h2 className='text-3xl font-bold text-yellow-500 text-center uppercase mb-6'>Shopping Cart</h2>
                    {
                        data.length>0 
                        ?
                        <div className="">
                        <table className='w-full border-collapse text-left text-white'>
                            <thead className=' bg-green-900'>
                                <tr>
                                    <th className='px-5 py-3 border border-green-800'>Product</th>
                                    <th className='px-5 py-3 border border-green-800'>Price</th>
                                    <th className='px-5 py-3 border border-green-800'>Quantity</th>
                                    <th className='px-5 py-3 border border-green-800'>SubTotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((item) => (
                                        <tr>
                                            <td className='px-5 py-3 border border-green-900'>
                                                <div className="flex gap-3 items-center whitespace-nowrap">
                                                    <MdClose onClick={()=>handleRemoveCart(item)} className='text-2xl text-red-500 cursor-pointer shrink-0' />
                                                    <img className='w-25 bg-white' src={item.image} alt={item.title} />
                                                    <p> {item.title} </p>
                                                </div>
                                            </td>
                                            <td className='px-5 py-3 border border-green-800'> ${item.price} </td>
                                            <td className='px-5 py-3 border border-green-800'>
                                                <div className="sm:flex-row flex-col flex gap-3">
                                                    <button onClick={()=>handleMinus(item)} className='border block border-white px-4 cursor-pointer rounded-md duration-300 hover:bg-white hover:text-green-950'>-</button>
                                                    <button className='border block border-white px-4 rounded-md'> {item.quantity} </button>
                                                    <button onClick={()=>handlePlus(item)} className='border block border-white px-4 cursor-pointer rounded-md duration-300 hover:bg-white hover:text-green-950'>+</button>
                                                </div>
                                            </td>
                                            <td className='px-5 py-3 border border-green-800'> ${item.price*item.quantity} </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="text-right">
                            <h3 className='text-2xl font-semibold text-yellow-500 mt-5'>Total Price: {totalPrice}</h3>
                            <button className='bg-white border border-white px-5 py-2 text-green-950 text-lg font-medium cursor-pointer rounded-md mt-5 duration-300 hover:bg-green-950 hover:text-white'>Proceed to Checkout</button>
                        </div>
                    </div>
                    :
                    <div className="overflow-hidden flex py-10 justify-center">
                        <div className="text-center">
                            <h3 className='text-3xl font-semibold text-yellow-500 py-5'>Your cart is currently empty.</h3>
                            <Link to={'/'} className='bg-white border border-white px-5 py-2 text-green-950 text-lg font-medium cursor-pointer rounded-md duration-300 hover:bg-green-950 hover:text-white'>Return to Home</Link>
                        </div>
                    </div>
                    }
                </div>
            </Container>
        </>
    )
}

export default Cart