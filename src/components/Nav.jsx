import React, { useEffect, useState } from 'react'
import Container from './Container'
import { Link } from 'react-router-dom'
import { FaCartPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { cartRemove, quantityMinuF, quantityPlusF } from '../slices/AddToCard'
import { MdDeleteForever } from 'react-icons/md'

const Nav = () => {
    const cartData = useSelector((state) => state.addToCardS.cartItems);
    const [cartBox, setcartBox] = useState(false);
    const dispatch = useDispatch()
    function quantityPlus(item) {
        dispatch(quantityPlusF(item))
    }
    function quantityMinus(item) {
        dispatch(quantityMinuF(item))
    }
    function removeCart(item) {
        dispatch(cartRemove(item))
    }
    const [totalPrice,setTotalPrice]=useState(0)
    useEffect(()=>{
        let total = 0
        cartData.map((item)=>{
            total+= item.price*item.quantity
        })
        setTotalPrice(total)
    },[cartData])
    return (
        <>
            <div className="fixed top-0 left-0 w-full bg-green-950 py-5 text-yellow-500 shadow shadow-green-900">
                <Container>
                    <div className="flex justify-between items-center">
                        <Link to={'/'} className='text-3xl font-bold uppercase'>Redux</Link>
                        <ul className='flex gap-x-5'>
                            <li><Link to={'/'} className='font-medium text-base duration-300 hover:text-gray-100'>Home</Link></li>
                            <li><Link to={'/cart'} className='font-medium text-base duration-300 hover:text-gray-100'>Cart</Link></li>
                            {/* <li><Link to={'/counter'} className='font-medium text-base duration-300 hover:text-gray-100'>Counter</Link></li> */}
                        </ul>
                        <button onClick={() => setcartBox(!cartBox)} className='cursor-pointer text-2xl relative'> <FaCartPlus />
                        {
                            cartData.length>0
                            ?
                            <span className='bg-yellow-500 text-green-950 text-xs h-6 min-w-6 rounded-full flex  justify-center items-center absolute -top-4 -right-4'>{cartData.length}</span>
                            :
                            ''
                        }
                        </button>
                    </div>
                </Container>
            </div>
            <section className='pb-19'></section>
            {
                cartBox && <div className="fixed top-19 right-0 w-full md:w-1/3 bg-green-950/95 h-screen text-gray-100 p-5 md:p-10 shadow shadow-green-800 backdrop-blur-xl overflow-auto">
                    <div className="mb-5 justify-between flex items-center">
                        <h4 className='text-xl font-semibold'>Shopping Cart</h4>
                    <h4 className='text-xl font-semibold'>Total: ${totalPrice.toFixed(2)} </h4>
                    </div>
                    {
                        cartData.map((item) => (
                            <div className="bg-gray-100 text-green-950 mb-2.5 p-2 rounded-md shadow-[0px_0px_10px] shadow-green-500 relative">
                                <div className="flex gap-2.5 items-center">
                                    <img className='w-30' src={item.image} alt={item.title} />
                                    <div className="">
                                        <h4> <b>Product:</b> {item.title} </h4>
                                        <p><b>Price:</b> ${item.price} </p>
                                        <div className="flex items-center gap-1">
                                            <p><b>Quantity:</b></p>
                                            <button onClick={()=>quantityMinus(item)} className='cursor-pointer border border-green-950 px-4 rounded-md'>-</button>
                                            
                                            <button className=' border border-green-950 px-4 rounded-md'>{item.quantity}</button>
                                            
                                            <button onClick={()=>quantityPlus(item)} className='cursor-pointer border border-green-950 px-4 rounded-md'>+</button>
                                        </div>
                                        <p><b>Sub Total</b> ${item.price*item.quantity} </p>
                                    </div>
                                </div>
                                <button onClick={()=>removeCart(item)} className='cursor-pointer absolute top-2 left-2'><MdDeleteForever className='text-3xl text-red-500 ' /></button>
                            </div>
                        ))
                    }
                    {
                        cartData.length>0
                            ?
                            <Link to='/cart' onClick={() => setcartBox(!cartBox)} className='inline-block bg-white border border-white px-5 py-2 text-green-950 text-lg font-medium cursor-pointer rounded-md duration-300 hover:bg-green-950 hover:text-white'>View cart</Link>
                            :
                            <div className="text-center">
                            <h3 className='text-3xl font-semibold text-yellow-500 py-5'>Your cart is currently empty.</h3>
                            <Link to={'/'} onClick={() => setcartBox(!cartBox)} className='bg-white border border-white px-5 py-2 text-green-950 text-lg font-medium cursor-pointer rounded-md duration-300 hover:bg-green-950 hover:text-white'>Return to Home</Link>
                        </div>
                    }
                </div>
                
            }
        </>
    )
}

export default Nav