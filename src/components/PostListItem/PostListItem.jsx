import { StyledLi } from 'components/PostList/PostList.styled';
import React from 'react';
import { ReactComponent as IconHeart } from 'assets/icons/heart.svg';
const PostListItem = ({ toggleFavorite, onOpenModal, device, onDelete }) => {
  return (
    <StyledLi>
      <img className="itemImg" src={device.coverImage} alt={device.title} />
      <h3>title: {device.title}</h3>
      <p>brand:{device.brand}</p>
      <p>type:{device.type}</p>
      <p>price:{device.price}$</p>
      <button onClick={() => onDelete(device.id)}>&times;</button>
      <button onClick={() => onOpenModal(device)}>See more</button>
      <button
        onClick={() => toggleFavorite(device.id)}
        style={{ color: device.isFavorite ? 'red' : '' }}
      >
        <IconHeart />
      </button>
    </StyledLi>
  );
};

export default PostListItem;
