import React from 'react'
import Container from '../components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const data = useSelector((state)=>state.counterST.value)
  console.log(data);
  
  function handleInc() {
    dispatch(increment(1))
  }
  return (
    <>
      <section className='py-10 md:py-20'>
        <Container>
        <div className="text-center">
          <h1 className='text-5xl text-yellow-500 font-semibold mb-8'> {data} </h1>
          <button onClick={handleInc} className='text-lg font-medium bg-gray-100 rounded-md px-6 py-2.5 text-green-950 cursor-pointer border-2 border-gray-100 duration-300 hover:bg-green-950 hover:text-gray-100'>Increment</button>
        </div>
        </Container>
      </section>
    </>
  )
}

export default Counter