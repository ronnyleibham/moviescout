import React from 'react';
import Tag from './Tag';
export default {
  title: 'Component/Tag',
  component: Tag,
};
export const NotActive = (): JSX.Element => (
  <Tag tagStatus={false}> Action</Tag>
);
export const Active = (): JSX.Element => <Tag tagStatus={true}>Action</Tag>;
