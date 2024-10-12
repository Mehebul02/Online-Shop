import ProductImages from "@/components/ProductImages";
import { getData } from "@/helpers";
import Container from "@/shared/Container";
import { Product } from "../../../../type";
import ProductPrice from "@/components/ProductPrice";
import { MdStar } from "react-icons/md";


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
                return <MdStar key={index}/>
               })
            }
              </div>
              <p>{`(${product?.rating?.toFixed(1)}) reviews`}</p>
           </div>
           </div>
           </div>
           {/* product review */}

        </Container>
    );
};

export default productSinglePage;