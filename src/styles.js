import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.backgroundColor};
}
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.secondaryColor};
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  margin: 20px;
`;

export const Name = styled.span`
  color: ${(props) => props.theme.mainColor};
  margin-right: 20px;
`;
