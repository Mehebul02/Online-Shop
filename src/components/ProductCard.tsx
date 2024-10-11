import Link from "next/link";
import { Product } from "../../type";
import Image from "next/image";
import Sidebar from "./Sidebar";

const ProductCard = ({product}:{product:Product}) => {
    return (
        <div className="border border-gray-400 hover:shadow-lg hover:shadow-black/30 duration-200 rounded-md overflow-hidden group relative">
            {/* images  */}
            <Link href={'/product'}> <Image  src={product.images[0]} alt="productImage" width={500} height={500} priority={true} className="w-full h-64 object-contain hover:scale-110 duration-300"></Image> </Link>
           {/* sidebar  */}
           <Sidebar/>
            <p className="absolute top-2 right-2 bg-logoColor text-white px-3 py-1 text-xs rounded-md">{product?.discountPercentage}$</p>
           
            {/* description  */}
            <div className="p-4 font-jost">
            <p className="text-md capitalize text-gray-600">{product?.category}</p>
            <h2 className="text-md font-semibold">{product?.title}</h2>
            </div>
        </div>
    );
};

export default ProductCard;