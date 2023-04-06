import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 65px;

  & svg:nth-of-type(1) {
    ${mobile`
      display: none;
    `}
  }
  & svg:nth-of-type(2) {
    display: none;
    
    ${mobile`
     display: block;
     margin-left: auto;
    `}
  }
`;

export const CustomLogo = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 26px;

  ${mobile`
    justify-content: center;
  `}

  &::after {
    content: 'v.01';
    color: rgba(131, 131, 131, 1);
    font-size: 10px;
    margin-left: 4px;

    ${mobile`
    display: none;
  `}
  }
`;
