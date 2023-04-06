import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const CustomAuth = styled.div`
  margin-top: auto;
  position: absolute;
  bottom: 0;
  margin-bottom: 36px;
  margin-left: 28px;
  display: flex;

  ${mobile`
    display: none;
  `}
`;

export const CustomInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 12px;
  justify-content: center;
`;

export const SpanName = styled.span`
  color: rgba(0, 0, 0, 1);
  font-size: 14px;
`;

export const SpanPosition = styled.span`
  color: rgba(117, 117, 117, 1);
  font-size: 12px;
`;
