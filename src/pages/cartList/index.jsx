import React, { useContext } from 'react'
import { ShoppingContext } from '../../context'
import { useNavigate } from 'react-router-dom'
import { CartTile } from '../../components/cartTile'

export const CartList = () => {
  const {cartItems}=useContext(ShoppingContext)
  const navigate = useNavigate();

  return (
    <div className='max-w-5xl mx-auto max-md:max-w-xl py-4'>
      <h1 className='text-2xl font-bold text-gray-800 text-center'>My Cart Page</h1>
      <div className='grid md:grid-cols-3 gap-8 mt-12'>
        <div className='md:col-span-2 space-y-4'>
          {
            cartItems?.length?
            cartItems.map((single)=>{
              return (<CartTile single={single}/>)
            })
            :<h2>No Items in the Cart</h2>
          }
        </div>
        <div className='bg-gray-100 rounded-sm p-4 h-max'>
          <h3 className='text-xl font-extrabold text-gray-950 border-b border-gray-300 pb-2'>
            Order Summary
          </h3>
          <ul className='text-gray-700 mt-4 space-y-2'>
            <p className='flex flex-wrap text-sm font-bold'>
              Total <span className='font-bold text-md text-gray-950'>&nbsp;{cartItems?.reduce((a,c)=> a+c.totalPrice ,0).toFixed(2)}</span>
            </p>
          </ul>
          <div className='mt-5 flex gap-2'>
            <button className='text-sm px-4 py-3 bg-black text-white font-extrabold rounded-lg'>CheckOut</button> 
            <button onClick={()=>navigate('/')} className='text-sm px-4 py-3 bg-black text-white font-extrabold rounded-lg'>Continue Shopping</button> 
          </div>
        </div>
      </div>
    </div>

  )
}
