import React from 'react';
import type { ReactNode } from 'react';
import styled from 'styled-components';

type TagProps = {
  children: ReactNode;
  tagStatus?: boolean;
  numberOfItems?: number;
};

export default function Tag({
  children,
  tagStatus,
  numberOfItems,
}: TagProps): JSX.Element {
  return (
    <TagStyleActive tagStatus={tagStatus}>{`${children} ${
      numberOfItems ? numberOfItems : ''
    }`}</TagStyleActive>
  );
}
const TagStyleActive = styled.span<Partial<TagProps>>`
  background-color: ${(props) => (props.tagStatus ? '#FFC700' : '#2A2A2A')};
  color: white;
  border-radius: 3.5em;
  padding: 7px 15px;
  text-transform: uppercase;
`;
