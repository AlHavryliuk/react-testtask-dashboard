import styled from 'styled-components';

export const CustomCustomerItem = styled.li`
  & > span {
    font-weight: 500;
    color: rgba(41, 45, 50, 1);
  }
`;

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & button {
    border: 1px solid;
    color: #df0404;
    border-color: rgba(223, 4, 4, 1);
    width: 72px;
    padding: 4px;
    font-size: 14px;
    line-height: calc(14 / 21px);
    border-radius: 4px;
    background: #ffc5c5;

    &:disabled {
      border-color: #00b087;
      color: #008767;
      background: rgba(22, 192, 152, 0.38);
    }
  }
`;
