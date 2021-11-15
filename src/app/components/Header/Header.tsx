import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type HeaderProps = {
    children: ReactNode;
};

export default function Header({children}: HeaderProps): JSX.Element{
    return (
        <H1>{children}<Span>.</Span></H1>
    )
}

const H1 = styled.h1`
    color: #fff;
    font-family: Poppins;
    background-color: #111;
    font-weight: bold;
    font-size: 30px;
`;

const Span = styled.span`
    color: #ffc700;
`