'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { logo } from "@/assets";
import Container from '@/shared/Container';
import { RiCloseLine, RiSearchLine } from 'react-icons/ri';
const MiddleHeader = () => {
    const [searchValue, setSearchValue] = useState("");
    return (
        <div className='border-b-[1px] border-b-gray-400'>
            <Container className='py-5 flex justify-between items-center gap-4 md:gap-6 lg:gap-20'>
                <Image src={logo} alt="logo" className="w-28" />

                {/* Search ber  */}
                <div className='hidden md:inline-flex flex-1 h-10 relative'>
                <input
            type="text"
            placeholder="Search products here..."
            className="w-full h-full outline-none border-2 border-themeColor px-4"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
           {searchValue && (
            <RiCloseLine
              onClick={() => setSearchValue("")}
              className="text-xl absolute top-2.5 right-12 text-gray-500 hover:text-red-500 cursor-pointer duration-200"
            />
          )}
            <span className="w-10 h-10 bg-themeColor/80 inline-flex items-center justify-center text-white absolute top-0 right-0 border border-themeColor hover:bg-themeColor duration-200 cursor-pointer">
            <RiSearchLine />
          </span>
                </div>
                {/* text ber  */}
                <div>
<h1>Text  ber</h1>
                </div>
            </Container>
        </div>
    );
};

export default MiddleHeader;