import React from 'react';
import styled from 'styled-components'

export default function Navigation(): JSX.Element {
  return (
      <List>
        <li>Home</li>
        <li>Search</li>
        <li>Bookmarks</li>
      </List>
  );
}

const List = styled.ul`
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`