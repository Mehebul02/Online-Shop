import Link from "next/link";
import { Product } from "../../type";
import Image from "next/image";

const ProductCard = ({product}:{product:Product}) => {
    return (
        <div className="border border-gray-400 hover:shadow-lg hover:shadow-black/30 duration-200 rounded-md overflow-hidden group relative">
            {/* images  */}
            <Link href={'/product'}> <Image  src={product.images[0]} alt="productImage" width={500} height={500} priority={true} className="w-full h-64 object-contain hover:scale-110 duration-300"></Image> </Link>
            <p className="absolute top-2 right-2 bg-logoColor text-white px-3 py-1 rounded-md">{product?.discountPercentage}$</p>
            {/* description  */}
        </div>
    );
};

export default ProductCard;