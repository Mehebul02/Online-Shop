
'use client'
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Product, StateType } from '../../type';
import { useDispatch, useSelector } from 'react-redux';
import { adToCart } from '@/redux/onlineShopSlice';
import toast from 'react-hot-toast';
import { FaMinus, FaPlus } from 'react-icons/fa';

const AddToCartButton = ({ product, className }: { product: Product, className?: string }) => {

    const { cart } = useSelector((state: StateType) => state?.onlineShop);
    const [existingProduct, SetExistingProduct] = useState(null);

    const dispatch = useDispatch()

    const handleAdToCart = () => {
        if (product) {
            dispatch(adToCart(product))
            toast.success(`${product?.title.substring(0, 10)}....added successfully!`)
        }
    }

    return (

        <>
            <div className='flex self-start items-center  justify-center gap-2 py-2 mb-2'>
                <button className='bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-sky-200 rounded-full
            text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]'>
                    <FaMinus />
                </button >
                <p className='text-base font-semibold w-10 text-center'>1</p>
                <button className='bg-[#f7f7f7] text-black p-2 border-[1px] border-gray-200 hover:border-sky-200 rounded-full
            text-sm hover:bg-white duration-200 cursor-pointer disabled:text-gray-300 disabled:hover:bg-[#f7f7f7]'>

                    <FaPlus />
                </button>
            </div>

        </>
        // <button onClick={handleAdToCart} className={twMerge('bg-transparent border border-sky-600 text-black rounded-full py-1.5 hover:bg-logoColor hover:text-white duration-300 my-2', className)}>
        //     Add To Cart
        // </button>
    );
};

export default AddToCartButton;