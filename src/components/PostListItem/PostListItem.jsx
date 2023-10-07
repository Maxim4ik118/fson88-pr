import { StyledLi } from 'components/PostList/PostList.styled';
import React from 'react';

const PostListItem = ({ device, onDelete }) => {
  return (
    <StyledLi>
      <img className="itemImg" src={device.coverImage} alt={device.title} />
      <h3>title: {device.title}</h3>
      <p>brand:{device.brand}</p>
      <p>type:{device.type}</p>
      <p>price:{device.price}$</p>
      <button onClick={() => onDelete(device.id)}>&times;</button>
    </StyledLi>
  );
};

export default PostListItem;
