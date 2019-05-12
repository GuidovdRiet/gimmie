// HINT: Only works when each font has the same extension types
// HINT: Assumes downloaded from Google fonts, and leaved as is,
// which is for example:
// - folder name: OpenSans
// - font name: OpenSans-Bold.ttf

// HINT: Example:
// @font-face {
//   font-family: 'Open Sans';
//   font-style: normal;
//   font-weight: 700;
//   src: url('../fonts/open-sans-v15-latin-700.eot'); /* IE9 Compat Modes */
//   src: local('Open Sans Bold'), local('OpenSans-Bold'),
//        url('../fonts/open-sans-v15-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
//        url('../fonts/open-sans-v15-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
//        url('../fonts/open-sans-v15-latin-700.woff') format('woff'), /* Modern Browsers */
//        url('../fonts/open-sans-v15-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
//        url('../fonts/open-sans-v15-latin-700.svg#OpenSans') format('svg'); /* Legacy iOS */
// }
export const weightMap = {
  Thin: 100,
  ExtraLight: 200,
  Light: 300,
  Regular: 400,
  Medium: 500,
  SemiBold: 600,
  Bold: 700,
  ExtraBold: 800,
  Black: 900,
};

export function generateFontFaceCSSString(typefaces) {
  let cssString = '';

  for (const { fonts, extensions, typeface } of typefaces) {
    for (const font of fonts) {
      let src = `src: local("${typeface} ${font}"), local("${typeface}-${font}"),`;
      for (const [index, extension] of extensions.entries()) {
        switch (extension) {
          case 'eot':
            src += `url("/static/assets/fonts/${typeface}/${typeface}-${font}.eot?#iefix") format('embedded-opentype')`;
            break;
          case 'ttf':
            src += `url("/static/assets/fonts/${typeface}/${typeface}-${font}.ttf") format('truetype')`;
            break;
          case 'svg':
            src += `url("/static/assets/fonts/${typeface}/${typeface}-${font}.svg#${typeface}") format('svg')`;
            break;

          default:
            src += `url("/static/assets/fonts/${typeface}/${typeface}-${font}.${extension}") format('${extension}')`;
        }
        src += `${index + 1 === extensions.length ? ';' : ','}`;
      }

      cssString += `
                @font-face {
                    font-weight: ${weightMap[font]};
                    font-family: ${typeface};
                    ${src}
                }
            `;
    }
  }

  return cssString;
}
