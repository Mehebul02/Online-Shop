import { Product } from "../../type";
import PriceFormate from "./PriceFormate";

const ProductPrice = ({product}:{product:Product}) => {
    const regularPrice=product?.price;
    const discountPrice= product?.price+product?.discountPercentage/100;
    return (
        <div className="flex items-center gap-2">
            
           <PriceFormate className="text-gray-500 line-through font-normal" amount={regularPrice}/>
           <PriceFormate amount={discountPrice}/>
        </div>
    );
};

export default ProductPrice;