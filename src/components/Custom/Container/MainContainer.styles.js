import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const CustomMainContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  display: flex;
  margin: 0 auto;

  ${mobile`
    flex-direction: column;
    text-align: center;
  `}
`;
