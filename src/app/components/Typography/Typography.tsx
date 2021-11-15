import React from 'react';
import styled from 'styled-components';

type TypographyProps = {
  type: string;
  children: React.ReactNode;
};

function Typography({ type, children }: TypographyProps): JSX.Element {
  const HeadingElement = getElementByType(type);

  return <HeadingElement>{children}</HeadingElement>;
}

function getElementByType(type: string) {
  switch (type.toUpperCase()) {
    case 'H1':
      return H1;
    case 'H2':
      return H2;
    case 'H3':
      return H3;
    case 'H4':
      return H4;
    default:
      return H1;
  }
}

export default Typography;

const H1 = styled.h1`
  font-size: 30px;
  line-height: 45px;
  font-weight: 700;
`;
const H2 = styled.h2`
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
`;
const H3 = styled.h3`
  font-size: 18px;
  line-height: 27px;
  font-weight: 700;
`;
const H4 = styled.h3`
  font-size: 18px;
  line-height: 27px;
  font-weight: 400;
`;
