import { notFound } from '@/assets';
import Button from '@/components/Button';
import Container from '@/shared/Container';
import Image from 'next/image';
import React from 'react';

const NotFoundPage = () => {
    return (
        <Container className='flex flex-col gap-2 justify-center items-center h-screen'>
            <Image src={notFound} alt='notFound' className='max-w-60'/>
            <p className='text-xl font-semibold'>Oops! Page not found</p>


            <Button className='flex items-center gap-1 bg-[#1C60B0] text-white hover:bg-[#1C60B0] ' href='/'>Back To Home</Button>
        </Container>
    );
};

export default NotFoundPage;