import styled from 'styled-components';

export const CustomPaginations = styled.ul`
  display: grid;
  grid-template-columns: repeat(8, 24px);
  height: 24px;
  gap: 12px;

  & li {
    background: #f5f5f5;
    border: 1px solid rgba(238, 238, 238, 1);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    border-radius: 4px;
    transition: all .250s;

    &:hover:not(:nth-of-type(6)) {
      background: rgba(89, 50, 234, 1);
      border-color: rgba(89, 50, 234, 1);
      color: white;
    }

    &:nth-of-type(6) {
      background: none;
      border: none;
    }
  }
`;
