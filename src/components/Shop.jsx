import React, { useEffect, useState } from 'react'
import Container from './Container'
import Product from './Product'
import pImg from '../assets/products.jpg'

const Shop = () => {
    const [products, setProducts] = useState([])
useEffect(()=>{
    fetch('https://dummyjson.com/products')
    .then(res=>res.json())
    .then(data=>setProducts(data.products))
},[])
    return (
        <>
            <Container>
                <div className="my-10 md:my-20">
                    <h2 className='text-3xl font-bold text-yellow-500 text-center uppercase mb-6'>New Launches</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {
                            products.map((item,index)=>(
                                <Product 
                                image={item.images}
                                title={item.title}
                                price={item.price}
                                id={item.id}
                                key={index}
                                />
                            ))
                        }
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Shop