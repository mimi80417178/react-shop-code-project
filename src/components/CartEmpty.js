import React from 'react';
import Title from './Title'
import styled from 'styled-components';

export default function CartEmpty() {
    return <>
        <CartEmptyColor>
            <div className='CartEmptyColor'>
                <Title title="YOUR CART.EMPTY NOW..." />
            </div>
        </CartEmptyColor>
    </>
}


const CartEmptyColor = styled.div`
.CartEmptyColor{
   color: rgb(223, 24, 24);    
}
`;