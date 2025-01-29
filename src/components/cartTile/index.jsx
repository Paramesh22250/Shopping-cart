import React, { useContext } from 'react'
import { ShoppingContext } from '../../context'

export const CartTile = ({single}) => {
    const{removeFromCart, handleAddToCart}=useContext(ShoppingContext)
  return (
    <>
    <div className='grid grid-cols-3 items-start gap-5'>
        <div className='col-span-2 flex items-start gap-4'>
            <div className='w-28 h-28 max-sm:w-20 shrink-0 bg-gray-400 p-1 rounded-sm'>
                <img src={single?.thumbnail} alt={single.title} className='w-full h-full object-contain'/>
            </div>
            <div>
                <h3 className='text-base  font-bold text-gray-900'>{single.title}</h3>
                <button onClick={()=>removeFromCart(single,true)} className='text-sm px-4 py-3 bg-black text-white font-extrabold rounded-lg'>Remove</button>
            </div>
        </div>
        <div className='ml-auto'>
            <h3 className='font-bold text-lg text-gray-900'>${single?.totalPrice.toFixed(2)}</h3>
            <div className='mt-5'>
                <button onClick={()=>removeFromCart(single,false)} className='disabled:opacity-65 mx-2 border-2 border-[#000] w-12 h-12 rounded-lg'
                disabled = {single?.quantity<=1}>-</button>
                <span className='p-3'>{single?.quantity}</span>
                <button 
                onClick={()=>handleAddToCart(single)}
                className='mx-2  border-2 border-[#000] w-12 h-12 rounded-lg'
                >+</button>
            </div>
        </div>
        
    </div>
    <hr className='border border-gray-900'/>
    </>
  )
}
