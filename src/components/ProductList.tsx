
'use client'
import Container from "@/shared/Container";
import Image from "next/image";
import ProductCard from "./ProductCard";
import { Product } from "../../type";

interface Props{
    products:Product[];
}

const ProductList = ({products}:Props) => {
  
    return (
        <Container>
            {
                products?.map((item)=>(
                    <ProductCard key={item?.id} product={item}/>
                ))
            }
          
        </Container>
    );
};

export default ProductList;