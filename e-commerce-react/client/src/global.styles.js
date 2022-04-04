import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  font-family: "ProximaNova-Regular";
  font-size: 14px;
  letter-spacing: -0.16px;
  line-height: 20px;
  margin: 0;
  padding: 0;
  max-width: 100%;
  overflow-x: hidden;

  @media screen and (max-width: 800px) {
			padding: 10px;
		}
}

a {
  text-decoration: none;
  color: #1D2225;
}

* {
  box-sizing: border-box;
}
`;
