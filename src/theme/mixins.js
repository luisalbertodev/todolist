import { css } from "styled-components";

/** Layouts */
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexRow = css`
  display: flex;
  flex-direction: row;
`;

export const fullScreen = css`
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

/** Colors */
export const bgWhite = css`
  background-color: white;
  color: black;
`;

/** Components */
export const btnMid = css`
  width: 80px;
  height: 40px;
`;

export const btnBig = css`
  width: 180px;
  height: 50px;
  margin-left: 16px;
  margin-right: 16px;
`;

export const btnPrimary = css`
  color: white;
  background-color: black;
`;
