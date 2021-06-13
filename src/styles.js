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
    backgroundColor: "white",
    textColor: "#ff7b54",
  },
  dark: {
    mainColor: "#839b97",
    backgroundColor: "#393e46",
    textColor: "white",
  },
};

export const List = styled.div`
  /* display: flex; */
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;

  img {
    width: 50%;
    height: 80%;
    align-self: center;
    border-radius: 5%;
    margin-top: 20px;
  }
`;
export const MainDiv = styled.div`
  margin-top: 8%;
  h1 {
    font-family: Times, "Times New Roman", serif;
    text-align: center;
    color: black;
    font-size: 70px;
  }
  h2 {
    font-family: Times, "Times New Roman", serif;
    text-align: center;
    color: black;
    font-size: 30px;
    margin-top: 2px;
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
  margin: 0.5em;
  padding: 0.25em 1em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.mainColor};
  color: black;
  display: flex;
  align-self: flex-end;
`;
export const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 40%;
  margin-top: 7%;
`;
export const DetailDiv = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 100px;
`;

export const DetailWrapper = styled.div`
  background-color: whitesmoke;
  border-radius: 3%;
  margin-top: 4%;
  border: solid;
  border-color: gray;
  height: 400px;
  width: 25%;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-self: center;

  img {
    width: 55%;
  }
`;
export const DeleteButtonStyled = styled.button`
  border-radius: 3px;
  color: black;
  width: 35px;
  height: 30px;
  margin-top: 15px;
`;

export const NavProduct = styled.div`
  &.active {
    color: blue;
    font-weight: bold;
  }
  display: flex;
  justify-content: space-between;
  height: 50px;
  background-color: #94b4a4;
  padding: 5px;
  align-items: center;
`;
export const Logo = styled(Link)`
  img {
    height: 35px;
    width: 40px;
    border-radius: 3px;
  }
  padding: 5px;
`;
export const BarDiv = styled.div`
  display: flex;
`;
export const AddTableDiv = styled.div`
  height: 500px;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const FormInput = styled.input`
  width: 200px;
`;

export const UpdateButtonStyled = styled.button``;
