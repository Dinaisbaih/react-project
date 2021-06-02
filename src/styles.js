import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

h1{
   font-family:cursive;
}
body{
    background-color: ${(props) => props.theme.backgroundColor};
}
`;
export const theme = {
  mainColor: "#fff5eb",
  backgroundColor: "#fff5eb",
  textColor: "#ff7b54",
};

export const List = styled.div`
  display: flex;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  img {
    width: 40%;
    height: 65%;
    align-self: center;
  }
`;
export const MainDiv = styled.div`
  h1 {
    text-align: center;
  }
  h3 {
    text-align: center;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 25%;
    height: auto;
  }
`;
