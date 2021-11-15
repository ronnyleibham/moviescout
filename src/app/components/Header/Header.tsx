import React from 'react';
import type { ReactNode } from 'react';

type HeaderProps = {
    children: ReactNode;
};

export default function Header({children}: HeaderProps): JSX.Element{
    return (
        <h1>{children}<span>.</span></h1>
    )
}