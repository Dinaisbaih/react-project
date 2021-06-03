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
  light: {
    mainColor: "#fff5eb",
    backgroundColor: "#fff5eb",
    textColor: "#ff7b54",
  },
  dark: {
    mainColor: "#1f6f8b",
    backgroundColor: "#1c2b2d",
    textColor: "#ff7b54",
  },
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
    width: 30%;
    height: auto;
  }
`;

export const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: black;
`;
