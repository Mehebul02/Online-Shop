
'use client'
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Product } from '../../type';

const AddToCartButton = ({product,className}:{product:Product,className?:string}) => {
    return (
        <button onClick={()=>window.alert('click the button')} className={twMerge('bg-transparent border border-sky-600 text-black rounded-full py-1.5 hover:bg-logoColor hover:text-white duration-300 my-2', className)}>
            Add To Cart
        </button>
    );
};

export default AddToCartButton;