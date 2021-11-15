import React from 'react';
import ButtonBookmark from './ButtonBookmark';

export default {
  title: 'Component/ButtonBookmark',
  component: ButtonBookmark,
};

export const notClicked = (): JSX.Element => <ButtonBookmark clicked={false} />;
export const Clicked = (): JSX.Element => <ButtonBookmark clicked={true} />;
