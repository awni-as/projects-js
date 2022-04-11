import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 350px;
  min-width: 350px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 24px auto;
  padding: 32px;
  background-color: white;
  border-radius: 12px;
  box-shadow: rgba(71, 88, 114, 0.08) 0px 2px 2px;

  @media screen and (max-width: 800px) {
    flex-direction: column;
    width: unset;
    align-items: center;
    > *:first-child {
      margin-bottom: 50px;
    }
  }
`;

export const Title = styled.span`
  font-size: 24px;
`;

//   .buttons {
//     display: flex;
//     justify-content: space-between;
//   }
// }
