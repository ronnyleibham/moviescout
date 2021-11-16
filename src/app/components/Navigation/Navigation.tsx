import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BookmarkIcon from '../Icons/BookmarkIcon';
import SearchIcon from '../Icons/SearchIcon';
import HomeIcon from '../Icons/HomeIcon';

const [isHomeActive, setIsHomeActive] = useState(true);
const [isSearchActive, setIsSearchActive] = useState(false);
const [isBookmarksActive, setIsBookmarksActive] = useState(false);

export default function Navigation(): JSX.Element {
  return (
    <List>
      <li>
        <StyledLink
          to="/"
          onClick={() => {
            setIsHomeActive(true);
            setIsBookmarksActive(false);
            setIsSearchActive(false);
          }}
          status={isHomeActive}
        >
          <HomeIcon fill={isHomeActive ? 'yellow' : 'none'} />
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="/search"
          onClick={() => {
            setIsHomeActive(false);
            setIsBookmarksActive(false);
            setIsSearchActive(true);
          }}
          status={isSearchActive}
        >
          <SearchIcon fill={isHomeActive ? 'yellow' : 'none'} />
        </StyledLink>
      </li>
      <li>
        <StyledLink
          to="/bookmarks"
          onClick={() => {
            setIsHomeActive(false);
            setIsBookmarksActive(true);
            setIsSearchActive(false);
          }}
          status={isBookmarksActive}
        >
          <BookmarkIcon fill={isHomeActive ? 'yellow' : 'none'} />
        </StyledLink>
      </li>
    </List>
  );
}

const List = styled.ul`
  background-color: #0b0b0b;
  color: white;
  display: flex;
  flex-direction: row;
  padding: 1rem 1.5rem;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

type LinkProps = {
  status: boolean;
};

const StyledLink = styled(Link)<LinkProps>`
  text-decoration: none;
`;
