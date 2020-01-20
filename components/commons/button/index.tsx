import React
//, { useState, useEffect } 
from 'react'
// import Link from 'next/link'
// import { global } from '../../../utils/constants'
import styled from 'styled-components'

interface IProps {
    children: any;
    borderColor: string;
    color1?: string;
    color2?: string;
    inverted?: boolean;
    primary: any;
}

// @ts-ignore
const InxtButton: React.FunctionComponent<IProps> = ({ children, borderColor, primary, color1, color2, inverted }: any) => {

const Button = styled.button`
    background: ${ primary ? color1 : color2 };
    color: ${ primary ? color2 : color1 };
    z-index: 2;
    font-size: 0.85rem;
    margin: 5px 0 5px 0;
    width: 100%;
    // padding: 0.25em 1em;
    border: 0.9px solid ${ primary ? color2 : color1 };
    border-radius: 3px;
    :focus {
        outline: 0;
    }
    :hover {
        cursor: pointer;
    }
`;

return(
    <>
        <Button onClick={() => console.log('me clickearon we')}>{children}</Button>
    </>
);
}

export default React.memo(InxtButton);