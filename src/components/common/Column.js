import styled from "styled-components";

export const Column = styled.div`
  flex: 1 1;

  ${(props) => (props.middle ? "align-self: center;" : "")}
`;
