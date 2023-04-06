import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const CustomSubContainer = styled.div`
  width: 1134px;
  padding: 41px 95px 30px 71px;
  display: flex;
  flex-direction: column;
  gap: 51px;
  background-color: #fafbff;

  ${mobile`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px;
  `}
`;

export const GreetingTitle = styled.h2`
  ${mobile`
    display: none;
  `}
`;
