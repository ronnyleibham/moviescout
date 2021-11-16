import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import BookmarkIcon from '../Icons/BookmarkIcon';
import SearchIcon from '../Icons/SearchIcon';
import HomeIcon from '../Icons/HomeIcon';

export default function Navigation(): JSX.Element {
  const [isHomeActive, setIsHomeActive] = useState<boolean>(true);
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [isBookmarksActive, setIsBookmarksActive] = useState<boolean>(false);
  return (
    <List>
      <li>
        <Link
          to="/"
          onClick={() => {
            setIsHomeActive(true);
            setIsBookmarksActive(false);
            setIsSearchActive(false);
          }}
        >
          <HomeIcon stroke={isHomeActive ? 'yellow' : 'white'} />
        </Link>
      </li>
      <li>
        <Link
          to="/search"
          onClick={() => {
            setIsHomeActive(false);
            setIsBookmarksActive(false);
            setIsSearchActive(true);
          }}
        >
          <SearchIcon stroke={isSearchActive ? 'yellow' : 'white'} />
        </Link>
      </li>
      <li>
        <Link
          to="/bookmarks"
          onClick={() => {
            setIsHomeActive(false);
            setIsBookmarksActive(true);
            setIsSearchActive(false);
          }}
        >
          <BookmarkIcon stroke={isBookmarksActive ? 'yellow' : 'white'} />
        </Link>
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
