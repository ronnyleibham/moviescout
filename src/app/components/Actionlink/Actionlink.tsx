import React from 'react';

type ActionlinkProps = {
  url: string;
  text: string;
};

function Actionlink({ url, text }: ActionlinkProps): JSX.Element {
  return <a href={url}>{text}</a>;
}

export default Actionlink;
