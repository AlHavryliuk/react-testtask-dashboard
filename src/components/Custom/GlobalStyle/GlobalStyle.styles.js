import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`


 *{ 
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style-type: none;
  }

  body {
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 26px;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 24px;
  }

  h3 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    font-size: 22px;
    line-height: calc(22 / 33px);
  }

  h4 {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: rgba(22, 192, 152, 1);
    font-size: 14px;
    line-height: calc(14 / 21px);
  }
  h5 {
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: rgba(181, 183, 192, 1);
  }
`;
