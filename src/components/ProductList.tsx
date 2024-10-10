
'use client'
import Container from "@/shared/Container";
import Image from "next/image";

const ProductList = ({products}) => {
    console.log(products)
    return (
        <Container>
            {
                products?.map((item)=>(
                    <Image src={item?.images[0]} alt='product' width={500} height={500}/>
                ))
            }
          
        </Container>
    );
};

export default ProductList;