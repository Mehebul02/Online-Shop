import { notFound } from '@/assets';
import Container from '@/shared/Container';
import Image from 'next/image';
import React from 'react';

const NotFoundPage = () => {
    return (
        <Container className='flex justify-center items-center h-screen'>
            <Image src={notFound} alt='notFound'/>
        </Container>
    );
};

export default NotFoundPage;