import React from 'react';
import Heading from './Heading';

export default {
  title: 'Component/Heading',
  component: Heading,
};

export const Headline1 = (): JSX.Element => (
  <Heading size="large">Big Heading</Heading>
);
export const Headline2 = (): JSX.Element => (
  <Heading size="small">Small Heading</Heading>
);
