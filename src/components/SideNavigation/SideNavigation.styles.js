import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const CustomSideNavigation = styled.ul``;

export const CustonNavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 13px;
  gap: 16px;
  border-radius: 8px;
  transition: all 250ms;

  ${mobile`
    display: none;
  `}

  & svg {
    fill: #9197b3;
    stroke: #9197b3;
  }

  &:hover {
    background-color: rgba(89, 50, 234, 1);
    color: white;

    & svg {
      fill: white !important;
      stroke: white;
    }
  }

  &::after {
    content: '›';
    margin-left: auto;
  }
`;
