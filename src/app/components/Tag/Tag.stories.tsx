import React from 'react';
import Tag from './Tag';

export default {
  title: 'Component/Tag',
  component: Tag,
};

export const NotActive = (): JSX.Element => (
  <Tag numberOfItems={3} tagStatus={false}>
    Action
  </Tag>
);
export const Active = (): JSX.Element => (
  <Tag numberOfItems={3} tagStatus={true}>
    Action
  </Tag>
);
export const All = (): JSX.Element => <Tag tagStatus={true}>Action</Tag>;
