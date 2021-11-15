import React from 'react';
import ActionLink from './Actionlink';

export default {
  title: 'Component/Actionlink',
  component: ActionLink,
};

export const Imdb = (): JSX.Element => (
  <ActionLink url={'http://www.imdb.com'} text={'To imdb'} />
);
