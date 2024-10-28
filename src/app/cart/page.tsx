import CartProduct from '@/components/cartPage/CartProduct';
import Container from '@/shared/Container';
import React from 'react';

const CartPage = () => {
    return (
        <Container className='py-10'>
          <CartProduct/>
        </Container>
    );
};

export default CartPage;