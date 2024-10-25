import ProductImages from "@/components/ProductImages";
import { getData } from "@/helpers";
import Container from "@/shared/Container";
import { Product } from "../../../../type";
import ProductPrice from "@/components/ProductPrice";
import { MdStar } from "react-icons/md";
import { FaRegEye } from "react-icons/fa";
import PriceFormat from "@/components/PriceFormate";


interface Props {
    params: {
        id: string;
    }

}

const productSinglePage = async({ params }: Props) => {
    const { id } = params;
    const endPoint = `https://dummyjson.com/products/${id}`
    const product:Product = await getData(endPoint)
    console.log(product)

    return (
        <Container className="py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
           {/* product image  */}
           <ProductImages images={product?.images}/>
           {/* product details  */}
           <div className="flex flex-col  gap-4">
           <h1 className="text-3xl font-bold font-jost">{product?.title}</h1>
           <div className="flex justify-between items-center gap-5">
            <ProductPrice product={product}/>
         
           <div className="flex items-center gap-1">
           <div className="text-base text-gray-400 flex items-center ">
            {
               Array?.from({length:5})?.map((_,index)=>{
                const filed = index+1 <= Math.floor(product.rating);
                const halfFiled = index+1 > Math.floor(product?.rating) && index <Math.ceil(product?.rating)
                return <MdStar key={index} className={`${filed ? 'text-[#fa8900]': halfFiled ?'text-[#f7ca00]': 'text-gray-600'}`}/>
               })
            }
              </div>
              <p>{`(${product?.rating?.toFixed(1)}) reviews`}</p>
           </div>
           </div>
           <p className="flex items-center gap-2 font-jost"><FaRegEye className="mr-1"/> 250+ <span className="mr-2">peoples are viewing this right now</span> </p>
          <p className="flex items-center gap-2 font-jost"> You are saving <PriceFormat amount={product?.discountPercentage / 100}  className="text-base font-semibold text-green-500"/> upon purchase</p>   
          <div className="">
            <p className="text-sm tracking-wider font-jost">{product?.description}</p>
            <p className="text-base mt-3">{product?.warrantyInformation}</p>
          </div>


           </div>
           {/* product review */}

        </Container>
    );
};

export default productSinglePage;