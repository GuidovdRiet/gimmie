import typefaces from "./typefaces";

const theme = {
  red: "#E34646",
  purple: "#2F0A6E",
  pink: "#FFD0C9",
  geraldine: "#FB8D8F",
  shamrock: "#38CBA1",
  white: "#fff",

  // Fonts
  typefaces,
  primaryFont: "Poppins",
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
