import React from 'react';
import styled from 'styled-components';

type ActionlinkProps = {
  url: string;
  text: string;
};

function ActionLink({ url, text }: ActionlinkProps): JSX.Element {
  return (
    <Actionlink href={url} target="_blank">
      {text}
    </Actionlink>
  );
}

export default ActionLink;

const Actionlink = styled.a`
  background-color: #ffc700;
  color: #111111;
  text-transform: uppercase;
  text-decoration: none;
  padding: 13px 105px;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
`;
