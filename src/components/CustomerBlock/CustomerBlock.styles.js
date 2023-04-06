import styled from 'styled-components';
import { mobile } from 'utils/mixins/adaptMixin';

export const CustomCustomerBlock = styled.div`
  max-width: 968px;
  width: 100%;
  background-color: white;
  padding: 30px 44px 40px 38px;
  box-shadow: 0px 10px 60px rgba(226, 236, 249, 0.5);
  border-radius: 30px;

  & h3 {
    margin-bottom: 7px;
    ${mobile`
      margin-top: 20px;
      margin-bottom: 15px;
    `}
  }

  & h4 {
    ${mobile`
      display: none;
    `}
  }

  ${mobile`
    width: 100%;
    padding: 0;
  `}
`;

export const CustomerList = styled.ul`
  margin-bottom: 30px;
  & li {
    display: grid;
    grid-template-columns: repeat(6, minmax(50px, 1fr));
    text-align: center;
    padding: 24px 0;
    border-bottom: 1px solid rgba(238, 238, 238, 1);

    ${mobile`
      grid-template-columns: minmax(50px, 1fr);
    `}

    &:nth-of-type(1) {
      margin-left: -38px;
      margin-right: -44px;
      padding-left: 44px;
      padding-right: 38px;
      color: rgba(181, 183, 192, 1);

      ${mobile`
          text-align: center;
          display: none;
      `}

      & h5:first-child {
        text-align: left;
      }

      ${mobile`
      text-align: center;
      `}
    }

    & span {
      font-size: 14px;
      line-height: calc(14 / 21px);

      &:first-child {
        text-align: left;
        padding-left: 10px;

        ${mobile`
          text-align: center;
        `}
      }
    }
  }
`;

export const CustomFooter = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile`
    flex-direction: column;
    gap: 20px;
    align-items: center;
    margin-bottom: 20px;
  `}
`;

export const CustomerHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile`
    flex-direction: column;
  `}
`;

export const TitleWrapper = styled.div``;
