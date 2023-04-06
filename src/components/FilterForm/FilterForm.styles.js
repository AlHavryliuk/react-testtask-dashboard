import styled from 'styled-components';

export const CustomFilterInput = styled.input`
  padding: 10px 15px 10px 40px;
  color: 'black';
  font-size: 12px;
  background-color: rgba(249, 251, 255, 1);
  border-radius: 10px;
  border: none;
  max-width: 216px;
  width: 100%;

  &::placeholder {
    color: rgba(181, 183, 192, 1);
  }
`;

export const CustomFilterForm = styled.form`
  position: relative;

  & svg {
    position: absolute;
    margin: 7px 8px;
  }
`;
