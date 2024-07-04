import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addItem } from '../store/slices/cartSlice';


function Card(props) {
  const [isClicked,setIsClicked] = useState(false);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    setIsClicked(true)
    dispatch(addItem(item));
    props.toast.success("item added successfully!!")
  };
  return (
    <div className="card border border-gray-200  p-3 pb-5 rounded-md hover:shadow  hover:scale-105">
        <img src={props?.product?.image } className=" h-56 sm:h-40 w-full rounded-md "  alt="" />
        <h2 className="product-name truncate text-xl pt-2 font-bold">{props.product.title }</h2>
        <h3 className="truncate text-md pt-2">{props?.product?.description }</h3>
        <h3 className='text-left text-xl font-bold '>${props.product.price }</h3>
        <div className="flex items-center justify-between pt-2">
        <h4 className="rating truncate  py-1 px-2 text-white rounded-md text-[11px] bg-green-500"><i className="fa-solid fa-star"></i><span className="font-bold text-[13px] pl-1">{props?.product?.rating?.rate }</span></h4>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-[7px] px-2 rounded text-sm' onClick={() => addFoodItem(props.product)} disabled={isClicked}>{isClicked ? 'Added' : 'Add to Cart'}
        </button>
        </div>   
    </div>
  )
}

export default Card;