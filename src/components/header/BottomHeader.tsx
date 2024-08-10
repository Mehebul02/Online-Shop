import Container from '@/shared/Container';
import React from 'react';
import {navigation} from '@/constants/index'
import Link from 'next/link';
const BottomHeader = () => {
    return (
        <div className='border-b border-b-gray-400'>
            <Container className='flex justify-between items-center py-1'>
                <div className='text-xs md:text-sm flex items-center gap-5 font-medium'>
                    {
                        navigation?.map((item)=>(
                            <Link href={item?.href} key={item?.title}>{item.title}</Link>
                        ))
                    }
                </div>
                <p className='text-xs text-gray-400 font-medium hidden md:inline-flex'>Hotline: <span className='text-black'> +8801642287450</span></p>

            </Container>
           
        </div>
    );
};

export default BottomHeader;