import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f7fa;

  height: 100vh;
  padding: 80px;
`;

export const PromptBoxOuter = styled.section`
  width: 540px;
`;

export const Header = styled.header`
  padding-bottom: 2rem;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
`;

export const SignInPrompt = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px auto;
`;
