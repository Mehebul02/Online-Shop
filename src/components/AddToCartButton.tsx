
'use client'
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Product } from '../../type';
import { useDispatch } from 'react-redux';
import { adToCart } from '@/redux/onlineShopSlice';
import toast from 'react-hot-toast';

const AddToCartButton = ({ product, className }: { product: Product, className?: string }) => {
    const dispatch = useDispatch()

    const handleAdToCart = () => {
        if (product) {
            dispatch(adToCart(product))
            toast.success(`${product?.title.substring(0,10)}....added successfully!`)
        }
    }

    return (
        <button onClick={handleAdToCart} className={twMerge('bg-transparent border border-sky-600 text-black rounded-full py-1.5 hover:bg-logoColor hover:text-white duration-300 my-2', className)}>
            Add To Cart
        </button>
    );
};

export default AddToCartButton;