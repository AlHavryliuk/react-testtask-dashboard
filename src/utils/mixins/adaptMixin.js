import { css } from 'styled-components';

export const mobile = content => css`
  @media screen and (max-width: 768px) {
    ${content}
  }
`;
