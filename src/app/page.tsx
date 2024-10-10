import Banner from '@/components/Banner';
import ProductList from '@/components/ProductList';

import { getData } from '@/helpers';



const  Home =async () => {

  const endPoint = 'https://dummyjson.com/products'

  const {products}= await getData(endPoint)

  
  return (
    <div>
     <Banner/>
     <ProductList products={products}/>
    </div>
  );
};

export default Home;