import Link from "next/link";
import { Product } from "../../type";
import Image from "next/image";
import Sidebar from "./Sidebar";
import ProductPrice from "./ProductPrice";
import AddToCartButton from "./AddToCartButton";

const ProductCard = ({product}:{product:Product}) => {
  
    return (
        <div className="border border-gray-400 hover:shadow-lg hover:shadow-black/30 duration-200 rounded-md overflow-hidden group relative">
            {/* images  */}
            <Link href={{
                pathname:`/products/${product?.id}`,
                query:{id:product?.id}
            }}> <Image  src={product.images[0]} alt="productImage" width={500} height={500} priority={true} className="w-full h-64 object-contain hover:scale-110 duration-300"></Image> </Link>
           {/* sidebar  */}
           <Sidebar/>
            <p className="absolute top-2 right-2 bg-logoColor text-white px-3 py-1 text-xs rounded-md">{product?.discountPercentage}$</p>
           
            {/* description  */}
            <div className="border-t border-gray-200  py-2 px-4 flex flex-col justify-between h-40 font-jost">
            <div>
            <p className="text-md capitalize text-gray-600">{product?.category}</p>
            <h2 className="text-md font-semibold">{product?.title}</h2>
            <ProductPrice product={product}/>
            </div>
            <AddToCartButton product={product}/>
            </div>
        </div>
    );
};

export default ProductCard;