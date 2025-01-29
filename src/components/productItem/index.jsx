import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShoppingContext } from '../../context';

export const ProductItem = ({singleItem}) => {
    const {handleAddToCart} = useContext(ShoppingContext)
    const navigate=useNavigate();
    const navToDetails=(currProduct)=>{
        navigate(`/productDetails/${currProduct}`)
    }
  return (
    <div className='relative group border border-cyan-700 p-6 cursor-pointer'>
        <div className='overflow-hidden aspect-w-1 aspect-h-1'>
            <img src={singleItem?.thumbnail} alt={singleItem?.title} className='object-cover transition-all group-hover:scale-110'/>
        </div>
        <div className="flex items-start justify-between mt-4 space-x-4">
            <div className='text-gray-900 sm:text-sm  text-xs md:text-base font-bold'>
                <p className='w-[100px] overflow-hidden text-ellipsis whitespace-nowrap'>
                    {singleItem.title}
                </p>
            </div>
            <div className='text-right'>
                 <p className='text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]'>$ {singleItem?.price}</p>
            </div>
        </div>
        <button onClick={()=>navToDetails(singleItem.id)} className='p-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg hover:bg-green-600 hover:scale-110'>View Details</button>
        <button onClick={()=>handleAddToCart(singleItem)} className='p-5 mt-5 w-full py-2 rounded-none bg-black text-white font-bold text-lg hover:bg-green-600 hover:scale-110'>Buy</button>
    </div>
  )
}
