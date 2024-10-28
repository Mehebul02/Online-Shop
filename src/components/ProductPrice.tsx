'use client'

import { useSelector } from "react-redux";
import { Product, StateType } from "../../type";
import PriceFormate from "./PriceFormate";
import { useEffect, useState } from "react";

const ProductPrice = ({ product }: { product: Product }) => {

    const { cart } = useSelector((state: StateType) => state?.onlineShop);
    const [existingProduct, SetExistingProduct] = useState<Product | null>(null);
    useEffect(() => {
        const availableProduct = cart?.find((item) => item?.id === product?.id)
        if (availableProduct) {
            SetExistingProduct(availableProduct)
        }
    }, [cart, product])

    const regularPrice = product?.price;
    const discountPrice = product?.price + product?.discountPercentage / 100;
    return (
        <div className="flex items-center gap-2">

            <PriceFormate className="text-gray-500 line-through font-normal" amount={existingProduct ? discountPrice * existingProduct?.quantity! : discountPrice} />
            <PriceFormate className="font-semibold text-logoColor" amount={existingProduct ? regularPrice * existingProduct?.quantity! : regularPrice} />
        </div>
    );
};

export default ProductPrice;