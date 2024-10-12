import { getData } from "@/helpers";

interface Props {
    params: {
        id: string;
    }

}

const productSinglePage = async({ params }: Props) => {
    const { id } = params;
    const endPoint = `https://dummyjson.com/products/${id}`
    const product = await getData(endPoint)
    console.log(product)

    return (
        <div>
            <h1>Single page</h1>
        </div>
    );
};

export default productSinglePage;