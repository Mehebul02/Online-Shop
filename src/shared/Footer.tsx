import Image from "next/image";
import Container from "./Container";
import { logo } from "@/assets";

import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { GoDotFill } from "react-icons/go";
import { BsEnvelopeAt } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import Title from "@/components/Title";
import SocialLinks from "@/components/SocialLinks";
import { navigation } from "@/constants/indexs";

const Footer = () => {
  return (
    <div className="bg-lightBg py-10 lg:py-20  pb-16  mt-20">

<Container className="flex flex-col lg:flex-row justify-between gap-6 " >
        <div className="flex flex-col items-start gap-y-5 w-52">
          <Link href={"/"}>
            <Image src={logo} alt="logo" className="w-20" />
          </Link>
          <p className="">
            Could you clarify what the short description is   for? For example, is it for your online   profile, portfolio, or a project description? This will help me tailor the description accordingly!
          </p>
          {/* <SocialLink/> */}
          <SocialLinks iconStyle="bg-themeWhite text-black border-themeColor  inline-flex p-2 rounded-full hover:text-sky-600 hover:border-sky-300 duration-300 cursor-pointer"/>
        </div>
        <div>
          <Title>My Account</Title>
          <div className="mt-3 flex flex-col gap-y-2">
            {navigation?.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="flex items-center gap-x-2  text-gray-700 hover:text-themeColor duration-200 font-medium"
              >
                <GoDotFill size={10} />
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Title>Information</Title>
          <div className="mt-3 flex flex-col gap-y-2">
            {navigation?.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="flex items-center gap-x-2 text-gray-700 hover:text-themeColor duration-200 font-medium"
              >
                <GoDotFill size={10} />
                {item?.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <Title>Talk to Us</Title>
          <div className="mt-3 ">
            <div className="">
              <p className="text-sm gap-y-4">Got Questions? Call us</p>
              <Title>+670 413 90 762</Title>
            </div>
            <div className="mt-3">
              <p className="text-base flex items-center gap-x-3 gap-2 text-gray-600">
                <BsEnvelopeAt /> OnlineShop@suppert.com
              </p>
              <p className="text-base flex items-center gap-x-3 gap-2 text-gray-600">
                <GrLocation /> Dhaka, Bangladesh
              </p>
            </div>
          </div>
        </div>
      </Container>
        <h1 className="text-center">Copyright © 2024 Meh. All rights reserved</h1>

    </div>

);

};

export default Footer;
