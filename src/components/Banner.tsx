import { banner, tabletPhone } from "@/assets";
import { bannerText } from "@/constants";
import Container from "@/shared/Container";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import Button from "./Button";

const Banner = () => {
 
  return (
    <div className="bg-[#11405A] py-20 text-themeWhite mb-20">
      <Container className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6">
        {/* text  */}
        <div className="flex flex-col gap-5 text-center lg:text-start">
          <p className="text-md">Starting at $999.90</p>
          <h1 className="text-xl lg:text-5xl font-bold max-w-[500px] leading-[60px]">The best tablet Collection 2024</h1>
          <h1>
            Exclusive offer <span className="text-orange-500">-30%</span> off
            this week
          </h1>
          <Button>
            Shop Now <GoArrowRight className="text-lg" />
          </Button>
        </div>
        {/* image  */}
        <div>
          <Image src={tabletPhone} alt="banner" className="w-52 lg:w-96"/>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
