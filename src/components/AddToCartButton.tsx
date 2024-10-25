
'use client'
import React from 'react';
import { twMerge } from 'tailwind-merge';
import { Product } from '../../type';

const AddToCartButton = ({product}:{product:Product}) => {
    return (
        <button onClick={()=>window.alert('click the button')} className={twMerge('bg-transparent border border-sky-600 text-black rounded-full py-1.5 hover:bg-logoColor hover:text-white duration-300 my-2')}>
            Add To Cart
        </button>
    );
};

export default AddToCartButton;