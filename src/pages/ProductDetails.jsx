import React from 'react'
import Container from '../components/Container'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data));
    }, []);
    return (
        <>
            <section className='py-10 md:py-20'>
                <Container>
                    <div className="max-w-120 shadow shadow-green-800 p-10 rounded-md mx-auto bg-gray-100">
                        <img src={product.images} alt="" className='w-full' />
                        <h3 className='text-3xl font-semibold mt-4 mb-1'> {product.title} </h3>
                        <h4 className='text-2xl font-semibold'> {product.price} </h4>
                        <button className='cursor-pointer bg-green-950 py-2.5 text-gray-100 text-base font-medium block w-full rounded-md mt-4 border-2 border-green-950 duration-300 hover:bg-gray-100 hover:text-green-950 hover:font-semibold'>Add To Cart</button>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ProductDetails

