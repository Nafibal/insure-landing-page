import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

export default GlobalStyle;
