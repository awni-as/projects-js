import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body {
  background-color: #f5f7fa;
  font-family: "Mulish";
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
  color: #4E4B66;
}

* {
  box-sizing: border-box;
}
`;
