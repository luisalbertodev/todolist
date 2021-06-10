import { ThemeProvider } from "styled-components";
import { rgba } from "polished";

export const breakpoints = {
  xs: 0, // Extra Small screen start
  sm: 576, // Small screen start
  md: 768, // Medium screen start
  lg: 992, // Large screen start
  xl: 1200, // Extra Large screen start
};

const defaultColors = {
  primary: "#151515",
  primaryHover: "#f4db3a",
  secondary: "#464646",
  secondaryHover: "#f4db3a",
  light: "#F2F2F2",
  dark: "#2b3940",
  yellow: "#fedc5a",
  green: "#68d585 ",
  info: "#0e567c",
};

const colors = {
  primary: defaultColors.primary,
  primaryHover: defaultColors.primaryHover,
  secondary: defaultColors.secondary,
  secondaryHover: defaultColors.secondaryHover,
  light: defaultColors.light,
  lightShade: rgba(defaultColors.light, 0.7),
  dark: defaultColors.dark,
  darkShade: rgba(defaultColors.dark, 0.7),
  bg: defaultColors.light,
  border: "#e7e9ed",
  shadow: rgba(defaultColors.dark, 0.15),
  text: rgba(defaultColors.dark, 0.7),
  warning: defaultColors.yellow,
  success: defaultColors.green,
  info: defaultColors.info,
};

export const theme = {
  initialColorModeName: "light",
  colors,
  fonts: {
    default: "Lato",
  },
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  space: [
    0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 48, 52, 56, 60, 64, 72, 84, 100,
    120, 140,
  ],
  device: {
    xs: `@media (max-width: ${breakpoints.xs}px)`,
    sm: `@media (max-width: ${breakpoints.sm}px)`,
    md: `@media (max-width: ${breakpoints.md}px)`,
    lg: `@media (max-width: ${breakpoints.lg}px)`,
    xl: `@media (max-width: ${breakpoints.xl}px)`,
  },
};

export default ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
