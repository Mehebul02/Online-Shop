
'use client'
import Container from "@/shared/Container";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { Product } from "../../type";
import MainLoader from "./MainLoader";

interface Props{
    products:Product[];
}

const ProductList = ({products}:Props) => {
  
    return (
        <Container className="py-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
           

        
            {/* {
                products?.map((item:Product)=>(
                    <ProductCard key={item?.id} product={item}/>
                ))
            } */}
            <MainLoader/>
            
        </Container>
    );
};

export default ProductList;