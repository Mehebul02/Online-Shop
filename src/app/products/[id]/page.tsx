import ProductImages from "@/components/ProductImages";
import { getData } from "@/helpers";
import Container from "@/shared/Container";
import { Product } from "../../../../type";

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
           <h1>{product?.title}</h1>
           {/* product review */}

        </Container>
    );
};

export default productSinglePage;