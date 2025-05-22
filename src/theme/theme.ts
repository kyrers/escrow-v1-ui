import type { KlerosTheme } from "./types";

//Mapped from https://github.com/kleros/ui-components-library/blob/main/src/styles/theme.css
export const theme: KlerosTheme = {
  colors: {
    primaryPurple: "var(--klerosUIComponentsPrimaryPurple)",
    secondaryPurple: "var(--klerosUIComponentsSecondaryPurple)",
    mediumPurple: "var(--klerosUIComponentsMediumPurple)",
    lightPurple: "var(--klerosUIComponentsLightPurple)",
    primaryBlue: "var(--klerosUIComponentsPrimaryBlue)",
    secondaryBlue: "var(--klerosUIComponentsSecondaryBlue)",
    mediumBlue: "var(--klerosUIComponentsMediumBlue)",
    lightBlue: "var(--klerosUIComponentsLightBlue)",
    primaryText: "var(--klerosUIComponentsPrimaryText)",
    secondaryText: "var(--klerosUIComponentsSecondaryText)",
    stroke: "var(--klerosUIComponentsStroke)",
    lightGrey: "var(--klerosUIComponentsLightGrey)",
    whiteBackground: "var(--klerosUIComponentsWhiteBackground)",
    lightBackground: "var(--klerosUIComponentsLightBackground)",
    success: "var(--klerosUIComponentsSuccess)",
    successLight: "var(--klerosUIComponentsSuccessLight)",
    warning: "var(--klerosUIComponentsWarning)",
    warningLight: "var(--klerosUIComponentsWarningLight)",
    error: "var(--klerosUIComponentsError)",
    errorLight: "var(--klerosUIComponentsErrorLight)",
    tint: "var(--klerosUIComponentsTint)",
    tintMedium: "var(--klerosUIComponentsTintMedium)",
    tintPurple: "var(--klerosUIComponentsTintPurple)",
  },
  shadows: {
    default: "var(--klerosUIComponentsDefaultShadow)",
    hovered: "var(--klerosUIComponentsHoveredShadow)",
    input: "var(--shadow-input)",
  },
  transitions: {
    speed: "var(--klerosUIComponentsTransitionSpeed)",
    ease: "var(--ease-ease)",
  },
  radius: {
    base: "var(--klerosUIComponentsBaseRadius)",
  },
  breakpoints: {
    lg: "var(--breakpoint-lg)",
  },
  animations: {
    fadeIn: "var(--animate-fade-in)",
    fadeOut: "var(--animate-fade-out)",
    bounceIn: "var(--animate-bounce-in)",
    scaleIn: "var(--animate-scale-in)",
    scaleOut: "var(--animate-scale-out)",
    progressFill: "var(--animate-progress-fill)",
    breathing: "var(--animate-breathing)",
    loading: "var(--animate-loading)",
  },
};
