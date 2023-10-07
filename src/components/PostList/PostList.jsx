import React from 'react';
import { StyledUl } from './PostList.styled';
import PostListItem from 'components/PostListItem/PostListItem';

export const PostList = ({ devices, onDelete }) => {
  return (
    <StyledUl>
      {devices.map(device => {
        return (
          <PostListItem onDelete={onDelete} device={device} key={device.id} />
        );
      })}
    </StyledUl>
  );
};
