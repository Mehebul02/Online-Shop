'use client'

import { useSelector } from "react-redux";
import { StateType } from "../../../type";
import Link from "next/link";

const CartProduct = () => {
    const {cart} = useSelector((state:StateType)=>state.onlineShop)
    return (
        <div>
           {cart?.length >0 ? <div>Product</div>:<div className="flex flex-col justify-center items-center space-y-6 h-96 bg-[#f7f7f7] border border-white shadow-md p-10 ">
         <h1 className="text-3xl font-jost font-semibold">Shopping Cart</h1>
            <p>
            Your shopping cart is currently empty. Discover our wide range of products and start adding items to your cart
            </p>
           <Link href='/'> <button className="p-3 text-xl font-jost font-semibold text-white bg-green-700 rounded-md hover:bg-logoColor">Go To Shopping</button></Link>
            </div>}
        </div>
    );
};

export default CartProduct;