import Container from '@/shared/Container';
import React from 'react';
import { CiDeliveryTruck } from 'react-icons/ci';

const TopHeader = () => {
    return (
        <div className='bg-[#010f1c] '>
            <Container className='flex items-center justify-between'>
                <p className='text-white w-full md:mx-auto text-sm  flex items-center md:justify-normal justify-center '> <CiDeliveryTruck className='text-[#ffb342] text-2xl mr-1'/> FREE Express Shipping On Orders $570+</p>
            <div>
                <h1 className='text-white'>English</h1>
                <h1 className='text-white'>English</h1>
            </div>
            </Container>
        </div>
    );
};

export default TopHeader;