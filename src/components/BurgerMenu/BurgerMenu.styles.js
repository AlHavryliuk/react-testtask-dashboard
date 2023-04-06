import styled from 'styled-components';

export const CustomBurgerMenu = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  z-index: 3;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  font-size: 32px;

  & button {
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: transparent;
    border: none;
    font-size: 72px;
  }
`;
