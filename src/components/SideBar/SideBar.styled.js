import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const CustomSideBar = styled.div`
  display: block;
  flex-direction: column;
  width: 306px;
  height: 100vh;
  padding: 36px 28px;
  position: relative;

  ${mobile`
    height: auto;
    width: 100%;
  `}
`;
