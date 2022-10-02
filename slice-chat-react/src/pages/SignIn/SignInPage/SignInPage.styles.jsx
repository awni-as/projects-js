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

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  gap: 2rem;
`;

export const SSO = styled.span`
  font-weight: 500;
  color: #49da8a;
  margin-top: 1.5rem;
`;

export const SignUpPrompt = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px auto;
`;
