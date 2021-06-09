import { Link, NavLink } from "react-router-dom";
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
    width: 42%;
    height: auto;
    border-radius: 5%;
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
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
`;
export const DetailWrapper = styled.div`
  background-color: #d5dbb3;
  border-radius: 3%;
  img {
    width: 35%;
  }
  height: 400px;
  width: 25%;
  align-items: center;
  display: flex;
  /* justify-items: center; */
  flex-direction: column;
`;
export const DeleteButtonStyled = styled.button`
  border-radius: 3px;
  color: black;
  width: 35px;
  height: 30px;
`;

export const NavProduct = styled(NavLink)`
  &.active {
    color: blue;
    font-weight: bold;
  }

  align-items: center;
  display: flex;
  height: 50px;
  background-color: aqua;
  padding: 5px;
`;
export const Logo = styled(Link)`
  img {
    height: 25px;
    width: 25px;
    border-radius: 3px;
  }
  padding: 5px;
`;
