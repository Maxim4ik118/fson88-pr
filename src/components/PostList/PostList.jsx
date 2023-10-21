import React from 'react';
import { StyledUl } from './PostList.styled';
import PostListItem from 'components/PostListItem/PostListItem';

export const PostList = ({
  toggleFavorite,
  onOpenModal,
  devices,
  onDelete,
}) => {
  return (
    <StyledUl>
      {devices.map(device => {
        return (
          <PostListItem
            toggleFavorite={toggleFavorite}
            onOpenModal={onOpenModal}
            onDelete={onDelete}
            device={device}
            key={device.id}
          />
        );
      })}
    </StyledUl>
  );
};
