import React from 'react'
import styled from 'styled-components';

export default function Title({ title }) {
    return (
        <ProductTitle>
            <div className='product-title'>
                <h1>{title}</h1>
            </div>
        </ProductTitle>
    )
}

const ProductTitle = styled.div`
.product-title{
    font-family: 'Permanent Marker', cursive;
    text-align: center;
    justify-content: center;
    align-content: center;
    padding: 20px;
    
}
`;