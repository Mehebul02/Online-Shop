import Banner from '@/components/Banner';
import { getData } from '@/helpers';



const  Home =async () => {

  const endPoint = 'https://dummyjson.com/products'

  const product= await getData(endPoint)
  console.log(product);
  
  return (
    <div>
     <Banner/>
    </div>
  );
};

export default Home;