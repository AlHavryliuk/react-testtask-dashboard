import MainContainer from "./Custom/Container/MainContainer";
import { GlobalStyle } from "./Custom/GlobalStyle/GlobalStyle.styles";
import SubContainer from "./Custom/SubContainer/SubContainer";
import { GreetingTitle } from "./Custom/SubContainer/SubContainer.styles";
import CustomerBlock from "./CustomerBlock/CustomerBlock";
import SideBar from "./SideBar/SideBar";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <SideBar />
        <SubContainer>
          <GreetingTitle>Hello Evano 👋🏼,</GreetingTitle>
          <CustomerBlock />
        </SubContainer>
      </MainContainer></>

  );
};
