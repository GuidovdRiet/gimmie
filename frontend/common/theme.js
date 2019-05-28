import typefaces from "./typefaces";

const theme = {
  red: "#E34646",
  purple: "#2F0A6E",
  pink: "#FFD0C9",

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
