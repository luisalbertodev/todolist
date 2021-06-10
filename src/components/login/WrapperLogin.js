import styled from "styled-components";

export const WrapperLogin = styled.div`
  background-repeat: no-repeat;
  background-position: bottom;
  background-attachment: fixed;
  background-size: cover;
  background-image: url(https://images.pexels.com/photos/4195499/pexels-photo-4195499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940);
  width: 100%;
  height: 100%;
  min-width: 100vw;
  min-height: 100vh;
`;

export const BlurredBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  max-width: 420px;
  max-height: 480px;
  border-radius: 10px;
  padding: 2em;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.light};
  box-shadow: ${({ theme }) => `0 5px 30px 0px ${theme.colors.secondary}`};
`;

export const LoginBox = styled.div`
  /* Form which you dont need */

  position: relative;
  margin-bottom: 25px;
  text-align: center;
  z-index: 1;

  h3 {
    color: ${({ theme }) => theme.colors.black};
    font-size: 20px;
    font-weight: 700;
    padding: 0.5em 0;
    text-transform: uppercase;
  }

  form {
    padding-top: 1em;
  }
`;
