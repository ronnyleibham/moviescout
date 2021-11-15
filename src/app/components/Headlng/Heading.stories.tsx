import React from 'react';
import Heading from './Heading';

export default {
  title: 'Component/Heading',
  component: Heading,
};

export const Headline_Large = (): JSX.Element => (
  <Heading size="large">Big Heading</Heading>
);
export const Headline_Small = (): JSX.Element => (
  <Heading size="small">Small Heading</Heading>
);
