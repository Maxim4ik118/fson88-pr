import styled from 'styled-components';

export const StyledLi = styled.li`
  border: 1px solid green;
  border-radius: 16px;
  padding: 20px;
  max-width: 100%;

  .itemImg {
    width: 100%;
    height: 200px;
  }
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 16px;
`;
