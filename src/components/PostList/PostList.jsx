import React from 'react';
import { StyledUl } from './PostList.styled';
import PostListItem from 'components/PostListItem/PostListItem';

export const PostList = ({ devices }) => {
  return (
    <StyledUl>
      {devices.map(device => {
        return <PostListItem device={device} key={device.id} />;
      })}
    </StyledUl>
  );
};
