import { banner } from "@/assets";
import Container from "@/shared/Container";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";

const Banner = () => {
  return (
    <div className="bg-[#115061] py-20 text-themeWhite mb-20">
      <Container className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6">
        {/* text  */}
        <div className="flex flex-col gap-5 text-center lg:text-start">
          <p className="text-md">Starting at $999.90</p>
          <h1 className="text-xl lg:text-5xl font-bold max-w-[500px]">The best tablet Collection 2024</h1>
          <h1>
            Exclusive offer <span className="text-orange-500">-30%</span> off
            this week
          </h1>
          <button className="flex items-center gap-1 bg-themeWhite text-black rounded-md w-32  px-0 justify-center text-sm font-semibold hover:bg-transparent hover:text-themeWhite py-3 border border-transparent hover:border-white/40 duration-200">
            Shop Now <GoArrowRight className="text-lg" />
          </button>
        </div>
        {/* image  */}
        <div>
          <Image src={banner} alt="banner" className="w-52 lg:w-96"/>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
