import typefaces from "./typefaces";

const theme = {
  red: "#E34646",
  purple: "#2F0A6E",
  lightPurple: "#491f84",
  highlightPurple: "#572f90",
  mediumPurple: "#270260",
  darkPurple: "#220257",
  pink: "#FFD0C9",
  geraldine: "#FB8D8F",
  geraldineLight: "#f59698",
  shamrock: "#14ca8d",
  shamrockLight: "#3ace9b",

  // Grey
  white: "#fff",
  lightGrey: "#DCDCDC",

  // Shadows
  bs: "0px 2px 15px rgba(28, 36, 43, 0.07)",

  // Fonts
  typefaces,
  primaryFont: "Poppins",
  secondaryFont: "RobotoCondensed",
  fontSmoothing: `
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  `,

  pageBackgrounds: {
    logo: "/static/assets/images/logo.svg",
    area: "/static/assets/images/area.svg"
  }
};

export default theme;
